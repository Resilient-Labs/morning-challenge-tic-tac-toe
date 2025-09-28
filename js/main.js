class TicTacToe {
    constructor() {
        // set up the game when it first loads
        this.tiles = document.querySelectorAll('.tile'); 
        this.boardData = Array(9).fill(null); 
        // board setup (Googled how to make an array with 9 empty spots using fill)

        this.currentPlayer = 'X'; 
        this.gameOver = false; 

        this.statusMessage = document.querySelector('#game-status'); 
        this.updateStatusMessage(`Player ${this.currentPlayer}'s turn`); 

        this.gameContainer = document.querySelector('.game-container'); 

        this.listenForMoves(); // add click events
    }

    // add click events to each tile
    listenForMoves() {
        this.tiles.forEach((tile, index) => {
            tile.onclick = () => this.makeMove(index);
        });
    }

    // handles player moves and game flow
    makeMove(index) {
        if (this.boardData[index] || this.gameOver) return;

        this.boardData[index] = this.currentPlayer;
        this.tiles[index].textContent = this.currentPlayer;
        this.tiles[index].classList.add(this.currentPlayer.toLowerCase());

        const winCombo = this.checkWin();
        if (winCombo) {
            winCombo.forEach(i => this.tiles[i].classList.add('win')); 
            this.updateStatusMessage(`Player ${this.currentPlayer} wins!`);
            this.gameOver = true;
            return;
        }

        if (this.checkDraw()) {
            this.updateStatusMessage("It's a draw!");
            this.gameOver = true;
            this.gameContainer.classList.add('draw'); 
            return;
        }

        // switch turn
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateStatusMessage(`Player ${this.currentPlayer}'s turn`);
    }

    // check all possible winning combos
    checkWin() {
        const winCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]              // diagonals
        ];
        for (const combo of winCombos) {
            const [first, second, third] = combo;
            const symbol = this.boardData[first];
            if (
                symbol && 
                symbol === this.boardData[second] && 
                symbol === this.boardData[third] // Googled how to check if 3 values match
            ) {
                return combo; 
            }
        }
        return null;
    }

    // checks if all tiles are filled (no winner = draw)
    checkDraw() {
        return !this.boardData.includes(null); 
        // MDN reference: used .includes to check for empty slots
    }

    // updates the message below the board
    updateStatusMessage(message) {
        if (this.statusMessage) {
            this.statusMessage.textContent = message;
        }
    }

    // clears board and starts a new game
    resetGame() {
        this.boardData.fill(null);
        this.tiles.forEach(tile => {
            tile.textContent = '';
            tile.classList.remove('x', 'o', 'win');
        });
        this.gameOver = false;
        this.updateStatusMessage(`Player ${this.currentPlayer}'s turn`);
        this.gameContainer.classList.remove('draw');
    }
}

// start a new game instance
const game = new TicTacToe();

// reset button restarts the game
const resetButton = document.querySelector('#resetButton');
if (resetButton) {
    resetButton.onclick = () => game.resetGame();
}
