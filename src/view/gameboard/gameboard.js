export function createGameboardUIElement(height = 10, width = 10) {
    const gameboard = document.createElement("div");
    const gameboardTable = document.createElement("table");
    gameboardTable.classList.add("battlefield-table");
    const gameboardTableBody = document.createElement("tbody");

    for(let i = 0; i < height; i++) {
        const row = document.createElement("tr");
        row.classList.add("battlefield-row");
        gameboardTableBody.appendChild(row)
        for (let j = 0; j < width; j++){
            const col = document.createElement("td");
            col.classList.add("battlefield-cell", "battlefield-cell-empty");
            
            const innerDiv = document.createElement("div");
            innerDiv.setAttribute("data-y", i);
            innerDiv.setAttribute("data-x", j);
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