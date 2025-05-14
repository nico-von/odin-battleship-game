const RECEIVE_ATTACK_EVENT = new CustomEvent("receiveattack", { bubbles: true, cancelable: false });

let isUserFirstToAttack = false;
let rGameboard = null;
let uGameboard = null;
let uGameboardUI = null;
let rGameboardUI = null;

export function startGameFunction(e, userGameboardUI, rivalGameboardUI, userGameboard, rivalGameboard, playButton) {
    //clone userGameboardUi
    const userGameboardUIClone = userGameboardUI.cloneNode(true);
    const userGameboardParentNode = userGameboardUI.parentNode;
    userGameboardParentNode.replaceChild(userGameboardUIClone, userGameboardUI);
    rivalGameboardUI.removeChild(playButton);
    rivalGameboardUI.classList.remove("awaiting-placement");
    rivalGameboardUI.addEventListener("click", e => gameplayEventListener(e));
    isUserFirstToAttack = getRandomNumber() === 0;
    // this below centralises the gameplay, this will allow future player to player battles.
    uGameboard = userGameboard;
    rGameboard = rivalGameboard;
    uGameboardUI = userGameboardUI;
    rGameboardUI = rivalGameboardUI;
    
    document.body.addEventListener("receiveattack", e => gamePlayManager(e));
    e.preventDefault();
}

function gamePlayManager(e) {
    if (e.target === rGameboardUI) {
        console.log(rGameboard);
    }
}

function gameplayEventListener(e) {
    e.currentTarget.dispatchEvent(RECEIVE_ATTACK_EVENT);
}

function getRandomNumber() {
    return Math.round(Math.random() * 1);
}