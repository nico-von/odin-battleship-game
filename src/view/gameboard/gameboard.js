const GAMEBOARD = "gameboard"
const BATTLEFIELD_TABLE = "battlefield-table"
const BATTLEFIELD_ROW = "battlefield-row"
const BATTLEFIELD_USER = "battlefield-user"
const BATTLEFIELD_RIVAL = "battlefield-rival"
const BATTLEFIELD_CELL = "battlefield-cell"
const BATTLEFIELD_CELL_EMPTY = "battlefield-cell-empty";
const BATTLEFIELD_CELL_BUSY = "battlefield-cell-busy";
const BATTLEFIELD_CELL_CONTENT = "battlefield-cell-content";
const MARKER = "marker";
const MARKER_COL = "marker-col";
const MARKER_ROW = "marker-row";
const SHIP = "ship";

export function createGameboardUIElement(height = 10, width = 10, isUser = true) {
    const gameboard = document.createElement("div");
    gameboard.classList.add(GAMEBOARD);
    const gameboardTable = document.createElement("table");
    gameboardTable.classList.add(BATTLEFIELD_TABLE);
    gameboardTable.classList.add(isUser ? BATTLEFIELD_USER : BATTLEFIELD_RIVAL);
    const gameboardTableBody = document.createElement("tbody");

    for (let i = 0; i < height; i++) {
        const row = document.createElement("tr");
        row.classList.add(BATTLEFIELD_ROW);
        gameboardTableBody.appendChild(row)
        for (let j = 0; j < width; j++) {
            const col = document.createElement("td");
            col.classList.add(BATTLEFIELD_CELL, BATTLEFIELD_CELL_EMPTY);

            const innerDiv = document.createElement("div");
            innerDiv.dataset.y = i;
            innerDiv.dataset.x = j;
            innerDiv.classList.add(BATTLEFIELD_CELL_CONTENT)

            const innerSpan = document.createElement("span");

            innerDiv.appendChild(innerSpan);

            if (i === 0) {
                const divMarker = document.createElement("div");
                divMarker.textContent = j + 1;
                divMarker.classList.add(MARKER, MARKER_COL);
                innerDiv.appendChild(divMarker);
            }
            if (j === 0) {
                const divMarker = document.createElement("div");
                divMarker.classList.add(MARKER, MARKER_ROW);
                divMarker.textContent = i + 1;
                innerDiv.appendChild(divMarker);
            }
            col.appendChild(innerDiv);
            row.appendChild(col);

        }
    }
    gameboardTable.appendChild(gameboardTableBody);
    gameboard.appendChild(gameboardTable);
    return gameboard;
};

export function placeShip(gameboard, ship, orientation, x, y) {
    // query    
    const startingTD = gameboard.querySelector(`div[data-x="${x}"][data-y="${y}"]`)
    const shipDiv = document.createElement("div");
    // set length or height
    const shipDivLengthEm = `${ship.length * 2}em`;
    if (orientation == "h") {
        shipDiv.style.marginLeft = "-2px";
        shipDiv.style.paddingRight = shipDivLengthEm;
        shipDiv.style.width = shipDivLengthEm;
        shipDiv.style.height = "2em";
    } else if (orientation == "v") {
        shipDiv.style.marginTop = "-2px";
        shipDiv.style.paddingBottom = shipDivLengthEm;
        shipDiv.style.width = "2em";
        shipDiv.style.height = shipDivLengthEm;
    }
    shipDiv.dataset.id = ship.id;
    shipDiv.dataset.length = ship.length;
    shipDiv.dataset.orientation = orientation;
    shipDiv.classList.add(SHIP);
    startingTD.appendChild(shipDiv);

    setTDClass(gameboard, ship.length, orientation, x, y);
}

export function setTDClass(gameboard, length, orientation, x, y, isBusy = true) {
    const toRemove = isBusy ? BATTLEFIELD_CELL_EMPTY : BATTLEFIELD_CELL_BUSY;
    const toAdd = isBusy ? BATTLEFIELD_CELL_BUSY : BATTLEFIELD_CELL_EMPTY;

    setOnAffectedCells(gameboard, length, orientation, x, y, (td) => {
        td.parentNode.classList.remove(toRemove);
        td.parentNode.classList.add(toAdd);
    })
}

export function setOnAffectedCells(gameboard, length, orientation, x, y, callback) {
    for (let i = 0; i < length; i++) {
        let td;
        if (orientation === "h") {
            td = gameboard.querySelector(`div[data-x="${x + i}"][data-y="${y}"]`)
        } else if (orientation === "v") {
            td = gameboard.querySelector(`div[data-x="${x}"][data-y="${y + i}"]`)
        }
        if (td === null) {
            break;
        }
        callback(td);
    }
}