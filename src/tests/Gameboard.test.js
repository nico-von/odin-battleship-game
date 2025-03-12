import { Gameboard, Coordinate } from "../objects/Gameboard";

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
})