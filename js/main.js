// this is how to player can win
let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];


let board;
let turn = 'X';
let win;



let squares = Array.from(document.querySelectorAll('#board div'));


document.getElementById('board').addEventListener('click', handleTurn);
let messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);



function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
};

function handleTurn() {
    let idx = squares.findIndex(function(boxes) {
        return boxes === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    render();
};

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};

function render() {
    board.forEach(function(mark, index) {
    squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `Its a tie ` : win ? `${win} is a winner winner chicken dinner !` : `It's time for ${turn} to take a turn`;
    };

init();