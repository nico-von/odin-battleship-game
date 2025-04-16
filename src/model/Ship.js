export class Ship {
    constructor(length = 0) {
        this.length = length;
        this.hits = 0;
        this.id = crypto.randomUUID();
        this.coordinates = [];
    }

    hit() {
        this.hits += 1;
        return;
    }
    
    isSunk() {
        return this.hits >= this.length;
    }
}