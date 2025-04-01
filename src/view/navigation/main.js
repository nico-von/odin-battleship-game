import { createGameboardUIElement } from "../gameboard/gameboard";

const userGameboard = createGameboardUIElement();
const oppGameboard = createGameboardUIElement();
const main = document.createElement("main");
main.append(userGameboard, oppGameboard);


export { main };