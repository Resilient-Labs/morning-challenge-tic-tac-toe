let currentPlayer = "X";

document.querySelector('.restart').addEventListener('click', startOver);

let cellDivs= document.querySelectorAll('.cell');
cellDivs = Array.from(cellDivs);
cellDivs.forEach(cell => {cell.addEventListener('click', () => {
    if (cell.innerText != "") {
        return;
    }
    cell.innerText = currentPlayer;
    youWin();
  
    currentPlayer= currentPlayer == 'X' ? 'O' : 'X'
})})
 
function youWin() {
    if ((cellDivs[0].innerText == currentPlayer && cellDivs[1]. innerText == currentPlayer && cellDivs[2].innerText == currentPlayer) || 
        (cellDivs[3].innerText == currentPlayer && cellDivs[4]. innerText == currentPlayer && cellDivs[5].innerText == currentPlayer) || 
        (cellDivs[6].innerText == currentPlayer && cellDivs[7]. innerText == currentPlayer && cellDivs[8].innerText == currentPlayer) ||
        (cellDivs[0].innerText == currentPlayer && cellDivs[3]. innerText == currentPlayer && cellDivs[6].innerText == currentPlayer) ||
        (cellDivs[1].innerText == currentPlayer && cellDivs[4]. innerText == currentPlayer && cellDivs[7].innerText == currentPlayer) ||
        (cellDivs[2].innerText == currentPlayer && cellDivs[5]. innerText == currentPlayer && cellDivs[8].innerText == currentPlayer) ||
        (cellDivs[0].innerText == currentPlayer && cellDivs[4]. innerText == currentPlayer && cellDivs[8].innerText == currentPlayer) ||
        (cellDivs[2].innerText == currentPlayer && cellDivs[4]. innerText == currentPlayer && cellDivs[6].innerText == currentPlayer)) {
        alert("You Win!! Click Restart to play again")
    }
}

function startOver() {
    currentPlayer ='X'
    cellDivs.forEach(cell => cell.innerText = ''); 
}















