import { Ship } from "./Ship";

export class Gameboard {
    constructor(width = 0, height = 0){
        this.width = width;
        this.height = height;
        this.placedShips = 0;
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
        const length = ship.length;
        
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
        return this.placedShips <= this.shipsSunk;
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