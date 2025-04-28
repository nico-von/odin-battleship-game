import { userShips, rivalShips } from "./ships";
import { userGameboard, rivalGameboard } from "./gameboards";
import { userGameboardUI, rivalGameboardUI } from "../../view/navigation/main";
import { placeShip } from "../../view/gameboard/gameboard";
import { shipDragFunction } from "./events";

export async function initialiseGame() {
    userGameboard.placeShipsRandomly(userShips)
    rivalGameboard.placeShipsRandomly(rivalShips);
    
    // place userGameboard ships on its UI
    for (let placedShip of userGameboard.placedShips) {
        const {ship, orientation, x, y} = placedShip;
        placeShip(userGameboardUI, ship, orientation, x, y);
    }
    allowDragging(userGameboardUI, userGameboard, shipDragFunction);
}

function allowDragging(gameboardUI, gameboardModel, dragFunction) {
    gameboardUI.addEventListener('mousedown', (e) => {
        let target = e.target;
        
        switch(target.className) {
            case 'ship':
                dragFunction(e, gameboardModel);
                break;
        }
    })
}