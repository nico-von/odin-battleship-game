import { Ship } from "./Ship";

export class Gameboard {
    constructor(){
        this.width = 0;
        this.height = 0;
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