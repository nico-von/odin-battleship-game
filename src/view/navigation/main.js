import { createGameboardUIElement, placeShip } from "../gameboard/gameboard";

const userGameboard = createGameboardUIElement(10, 10, true);
const oppGameboard = createGameboardUIElement(10, 10, false);
const main = document.createElement("main");
main.append(userGameboard, oppGameboard);

placeShip(userGameboard, {length: 3}, "h", 5, 6);
placeShip(userGameboard, {length: 1}, "v", 0, 3);
placeShip(userGameboard, {length: 2}, "h", 3, 3);
placeShip(userGameboard, {length: 3}, "v", 4, 5);

export { main };