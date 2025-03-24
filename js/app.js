// Player constructor
function Player(symbol) {
  this.symbol = symbol;
}

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = new Player('X');
let otherPlayer = new Player('O');
let isGameOver = false;
let moveCount = 0;

const boxes = document.querySelectorAll('.box');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

// Add event listeners to each box
boxes.forEach((box, index) => {
  box.addEventListener('click', () => handleMove(index));
});

resetButton.addEventListener('click', resetGame);

// Handle a move
function handleMove(index) {
  if (board[index] !== '' || isGameOver) return;

  board[index] = currentPlayer.symbol;
  boxes[index].textContent = currentPlayer.symbol;
  moveCount++;

  if (checkWin()) {
    message.textContent = `Player ${currentPlayer.symbol} wins!`;
    isGameOver = true;
  } else if (moveCount === 9) {
    message.textContent = "It's a tie!";
    isGameOver = true;
  } else {
    switchPlayer();
    message.textContent = `Player ${currentPlayer.symbol}'s turn`;
  }
}

// Switch players
function switchPlayer() {
  const temp = currentPlayer;
  currentPlayer = otherPlayer;
  otherPlayer = temp;
}

// Check for winner
function checkWin() {
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

// Reset the game
function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  moveCount = 0;
  isGameOver = false;
  currentPlayer = new Player('X');
  otherPlayer = new Player('O');
  message.textContent = "Player X's turn";

  boxes.forEach((box) => {
    box.textContent = '';
  });
}
