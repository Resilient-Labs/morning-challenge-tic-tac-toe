// Tic Tac Toa game board is null (empty)
// 2 player game
// each player makes a move
// players takes turn one at a time
// 1 player is x, 1 player is o

let currentPlayer = "x";

function switchPlayer() {
    if (currentPlayer === "x") {
        currentPlayer = "o"
    } else {
        currentPlayer = "x"
    }
}

class Cell {
    constructor(index) {
        this.player = null;
        this.element = document.querySelectorAll('.cell')[index]
        // tells comp to listen to click of the current cell object that we're in, in the <div>
        this.element.addEventListener('click', () => { this.clickSquare() })
    }

    // add conditional to stop players from clicking in the same cells more than once. One click per cell.
    clickSquare() {
        // use bang ! to say not equals (negate the boolean logic)
        if (this.player !== null) {
            return "wrong move";
        }
        this.player = currentPlayer
        this.element.innerText = this.player
        if (board[2].player === currentPlayer && board[5].player === currentPlayer && board[8].player === currentPlayer) {
            window.alert('We Have A Winner!')
        }
        else if (board[1].player === currentPlayer && board[4].player === currentPlayer && board[7].player === currentPlayer) {
            window.alert('We Have A Winner!')
        }
        else if (board[0].player === currentPlayer && board[3].player === currentPlayer && board[6].player === currentPlayer) {
            window.alert('We Have A Winner!')
        }
        else if (board[0].player === currentPlayer && board[4].player === currentPlayer && board[8].player === currentPlayer) {
            window.alert('We Have A Winner!')
        }
        else if (board[2].player === currentPlayer && board[4].player === currentPlayer && board[6].player === currentPlayer) {
            window.alert('We Have A Winner!')
        }
        else if (board[6].player === currentPlayer && board[7].player === currentPlayer && board[8].player === currentPlayer) {
            window.alert('We Have A Winner!')
        }
        else if (board[0].player === currentPlayer && board[2].player === currentPlayer && board[2].player === currentPlayer) {
            window.alert('We Have A Winner!')
        }
        // every function, goes over all the items (cells) in the array, and runs the predicate function (conditional) and if every predicate returns true or false (boolean).
        else if (board.every(cellIsTaken)) {
            window.alert('Loser!')

        }
        switchPlayer()
        // continue changing indexes for the rest of the winning options. 
    }
}
// when there is a draw, display 'losers'.
// draw means there is no winner & all cells are filled 

let board = []
// tells comp to start counting at 0 and keep counting until 9, i++ means increase by 1 for each count
for (let i = 0; i < 9; i++) {
    board.push(new Cell(i))

}
// predicate (fancy for condition) function. cellIsTaken is the function used for .every(). 
function cellIsTaken(cell) {
    return cell.player !== null
}

// window.location.reload refreshes the whole page
document.querySelector('#startbtn').addEventListener('click',() =>window.location.reload())


// Code completed with Michael Kazin, during tutoring session with MJ.



