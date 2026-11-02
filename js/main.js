// We need a player to start off the game
let currentPlayer = 'X'

// Make a button in html with the ID of restart
document.querySelector("#restart").addEventListener('click', restartGame)

//Select all the 'cells' to clear the game
let cellDivs = document.querySelectorAll('.cell')
cellDivs = Array.from(cellDivs)
console.log(cellDivs)
//create cell variable

cellDivs.forEach(cell => {

    cell.addEventListener('click', () => {
        if (cell.innerText != "") {
            return
        }
        cell.innerText = currentPlayer
        // check if there are any 3 in a row
        winner()
        // Switch CurrentPlayer between 'X' and 'O'
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
        // check if all tic-tac-toe squares have been filled
        checkForDraw()
    
    })

})

function checkForDraw() {
    let draw = cellDivs.every((element, index) => cellDivs[index].innerText == 'X' || cellDivs[index].innerText == 'O')
    if (draw) {
        alert("It's a draw!")
    }
}

function winner() {
    // Top row wins
    if (cellDivs[0].innerText == currentPlayer && cellDivs[1].innerText == currentPlayer && cellDivs[2].innerText == currentPlayer) {
        alert('You have won!')
    }
    // Middle row wins
    else if (cellDivs[3].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[5].innerText == currentPlayer) {
        alert('You have won!')
    }
    // Bottom row wins
    else if (cellDivs[6].innerText == currentPlayer && cellDivs[7].innerText == currentPlayer && cellDivs[8].innerText == currentPlayer) {
        alert('You have won!')
    }
    // Left column wins
    else if (cellDivs[0].innerText == currentPlayer && cellDivs[3].innerText == currentPlayer && cellDivs[6].innerText == currentPlayer) {
        alert('You have won!')
    }
    // Middle column wins
    else if (cellDivs[1].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[7].innerText == currentPlayer) {
        alert('You have won!')
    }
    // Right column wins
    else if (cellDivs[2].innerText == currentPlayer && cellDivs[5].innerText == currentPlayer && cellDivs[8].innerText == currentPlayer) {
        alert('You have won!')
    }
    // Diagonal from top-left to bottom-right
    else if (cellDivs[0].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[8].innerText == currentPlayer) {
        alert('You have won!')
    }
    // Diagonal from top-right to bottom-left
    else if (cellDivs[2].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[6].innerText == currentPlayer) {
        alert('You have won!')
    }
}

function restartGame() {
    currentPlayer = 'X'
    cellDivs.forEach(cell => cell.innerText = '')
    alert('Game has been reset!')
}