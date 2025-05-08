import { userShips, rivalShips } from "./ships";
import { userGameboard, rivalGameboard } from "./gameboards";
import { userGameboardUI, rivalGameboardUI } from "../../view/navigation/main";
import { placeShip } from "../../view/gameboard/gameboard";
import { rotateShipFunction, shipDragFunction, startGameFunction } from "./events";
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
    enableGameboardEvents();
}

function enableGameboardEvents() {
    userGameboardUI.addEventListener('mousedown', (e) => {
        let target = e.target;
        
        switch(target.className) {
            case 'ship':
                shipDragFunction(e, userGameboardUI, userGameboard);
                break;
        }
    })

    userGameboardUI.addEventListener('dblclick', (e) => {
        let target = e.target;

        switch(target.className) {
            case 'ship':
                rotateShipFunction(e, userGameboardUI, userGameboard);
                break;
        }
    })

    rivalGameboardUI.addEventListener('click', (e) => {
        let target = e.target;

        switch(target.className) {
            case 'play-button':
                startGameFunction(e, userGameboardUI, rivalGameboardUI, playButton);
                break;
        }
    })
}
