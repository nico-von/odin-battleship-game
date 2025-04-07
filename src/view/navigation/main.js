import { createGameboardUIElement, placeShip } from "../gameboard/gameboard";

const userGameboardUI = createGameboardUIElement(10, 10, true);
const rivalGameboardUI = createGameboardUIElement(10, 10, false);

const main = document.createElement("main");
main.append(userGameboardUI, rivalGameboardUI);

// placeShip(userGameboard, {length: 3}, "h", 5, 6);
// placeShip(userGameboard, {length: 1}, "v", 0, 3);
// placeShip(userGameboard, {length: 2}, "h", 3, 3);
// placeShip(userGameboard, {length: 3}, "v", 4, 5);

export { main, userGameboardUI, rivalGameboardUI as oppGameboardUI};