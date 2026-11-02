// Create the Tic-Tac-Toe game container
let t3Game = {}

// Give the game properties
t3Game.currentTurn = document.querySelector('.currentTurn');
t3Game.playerOne = document.querySelector('#playerOne');
t3Game.playerTwo = document.querySelector('#playerTwo');

t3Game.squares = [];
t3Game.squares[0] = document.querySelector('#spotOne');
t3Game.squares[1] = document.querySelector('#spotTwo');
t3Game.squares[2] = document.querySelector('#spotThree');
t3Game.squares[3] = document.querySelector('#spotFour');
t3Game.squares[4] = document.querySelector('#spotFive');
t3Game.squares[5] = document.querySelector('#spotSix');
t3Game.squares[6] = document.querySelector('#spotSeven');
t3Game.squares[7] = document.querySelector('#spotEight');
t3Game.squares[8] = document.querySelector('#spotNine');

t3Game.outcome = document.querySelector('#gameOutcome');

t3Game.scores = []
t3Game.scores[0] = document.querySelector('#scorePlayerOne');
t3Game.scores[1] = document.querySelector('#scorePlayerTwo');

// Give the game methods
t3Game.pickSquare = function (selectedSquare) {
    if (playerOne.turn) {
        playerOne = t3Board.updatePosition(playerOne, selectedSquare);
        playerOne.turn = false;
        t3Game.playerOne.classList.remove('currentTurn');
        playerTwo.turn = true;
        t3Game.playerTwo.classList.add('currentTurn');
    }
    else if (playerTwo.turn) {
        playerTwo = t3Board.updatePosition(playerTwo, selectedSquare);
        playerTwo.turn = false;
        t3Game.playerTwo.classList.remove('currentTurn');
        playerOne.turn = true;
        t3Game.playerOne.classList.add('currentTurn');
    }
    t3Game.scores[0].innerText = playerOne.score;
    t3Game.scores[1].innerText = playerTwo.score;
    t3Board.checkFull();


}

t3Game.checkWinner = function (player) {
    if (player.positions[0] && player.positions[1] && player.positions[2]) {
        return true;
    }
    else if (player.positions[3] && player.positions[4] && player.positions[5]) {
        return true;
    }
    else if (player.positions[6] && player.positions[7] && player.positions[8]) {
        return true;
    }

    if (player.positions[0] && player.positions[3] && player.positions[6]) {
        return true;
    }
    else if (player.positions[1] && player.positions[4] && player.positions[7]) {
        return true;
    }
    else if (player.positions[2] && player.positions[5] && player.positions[8]) {
        return true;
    }

    if (player.positions[0] && player.positions[4] && player.positions[8]) {
        return true;
    }
    else if (player.positions[2] && player.positions[4] && player.positions[6]) {
        return true;
    }

    return false;

}

// Create the Tic-Tac-Toe board container
let t3Board = {};

// Give the board properties
t3Board.positions = [false, false, false, false, false, false, false, false, false];

// Give the board methods
t3Board.updatePosition = function (player, spot) {
    console.log(player);
    if (t3Board.positions[spot]) {
        alert('Pick a different square. That one is taken!');
        return player;
    }
    else {
        t3Board.positions[spot] = true;
    }

    t3Game.squares[spot].innerText = player.piece;
    player.positions[spot] = true;

    t3Game.currentTurn = document.querySelector('.currentTurn');
    console.log(t3Board);

    if (t3Game.checkWinner(player)) {
        player.score += 1;
        t3Game.outcome.innerText = player.name + ' has won the last game!'
        alert(player.name + ' has won the game!');
        t3Board.cleanBoard();
    }
    return player;

}

t3Board.checkFull = function () {
    let openPositions = 0;
    for (let i = 0; i < t3Board.positions.length; i++) {
        if (t3Board.positions[i]) {
            openPositions += 1;
        }
    }

    if (openPositions === t3Board.positions.length) {
        alert('It\'s a tie!')
        t3Board.cleanBoard();
    }
}

t3Board.cleanBoard = function () {
    for (let i = 0; i < t3Board.positions.length; i++) {
        t3Board.positions[i] = false;
        playerOne.positions[i] = false;
        playerTwo.positions[i] = false;
        t3Game.squares[i].innerText = '';
    }
}

// Create the players
class t3Player {
    constructor(name, piece, turn, positions, score) {
        this.name = name;
        this.piece = piece;
        this.turn = turn;
        this.positions = positions;
        this.score = score;
    }
}

// Give the players properties
let playerOne = new t3Player(
    'Player X',
    'X',
    true,
    positions = [false, false, false, false, false, false, false, false, false],
    0);
let playerTwo = new t3Player(
    'Player O',
    'O',
    false,
    positions = [false, false, false, false, false, false, false, false, false],
    0);

// Give the players methods


// Do something on square click
t3Game.squares[0].addEventListener('click', function () {
    t3Game.pickSquare(0);
});
t3Game.squares[1].addEventListener('click', function () {
    t3Game.pickSquare(1);
});
t3Game.squares[2].addEventListener('click', function () {
    t3Game.pickSquare(2);
});
t3Game.squares[3].addEventListener('click', function () {
    t3Game.pickSquare(3);
});
t3Game.squares[4].addEventListener('click', function () {
    t3Game.pickSquare(4);
});
t3Game.squares[5].addEventListener('click', function () {
    t3Game.pickSquare(5);
});
t3Game.squares[6].addEventListener('click', function () {
    t3Game.pickSquare(6);
});
t3Game.squares[7].addEventListener('click', function () {
    t3Game.pickSquare(7);
});
t3Game.squares[8].addEventListener('click', function () {
    t3Game.pickSquare(8);
});