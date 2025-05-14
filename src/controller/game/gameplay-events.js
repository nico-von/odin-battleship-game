import { createScoreDiv } from "../../view/ui-score/score";
import { main } from "../../view/navigation/main";
import { createFinalScreen, makeNewGameButton } from "../../view/ui-score/finalscreen";

let isUserTurn = false;
let rGameboard = null;
let uGameboard = null;
let uGameboardUI = null;
let rGameboardUI = null;
let uScoreDiv = createScoreDiv();
let rScoreDiv = createScoreDiv();


export function startGameFunction(e, userGameboardUI, rivalGameboardUI, userGameboard, rivalGameboard, playButton) {
    //clone userGameboardUi to lock it
    const userGameboardUIClone = userGameboardUI.cloneNode(true);
    const userGameboardParentNode = userGameboardUI.parentNode;
    userGameboardParentNode.replaceChild(userGameboardUIClone, userGameboardUI);

    rivalGameboardUI.removeChild(playButton);
    rivalGameboardUI.classList.remove("awaiting-placement");

    rivalGameboardUI.addEventListener("click", e => rivalHitListener(e));

    isUserTurn = getRandomNumber(1) === 0;
    // this below centralises the gameplay, this will allow future player to player battles.
    uGameboard = userGameboard;
    rGameboard = rivalGameboard;
    uGameboardUI = userGameboardUIClone;
    rGameboardUI = rivalGameboardUI;

    rGameboardUI.appendChild(uScoreDiv);
    uGameboardUI.appendChild(rScoreDiv);

    uScoreDiv.querySelector(".ship-remain-count").textContent = uGameboard.placedShips.length;
    rScoreDiv.querySelector(".ship-remain-count").textContent = rGameboard.placedShips.length;

    document.body.addEventListener("receiveattack", e => gamePlayManager(e));
    // attackUser();
    gameEnd(false);
    e.preventDefault();
}

function getAiAttack() {
    return {
        x: getRandomNumber(uGameboard.width - 1),
        y: getRandomNumber(uGameboard.height - 1)
    };
}

function attackUser() {
    if (isUserTurn) {
        return;
    }
    const aiAttack = getAiAttack();
    const { x, y } = aiAttack;

    uGameboardUI.dispatchEvent(new CustomEvent("receiveattack", {
        bubbles: true,
        cancelable: false,
        detail: {
            x,
            y,
            gameboard: uGameboard,
            gameboardUI: uGameboardUI,
        }
    }));
}

function hit(x, y, gameboard) {
    const coordinate = gameboard.hit(x, y);
    const missed = coordinate.coordinate.miss;
    const allShipsSunk = gameboard.allShipsSunk;

    if (coordinate.validHit) {
        return {
            isAttackValid: true,
            isAttackMiss: missed,
            attackSunkShip: !missed ? coordinate.coordinate.ship.isSunk() : false,
            allShipsSunk: allShipsSunk
        };
    } else {
        return { isAttackValid: false };
    }
}

function paintHit(x, y, isAttackMiss, gameboardUI) {
    gameboardUI.querySelector(`div[data-x="${x}"][data-y="${y}"]`).classList.add(isAttackMiss ? "cell-hit" : "ship-hit");
}

function gamePlayManager(e) {
    const { x, y, gameboard, gameboardUI } = e.detail;
    const attack = hit(x, y, gameboard);

    if (!attack.isAttackValid && !isUserTurn) {
        attackUser();
    }
    if (!attack.isAttackValid) {
        return;
    };

    if (attack.isAttackValid) {
        const shipSunkSpan = gameboardUI.querySelector(".ship-sunk-count");
        const shipRemainSpan = gameboardUI.querySelector(".ship-remain-count");
        let shipsSunk = Number(shipSunkSpan.textContent);
        let shipsRemain = Number(shipRemainSpan.textContent);
        shipSunkSpan.textContent = attack.attackSunkShip ? shipsSunk + 1 : shipsSunk;
        shipRemainSpan.textContent = attack.attackSunkShip ? shipsRemain - 1 : shipsRemain;
    }

    if (attack.allShipsSunk) {
        gameEnd(gameboardUI !== uGameboardUI);
    }
    paintHit(x, y, attack.isAttackMiss, gameboardUI);
    isUserTurn = !isUserTurn;
    // ai Attack
    setTimeout(attackUser, getRandomNumber(2000));
    return;
}

function rivalHitListener(e) {
    if (!isUserTurn) {
        return;
    }

    let { x, y } = e.target.dataset;

    if (!x || !y) {
        return;
    }

    x = Number(x);
    y = Number(y);

    rGameboardUI.dispatchEvent(new CustomEvent("receiveattack", {
        bubbles: true,
        cancelable: false,
        detail: {
            x,
            y,
            gameboard: rGameboard,
            gameboardUI: rGameboardUI
        }
    }));
}

function getRandomNumber(n) {
    return Math.round(Math.random() * n);
}

function gameEnd(isUserWinner) {
    main.textContent = "";
    const divHolder = document.createElement("div");
    divHolder.append(createFinalScreen(isUserWinner), makeNewGameButton());
    divHolder.classList.add("final-div");
    main.append(divHolder);
}