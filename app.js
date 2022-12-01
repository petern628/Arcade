const dog = "🐕";
const cat = "🐈";

let stopGame = true;
let gameBoard = ["", "", "", "", "", "", "", "", ""];

const board = document.querySelector(".gameField");

const gameOver = document.getElementById("winner");

const start = () => {
    stopGame = false
}

checkBoardState = () => {
    let game = false;
    gameBoard.forEach(element => {
        if (element != dog && element != cat) {
            game = false;
        }
    });
    stopGame = game;
};

const gameUpdate = () => {
    renderBoard();
    checkBoardState();
    whoWon();
}

const addDogMove = x => {
    if (!stopGame && gameBoard[x] == "") {
        gameBoard[x] = dog;
        gameUpdate();
        addCatMove();
    }
};

const addCatMove = () => {
    if (!stopGame) {
        do {
            selected = Math.floor(Math.random() * 9);
        } while (gameBoard[selected] != "");
        gameBoard[selected] = cat;
        gameUpdate();
    }
};

const checkWinner = (a, b, c) => {
    return (
        gameBoard[a] == gameBoard[b] &&
        gameBoard[b] == gameBoard[c] &&
        (gameBoard[a] == dog || gameBoard[a] == cat)
    );
};

const winCondition = () => {
    for (i = 0; i < 9; i += 3) {
        if (checkWinner(i, i + 1, i + 2)) {
            document.querySelector(`#space_${i}`).classList.add("win");
            document.querySelector(`#space_${i + 1}`).classList.add("win");
            document.querySelector(`#space_${i + 2}`).classList.add("win");
            return gameBoard[i];
        }
    }
    for (i = 0; i < 3; i++) {
        if (checkWinner(i, i + 3, i + 6)) {
            document.querySelector(`#space_${i}`).classList.add("win");
            document.querySelector(`#space_${i + 3}`).classList.add("win");
            document.querySelector(`#space_${i + 6}`).classList.add("win");
            return gameBoard[i];
        }
    }
    if (checkWinner(0, 4, 8)) {
        document.querySelector("#space_0").classList.add("win");
        document.querySelector("#space_4").classList.add("win");
        document.querySelector("#space_8").classList.add("win");
        return gameBoard[0];
    }
    if (checkWinner(2, 4, 6)) {
        document.querySelector("#space_2").classList.add("win");
        document.querySelector("#space_4").classList.add("win");
        document.querySelector("#space_6").classList.add("win");
        return gameBoard[2];
    }
    return "";
};

const whoWon = () => {
    let match = winCondition()
    if (match == dog) {
        winner.innerText = "Dogs Won";
        winner.classList.add("Dogs");
        stopGame = true
    } else if (match == cat) {
        winner.innerText = "Cats Won";
        winner.classList.add("Cats");
        stopGame = true
    } else if (stopGame) {
        winner.innerText = "Draw!";
        winner.classList.add("Draw");
    }
};


const renderBoard = () => {
    board.innerHTML = ""
    gameBoard.forEach((x, i) => {
        board.innerHTML += `<div id="space_${i}" class="space" onclick="addDogMove(${i})">${gameBoard[i]}</div>`
        if (x == dog || x == cat) {
            document.querySelector(`#space_${i}`).classList.add("occupied");
        }
    });
};

const reset = () => {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    stopGame = true;
    winner.classList.remove("Dogs");
    winner.classList.remove("Cats");
    winner.classList.remove("Draw");
    winner.innerText = "";
    renderBoard();
};

renderBoard();