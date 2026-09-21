// We need a player to start off the game
let currentPlayer = 'X';

//Make a button in html with the ID of restart
document.querySelector('#restart').addEventListener('click', restartGame);

//Select all the 'cells' to clear game
let cellDivs = document.querySelectorAll('#cell');
cellDivs = Array.from(cellDivs); // this converts nodelist into an array

cellDivs.forEach(cell => {cell.addEventListener('click', () => {
    if (cell.innerText != ""){
        return
    }
    console.log();
    cell.innerText = currentPlayer;
    // Switch currentPlayer between 'X' and 'O'
    winnerChickenDinner();
    checkForDraw();
    currentPlayer = currentPlayer == 'X' ? 'O' : 'X'

})})

function checkForDraw() {
    let draw = cellDivs.every((element,index) => cellDivs[index].innerText == 'X' || cellDivs[index].innerText == 'O');
    if (draw) {
        alert(`It's a Draw`)
    }
}

function winnerChickenDinner(){
    // Top row wins
    if ((cellDivs[0].innerText == currentPlayer && cellDivs[1].innerText == currentPlayer && cellDivs[2].innerText == currentPlayer) || // Top row
        (cellDivs[3].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[5].innerText == currentPlayer) || // Middle row
        (cellDivs[6].innerText == currentPlayer && cellDivs[7].innerText == currentPlayer && cellDivs[8].innerText == currentPlayer) || // Bottom row
        (cellDivs[0].innerText == currentPlayer && cellDivs[3].innerText == currentPlayer && cellDivs[6].innerText == currentPlayer) || // Left Column
        (cellDivs[1].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[7].innerText == currentPlayer) || // Middle Column
        (cellDivs[2].innerText == currentPlayer && cellDivs[5].innerText == currentPlayer && cellDivs[8].innerText == currentPlayer) || // Right Column
        (cellDivs[0].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[8].innerText == currentPlayer) || // Diagnoal TL to BR
        (cellDivs[2].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[6].innerText == currentPlayer)) { // Diagnoal TR to BL
        alert(`You have Won!`)
    } 
}

function restartGame() {
    currentPlayer = 'X'
    cellDivs.forEach(cell => cell.innerText = '');
    alert(`Game has reset`)
}