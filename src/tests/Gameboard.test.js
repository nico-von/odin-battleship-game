import { makeShips } from "../controller/ship-manager";
import { Gameboard, Coordinate } from "../model/Gameboard";
import { Ship } from "../model/Ship";

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

describe("Gameboard placeships functionality", () => {
    let gameboard;
    beforeEach(()=>{
        gameboard = new Gameboard(11, 11);
    })
    test("Gameboard must have a placedships property", () => {
        expect(gameboard.placedShips).toBeDefined();
    })
    test("Gameboard must have placeShip() function", () => {
        expect(gameboard.placeShip).toBeDefined();
        expect(typeof gameboard.placeShip).toBe("function");
    })
    test("Ship must be placed properly on gameboard", () => {
        let shipA = new Ship(2);
        let shipB = new Ship(3);
        let shipC = new Ship(4);
        gameboard.placeShip("v", shipA, 0, 0);
        gameboard.placeShip("h", shipB, 5, 5);
        gameboard.placeShip("v", shipC, 1, 7);
        expect(gameboard.grid[0][0].ship instanceof Ship).toBeTruthy();
        expect(gameboard.grid[1][0].ship instanceof Ship).toBeTruthy();
        expect(gameboard.grid[5][7].ship instanceof Ship).toBeTruthy();
        expect(gameboard.grid[5][6].ship instanceof Ship).toBeTruthy();
        expect(gameboard.grid[7][1].ship instanceof Ship).toBeTruthy();
        expect(gameboard.grid[8][1].ship instanceof Ship).toBeTruthy();
        expect(gameboard.grid[9][1].ship instanceof Ship).toBeTruthy();
    })
    test("placedships property must contain ship, orientation, x and y coordinate", () => {
      let shipA = new Ship(2);
      gameboard.placeShip("v", shipA, 0, 1);
      expect(gameboard.placedShips[0].ship instanceof Ship).toBeTruthy();
      expect(gameboard.placedShips[0].ship.length).toBe(2);
      expect(gameboard.placedShips[0].orientation).toBe("v");
      expect(gameboard.placedShips[0].x).toBe(0);
      expect(gameboard.placedShips[0].y).toBe(1);  
    })
    test("Ships must not overlap, it must return false if ship was not placed, true if it was", () => {
        let shipA = new Ship(2);
        let shipB = new Ship(2);
        let shipC = new Ship(4);
        let shipD = new Ship(3);
        let shipE = new Ship(3);
        expect(gameboard.placeShip("v", shipA, 0, 0)).toBeTruthy();
        expect(gameboard.placeShip("h", shipB, 0, 1)).toBeFalsy();
        expect(gameboard.placeShip("v", shipC, 1, 7)).toBeTruthy();
        expect(gameboard.placeShip("h", shipD, 4, 3)).toBeTruthy();
        expect(gameboard.placeShip("v", shipE, 6, 2)).toBeFalsy();
    })
    test("Ship starting x coordinate must not be outside of board",() => {
        let shipA = new Ship(1);
        let shipB = new Ship(1);
        gameboard = new Gameboard(2, 10);
        expect(gameboard.placeShip("h", shipA, 9, 0)).toBeFalsy();
        gameboard = new Gameboard(11, 10);
        expect(gameboard.placeShip("h", shipB, 9, 0)).toBeTruthy();
    })
    test("Ship starting y coordinate must not be outside of board",() => {
        let shipA = new Ship(1);
        let shipB = new Ship(1);
        gameboard = new Gameboard(2, 10);
        expect(gameboard.placeShip("h", shipA, 0, 11)).toBeFalsy();
        gameboard = new Gameboard(10, 11);
        expect(gameboard.placeShip("h", shipB, 0, 9)).toBeTruthy();
    })
    test("Ship must not be too long from starting coord hor, it must return false if it was placed so", () => {
        let shipA = new Ship(2);
        let shipB = new Ship(2);
        let shipC = new Ship(4);
        let shipD = new Ship(3);
        expect(gameboard.placeShip("h", shipA, 0, 0)).toBeTruthy();
        expect(gameboard.placeShip("h", shipB, 11, 1)).toBeFalsy();
        expect(gameboard.placeShip("h", shipC, 9, 0)).toBeFalsy();
        expect(gameboard.placeShip("h", shipD, 2, 10)).toBeTruthy();
    })
    test("Ship must not be too long from starting coord vert, it must return false if it was placed so", () => {
        let shipA = new Ship(2);
        let shipB = new Ship(3);
        let shipC = new Ship(2);
        let shipD = new Ship(2);
        let shipE = new Ship(4);
        expect(gameboard.placeShip("v", shipA, 0, 0)).toBeTruthy();
        expect(gameboard.placeShip("v", shipB, 0, 9)).toBeFalsy();
        expect(gameboard.placeShip("v", shipC, 4, 0)).toBeTruthy();
        expect(gameboard.placeShip("v", shipD, 7, 10)).toBeFalsy();
        expect(gameboard.placeShip("v", shipE, 10, 9)).toBeFalsy();
    })
})

describe("Gameboard hit functionality", () => {
    let gameboard;
    beforeEach(() => {
        gameboard = new Gameboard(10,10);
        let testShip = new Ship(1);
        gameboard.grid[5][5].ship = testShip;
    })
    test("Gameboard must have a shipsSunk property that is a number", () => {
        expect(gameboard.shipsSunk).toBeDefined();
        expect(typeof gameboard.shipsSunk).toBe("number");
    })
    test("Gameboard must have a hit() function", ()=>{
        expect(typeof gameboard.hit).toBe("function");
    })
    test("Gameboard hit function must hit switch the Coordinate.hit to true", () =>{
        gameboard.hit(2,3); //x,y
        gameboard.hit(3,4);
        gameboard.hit(0,2);      
        expect(gameboard.grid[3][2].hit).toBeTruthy(); //y, x
        expect(gameboard.grid[4][3].hit).toBeTruthy();
        expect(gameboard.grid[2][0].hit).toBeTruthy();
        expect(gameboard.grid[9][9].hit).toBeFalsy();
    })
    test("Gameboard hit function must increment shipsSunk if a ship was sunk", () => {
        let shipsSunk = gameboard.shipsSunk;
        gameboard.hit(5,5);
        expect(gameboard.shipsSunk).toBe(shipsSunk + 1);
    })
    test("Gameboard hit function must not duplicate hits", () => {
        let shipsSunk = gameboard.shipsSunk;
        gameboard.hit(5,5);
        gameboard.hit(5,5);
        expect(gameboard.shipsSunk).toBe(shipsSunk + 1);
    })
})

describe("Gameboard allShipsSunk() functionality", () => {
    let gameboard;
    beforeEach(()=>{
        gameboard = new Gameboard(10,10);
        let testShipA = new Ship(1);
        let testShipB = new Ship(2);
        let testShipC = new Ship(3);
        gameboard.grid[2][3].ship = testShipA; //y, x 
        gameboard.grid[5][6].ship = testShipB;
        gameboard.grid[6][9].ship = testShipC; 
    })
    test("allShipsSunk property must exist", () => {
        expect(gameboard.allShipsSunk).toBeDefined();
    })
    test("allShipsSunk() must return true when all ships have been sunk", () => {
        gameboard.hit(3,2);
        gameboard.hit(6,5);
        gameboard.hit(9,6);
        expect(gameboard.allShipsSunk).toBeTruthy;
    })
    test("allShipsSunk() must return false when not all ships have been sunk", () => {
        gameboard.hit(3,2);
        expect(gameboard.allShipsSunk).toBeFalsy;
    })
})

describe("Gameboard placeShipRandomly() functionality", () => {
    const shipList = 
    [
        {length: 5, count: 1},
        {length: 4, count: 2},
        {length: 2, count: 3},
        {length: 1, count: 2}
    ]
    let ships = makeShips(shipList);

    test("placeShipRandomly() must not return false", () => {
        let gameboard;
        for(let i = 0; i < 20; i++) {
            gameboard = new Gameboard(10, 10);
            expect(gameboard.placeShipsRandomly(ships)).toBeTruthy();
        }
    })

    test("placeShipRandomly() must not accept ships more than its height or width", () => {
        let gameboard;
        gameboard = new Gameboard(8, 8);
        expect(gameboard.placeShipsRandomly(ships)).toBeTruthy();
        gameboard = new Gameboard(7, 7);
        expect(gameboard.placeShipsRandomly(ships)).toBeFalsy();
    })

    test("placeShipRandomly() must not accept ship longer than its width or height", () => {
        let gameboard;
        gameboard = new Gameboard(10, 10);
        expect(gameboard.placeShipsRandomly(ships)).toBeTruthy();
        ships.push(new Ship(11));
        gameboard = new Gameboard(10,10)
        expect(gameboard.placeShipsRandomly(ships)).toBeFalsy();
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