import { Gameboard } from "../model/Gameboard";
import { Player } from "../model/Player";

test("Player module should exist", () => {
    expect(Player).toBeDefined();
})

describe("Player module should show whether or not player is real or AI", () => {
    let player;
    beforeEach(() => {
        player = new Player;
    })
    test("isPlayerReal should be defined", () => {
        expect(player.isPlayerReal).toBeDefined();
    })
    test("isPlayerReal should be bool and default to false", () => {
        expect(player.isPlayerReal).toBe(false);
    })
    test("isPlayerReal should be accepted as parameter", () => {
        player = new Player(true);
        expect(player.isPlayerReal).toBe(true);
        player = new Player(false);
        expect(player.isPlayerReal).toBe(false);
    })
})

describe("Player module should have its own gameboard", () => {
    let player;
    beforeEach(() => {
        player = new Player;
    })
    test("gameboard should be defined", () => {
        expect(player.gameboard).toBeDefined();
    })
    test("gameboard should be an instance of Gameboard", () => {
        expect(player.gameboard instanceof Gameboard).toBeTruthy();
    })
})