import { Gameboard } from "./Gameboard";

export class Player {
    constructor(isPlayerReal = false) {
        this.isPlayerReal = isPlayerReal;
        this.gameboard = new Gameboard();
    }
}