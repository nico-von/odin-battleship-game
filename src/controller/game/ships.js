import { makeShips } from "../ship-manager";

const shipList = [
    {length: 4, count: 1},
    {length: 3, count: 2},
    {length: 2, count: 3},
    {length: 1, count: 4}
]

export const userShips = makeShips(shipList);
export const rivalShips = makeShips(shipList);
