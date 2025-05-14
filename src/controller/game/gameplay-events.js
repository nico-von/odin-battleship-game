
let isUserTurn = false;
let rGameboard = null;
let uGameboard = null;
let uGameboardUI = null;
let rGameboardUI = null;

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
    document.body.addEventListener("receiveattack", e => gamePlayManager(e));
    attackUser();
    e.preventDefault();
}

function attackUser() {
    if (isUserTurn) {
        return;
    }
    console.log("user Hit");
    uGameboardUI.dispatchEvent(new CustomEvent("receiveattack", {
        bubbles: true,
        cancelable: false,
        detail: {
            x: getRandomNumber(uGameboard.width - 1),
            y: getRandomNumber(uGameboard.height - 1),
            gameboard: uGameboard,
            gameboardUI: uGameboardUI,
        }
    }));
}

function hit(x, y, gameboard) {
    const coordinate = gameboard.hit(x, y);
    if (coordinate.validHit) {
        return {isAttackValid: true, isAttackMiss: coordinate.coordinate.miss};
    } else {
        return {isAttackValid: false};
    }
}

function paintHit(x, y, isAttackMiss, gameboardUI) {
    gameboardUI.querySelector(`div[data-x="${x}"][data-y="${y}"]`).classList.add(isAttackMiss? "cell-hit": "ship-hit");
}

function gamePlayManager(e) {
    const { x, y, gameboard, gameboardUI } = e.detail;
    const attack = hit(x, y, gameboard);
    console.log(attack.isAttackValid);
    
    if (!attack.isAttackValid && !isUserTurn) {
        attackUser();
    }
    if (!attack.isAttackValid) {
        return;
    };

    paintHit(x, y, attack.isAttackMiss, gameboardUI);
    isUserTurn = !isUserTurn;
    attackUser();
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

    console.log("rival Hit");
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