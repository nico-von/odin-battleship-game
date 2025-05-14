
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

    isUserTurn = getRandomNumber() === 0;
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
    isUserTurn = true;
    uGameboardUI.dispatchEvent(new CustomEvent("receiveattack", {
        bubbles: true,
        cancelable: false,
        detail: {
            x: 0,
            y: 0,
            gameboard: uGameboard,
        }
    }));
}

function gamePlayManager(e) {
    console.log(e.detail);
    attackUser();
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
    isUserTurn = false;
    rGameboardUI.dispatchEvent(new CustomEvent("receiveattack", {
        bubbles: true,
        cancelable: false,
        detail: {
            x,
            y,
            gameboard: rGameboard,
        }
    }));
}

function getRandomNumber() {
    return Math.round(Math.random() * 1);
}