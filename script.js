

class TicTacToe {
  constructor() {
    // Create an empty ttt board with 9 spots (empty cells)
    this.board = Array(9).fill(null); 
    this.currentPlayer = "X";
    this.statusDisplay = document.getElementById("status");
    this.boardDisplay = document.getElementById("board"); 
    this.drawBoard(); 
    this.showStatus(); 
  }

  // Draw the game board
  drawBoard() {
    this.boardDisplay.innerHTML = "";

    // loop through the board
    this.board.forEach((spot, index) => {
      const cell = document.createElement("div"); 
      cell.classList.add("cell");
      cell.textContent = spot || ""; 
      cell.addEventListener("click", () => this.makeMove(index)); 
      this.boardDisplay.appendChild(cell); 
    });
  }

  // Handle a player's move
  makeMove(index) {

    // Skip if spot(cell) is taken or game is over!
    if (this.board[index] || this.hasWinner()) return;
    
    this.board[index] = this.currentPlayer;

    
    if (this.hasWinner()) {
      this.statusDisplay.textContent = `${this.currentPlayer} wins!`;
    } else if (this.board.every(spot => spot)) {
      this.statusDisplay.textContent = "It's a tie!";
    } else {


      // Switch players (X to O or O to X)
      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      this.showStatus();
    }
    this.drawBoard();
  }

  showStatus() {
    this.statusDisplay.textContent = `Player ${this.currentPlayer}'s turn`;
  }

  // Check if someone won -- win conditions
  hasWinner() {
    const winningLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]
    ];

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    return winningLines.some(([a, b, c]) =>
      this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]
    );
  }
}

// Start the game
new TicTacToe();