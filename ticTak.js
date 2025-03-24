//audio setup
//make sure to grab audio files

const moveSound = new Audio('punch-2-37333.mp3');   // when a move is made
const winSound = new Audio('brass-fanfare-with-timpani-and-winchimes-reverberated-146260.mp3'); // wins
const drawSound = new Audio('draw-sword1-44724.mp3');     // draw
const loseSound = new Audio('losing-horn-313723.mp3'); //when you lose


// Global Constants
// Array containing all the winning combinations for Tic Tac Toe
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


// Player Class
// Represents a game player with a name, symbol (X or O), and score.
class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
    this.score = 0;
  }
}


// Board Class
// Manages the game board's state and display.
class Board {
  constructor() {
    // Initialize board cells as an array of 9 empty strings.
    this.cells = Array(9).fill('');
    // Reference to the board element in the HTML.
    this.boardElement = document.getElementById('board');
  }

  // Render the board: create cell elements and display current state.
  render() {
    this.boardElement.innerHTML = '';
    this.cells.forEach((cell, index) => {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.dataset.index = index;
      cellDiv.textContent = cell;
      this.boardElement.appendChild(cellDiv);
    });
  }

  // Update a cell with the player's symbol if it is empty.
  updateCell(index, symbol) {
    if (this.cells[index] === '') {
      this.cells[index] = symbol;
    }
  }

  // Check if the board is completely filled.
  isFull() {
    return this.cells.every(cell => cell !== '');
  }

  // Reset the board to its initial empty state.
  reset() {
    this.cells = Array(9).fill('');
  }
}


// Main Game Class: TicTacToe
// This class manages the game flow, player turns, timer, score, and AI moves.
class TicTacToe {
  constructor(p1, p2, mode = 'pvp', aiDifficulty = 'easy') {
    this.player1 = p1;
    this.player2 = p2;
    this.mode = mode; // Game mode: 'pvp' for Player vs. Player, 'pvai' for Player vs. AI
    this.aiDifficulty = aiDifficulty; // AI difficulty: 'easy' or 'hard'
    this.currentPlayer = this.player1; // Start with player1
    this.board = new Board();
    this.gameOver = false;
    // Timer variables for per-move countdown
    this.moveTimer = null;
    this.timePerMove = 10; // seconds per move
    this.timeLeft = this.timePerMove;
    // UI element references
    this.messageElement = document.getElementById('message');
    this.timerElement = document.getElementById('time-left');
    this.scoreP1Element = document.getElementById('score-p1');
    this.scoreP2Element = document.getElementById('score-p2');
    this.scoreDrawsElement = document.getElementById('score-draws');
    this.draws = 0; // Counter for draws
    // Initialize the game
    this.init();
  }

  // Initialize the game board, UI messages, cell listeners, and timer.
  init() {
    this.board.render();
    this.updateMessage(`${this.currentPlayer.name} (${this.currentPlayer.symbol})'s turn`);
    this.assignCellListeners();
    this.startTimer();
  }

  // Add click event listeners to each cell on the board.
  assignCellListeners() {
    document.querySelectorAll('.cell').forEach(cell => {
      cell.addEventListener('click', (e) => this.handleCellClick(e));
    });
  }

  // Handle the click event on a cell.
  handleCellClick(e) {
    const cellIndex = e.target.dataset.index;
    // Do nothing if the game is over or cell is already filled.
    if (this.gameOver || this.board.cells[cellIndex] !== '') return;

    // Make the player's move
    this.makeMove(cellIndex, this.currentPlayer.symbol);
    moveSound.play();

    // Check for a win or draw
    if (this.checkWin(this.currentPlayer.symbol)) {
      this.endGame(`${this.currentPlayer.name} wins!`, true);
      return;
    } else if (this.board.isFull()) {
      this.endGame("It's a draw!", false);
      return;
    }

    // Switch the player after a valid move and reset the timer.
    this.switchPlayer();
    this.updateMessage(`${this.currentPlayer.name} (${this.currentPlayer.symbol})'s turn`);
    this.resetTimer();

    // If playing against AI and it's AI's turn, trigger the AI move after a short delay.
    if (this.mode === 'pvai' && this.currentPlayer === this.player2) {
      setTimeout(() => this.aiMove(), 500);
    }
  }

  // Update the board with the player's move.
  makeMove(index, symbol) {
    this.board.updateCell(index, symbol);
    const cellDiv = document.querySelector(`.cell[data-index="${index}"]`);
    cellDiv.textContent = symbol;
  }

  // Check if the current move wins the game.
  checkWin(symbol) {
    for (let combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (this.board.cells[a] === symbol &&
          this.board.cells[b] === symbol &&
          this.board.cells[c] === symbol) {
        // Highlight the winning cells.
        combination.forEach(i => {
          const cellDiv = document.querySelector(`.cell[data-index="${i}"]`);
          cellDiv.classList.add('winner');
        });
        return true;
      }
    }
    return false;
  }

  // End the game, update the message and score, and stop the timer.
  endGame(message, win) {
    this.gameOver = true;
    this.updateMessage(message);
    clearInterval(this.moveTimer);
    // Play win or draw sound and update the corresponding score.
    if (win) {
      winSound.play();
      this.currentPlayer.score++;
    } else {
      drawSound.play();
      this.draws++;
    
    }
    this.updateScoreboard();
  }

  // Update the scoreboard with current scores.
  updateScoreboard() {
    this.scoreP1Element.textContent = `${this.player1.name}: ${this.player1.score}`;
    this.scoreP2Element.textContent = `${this.player2.name}: ${this.player2.score}`;
    this.scoreDrawsElement.textContent = `Draws: ${this.draws}`;
  }

  // Switch the current player.
  switchPlayer() {
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  // Restart the game by resetting the board, timer, and UI.
  restart() {
    this.gameOver = false;
    this.board.reset();
    this.board.render();
    this.clearCellHighlights();
    this.currentPlayer = this.player1;
    this.updateMessage(`${this.currentPlayer.name} (${this.currentPlayer.symbol})'s turn`);
    this.assignCellListeners();
    this.resetTimer();
    // If playing against AI and AI is first, trigger AI move.
    if (this.mode === 'pvai' && this.currentPlayer === this.player2) {
      setTimeout(() => this.aiMove(), 500);
    }
  }

  // Remove winning highlights from all cells.
  clearCellHighlights() {
    document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('winner'));
  }

  // Update the message display.
  updateMessage(msg) {
    this.messageElement.textContent = msg;
  }

  // ------------------------------
  // Timer Functions
  // ------------------------------
  
  // Start the per-move countdown timer.
  startTimer() {
    this.timeLeft = this.timePerMove;
    this.timerElement.textContent = this.timeLeft;
    this.moveTimer = setInterval(() => {
      this.timeLeft--;
      this.timerElement.textContent = this.timeLeft;
      // When time runs out, handle accordingly.
      if (this.timeLeft <= 0) {
        clearInterval(this.moveTimer);
        // If AI's turn, trigger AI move; otherwise, switch player.
        if (this.mode === 'pvai' && this.currentPlayer === this.player2) {
          this.aiMove();
        } else {
          this.switchPlayer();
          this.updateMessage(`Time up! ${this.currentPlayer.name} (${this.currentPlayer.symbol})'s turn`);
          this.resetTimer();
        }
      }
    }, 1000);
  }

  // Reset the timer for the next move.
  resetTimer() {
    clearInterval(this.moveTimer);
    this.startTimer();
  }

  // AI Move Functions
  // ------------------------------

  // Decide and make an AI move.
  aiMove() {
    if (this.gameOver) return;
    let index;
    if (this.aiDifficulty === 'easy') {
      // Easy difficulty: random move.
      index = this.getRandomMove();
    } else {
      // Hard difficulty: use minimax algorithm.
      index = this.getBestMove();
    }
    if (index !== null) {
      this.makeMove(index, this.player2.symbol);
      moveSound.play();
      if (this.checkWin(this.player2.symbol)) {
        this.endGame(`${this.player2.name} wins!`, true);
        return;
      } else if (this.board.isFull()) {
        this.endGame("It's a draw!", false);
        return;
      }
      // Switch back to the other player after AI move.
      this.switchPlayer();
      this.updateMessage(`${this.currentPlayer.name} (${this.currentPlayer.symbol})'s turn`);
      this.resetTimer();
    }
  }

  // Return a random available cell index.
  getRandomMove() {
    const available = this.board.cells
      .map((cell, index) => cell === '' ? index : null)
      .filter(index => index !== null);
    if (available.length === 0) return null;
    return available[Math.floor(Math.random() * available.length)];
  }

  // Get the best move for AI using the minimax algorithm.
  getBestMove() {
    const best = this.minimax(this.board.cells, this.player2.symbol);
    return best.index;
  }

  // Minimax algorithm implementation for the AI.
  minimax(newBoard, playerSymbol) {
    // Get all available spots on the board.
    const availSpots = newBoard.map((cell, i) => cell === '' ? i : null).filter(i => i !== null);

    // Check for terminal states and assign scores.
    if (this.isWinning(newBoard, this.player1.symbol)) {
      return { score: -10 };
    } else if (this.isWinning(newBoard, this.player2.symbol)) {
      return { score: 10 };
    } else if (availSpots.length === 0) {
      return { score: 0 };
    }

    // Array to collect all possible moves.
    const moves = [];
    for (let i of availSpots) {
      let move = {};
      move.index = i;
      // Simulate a move.
      newBoard[i] = playerSymbol;

      // Recursively evaluate the move.
      if (playerSymbol === this.player2.symbol) {
        const result = this.minimax(newBoard, this.player1.symbol);
        move.score = result.score;
      } else {
        const result = this.minimax(newBoard, this.player2.symbol);
        move.score = result.score;
      }
      // Reset the simulated move.
      newBoard[i] = '';
      moves.push(move);
    }

    // Choose the move with the best score.
    let bestMove;
    if (playerSymbol === this.player2.symbol) {
      let bestScore = -Infinity;
      for (let m of moves) {
        if (m.score > bestScore) {
          bestScore = m.score;
          bestMove = m;
        }
      }
    } else {
      let bestScore = Infinity;
      for (let m of moves) {
        if (m.score < bestScore) {
          bestScore = m.score;
          bestMove = m;
        }
      }
    }
    return bestMove;
  }

  // Helper for minimax: Check if a given board state is a win for a symbol.
  isWinning(boardState, symbol) {
    return WINNING_COMBINATIONS.some(combination => {
      return combination.every(index => boardState[index] === symbol);
    });
  }
}


// Global Code and Event Listeners


// Global game instance variable.
let game;

// Event listener for the Start Game button.
// Reads the user settings, creates players, and initializes the game.
document.getElementById('start-btn').addEventListener('click', () => {
  const mode = document.getElementById('mode-select').value;
  const player1Name = document.getElementById('player1-name').value || "Player 1";
  const player2Name = mode === 'pvp' ? (document.getElementById('player2-name').value || "Player 2") : "AI";
  const aiDifficulty = document.getElementById('ai-difficulty').value;
  const player1 = new Player(player1Name, 'X'); // Player 1 is always 'X'
  const player2 = new Player(player2Name, 'O'); // Player 2 (or AI) is 'O'
  game = new TicTacToe(player1, player2, mode, aiDifficulty);
});

// Change UI based on game mode selection (show/hide AI settings).
document.getElementById('mode-select').addEventListener('change', (e) => {
  const mode = e.target.value;
  if (mode === 'pvai') {
    document.getElementById('player2-div').style.display = 'none';
    document.getElementById('ai-settings').style.display = 'block';
  } else {
    document.getElementById('player2-div').style.display = 'block';
    document.getElementById('ai-settings').style.display = 'none';
  }
});

// Event listener for the Restart Game button.
document.getElementById('restart').addEventListener('click', () => {
  if (game) game.restart();
});

// Event listener for the theme toggle button.
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// ------------------------------
// Help Modal Functionality
// ------------------------------

// Show the help modal when the Help button is clicked.
const helpModal = document.getElementById('help-modal');
document.getElementById('help-btn').addEventListener('click', () => {
  helpModal.style.display = 'block';
});

// Close the help modal when the close (×) button is clicked.
document.getElementById('close-modal').addEventListener('click', () => {
  helpModal.style.display = 'none';
});

// Close the modal if the user clicks anywhere outside of it.
window.addEventListener('click', (event) => {
  if (event.target == helpModal) {
    helpModal.style.display = 'none';
  }
});

