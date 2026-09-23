// NOTES: 
// - The game starts with X; this.board represents the nine squares.
// - The method that handles the clicks inside the class is below the constructor.

class Game{
    // Game's state basically
    constructor(){
        this.currentPlayer = 'X'
        this.board = ['', '', '', '', '', '', '', '', '']
        this.gameActive = true
        this.winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            [0, 4, 8],
            [2, 4, 6]
            
        ]
    }

    // What happens when someone clicks (i.e., user makes a move)
    handleClick(box, index){
// If this square already contains something OR the game is already over, stop running the function.
    if (this.board[index] !== '' || this.gameActive === false){
        return
    }
// This changes the JavaScript data (i.e., board array = game data).
    this.board[index] = this.currentPlayer
// This changes what the user sees on the webpage (i.e., box.innerText = visual DOM).
    box.innerText = this.currentPlayer

    if (this.checkWinner()){
        statusText.innerText = `Player ${this.currentPlayer} wins!`

        this.gameActive = false

        return
    }

    if (this.checkDraw()){
        statusText.innerText = `It's a draw!`

        this.gameActive = false

        return
    }

    this.switchPlayer()
}

// WINNER METHOD

checkWinner(){
    // JavaScript is asking if at least one of these winning combinations match (i.e., did someone get 3 in a row?).
    return this.winningCombos.some(combo => {

        const a = combo[0]
        const b = combo[1]
        const c = combo[2]

        return(
            this.board[a] === this.currentPlayer &&
            this.board[b] === this.currentPlayer &&
            this.board[c] === this.currentPlayer
        )

    })


}

// DRAW METHOD

checkDraw(){
    // Essentialy means "Is every position in the board no longer empty aka occupied by one of the players?" If yes, and nobody won first, then it's a draw.
    return this.board.every(box => box !== '')
}

// X becomes O
switchPlayer(){
    if (this.currentPlayer === 'X'){
        this.currentPlayer = 'O'
    } else{
        this.currentPlayer = 'X'
    }
    statusText.innerText = `Player ${this.currentPlayer}'s turn`
}

// RESET METHOD

// Reset initiates the return of the game/everything to the beginning, so users can start again.
resetGame(){
    this.currentPlayer = 'X'

    this.board = ['', '', '', '', '', '', '', '', '']

    this.gameActive = true

    boxes.forEach(box => {
        box.innerText = ''

    })

    statusText.innerText = `Player X's turn`
}

}

// The following connects the class to the HTML (i.e., finding the HTML elements).

const boxes = document.querySelectorAll('.box')
const statusText = document.querySelector('#status')
const resetButton = document.querySelector('#reset')
const game = new Game()

boxes.forEach(box => {
    box.addEventListener('click', function(){
        const index = box.dataset.index
        game.handleClick(box, index)
    })
})

resetButton.addEventListener('click', function(){
    game.resetGame()
})