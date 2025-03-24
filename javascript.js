
// Class representing a Player in the game
class Player {
    constructor(name, symbol) {
        this.name = name; // Player's name
        this.symbol = symbol; // Player's symbol (X or O)
    }
}

// Class representing the Game Board
class Board {
    constructor() {
        this.squares = Array(9).fill(null); // Array to hold the state of each square
    }

    makeMove(index, symbol) {
        if (!this.squares[index]) { // Check if the square is empty
            this.squares[index] = symbol; // Place the player's symbol in the square
            return true; // Move was successful
        }
        return false; // Move failed, square already occupied
    }

    reset() {
        this.squares.fill(null); // Reset the board
    }

    hasWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]  // Diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
                return this.squares[a]; // Return the symbol of the winner
            }
        }
        return null; // No winner yet
    }
}

// Class representing the Game
class Game {
    constructor(player1, player2) {
        this.board = new Board();
        this.players = [player1, player2];
        this.currentPlayerIndex = 0; // Track current player
        this.isGameActive = false; // Game state
    }

    start() {
        this.isGameActive = true;
        this.board.reset();
        this.render(); // Render the board
    }

    handleSquareClick(index) {
        if (this.isGameActive && this.board.makeMove(index, this.players[this.currentPlayerIndex].symbol)) {
            const winner = this.board.hasWinner();
            if (winner) {
                alert(`${winner} wins!`);
                this.isGameActive = false; // End game on winning
            } else {
                this.currentPlayerIndex = (this.currentPlayerIndex + 1) % 2; // Switch players
                this.render(); // Render updated board
            }
        }
    }

    render() {
        this.players.forEach((player, index) => {
            const squares = document.querySelectorAll('.item');
            squares.forEach((square, idx) => {
                square.textContent = this.board.squares[idx] ? this.board.squares[idx] : `Square ${idx + 1}`;
            });
        });
    }
}

// Make players
const player1 = new Player('Player 1', 'X');
const player2 = new Player('Player 2', 'O');

// Restart Game
const game = new Game(player1, player2);

// Setup clicks
document.getElementById('startGame').addEventListener('click', () => game.start());
document.getElementById('resetGame').addEventListener('click', () => game.start());

const squares = document.querySelectorAll('.item');
squares.forEach((square, index) => 
    square.addEventListener('click', () => game.handleSquareClick(index))
)
