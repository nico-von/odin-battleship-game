import { Ship} from "../model/Ship";

export function makeShips(shipList) {
    const ships = [];
    for (let i of shipList) {
        for (let j = 0; j < i.length; j++){
            const ship = new Ship(i.length);
            ships.push(ship);
        }
    }
    return ships;
}