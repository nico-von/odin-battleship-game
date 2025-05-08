import { userShips, rivalShips } from "./ships";
import { userGameboard, rivalGameboard } from "./gameboards";
import { userGameboardUI, rivalGameboardUI } from "../../view/navigation/main";
import { placeShip } from "../../view/gameboard/gameboard";
import { rotateShipFunction, shipDragFunction } from "./events";
import { playButton } from "../../view/gameboard/play-button";

export async function initialiseGame() {
    userGameboard.placeShipsRandomly(userShips)
    rivalGameboard.placeShipsRandomly(rivalShips);
    
    // place userGameboard ships on its UI
    rivalGameboardUI.classList.add("awaiting-placement");
    rivalGameboardUI.append(playButton);
    for (let placedShip of userGameboard.placedShips) {
        const {ship, orientation, x, y} = placedShip;
        placeShip(userGameboardUI, ship, orientation, x, y);
    }
    enableEvents(userGameboardUI, userGameboard);
}

function enableEvents(gameboardUI, gameboardModel) {
    gameboardUI.addEventListener('mousedown', (e) => {
        let target = e.target;
        
        switch(target.className) {
            case 'ship':
                shipDragFunction(e, gameboardUI, gameboardModel);
                break;
        }
    })

    gameboardUI.addEventListener('dblclick', (e) => {
        let target = e.target;

        switch(target.className) {
            case 'ship':
                rotateShipFunction(e, gameboardUI, gameboardModel);
                break;
        }
    })
}