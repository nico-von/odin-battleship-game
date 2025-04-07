import { userShips, rivalShips } from "./ships";
import { userGameboard, rivalGameboard } from "./gameboards";
import { userGameboardUI, rivalGameboardUI } from "../../view/navigation/main";
import { placeShip } from "../../view/gameboard/gameboard";

export function initialiseGame() {
    let placeShipsRandomly = new Promise((res, rej) => {
        let userGameboardRand = userGameboard.placeShipsRandomly(userShips)
        let rivalGameboardRand = rivalGameboard.placeShipsRandomly(rivalShips);
        if (userGameboardRand && rivalGameboardRand) {
            res(true);
        } else {
            rej(false);
        }
    })
    

    // place userGameboard ships on its UI
    placeShipsRandomly.then((v) => {
        for (let placedShip of userGameboard.placedShips) {
            const {ship, orientation, x, y} = placedShip;
            placeShip(userGameboardUI, ship, orientation, x, y);
        }
    })
    
}