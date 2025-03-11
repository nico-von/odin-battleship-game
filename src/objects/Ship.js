export class Ship {
    constructor() {
        this.length = 0;
        this.hits = 0;
    }

    hit() {
        this.hits += 1;
        return;
    }
    
    isSunk() {
        return this.hits >= this.length;
    }
}