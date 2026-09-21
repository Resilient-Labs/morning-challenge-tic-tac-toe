// We need a player to start off the game.
// X will go first.
let firstPlayer = 'X';

// This variable keeps track of whether the game is over. False means the game is still being played.
let gameOver = false;

// Select the h2 from our HTML. We will use this to display messages on the page.
const message = document.querySelector('h2');

// Select the restart button.When the button is clicked, run restartGame().
document.querySelector('#restartBtn').addEventListener('click', restartGame);

// Select all of the elements with the class "cell".
let cellDivs = document.querySelectorAll('.cell');

// Convert the NodeList into an array.This lets us use array methods such as forEach() and every().
cellDivs = Array.from(cellDivs);

// Go through every cell.
cellDivs.forEach(cell => {

    // Add a click event to each cell.
    cell.addEventListener('click', () => {

        // If the game is already over,
        // don't allow another move.
        if (gameOver == true) {
            return;
        }

        // If the cell already has an X or O,
        // don't allow the player to click it again.
        if (cell.innerText != '') {
            return;
        }

        // Put the current player's X or O
        // inside the cell that was clicked.
        cell.innerText = firstPlayer;

        // Check if the current player won.
        let winner = winsGame();

        // If there is a winner, stop the rest of this function.
        if (winner == true) {

            // The game is now over.
            gameOver = true;

            return;
        }
        // If nobody won, check for a draw.
        let draw = checkForDraw();

        // If there is a draw, stop the rest of this function.
        if (draw == true) {
            // The game is now over.
            gameOver = true;
            return;
        }

        // Switch players. If X just played, switch to O.
        if (firstPlayer == 'X') {

            firstPlayer = 'O';

        } else {
            // If O just played, switch back to X.
            firstPlayer = 'X';
        }

        // Change the h2 to show whose turn is next.
        message.innerText = `Player ${firstPlayer}'s Turn`;

    });
});

//Checkin for a draw
function checkForDraw() {

    // every() checks every cell. If every cell has either an X or O,the board is full.
    let draw = cellDivs.every((element, index) =>
        cellDivs[index].innerText == 'X' ||
        cellDivs[index].innerText == 'O'
    );

    // If draw is true, display the message.
    if (draw == true) {

        // Display the draw in the DOM.
        message.innerText = `IT'S A DRAW!`;
        return true;
    }
    // If the board isn't full, there is no draw.
    return false;
}

// Where we check for answers 
function winsGame() {
    if (
        cellDivs[0].innerText == firstPlayer &&
        cellDivs[1].innerText == firstPlayer &&
        cellDivs[2].innerText == firstPlayer
    ) {
        message.innerText = `${firstPlayer} WINS!`;
        return true;
    }

    // The middle row
    if (
        cellDivs[3].innerText == firstPlayer &&
        cellDivs[4].innerText == firstPlayer &&
        cellDivs[5].innerText == firstPlayer
    ) {

        message.innerText = `${firstPlayer} WINS!`;

        return true;
    }

    //The Bottom Row 
    if (
        cellDivs[6].innerText == firstPlayer &&
        cellDivs[7].innerText == firstPlayer &&
        cellDivs[8].innerText == firstPlayer
    ) {
        message.innerText = `${firstPlayer} WINS!`;
        return true;
    }

    if (
        cellDivs[0].innerText == firstPlayer &&
        cellDivs[3].innerText == firstPlayer &&
        cellDivs[6].innerText == firstPlayer
    ) {
        message.innerText = `${firstPlayer} WINS!`;
        return true;
    }

    if (
        cellDivs[1].innerText == firstPlayer &&
        cellDivs[4].innerText == firstPlayer &&
        cellDivs[7].innerText == firstPlayer
    ) {
        message.innerText = `${firstPlayer} WINS!`;
        return true;
    }

    if (
        cellDivs[2].innerText == firstPlayer &&
        cellDivs[5].innerText == firstPlayer &&
        cellDivs[8].innerText == firstPlayer
    ) {
        message.innerText = `${firstPlayer} WINS!`;
        return true;
    }

    if (
        cellDivs[0].innerText == firstPlayer &&
        cellDivs[4].innerText == firstPlayer &&
        cellDivs[8].innerText == firstPlayer
    ) {
        message.innerText = `${firstPlayer} WINS!`;
        return true;
    }

    if (
        cellDivs[2].innerText == firstPlayer &&
        cellDivs[4].innerText == firstPlayer &&
        cellDivs[6].innerText == firstPlayer
    ) {
        message.innerText = `${firstPlayer} WINS!`;
        return true;
    }
    // If none of the winning conditions were true,nobody has won yet.
    return false;
}

function restartGame() {
    // Reset the starting player back to X.
    firstPlayer = 'X';
    // The game is active again.
    gameOver = false;
    // Go through every cell.
    cellDivs.forEach(cell => {

        // Remove the X or O from the cell.
        cell.innerText = '';

    });
    // Reset the message on the page.
    message.innerText = `Player X's Turn`;
}