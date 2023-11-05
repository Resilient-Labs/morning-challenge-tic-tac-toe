// GOAL: Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.

// Tic tac toe is a 3x3 box game  
// We want 9 boxes that will be clickable  
// We want the box selected by player 1 to display X
// We want the box selected by player 2 to display O
// We need to differenciate when player 1 is clicking vs when player 2 is clicking ... current player
// If a box is selected, change the current player, if x has selected let o select
// We need to know if a cell has already been selected so it cannot be selected again
// We want a display to show if player 1 won or player 2 won 


// Grab all the cells in our grid
// Need to use querySelectorAll because it is a list of elements not just one
const cells = document.querySelectorAll('.cell')

// Initialize variable to track current player
// 'X' will represent x or o, will later switch value
// Since no one has won yet, start a boolean as false until a player fulfills winning conditions
let currentPlayer = 'X'
let gameWon = false // once player wins, boolean should be set to true and game needs to 1)stop accepting moves and 2)display winner message

// Check to see if move can be made
// Check to see if player has won after the move it made
// If 'x' player has not won, switch to other player 'o'
// Loop through all of the cells(foreach) and add eventlistener to each cell
// When a cell is clicked the function () => inside runs
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!gameWon && !cell.textContent) { // ! means not, not operator used to check if something is not true
            // ! textContent checking to see if the cell is empty
            // ! gameWon checking to see if game is not won, if it is true the function will not run making the game board stop accepting moves
            cell.textContent = currentPlayer // Assigning value (x or o) to the cell
            
            // We want to check if current player won else switch players (will need to create function for win)
            // If current player wins display 'player x or o wins'
            if (checkWin()) {
                document.querySelector('.displayWinner').textContent = `Player ${currentPlayer} wins!`
                gameWon = true
            } else {
                // Switch to other player 
                // Ternary operator asks question
                // = is assigning === is comparing datatype and value
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X' // is the current player 'x'? then switch to 'o' value, if not, 'x' is the value   
            }
            
            // // Style the x and o values
            // if (currentPlayer === 'X') {
            //     cell.textContent = 'X'
            //     cell.classList.add('x') // Adding class for x to style in CSS
            // } else {
            //     cell.textContent = 'O'
            //     cell.classList.add('o') // Adding class for o to style in CSS
            //  }
        }
    });
});

// Function to check if a player has won
// Loop through all cells to check if 3 values ===, in either a row, column or diagonal
// The grid is 3x3 meaning 0,1,2 is the first row and 0,3,6 is the first column 
//(012 
// 345 
// 678)
// (i = 0, i = 1, i = 2) 3 iterations. since i++, i=1 in 2nd iteration, i=2 in 3rd
// Check to see if 3 column indices ====, 3 row indices ====, or 3 diagonal indices ====
function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (
            // when i=0 in 1st iteration, column starts at 0, we're checking 3 and 6 so how do we get to 3 and 6? add 3
            // works for i=1 (1,4,6) and i=2 (2,5,8)
            cells[i].textContent === currentPlayer && // 0 is being checked in 1st iteration
            cells[i + 3].textContent === currentPlayer && // 3 is being checked in 1st iteration
            cells[i + 6].textContent === currentPlayer // 6 is being checked in 1st iteration
        ) {
            return true; // Column win
        }
        if (
            // when i=0 in 1st iteration, row starts at 0, we're checking 1 and 2
            // when i=1 in 2nd iteration, row starts at 3, we're checking 4 and 5. so how do we get to 3 from 1? multiply 3. to check the next (4,5)
            // works for i=2 indices(6,7,8)
            cells[i * 3].textContent === currentPlayer && 
            cells[i * 3 + 1].textContent === currentPlayer &&
            cells[i * 3 + 2].textContent === currentPlayer
        ) {
            return true; // Row win
        }
    }

    if (
        // checking indices (0,4,8)
        cells[0].textContent === currentPlayer &&
        cells[4].textContent === currentPlayer &&
        cells[8].textContent === currentPlayer
    ) {
        return true; // Diagonal win
    }

    if (
        // checking indices (2,4,6)
        cells[2].textContent === currentPlayer &&
        cells[4].textContent === currentPlayer &&
        cells[6].textContent === currentPlayer
    ) {
        return true; // Diagonal win
    }

    return false;
}
