import { Ship } from "./Ship";

export class Gameboard {
    constructor(width = 0, height = 0){
        this.width = width;
        this.height = height;
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