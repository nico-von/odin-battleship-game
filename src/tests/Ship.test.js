import { Ship } from "../model/Ship"

test("Ship exists", () => {
    expect(Ship).toBeDefined();
})

describe("Ship length, n times hit properties are correct", () => {

    const newShip = new Ship();

    test("Ship has length, n times hit, sunk properties", () => {
        expect(newShip.length).toBeDefined();
        expect(newShip.hits).toBeDefined();
    })
    
    test("Ship length is number", () => {
        expect(typeof newShip.length).toBe("number");
    })

    test("Ship n times hit is number", () => {
        expect(typeof newShip.hits).toBe("number");
    })

})

describe("Ship should have a hit function that increases number of hits by 1 in ship", () => {
    
    const newShip = new Ship();

    test("Ship has hit() function", () => {
        expect(typeof newShip.hit === "function").toBeTruthy();
    })

    test("Ship's hit() function increases number of hits by 1 in ship", () => {
        const startingHits = newShip.hits;
        let randomHits = Math.floor(Math.random() * 11);
        for (let i = 0; i < randomHits; i++){
            newShip.hit();
        }
        expect(newShip.hits === startingHits + randomHits).toBeTruthy();
    })
}) 

describe ("Ship has an isSunk function that see if ship sunk based on length and hits received", () => {
    let newShip;
    beforeEach(() => {
        newShip = new Ship();
    })

    test("Ship has isSunk() function", () => {
        expect(typeof newShip.isSunk === "function").toBeTruthy();
    })

    test("Ship isSunk() returns false when length is higher than hits", () => {
        newShip.length = 2;
        newShip.hit();
        const isSunk = newShip.isSunk();
        expect(isSunk).toBeFalsy();
    })

    test("Ship isSunk() returns true when length is lower or equal to hits", () => {
        const randomNumber = Math.floor(Math.random() * 10);
        newShip.length = randomNumber; 
        for(let i = 0; i < randomNumber; i++) {
            newShip.hit();
        }
        const isSunk = newShip.isSunk();
        expect(isSunk).toBeTruthy();
    })
}) 