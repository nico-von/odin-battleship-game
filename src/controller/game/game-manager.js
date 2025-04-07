import { userShips, rivalShips } from "./ships";
import { userGameboard, rivalGameboard } from "./gameboards";
import { userGameboardUI, rivalGameboardUI } from "../../view/navigation/main";
import { placeShip } from "../../view/gameboard/gameboard";

export async function initialiseGame() {
    let userGameboardRand = userGameboard.placeShipsRandomly(userShips)
    let rivalGameboardRand = rivalGameboard.placeShipsRandomly(rivalShips);
    
    // place userGameboard ships on its UI
    for (let placedShip of userGameboard.placedShips) {
        const {ship, orientation, x, y} = placedShip;
        placeShip(userGameboardUI, ship, orientation, x, y);
    }
    
    
}