//create a 2 player game of tic tac toe

//class/constructor to create differe palyers 
    //score (best of 5 games)
    //identity X or O

class Player {
    constructor(score, identity) {
        this.score = score;
        this.identity = identity;
    }
}

const player1 = new Player(0, 'X');
const player2 = new Player(0, 'O');
const boardSquare = document.querySelectorAll('.boardSquare');
const player1StartBtn = document.querySelector('#player1StartBtn');
const player2StartBtn = document.querySelector('#player2StartBtn');
const resetGameBtn = document.querySelector('#resetGameBtn');

let currentPlayer = "X";
let playerTurn = document.querySelector('#playerTurn');
let gameStatus = document.querySelector('#gameStatus');
let player1Score = document.querySelector('#player1Score');
let player2Score = document.querySelector('#player2Score');

player1StartBtn.addEventListener('click', player1Start);
player2StartBtn.addEventListener('click', player2Start);
resetGameBtn.addEventListener('click', resetGame);

boardSquare.forEach(square => square.addEventListener('click', addXO));

function addXO(e) {
    if (e.target.innerText !== '') {
        return;
    }
    e.target.innerText = currentPlayer;

    if (checkWin(currentPlayer)) {
        gameStatus.innerText = `Player with ${currentPlayer} wins!`;
        if (currentPlayer === 'X') {
            player1.score++;
            player1Score.innerText = `Player 1 Score: ${player1.score}`;
        } else {
            player2.score++;
            player2Score.innerText = `Player 2 Score: ${player2.score}`;
        }

        if (player1.score === 5) {
            gameStatus.innerText = 'Player 1 wins the overall game!';
            disableBoard();
        } else if (player2.score === 5) {
            gameStatus.innerText = 'Player 2 wins the overall game!';
            disableBoard();
        } else {
            resetBoard();
        }
        return;
    }

    if (currentPlayer === 'X') {
        currentPlayer = 'O';
        playerTurn.innerText = `Player 2's Turn`;
    } else {
        currentPlayer = 'X';
        playerTurn.innerText = `Player 1's Turn`;
    }
}

function checkWin(player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    
    for (const pattern of winPatterns) {
        if (boardSquare[pattern[0]].innerText === player && 
            boardSquare[pattern[1]].innerText === player && 
            boardSquare[pattern[2]].innerText === player) {
            return true;
        }
    }

    return false;
}

function resetBoard() {
    boardSquare.forEach(square => square.innerText = "");
}

function resetGame() {
    player1.score = 0;
    player2.score = 0;
    player1Score.innerText = `Player 1 Score: 0`
    player2Score.innerText = `Player 2 Score: 0`
    gameStatus.innerText = "";
    resetBoard();
    currentPlayer = "X";
    playerTurn.innerText = "Player 1's Turn";

    boardSquare.forEach(square => square.addEventListener('click', addXO));
}

function disableBoard() {
    boardSquare.forEach(square => square.removeEventListener('click', addXO));
}

function player1Start() {
    currentPlayer = 'X';
    playerTurn.innerText = `Who's Turn: Player 1`;
}

function player2Start() {
    currentPlayer = 'O';
    playerTurn.innerText = `Who's Turn: Player 2`;
}

//create board with 3 rows and 3 columns
//create a button to place x and o
    //one click = x
    //2 clicks = o

//conditional 
    //if result 1 === 2 === 3
    //then winner
    //else, next player goes