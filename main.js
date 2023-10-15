const gameBoard = document.querySelector('#gameboard');
const gameStatus = document.querySelector('#gamestatus');
const boxArray = Array.from(gameBoard.querySelectorAll('.square'));
// Initialize the current player
let currentPlayer = 'O';
// Create a class for the game board

//does it need a constructor? added an empty one but that didnt do anyything//
class GameBoard {
    constructor(boxArray) {
        this.boxArray = boxArray
    }
    checkForDraw() {
        //check every element in boxArray to see if there was a tie//
        const tie = boxArray.every((e) => e.innerText === 'O' || e.innerText === 'X');

        if (tie) {
            gameStatus.innerText = 'Tie game, no winners';
        }
    }
    //Need to fix conditionals most likely since player wins messages are not populating.////////////
    checkForWin() {//use this keyword to allow access to boxArray in each instance of GameBoard; if im correct????????????///
        if (this.boxArray[0].innerText === currentPlayer && this.boxArray[1].innerText === currentPlayer && this.boxArray[2].innerText === currentPlayer) {
            gameStatus.innerText = `Player ${currentPlayer} wins!`;
        }
        else if (this.boxArray[3].innerText === currentPlayer && this.boxArray[4].innerText === currentPlayer && this.boxArray[5].innerText === currentPlayer) {
            gameStatus.innerText = `Player ${currentPlayer} wins!`;
        }
        else if (this.boxArray[6].innerText === currentPlayer && this.boxArray[7].innerText === currentPlayer && this.boxArray[8].innerText === currentPlayer) {
            gameStatus.innerText = `Player ${currentPlayer} wins!`;
        }
        else if (this.boxArray[0].innerText === currentPlayer && this.boxArray[3].innerText === currentPlayer && this.boxArray[6].innerText === currentPlayer) {
            gameStatus.innerText = `Player ${currentPlayer} wins!`;
        }
        else if (this.boxArray[1].innerText === currentPlayer && this.boxArray[4].innerText === currentPlayer && this.boxArray[7].innerText === currentPlayer) {
            gameStatus.innerText = `Player ${currentPlayer} wins!`;
        }
        else if (this.boxArray[2].innerText === currentPlayer && this.boxArray[5].innerText === currentPlayer && this.boxArray[8].innerText === currentPlayer) {
            gameStatus.innerText = `Player ${currentPlayer} wins!`;
        }
        else if (this.boxArray[0].innerText === currentPlayer && this.boxArray[4].innerText === currentPlayer && this.boxArray[8].innerText === currentPlayer) {
            gameStatus.innerText = `Player ${currentPlayer} wins!`;
        }
        else if (this.boxArray[2].innerText === currentPlayer && this.boxArray[4].innerText === currentPlayer && this.boxArray[6].innerText === currentPlayer) {
            gameStatus.innerText = `Player ${currentPlayer} wins!`;
        } else {
            const tie = boxArray.every((e) => e.innerText === 'O' || e.innerText === 'X');
            if (tie) {
                gameStatus.innerText = 'Tie game, no winners';
            };
        }
    }

}



boxArray.forEach(box => {
    box.addEventListener('click', addSymbol);
    function addSymbol() {
        // Check if the box is already filled
        if (box.innerText !== '') {
            gameStatus.textContent = 'Please click on an empty box'; //tells user to click on box that isnt already occupied.
            return;
        }
        box.innerText = currentPlayer; // inputs symbol into each clicked box
        currentPlayer = currentPlayer === 'O' ? 'X' : 'O'; //alternates players each turn
        gameStatus.textContent = `Current Turn: ${currentPlayer}`; //shows current player.
        gameBoardCall.checkForWin(); //checking for win after turn and lets me use the function inside class of GameBoard
        gameBoardCall.checkForDraw();//checking for tie after turn and lets me use the function inside class of GameBoard
    }
});
// Create an instance of the GameBoard class
const gameBoardCall = new GameBoard(boxArray);

// Initialize the game status to show whose turn it is
gameStatus.textContent = `Current Turn: ${currentPlayer}`;//starts with 'O'




//RESTART BUTTON NOT FUNCTIONING PROPERLY///////

const reset = document.querySelector('#resetButton').addEventListener('click', restart)

//restarts the board but isnt working. I think im just refreshing the page when i click. maybe remove default?//

function restart() {
    // Clear each box individually
    boxArray.forEach(box => {
        box.innerText = ''; //?????????// clear the whole board or clear each box individually?/////
    });

    // Reset the current player to 'O'
    currentPlayer = 'O';

    // Clear the winner message
    gameStatus.innerText = 'Current Turn: O'; // You can also set it to the initial state
}





