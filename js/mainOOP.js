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
        if (this.activePlayer === 'X'){
            this.activePlayer = 'O'
        } else {
            this.activePlayer = 'X'
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
        if (this.checkIfWon()){
            alert(`Player ${this.activePlayer} won!`)
            this.clearGrid()
        } else if (this.counter === 9){
            alert("You both tied")
            this.clearGrid()
        }
    }
    clearGrid(){
        // resets # of tries, player selection and grid
        this.counter = 0
        this.activePlayer = 'x'
        this.board = [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', '']]
        // reset grid on website
    }
}

// run game

document.querySelector('.container').addEventListener('click', play)

let TicTacToe = new Game('X', 'O')

function play(e) {
    e.target.innerText = TicTacToe.choose()

    let choice = Number(e.target.id) // gets which box in the grid they chose
    let row = Math.floor(choice / 3)
    let column = choice % 3
    TicTacToe.board[row][column] = TicTacToe.activePlayer
    
    TicTacToe.endGame()
    TicTacToe.switchPlayer()
}