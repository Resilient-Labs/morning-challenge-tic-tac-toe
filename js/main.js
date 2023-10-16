/* Goal: Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible. */

// create a player class, each player will have a name and symbol and a method to add a symbol to the board
class Player {
    constructor(name, symbol) {
        this.name = name // player's name
        this.symbol = symbol // player's symbol
    }

    // When a player clicks a box, this function adds their symbol to it
    addSymbol(box, index) {
        if (!box.isFilled) { // If the box is not already filled
            box.innerText = this.symbol // Put their symbol in the box
            box.isFilled = true // Mark the box as filled
            board.updateBoard(index, this.symbol) // Update the game board
        }
    }
}

class Board {
    constructor(playerOne, playerTwo, gameRunning) {
        this.playerOne = playerOne // Player 1
        this.playerTwo = playerTwo // Player 2
        this.currentPlayer = playerOne // The player who goes first
        this.gameRunning = gameRunning // The game is currently running
        this.board = Array(9).fill(null) // array of the game board with 9 empty spaces
    }

    // Run the game
    runGame() {
        if (this.gameRunning === true) {
            // If the game is still running

            document.querySelector('.status').innerText = `${this.currentPlayer.name}'s turn` // Show whose turn it is in a message on the screen

            const boxes = document.querySelectorAll('.box') // Get all the game boxes
            boxes.forEach((box, i) => {
                box.addEventListener('click', (event) => {
                    if (this.gameRunning && !box.isFilled) {
                        // If the game is still running and the box is empty
                        this.currentPlayer.addSymbol(event.target, i) // Add the current player's symbol to the box
                        if (this.checkForWin(this.currentPlayer.symbol)) {
                            // Check if the current player has won
                            document.querySelector('.status').innerText = `${this.currentPlayer.name} wins!`
                            this.gameRunning = false
                        } else if (this.board.every((symbol) => symbol !== null)) {
                            // If all boxes are filled, it's a draw
                            document.querySelector('.status').innerText = "It's a draw!"
                            this.gameRunning = false // The game is over
                        } else {
                            this.togglePlayer() // Switch to the other player
                            document.querySelector('.status').innerText = `${this.currentPlayer.name}'s turn` // Show whose turn it is
                        }
                    }
                })
            })
        
            const resetButton = document.querySelector('.reset') // Get the reset button
            resetButton.addEventListener('click', () => {
                this.resetBoard() // Reset the game when the button is clicked
            })
        }
    }
    
    // Switch to the other player
    togglePlayer() {
        this.currentPlayer = this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne
    }

    // Check if the current player has won
    checkForWin(symbol) {
        const winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (const combo of winCombos) {
            const [a, b, c] = combo
            if (this.board[a] === symbol && this.board[b] === symbol && this.board[c] === symbol) {
                return true // If the current player has this winning combination, they win
            }
        }
        
        return false // Otherwise, they haven't won yet
    }

    // Update the game board with the current move
    updateBoard(index, symbol) {
        this.board[index] = symbol
    }

    // Update the game board with the current move
    resetBoard() {
        const boxes = document.querySelectorAll('.box') // Get all the game boxes
        for (let i = 0; i < this.board.length; i++) {
            this.board[i] = null // Clear the board
            boxes[i].innerText = '' // Remove symbols from the boxes
            boxes[i].isFilled = false // Mark the boxes as empty
        }
        this.gameRunning = true // Start a new game
        this.currentPlayer = this.playerOne // Make Player 1 go first again
        document.querySelector('.status').innerText = `${this.currentPlayer.name}'s turn` // Show whose turn it is
    }
}

// Create two players with names and symbols
let playerOne = new Player('Player 01', '👾')
let playerTwo = new Player('Player 02', '👽')

// Create a game board with the players and start the game
let board = new Board(playerOne, playerTwo, true)
board.runGame()