//TIC TAC TOE GAME COMPLETED

// Player class to represent each player in the game
class Player {
  // Constructor takes player number (1 or 2) and their symbol (X or O)
  constructor(number, sign) {
    this.number = number;  // Store player number (1 or 2)
    this.sign = sign;      // Store player's symbol ('X' or 'O')
  }
}

// Board class to represent the game board state
class Board {
  // Initialize empty board
  constructor() {
    // Create array of 9 null values representing empty squares (0-8 indices)
    this.board = Array(9).fill(null);
  }

  // Method to update a specific position on the board
  updateBoard(index, sign) {
    // Set the board position at given index to the player's sign
    this.board[index] = sign;
  }
}

// Main Game class that handles all game logic
class Game {
  // Initialize the game
  constructor() {
    // Get all HTML elements with class 'grid' (the 9 squares of tic-tac-toe board)
    const grid = document.querySelectorAll('.grid');
    
    // Create player 1 with 'X' symbol
    this.p1 = new Player(1, 'X');
    // Create player 2 with 'O' symbol
    this.p2 = new Player(2, 'O');
    
    // Create new game board instance
    this.gameBoard = new Board();
    
    // Track whose turn it is (starts with player 1)
    this.playerTurn = 1;
    
    // Add click event listener to each grid square
    grid.forEach((element, index) => {
      // Add click event listener to current grid element
      element.addEventListener('click', (square) => {
       
        // Check if the clicked square is empty (no text content)
        if (!square.target.innerText) {
            
            // If it's player 1's turn
            if (this.playerTurn === 1) {
                // Display player 1's symbol (X) in the clicked square
                square.target.innerText = this.p1.sign;
                // Update the internal board array with player 1's move
                this.gameBoard.updateBoard(index, this.p1.sign);
                // Check if player 1 has won with this move
                checkWin(this.gameBoard.board, this.p1.sign);
                // Switch turn to player 2
                this.playerTurn = 2;
              } else {
                // If it's player 2's turn
                // Display player 2's symbol (O) in the clicked square
                square.target.innerText = this.p2.sign;
                // Update the internal board array with player 2's move
                this.gameBoard.updateBoard(index, this.p2.sign);
                // Check if player 2 has won with this move
                checkWin(this.gameBoard.board, this.p2.sign);
                // Switch turn back to player 1
                this.playerTurn = 1;
          }
        }
      });
    });
  }
}

// Function to check if a player has won the game
function checkWin(board, playerSign) {
  // Define all possible winning combinations (rows, columns, diagonals)
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Top, middle, bottom rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Left, center, right columns
    [0, 4, 8], [2, 4, 6]             // Diagonal combinations
  ];

  // Loop through each possible winning combination
  for (const combination of winCombinations) {
    // Destructure the three positions in current winning combination
    const [a, b, c] = combination;
    
    // Check if all three positions have the same player's sign
    if (board[a] === playerSign && board[b] === playerSign && board[c] === playerSign) {
      // Display winner message using browser alert
      alert(`Player ${playerSign} wins!`);
      // TODO: i would like to reset game
      
      // Return true indicating a winner was found
      return true;
    }
  }

  // Return false if no winning combination was found
  return false;
}

// Create and start a new game instance
new Game();