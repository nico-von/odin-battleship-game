import { setTDClass, setOnAffectedCells, placeShip } from "../../view/gameboard/gameboard";

const DROPPABLE_TD_CLASS = "cell-droppable"
const ABOVE_DROPPABLE = "ship-on-droppable"

let currentDroppable = null;

function getPlaceableXY(droppable, orientation, offsetX, offsetY) {
    let x = droppable.dataset.x;
    let y = droppable.dataset.y;
    x = Number(x);
    y = Number(y);
    let placeableX = orientation === "h" ? offsetX + x : x;
    let placeableY = orientation === "v" ? offsetY + y: y;
    return { placeableX, placeableY}
}
function getShipFromModel(shipId, gameboardModel) {
    let shipModelContainer = gameboardModel.placedShips.find((e) => e.ship.id === shipId);
    return shipModelContainer;
}

function enterDroppable(droppable, gameboardModel, shipModel, ship, gameboard, length, orientation, offsetX, offsetY) {
    const {placeableX, placeableY} = getPlaceableXY(droppable, orientation, offsetX, offsetY);

    let placeable = gameboardModel.testIfShipCanBePlaced(orientation, shipModel, placeableX, placeableY);
    if (placeable) {
        setOnAffectedCells(gameboard, length, orientation, placeableX, placeableY, (td) => {
            td.parentNode.classList.add(DROPPABLE_TD_CLASS);
        })

        ship.classList.add(ABOVE_DROPPABLE);
        return true;
    }
    return false;
}

function leaveDroppable(droppable, ship, gameboard, length, orientation, offsetX, offsetY) {
    //things to do on exit of ship to cell droppable
    let {placeableX, placeableY} = getPlaceableXY(droppable, orientation, offsetX, offsetY);

    setOnAffectedCells(gameboard, length, orientation, placeableX, placeableY, (td) => {
        td.parentNode.classList.remove(DROPPABLE_TD_CLASS);
    })

    ship.classList.remove(ABOVE_DROPPABLE);
}

export function shipDragFunction(e, gameboardModel) {
    const ship = e.target;
    const gameboard = ship.closest(".gameboard");
    const shipParent = ship.parentNode;
    const shipId = ship.dataset.id;
    const shipModelContainer = getShipFromModel(shipId, gameboardModel);
    const shipModel = shipModelContainer.ship;
    let placeable = false;
    let { orientation, length } = ship.dataset;
    let { x, y } = shipParent.dataset;
    ship.hidden = true;
    let initialElementFromPoint = document.elementFromPoint(e.clientX, e.clientY);
    ship.hidden = false;
    let initialMouseX = initialElementFromPoint.dataset.x;
    let initialMouseY = initialElementFromPoint.dataset.y;

    length = Number(length);
    x = Number(x);
    y = Number(y);
    initialMouseX = Number(initialMouseX);
    initialMouseY = Number(initialMouseY);

    let offsetX = x - initialMouseX;
    let offsetY = y - initialMouseY;

    // remove busy status of original cells
    setTDClass(gameboard, length, orientation, x, y, false);

    let shiftX = e.clientX - ship.getBoundingClientRect().left;
    let shiftY = e.clientY - ship.getBoundingClientRect().top;

    document.body.append(ship);

    function moveAt(pageX, pageY) {
        ship.style.left = pageX - shiftX + 'px';
        ship.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        ship.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ship.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.battlefield-user .battlefield-cell-empty .battlefield-cell-content');
        
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) {
                leaveDroppable(currentDroppable, ship, gameboard, length, orientation, offsetX, offsetY);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) {
                
                placeable = enterDroppable(currentDroppable, gameboardModel, shipModel, ship, gameboard, length, orientation, offsetX, offsetY);
            }
        }
    }

    moveAt(e.pageX, e.pageY);

    document.addEventListener('mousemove', onMouseMove);

    ship.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        let shipMoved = false;
        if (placeable && currentDroppable) {
            shipMoved = moveShip(ship, gameboard, currentDroppable, length, orientation, gameboardModel, shipModel, offsetX, offsetY);
        }
        if (!placeable || !currentDroppable || !shipMoved) {
            // put back to place
            putShipBackToPlace(gameboard, shipParent, ship, length, orientation, x, y);
        }
        ship.style.left = 0;
        ship.style.top = 0;
        ship.onmouseup = null;
    }
}

function putShipBackToPlace(gameboard, shipParent, ship, length, orientation, oldX, oldY) {
    setTDClass(gameboard, length, orientation, oldX, oldY, true);
    document.body.removeChild(ship);
    shipParent.appendChild(ship);
}

function moveShip(ship, gameboard, droppable, length, orientation, gameboardModel, shipModel, offsetX, offsetY) {
    let {placeableX, placeableY} = getPlaceableXY(droppable, orientation, offsetX, offsetY);
    let cellToPlaceShip = gameboard.querySelector(`div[data-x="${placeableX}"][data-y="${placeableY}"]`); 
    
    let placed = gameboardModel.placeShip(orientation, shipModel, placeableX, placeableY);
    if (placed) {
        setTDClass(gameboard, length, orientation, placeableX, placeableY, true);
        document.body.removeChild(ship);
        cellToPlaceShip.appendChild(ship);
        leaveDroppable(droppable, ship, gameboard, length, orientation, offsetX, offsetY);
        return true;
    } else {
        return false;
    }
}

export function rotateShipFunction(e, gameboardUI, gameboardModel){
    const ship = e.target;
    console.log(e);
    let {length, orientation, id} = ship.dataset;
    const shipParent = ship.parentNode;
    let { x, y } = shipParent.dataset;
    const shipModelContainer = getShipFromModel(id, gameboardModel);
    const shipModel = shipModelContainer.ship;

    length = Number(length);
    x = Number(x);
    y = Number(y);

    if(length > 1) {
        orientation = orientation === "v" ? "h" : "v";
    }

    let placed = gameboardModel.placeShip(orientation, shipModel, x, y);
    console.log(placed);
    if (placed) {
        ship.remove();
        placeShip(gameboardUI, shipModel, orientation, x, y);
    }

}