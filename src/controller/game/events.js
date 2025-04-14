let currentDroppable = null;
import { setTDClass } from "../../view/gameboard/gameboard";
const DROPPABLE_TD_CLASS = "cell-droppable"
const ABOVE_DROPPABLE = "ship-on-droppable"

function enterDroppable(droppable, ship, gameboard, length, orientation) {
    //things to do on entry of ship to cell droppable
    // make ship colour on entry to droppable
    let droppableParent = droppable.parentNode;
    droppableParent.classList.add(DROPPABLE_TD_CLASS);
    ship.classList.add(ABOVE_DROPPABLE);
}

function leaveDroppable(ship, droppable) {
    //things to do on exit of ship to cell droppable
    let droppableParent = droppable.parentNode;
    droppableParent.classList.remove(DROPPABLE_TD_CLASS)
    ship.classList.remove(ABOVE_DROPPABLE);
}

export function shipDragFunction(e, gameboard) {
    const ship = e.target;
    const shipParent = ship.parentNode;

    let {orientation, length} = ship.dataset;
    let {x, y} = shipParent.dataset;
    
    //set types 
    length = Number(length);
    x = Number(x);
    y = Number(y);

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
                leaveDroppable(ship, currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) {
                enterDroppable(currentDroppable, ship, gameboard, length, orientation);
            }
        }
    }

    moveAt(e.pageX, e.pageY);

    document.addEventListener('mousemove', onMouseMove);

    ship.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        moveShip(ship, gameboard, currentDroppable, shipParent, length, orientation, x, y);
        ship.style.left = 0;
        ship.style.top = 0;
        ship.onmouseup = null;
    }
}

function moveShip(ship, gameboard, currentDroppable, shipParent, length, orientation, oldX, oldY) {
    if (currentDroppable) {
        // this is where the ship is appended or place ship is called
        let {x, y} = currentDroppable.dataset;
        x = Number(x);
        y = Number(y);

        setTDClass(gameboard, length, orientation, oldX, oldY, false)//
        setTDClass(gameboard, length, orientation, x, y, true);
        
        document.body.removeChild(ship);
        currentDroppable.appendChild(ship);
        currentDroppable.removeChild
        leaveDroppable(ship, currentDroppable);
    } else {
        // put back to place
        document.body.removeChild(ship);
        shipParent.appendChild(ship);
    }
}