import { main } from "../navigation/main";
import { initialiseGame } from "../../controller/game/game-manager";

export function createFinalScreen(userWon) {
    const finalScreenH = document.createElement("h1");
    const winString = userWon ? "win" : "lose";
    finalScreenH.textContent = `You ${winString}!`;
    return finalScreenH;
}

export function makeNewGameButton() {
    const newGameButton = document.createElement("button");
    newGameButton.textContent = "Play Again";
    newGameButton.addEventListener("click", e => {
        e.preventDefault();
        main.textContent = "";
        initialiseGame();
    })
    return newGameButton;
}