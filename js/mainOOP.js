 // player clicks on part of grid, it changes to X
 // another player clicks, it changes to O
 // choices get added to an array depending on which row
 // if they get the X or O horizontally, vertically or diagonally 3 times they win. 
 // show in DOM

 // player's choice on the board (passed as parameter)

class Game { // pascal casing for classes
    // properties that the game initializes with

    // board (empty array)
    constructor(playerOne, playerTwo){
        this.board = [
                     ['','',''],
                     ['','',''],
                     ['','','']]
        this.playerOne = playerOne
        this.playerTwo = playerTwo
        this.activePlayer = this.playerOne // who's playing

        this.counter = 0
    }

    choose(){
        this.counter++
        return this.activePlayer

    }
    switchPlayer(){
        
        if (this.activePlayer === 'Leon'){
            this.activePlayer = 'Jeon'
        } else {
            this.activePlayer = 'Leon'
        }
    }
    checkIfWon(){
        for(let i=0; i < this.board.length; i++){
            //checks each row
            if (this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2] && this.board[i][0] != ''){
                return true
            // checks each column
            } else if (this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i] && this.board[0][i] != ''){
                return true
            }
        }
        // check diagonal
        if (this.board[0][0] === this.board[1][1] && this.board[2][2] === this.board[1][1] && this.board[0][0] != ''){
            return true
        } else if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0] && this.board[0][2] != ''){
            return true
        }

        return false
    }
    endGame(){
        // if they won
        if (this.checkIfWon()){
            document.querySelector('.status').innerText = `${this.activePlayer} has won!`
        } else if (this.counter === 9){
            document.querySelector('.status').innerText = 'You both tied!'
        }
    }
    clearGrid(){
        // resets # of tries, player selection and grid
        this.counter = 0
        this.activePlayer = 'Leon'
        this.board = [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', '']]
        // reset grid on website
        document.querySelectorAll('section').forEach(box => box.innerText = "")
        document.querySelector('.status').innerText = 'No one has won yet.'
    }
}

// run game

document.querySelector('.container').addEventListener('click', play)
document.querySelector('.reset').addEventListener('click', clear)

let TicTacToe = new Game('Leon', 'Jeon')

function play(e) {
    e.target.innerText = TicTacToe.choose()
    if (TicTacToe.activePlayer === 'Leon'){
        e.target.innerHTML = `<img src="img/leon.png"></img>`
    } else if (TicTacToe.activePlayer === 'Jeon'){ 
        e.target.innerHTML = `<img src="img/jeon.jpg"></img>`
    }

    let choice = Number(e.target.id) // gets which box in the grid they chose
    let row = Math.floor(choice / 3)
    let column = choice % 3
    TicTacToe.board[row][column] = TicTacToe.activePlayer
    
    TicTacToe.endGame()
    TicTacToe.switchPlayer()
    document.querySelector('.currentPlayer').innerText = TicTacToe.activePlayer
}
function clear(){
    TicTacToe.clearGrid()
}