export function createGameboardUIElement(height = 10, width = 10, isUser = true) {
    const gameboard = document.createElement("div");
    gameboard.classList.add("gameboard");
    const gameboardTable = document.createElement("table");
    gameboardTable.classList.add("battlefield-table");
    gameboardTable.classList.add(isUser ? "battlefield-user" : "battlefield-rival");
    const gameboardTableBody = document.createElement("tbody");

    for(let i = 0; i < height; i++) {
        const row = document.createElement("tr");
        row.classList.add("battlefield-row");
        gameboardTableBody.appendChild(row)
        for (let j = 0; j < width; j++){
            const col = document.createElement("td");
            col.classList.add("battlefield-cell", "battlefield-cell-empty");
            
            const innerDiv = document.createElement("div");
            innerDiv.dataset.y = i;
            innerDiv.dataset.x = j;
            innerDiv.classList.add("battlefield-cell-content")
            
            const innerSpan = document.createElement("span");

            innerDiv.appendChild(innerSpan);

            if(i === 0) {
                const divMarker = document.createElement("div");
                divMarker.textContent = j + 1;
                divMarker.classList.add("marker", "marker-col");
                innerDiv.appendChild(divMarker);
            }
            if(j === 0) {
                const divMarker = document.createElement("div");
                divMarker.classList.add("marker", "marker-row");
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
    shipDiv.dataset.length = ship.length;
    shipDiv.dataset.orientation = orientation;
    shipDiv.classList.add("ship");
    startingTD.appendChild(shipDiv);
    
    setTDClass(gameboard, ship.length, orientation, x, y);
}

export function setTDClass(gameboard, length, orientation, x, y, isBusy = true) {
    const toRemove = isBusy ? "battlefield-cell-empty" : "battlefield-cell-busy";
    const toAdd = isBusy ? "battlefield-cell-busy" : "battlefield-cell-empty";
    for (let i = 0; i < length; i++){
        let td;
        if(orientation === "h") {
            td = gameboard.querySelector(`div[data-x="${x + i}"][data-y="${y}"]`)
        } else if (orientation === "v") {
            td = gameboard.querySelector(`div[data-x="${x}"][data-y="${y + i}"]`)
        }
        td.parentNode.classList.remove(toRemove);
        td.parentNode.classList.add(toAdd);
    }
}
