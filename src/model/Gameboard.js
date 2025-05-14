import { Ship } from "./Ship";

export class Gameboard {
    constructor(width = 0, height = 0) {
        this.width = width;
        this.height = height;
        this.placedShips = [];
        this.shipsSunk = 0;
        this.buildGrid();
    }

    buildGrid() {
        this.grid = [];
        for (let i = 0; i < this.height; i++) {
            this.grid.push([])
            for (let j = 0; j < this.width; j++) {
                this.grid[i].push(new Coordinate(j, i));
            }
        }
    }
    #clearShipFromCoordinates(ship) {
        for (let coordinate of ship.coordinates) {
            if(coordinate.coordinate.ships.length > 1) {
                //remove ship from coordinate.ships
                let shipIndex = coordinate.coordinate.ships.findIndex(e => e === ship);
                if (shipIndex !== -1) {
                    coordinate.coordinate.ships.splice(shipIndex, 1);
                }
                continue;
            }
            // else clear ships
            coordinate.coordinate.ships = [];
            coordinate.coordinate.ship = null;
        }
    }

    testIfShipCanBePlaced(orientation, ship, x, y) {
        let length = ship.length;
        let previousCoordinates = ship.coordinates;

        if (isNaN(x) || isNaN(y)) {
            return false;
        }
        if (x < 0 || y < 0) {
            return false;
        }

        if (length > this.width || length > this.height) {
            return false;
        }

        if (x > this.width - 1) {
            return false;
        }

        if (y > this.height - 1) {
            return false;
        }

        if (orientation === "v" && ((y + length) > (this.height))) {
            //this.height was used instead of this.height - 1
            // because y is the where the ship will be initially placed
            // and therefore the equation is really 
            // ((y - 1 + length) > (this.height - 1))   
            return false;
        }

        if (orientation === "h" && ((x + length) > (this.width))) {
            return false;
        }

        let shipPlaceable = this.#runThroughCells(orientation, x, y, length, (coordinate, coordinateOnShip) => {
            
            // if ship is on any of its own coordinates
            let onShipCoordinates = previousCoordinates.some(e => e.coordinate === coordinate);
            // check if coordinate only contains this ship, in other words,
            // coordinate.ships contains nothing else, hence length is 1
            if (onShipCoordinates && coordinate.ships.length === 1) {
                return true;
            } 
            if ((coordinate.ship instanceof Ship || coordinate.ship === 0) && coordinateOnShip) {
                return false;
            } else {
                return true;
            }
        })
        return shipPlaceable;
    }

    placeShip(orientation, ship, x, y) {
        // returns true if ship was placed correctly
        // returns false if not
        const length = ship.length;

        let shipPlaceable = this.testIfShipCanBePlaced(orientation, ship, x, y);

        if (!shipPlaceable) {
            return false;
        }

        // clear ship from previous coordinates
        if (ship.coordinates.length > 0) {
            this.#clearShipFromCoordinates(ship);
            // this looks a little bit coupled
            ship.coordinates = [];
        }

        //placeShip
        this.#runThroughCells(orientation, x, y, length, (coordinate, coordinateOnShip) => {
            // see if ship is already in coordinate.ships
            let shipInCoordinates = coordinate.ships.some(e => e === ship);
            if (!shipInCoordinates){
                coordinate.ships.push(ship);
            }

            if (coordinateOnShip) {
                coordinate.ship = ship;
                ship.coordinates.push({ coordinate, "isShip": true });
            } else {
                coordinate.ship = 0;
                ship.coordinates.push({ coordinate, "isShip": false }); //added zeroes to ship coordinates to be cleared
            }
            return true;
        })

        // update placedShips
        let shipIndex = this.placedShips.findIndex((e) => e.ship == ship);
        if (shipIndex !== -1) {
            this.placedShips.splice(shipIndex, 1);
        }
        this.placedShips.push({
            ship,
            orientation,
            x,
            y
        });

        return true;
    }

    #runThroughCells(orientation, x, y, length, callback) {
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < length + 1; j++) {

                const testX = orientation === "h" ? x + j : x + i;
                const testY = orientation === "h" ? y + i : y + j;
                if (testX < 0 || testY < 0) {
                    continue;
                }
                if (testX >= this.width || testY >= this.height) {
                    break;
                }
                let coordinate = this.grid[testY][testX];
                let coordinateOnShip = ((testY > (y - 1) && testY < (y + length) && orientation === "v" && testX === x) ||
                (testX > (x - 1) && testX < (x + length) && orientation === "h" && testY === y));
                let result = callback(coordinate, coordinateOnShip);
                // if result is false, return false, otherwise
                // continue with operation

                //therefore, callback must always return a bool
                if (!result) {
                    return false;
                }
            }
        }
        // return true so the user knows if the run through was successful
        return true;
    }
    #getRandomXY() {
        let existingShipCoordinates = this.placedShips.map((e) => e.ship.coordinates);
        let existingXYPairs = [];
        for (let i of existingShipCoordinates) {
            for (let j of i) {
                existingXYPairs.push({ "x": j.coordinate.x, "y": j.coordinate.y });
            }
        }
        let useableXYPairs = [];
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                useableXYPairs.push({ x, y });
            }
        }

        useableXYPairs = useableXYPairs.filter(e => {
            for (let pair of existingXYPairs) {
                if (pair.x === e.x && pair.y === e.y) {
                    return false;
                }
            }
            return true;
        })

        let randomPair = useableXYPairs[Math.abs(Math.round(Math.random() * useableXYPairs.length - 1))];
        return randomPair;
    }

    #getRandomDir() {
        let randomDirection = Math.abs(Math.round(Math.random() * 1));
        if (randomDirection == 0) {
            return "h";
        } else {
            return "v";
        }
    }

    placeShipsRandomly(ships) {
        // can only place up to n ships equal to width or height
        if (ships.length > this.width || ships.length > this.height) {
            return false;
        }
        for (let ship of ships) {
            if (ship.length > this.width || ship.length > this.height) {
                return;
            }
            
            let shipPlaced = false;
            while (!shipPlaced) {
                let randomDir = ship.length === 1 ? "v" : this.#getRandomDir();
                let { x, y } = this.#getRandomXY();
                
                shipPlaced = this.placeShip(
                    randomDir,
                    ship,
                    x,
                    y);
            }
        }
        return true;
    }

    hit(x, y) {
        let coordinate = this.grid[y][x];
        if (coordinate.hit) {
            return {coordinate, validHit: false};
        }
        coordinate.hit = true;
        if (coordinate.miss) {
            return {coordinate, validHit: true};
        }
        coordinate.ship.hit();
        if (coordinate.ship.isSunk()) {
            this.shipsSunk += 1;
        }
        return {coordinate, validHit: true};
    }

    get allShipsSunk() {
        return this.placedShips.length <= this.shipsSunk;
    }

    get size() {
        return this.width * this.height;
    }
}

export class Coordinate {
    constructor(x, y) {
        this.hit = false;
        this.ship = null;
        this.ships = [];
    }

    get miss() {
        return !(this.hit && this.ship instanceof Ship);
    }
}