let currentPlayer = "X" // Keep track of whos turn it is. Player x starts it off
document.querySelector("#btn").addEventListener('click', restart) // When the game is over, they have the option to restart the game

// Select all the cells
let cellDivs = document.querySelectorAll("#cell") // Will return a nodeList
cellDivs = Array.from(cellDivs) // Convert NodeList into an array

// Add event Listener to all the cells
cellDivs.forEach(cell => {

    cell.addEventListener('click', () => {
        
        // Check if the cell already has innertext. If it does it means cell has already been selected
        if (cell.innerText != "") {
            return
        }

        // Place the X or O into the DOM/Cell
        cell.innerText = currentPlayer


        // Check for a draw
        checkDraw()
        // Check for winner
        checkForWinner()

        // Once a player has selected, change the players turn
        currentPlayer = currentPlayer == "X" ? "O" : "X" // This changes the players turn. If currentPlayer is = "X", let "O"  have a chanc
        
    })
})


// Function checks if there is a draw
function checkDraw() {

    // returns true if every cell has innerText of "x" or "o"
    let draw = cellDivs.every((element, index) => cellDivs[index].innerText == "X" || cellDivs[index].innerText == "O" )

    // If true, it's a draw
    if (draw) {
        document.querySelector('.displayWinner').classList.remove('hidden') // remove hidden class
        document.querySelector(".winnerMessage").innerText = `It's a DRAW` // Insert text to show who won
    }
}

// Function checks for a winner
function checkForWinner() {


    if (cellDivs[0].innerText == currentPlayer && cellDivs[1].innerText == currentPlayer && cellDivs[2].innerText == currentPlayer) {
        document.querySelector('.displayWinner').classList.remove('hidden') // Remove hidden class
        document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins!` // Insert text to show who won
    }else if (cellDivs[3].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[5].innerText == currentPlayer) {
        document.querySelector('.displayWinner').classList.remove('hidden') // Remove hidden class
        document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins!` // Insert text to show who won
    }else if (cellDivs[6].innerText == currentPlayer && cellDivs[7].innerText == currentPlayer && cellDivs[8].innerText == currentPlayer ) {
        document.querySelector('.displayWinner').classList.remove('hidden') // Remove hidden class
        document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins!` // Insert text to show who won
    }else if (cellDivs[0].innerText == currentPlayer && cellDivs[3].innerText == currentPlayer && cellDivs[6].innerText == currentPlayer) {
        document.querySelector('.displayWinner').classList.remove('hidden') // Remove hidden class
        document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins!` // Insert text to show who won
    }else if (cellDivs[1].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[7].innerText == currentPlayer ) {
        document.querySelector('.displayWinner').classList.remove('hidden') // Remove hidden class
        document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins!` // Insert text to show who won
    }else if (cellDivs[2].innerText == currentPlayer && cellDivs[5].innerText == currentPlayer && cellDivs[8].innerText == currentPlayer ) {
        document.querySelector('.displayWinner').classList.remove('hidden') // Remove hidden class
        document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins!` // Insert text to show who won
    }else if (cellDivs[0].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[8].innerText == currentPlayer ) {
        document.querySelector('.displayWinner').classList.remove('hidden') // Remove hidden class
        document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins!` // Insert text to show who won
    }else if (cellDivs[2].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[6].innerText == currentPlayer ) {
        document.querySelector('.displayWinner').classList.remove('hidden') // Remove hidden class
        document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins!` // Insert text to show who won
    }
}

// Restart button
function restart() {

    // Reset currentPlayer back to "X"
    currentPlayer = "X"

    // Remove all innerText from the cells. 
    cellDivs.forEach(cell => cell.innerText = "")
    document.querySelector('.displayWinner').classList.add('hidden') // add the hidden class to hide wining message

}

