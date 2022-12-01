const testingElem = document.querySelector('h1')

console.log(testingElem)

let state = {};

const resetState = () => {
    state.board = [
        'car',
        'bus',
        'car',
        'cat',
        'dog',
        'cat',
        'dog',
        'hat',
        'pizza',
        'hat',
        'pizza',
        'bus',
    ];
    state.getCurrentPlayer = () => state.players[state.currentPlayerIdx]
    state.players = ['', '']
};

// ********************************** DOM SELECTORS ************************************
const boardElem = document.querySelector('#board');
const playerTurnElem = document.querySelector('#player-turn')

// ********************************** DOM MANIPULATION FUNCTIONS ************************************
const renderBoard = () => {
    for (let i = 0; i < state.board.length; i++) {
        const card = state.board[i];
        const cellElem = document.createElement('div');
        cellElem.classList.add('cell');
        cellElem.innerText = card;
        boardElem.appendChild(cellElem);
    }
};

const renderPlayer = ( => {

})

// ********************************** BOOTSTRAPPING ************************************
resetState;
renderBoard;