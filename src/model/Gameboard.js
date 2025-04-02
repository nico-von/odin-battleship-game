import { Ship } from "./Ship";

export class Gameboard {
    constructor(width = 0, height = 0){
        this.width = width;
        this.height = height;
        this.placedShips = [];
        this.shipsSunk = 0;
        this.buildGrid();
    }

    buildGrid(){
        this.grid = [];
        for(let i = 0; i < this.height; i++){
            this.grid.push([])
            for(let j = 0; j < this.width; j++) {
                this.grid[i].push(new Coordinate);
            }
        }
    }

    placeShip(orientation, ship, x, y) {
        // returns true if ship was placed correctly
        // returns false if not
        const length = ship.length;
        if(length > this.width || length > this.height) {
            return;
        }

        if(x > this.width - 1) {
            return;
        }

        if(y > this.height - 1) {
            return;
        }

        if(orientation === "v" && ((y + length) > (this.height))) {
            //this.height was used instead of this.height - 1
            // because y is the where the ship will be initially placed
            // and therefore the equation is really 
            // ((y - 1 + length) > (this.height - 1))   
            return;
        }

        if(orientation === "h" && ((x + length) > (this.width))){
            return;
        }
        
        for(let i = 0; i < length; i++) {
            let coordinate;
            if (orientation === "v") {
                coordinate = this.grid[y + i][x];
            } else if (orientation === "h") {
                coordinate = this.grid[y][x + i];
            } else {
                return;
            }

            if (coordinate.ship instanceof Ship) {
                return false;
            }
        }

        for(let i = 0; i < length; i++) {
            let coordinate;
            if (orientation === "v") {
                coordinate = this.grid[y + i][x];
            } else if (orientation === "h") {
                coordinate = this.grid[y][x + i];
            }
            coordinate.ship = ship;
        }

        this.placedShips.push({ship, orientation, x, y});
        return true;
    }

    #getRandomX() {
        return Math.abs(Math.round(Math.random() * this.width - 1));
    }

    #getRandomY() {
        return Math.abs(Math.round(Math.random() * this.height - 1));
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
        if(ships.length > this.width || ships.length > this.height) {
            return false;
        }
        for (let ship of ships) {
            if (ship.length > this.width || ship.length > this.height) {
                return;
            }

            let shipPlaced = false;
            while(!shipPlaced) {
                shipPlaced = this.placeShip(
                    this.#getRandomDir(),
                    ship,
                    this.#getRandomX(),
                    this.#getRandomY());
            }
        }
        return true;
    }

    hit(x,y) {
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

    get size(){
        return this.width * this.height;
    }
}

export class Coordinate{
    constructor() {
        this.hit = false;
        this.ship = null;
    }

    get miss(){
        return !(this.hit && this.ship instanceof Ship);
    }
}