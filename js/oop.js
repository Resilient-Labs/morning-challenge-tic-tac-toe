//OBJECT ORIENTED PROGRAMING TICTACTOE


// class == TicTacToe
//constructor == () empty 
//data/ variables = currentPlayer and divs
//behaviors/ functions = click function/ checkForDraw/ winnerChickenDinner /restartGames

const winner = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 4, 6],
    [1, 4, 7],
    [3, 4, 5],
    [2, 5, 8],
    [6, 7, 8],
    [0, 4, 8],

]

class Board {
    constructor() {
        this.cells = ['', '', '', '', '', '', '', '', '']

    }
    place(index, mark) {
        if (index < 0 || index > 8 || this.cells[index] !== '') {
            return false
        }
        this.cells[index] = mark
        return true
    }
    winnerDinner() {
        for (const [a, b, c] of winner) {
            const mark = this.cells[a]
            if (mark && mark === this.cells[b] && mark === this.cells[c]) {
                return mark 
            }
        }
        return null //<---
    }
    isFull() {
        return this.cells.every((cell) => cell === 'X' || cell === 'O')
    }
    reset() {
        this.cells = ['', '', '', '', '', '', '', '', '']
    }
}


// this makes sure im on a new board but never touches the page (Game takes ownership of a new object)
class Game {
    constructor() {
        this.board = new Board()
        this.currentPlayer = 'X' //x always goes first
        this.isOver = false // true is there is a win or draw
    }
    play(index) {
        if (this.isOver) {
            return { placed: false } //this is a flag a console.log this ignores clickes after a match is over.
            // Regets occupied invalid sqaures
        } 
        //vv//<-- is helping us check for non empty space
        if (!this.board.place(index, this.currentPlayer)) {
            return {placed: false}
        }
        const winnerDinner = this.board.winnerDinner()
        if (winnerDinner) {
            this.isOver = true
            return { placed: true, winnerDinner } //this is run before a winner is declared
        }
        if (this.board.isFull()) {
            this.isOver = true
            return { placed: true, draw: true }
        }
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : "X"
        return { placed: true }
    }

    restart() {
        this.board.reset()
        this.currentPlayer = 'X'
        this.isOver = false
    }
}

class Display{
    constructor(Game){
        this.game = Game
        this.cells = Array.from(document.querySelectorAll(".gameBox"))
        this.message = document.querySelector('h2')// <--- do not need innerText in object to pull /display information
        this.restartBtn = document.querySelector('button')
    }

    bind(){// this is to wireup click event listeners
        this.cells.forEach((cell) => {
            cell.addEventListener('click',() => {
                const index = Number(cell.dataset.index)
                const result = this.game.play(index)
                //vvvv the move was rejected occupied square of the game was over
                if(!result.placed){
                    return 
                }
                //this syncs the visable board with the board araay
                this.render(this.game.board)
                if(result.winnerDinner){
                    this.showResults(`${result.winnerDinner} Winnnnnnns`)
                }else if(result.draw){
                    this.showResults(`Its a drawwwww`)
                }
            })
        })// only executes an action but does not return anything would need to add another method like map to get something
        this.restartBtn.addEventListener('click', () => {
            this.game.restart()
            this.render(this.game.board)
            this.hideResult()
        })
        
    }
    render(board){
        this.cells.forEach((cell, index) => {
            cell.innerText = board.cells[index]
        })
    }
    showResults(message){
        this.message.innerText = message
    }

    hideResult(){
        this.message.innerText = ''
    }

}

const game = new Game()
const display = new Display(game)
display.bind()
