export function createScoreDiv() {
    const scoreDiv = document.createElement("div");
    scoreDiv.classList.add("scoreDiv");
    const shipsSunk = document.createElement("div");
    const shipsRemaining = document.createElement("div");

    const shipSunkCount = document.createElement("span");
    shipSunkCount.textContent = 0;
    shipSunkCount.classList.add("ship-sunk-count");
    const shipRemainingCount = document.createElement("span");
    shipRemainingCount.textContent = 0;
    shipRemainingCount.classList.add("ship-remain-count");

    const shipSunkTitle = document.createTextNode("Ship Sunk:");
    const shipRemainingTitle = document.createTextNode("Ship Remaining:");

    shipsSunk.append(shipSunkTitle, shipSunkCount);
    shipsRemaining.append(shipRemainingTitle, shipRemainingCount);

    scoreDiv.append(shipsSunk, shipsRemaining);
    return scoreDiv;
}