let currentDroppable = null;

function enterDroppable(ship, droppable) {
    //things to do on entry of ship to cell droppable
}

function leaveDroppable(ship, droppable) {
    //things to do on exit of ship to cell droppable
}

export function shipDragFunction(e) {
    const ship = e.target;
    const shipParent = ship.parentNode;
    console.log("shipParent", shipParent);

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
                enterDroppable(ship, currentDroppable);
            }
        }
    }

    moveAt(e.pageX, e.pageY);

    document.addEventListener('mousemove', onMouseMove);

    ship.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        if (currentDroppable) {
            // this is where the ship is appended or place ship is called
            console.log(currentDroppable);
            document.body.removeChild(ship);
            currentDroppable.appendChild(ship);
        } else {
            // put back to place
            document.body.removeChild(ship);
            shipParent.appendChild(ship);
        }

        ship.style.left = 0;
        ship.style.top = 0;
        ship.onmouseup = null;
    }
}