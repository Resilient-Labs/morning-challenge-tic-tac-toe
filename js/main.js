

//new board is null
//2 players
// each player takes turns
// one player is x and one player is o

//Help with Michael K

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
        this.element = document.querySelectorAll('#cell')[index]
        this.element.addEventListener('click', () => { this.square() })  //=> is just a short way of writing a function
    }

    //add conditions to stop player from clicking in the cell more than once.
    //fuction for empty cell created
    square() {
        if (this.player !== null) { //! tells computer if a cell box is occpied to not run any code.
            // return "wrong play";
        }
        //this.player is the current player, 
        this.player = currentPlayer
        this.element.innerText = this.player


        //add the rest conditions here for winners
        // if 3 "x" or 3 "o" player wins alert
        // check for winning, rows, collumns, and diagnals.
        // winning cells (012)(345)(678) (036)(147)(258) (048)(256)
        if (board[0].player === currentPlayer && board[1].player === currentPlayer && board[2].player === currentPlayer) {

            window.alert('Yay, You Won!')
        }

        else if (board[3].player === currentPlayer && board[4].player === currentPlayer && board[5].player === currentPlayer) {

            window.alert('Yay, You Won!')
        }

        else if (board[6].player === currentPlayer && board[7].player === currentPlayer && board[8].player === currentPlayer) {

            window.alert('Yay, You Won!')
        }

        else if (board[0].player === currentPlayer && board[3].player === currentPlayer && board[6].player === currentPlayer) {

            window.alert('Yay, You Won!')
        }

        else if (board[1].player === currentPlayer && board[4].player === currentPlayer && board[7].player === currentPlayer) {

            window.alert('Yay, You Won!')
        }

        else if (board[2].player === currentPlayer && board[5].player === currentPlayer && board[8].player === currentPlayer) {

            window.alert('Yay, You Won!')
        }

        else if (board[0].player === currentPlayer && board[4].player === currentPlayer && board[8].player === currentPlayer) {

            window.alert('Yay, You Won!')
        }

        else if (board[2].player === currentPlayer && board[4].player === currentPlayer && board[6].player === currentPlayer) {

            window.alert('Yay, You Won!')
        }


        // if the board is full then add alert draw.
        // every function, goes over all the item (cells) in the array, and runs the conditional funtion(predicate) and if every conditional function returns true or false.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods
        else if (board.every(cellIsTaken)) {
            window.alert('You Have A Draw!')

        }

        switchPlayer()
    }
}



let board = []

// each player makes a move, x or o is added on UI
//keeps going until it reaches to less or equal to 8, 1++ adds one to the end of each loop.
//board.push creates a new cell
for (let i = 0; i <= 8; i++) {
    board.push(new Cell(i))
}

//predicate funtion
//cellistaken is used for .every()"
function cellIsTaken(cell) {
    return cell.player !== null
}










