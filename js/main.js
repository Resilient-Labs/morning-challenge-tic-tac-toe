const backgrounds = [
    'url("https://wallpapers.com/images/hd/neon-nightlifein-japan-city-biky8h4c562qpm0u.jpg")',
    'url("https://pixabay.com/get/g2d1665559a20a740f9d03a86c8dcb1c5fc6d7646228ad2e7f820d2d910d817ba7141d6946e521fb61cd063fea017700a84a0144684fab15cd157127366aad097_1920.jpg")'
];

const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

document.body.style.backgroundImage = randomBackground;

// object constructor for game with player, board, squares, start and end

class TicTacToe {
    constructor() {
        this.myPlayer = 'X';
        this.board = [['', '', ''], ['', '', ''], ['', '', '']];
        this.squares = document.querySelectorAll('.square');
        this.start();
        this.endOfGame = false;
    }

    // Start the game
    start() {
        this.squares.forEach(square => {
            square.addEventListener('click', this.boxClick.bind(this));
        });
    }

    // Clicking of the squares
    boxClick(rowcol) {
        const row = rowcol.target.dataset.row;
        const col = rowcol.target.dataset.col;

        if (this.board[row][col] === '' && !this.endOfGame) {
            this.board[row][col] = this.myPlayer;
            rowcol.target.textContent = this.myPlayer;

            if (this.checkWinner()) {
                alert(`${this.myPlayer} wins!`);
                this.endOfGame = true;
                setTimeout(() => this.resetGame(), 1000);
            } else if (
                this.board[0].every(cell => cell) &&
                this.board[1].every(cell => cell) &&
                this.board[2].every(cell => cell)) {
                alert("Run it back!");
                this.endOfGame = true;
                setTimeout(() => this.resetGame(), 1000);
            } else {
                this.changePlayer();
            }
        }
    }

    // Check if the current player has won
    checkWinner() {
        const board = this.board;
        for (let i = 0; i < 3; i++) {
            // Check rows and columns
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
                return true;
            } if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
                return true;
            }
        }
        // Check diagonals
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
            return true;
        }
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
            return true;
        } else {
            return false;
        }
    }

    // Change from X to O: if it's 'X', change to 'O'; otherwise, change to 'X'.
    changePlayer() {
        this.myPlayer = this.myPlayer === 'X' ? 'O' : 'X';
    }

    // Reset the game
    resetGame() {
        this.board = [['', '', ''], ['', '', ''], ['', '', '']];
        this.myPlayer = 'X';
        this.endOfGame = false;
        this.squares.forEach(square => square.textContent = '');
    }
}

// Create a new game instance
const game = new TicTacToe();

// Reset button functionality
document.getElementById('reset-button').addEventListener('click', () => game.resetGame());

const minombre = 'Dougie TheDev';
console.log(`Brought to you by ${minombre}!`);