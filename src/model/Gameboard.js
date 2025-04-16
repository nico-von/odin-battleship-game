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
    #clearShipFromCoordinates(coordinates) {
        for (let coordinate of coordinates) {
            coordinate.coordinate.ship = null;
        }
    }

    #setShipToCoordinates(coordinates, ship) {
        for (let coordinate of coordinates) {
            if (coordinate.isShip) {
                coordinate.coordinate.ship = ship;
            } else {
                coordinate.coordinate.ship = 0;
            }
        }
    }

    placeShip(orientation, ship, x, y) {
        // returns true if ship was placed correctly
        // returns false if not
        const length = ship.length;
        let previousCoordinates = null;
        if (ship.coordinates.length > 0) {
            previousCoordinates = ship.coordinates;
            this.#clearShipFromCoordinates(ship.coordinates);
            // this looks a little bit coupled
            ship.coordinates = [];
        }

        if (length > this.width || length > this.height) {
            return;
        }

        if (x > this.width - 1) {
            return;
        }

        if (y > this.height - 1) {
            return;
        }

        if (orientation === "v" && ((y + length) > (this.height))) {
            //this.height was used instead of this.height - 1
            // because y is the where the ship will be initially placed
            // and therefore the equation is really 
            // ((y - 1 + length) > (this.height - 1))   
            return;
        }

        if (orientation === "h" && ((x + length) > (this.width))) {
            return;
        }


        let shipPlaceable = this.#runThroughCells(orientation, x, y, length, (coordinate, setX, setY) => {
            if ((coordinate.ship instanceof Ship || coordinate.ship === 0) && ((setY > (y - 1) && setY < (y + length) && orientation === "v" && setX === x) ||
                (setX > (x - 1) && setX < (x + length) && orientation === "h" && setY === y))) {
                return false;
            } else {
                return true;
            }
        })

        if (!shipPlaceable) {
            // restore coordinates to ship and previous state of coordinates
            if (previousCoordinates) {
                ship.coordinates = previousCoordinates;
                this.#setShipToCoordinates(ship.coordinates, ship);
            }
            return false;
        }

        //placeShip
        this.#runThroughCells(orientation, x, y, length, (coordinate, setX, setY) => {
            if ((setY > (y - 1) && setY < (y + length) && orientation === "v" && setX === x) ||
                (setX > (x - 1) && setX < (x + length) && orientation === "h" && setY === y)) {
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
                let result = callback(coordinate, testX, testY);
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
            return;
        }
        coordinate.hit = true;
        if (coordinate.miss) {
            return;
        }
        coordinate.ship.hit();
        if (coordinate.ship.isSunk()) {
            this.shipsSunk += 1;
        }
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
        this.x = x;
        this.y = y;
    }

    get miss() {
        return !(this.hit && this.ship instanceof Ship);
    }
}