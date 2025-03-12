import { Gameboard, Coordinate } from "../objects/Gameboard";
import { Ship } from "../objects/Ship";

test("Gameboard class should exist", () => {
    expect(Gameboard).toBeDefined();
})

test("Coordinate class should exist", () => {
    expect(Coordinate).toBeDefined();
})

describe("Gameboard properties", () => {
    let gameboard;
    beforeEach(() => {
        gameboard = new Gameboard();
    })

    test("Gameboard must have a width property", () => {
        expect(gameboard.width).toBeDefined();
    })

    test("Gameboard width must be a number", () => {
        expect(typeof gameboard.width).toBe("number");
    })

    test("Gameboard must have a height property", () => {
        expect(gameboard.height).toBeDefined();
    })

    test("Gameboard width must be a number", () => {
        expect(typeof gameboard.height).toBe("number");
    })


    test("Gameboard must have a size property", () => {
        expect(gameboard.size).toBeDefined();
    })

    test("Gameboard size must be a number", () => {
        expect(typeof gameboard.size).toBe("number");
    })

    test("Gameboard size must return Width * Height", () => {
        gameboard.width = 3;
        gameboard.height = 3;
        expect(gameboard.size).toBe(gameboard.width * gameboard.height);
    })

    test("Gameboard must have buildGrid function", () => {
        expect(typeof gameboard.buildGrid).toBe("function");
    })

    test("Grid x,y axis must be the same as its width ,height after buildGrid()", () => {
        gameboard.width = 10;
        gameboard.height = 15;
        gameboard.buildGrid();
        expect(gameboard.grid[0].length).toBe(gameboard.width);
        expect(gameboard.grid.length).toBe(gameboard.height);
    })

    test("Grid must have Coordinate objects as its contents",()=>{
        gameboard.width = 20;
        gameboard.height = 25;
        gameboard.buildGrid();
        expect(gameboard.grid[0][15] instanceof Coordinate).toBeTruthy();
        expect(gameboard.grid[10][11] instanceof Coordinate).toBeTruthy();
        expect(gameboard.grid[0][0] instanceof Coordinate).toBeTruthy();
    })

    test("Gameboard must accept params of width, height on init and have Coordinates as contents of grid matrix", ()=>{
        gameboard = new Gameboard(10,10);
        expect(gameboard.grid[0][1] instanceof Coordinate).toBeTruthy();
        expect(gameboard.grid[5][6] instanceof Coordinate).toBeTruthy();
        expect(gameboard.grid[6][9] instanceof Coordinate).toBeTruthy();
    });

})

describe("Coordinate properties", () => {
    let coordinate;
    beforeEach(()=>{
        coordinate = new Coordinate();
    })
    test("Coordinate object must have hit property", () => {
        expect(coordinate.hit).toBeDefined();
    })
    test("Coordinate hit property must be bool and initialised to false", () => {
        expect(typeof coordinate.hit).toBe("boolean");
        expect(coordinate.hit).toBe(false);
    })
    test("Coordinate object must have ship property", ()=> {
        expect(coordinate.ship).toBeDefined();
    })
    test("Coordinate ship property must be initiated to null", () => {
        expect(coordinate.ship).toBe(null);
    })
    test("Coordinate object must have miss property", ()=>{
        expect(coordinate.miss).toBeDefined();
    })
    test("Coordinate miss must return true if hit is true and ship is not a Ship instance", () => {
        coordinate.ship = 0;
        expect(coordinate.miss).toBeTruthy();
    })
    test("Coordinate miss must return false if hit is true and ship is a Ship instance", () => {
        coordinate.ship = new Ship();
        coordinate.hit = true;
        expect(coordinate.miss).toBeFalsy();
    })
})