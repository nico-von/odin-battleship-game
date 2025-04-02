import { makeShips } from "../controller/ship-manager";
import { Ship } from "../model/Ship";
describe("makeShips controller should work as expected", () => {
    const shipList = 
            [
                {length: 5, count: 1},
                {length: 4, count: 2},
                {length: 2, count: 3},
                {length: 1, count: 2}
            ]
    let ships;
    beforeEach(() => {
        ships = makeShips(shipList);
    })
    test("makeShips should out an arr of Ships from an arr param", () => {
        let shipA = new Ship(5);
        let shipB = new Ship(4);
        let shipC = new Ship(4);
        let shipD = new Ship(2);
        let shipE = new Ship(2);
        let shipF = new Ship(2);
        let shipG = new Ship(1);
        let shipH = new Ship(1);

        const expShips = [
            shipA,
            shipB,
            shipC,
            shipD,
            shipE,
            shipF,
            shipG,
            shipH
        ]
        expect(ships).toEqual(expect.arrayContaining(expShips));
    })
    
});
