
let currentPlayer = 'x';

let cellDivs = document.querySelectorAll('.cell');
cellDivs = Array.from(cellDivs); 

cellDivs.forEach(cell => {cell.addEventListener('click', () => {
    if (cell.innerText != ""){
        return
    }
    cell.innerText = currentPlayer;
    if (winnerWinner()) {
        return
    }
    checkForDraw();
    currentPlayer = currentPlayer == 'x' ? 'o' : 'x'
})})

function checkForDraw(){
    let draw = cellDivs.every(cell => cell.innerText == 'x' || cell.innerText == 'o');
    if (draw) {
        // wait a moment so the last move shows up before the alert pops up
        alert(`it's a draw`)
    }
}

// every row, column and diagonal, as cell numbers (0-8, left to right, top to bottom)
const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function winnerWinner(){
    let won = winningLines.some(([a, b, c]) =>
        cellDivs[a].innerText == currentPlayer && cellDivs[b].innerText == currentPlayer && cellDivs[c].innerText == currentPlayer);
    if (won) {
        setTimeout(() => alert('Winneeeeeerrrrrrrrrrrrr!'), 50);
    }
    return won
}

function restartGame(){
    currentPlayer = 'x'
    cellDivs.forEach(cell => cell.innerText = '');
    alert('Game has Reset')
}
