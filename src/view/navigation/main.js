import { createGameboardUIElement, placeShip } from "../gameboard/gameboard";

const userGameboard = createGameboardUIElement(10, 10, true);
const oppGameboard = createGameboardUIElement(10, 10, false);
const main = document.createElement("main");
main.append(userGameboard, oppGameboard);

placeShip(userGameboard, {length: 2}, "h", 0, 0);


export { main };