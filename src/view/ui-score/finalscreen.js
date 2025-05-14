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
        // a more graceful reset process can be added but
        // dumb self had forgotten to have it considered
        // and since I am lacking time
        // I am forcing a reload instead for a new game.
        // Will make a more graceful reset if ever I come back
        // to this project in the future.
        window.location.reload();
    })
    return newGameButton;
}