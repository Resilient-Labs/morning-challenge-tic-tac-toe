// variables
const board = document.querySelector('#board');
const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('.reset');
const clearScoreButton = document.querySelector('.clearScore');
const pOne = document.querySelector('.pOne');
const pTwo = document.querySelector('.pTwo');
let currentPlayer = 'X';
let moves = 0;
let winner = false;
let pOneScore = 0;
let pTwoScore = 0;

// Add event listeners
board.addEventListener('click', handleCellClick);
resetButton.addEventListener('click', handleReset);
clearScoreButton.addEventListener('click', handleClearScore);

// Function to handle a cell being clicked
function handleCellClick(event) {
  const cell = event.target;
  if (cell.textContent !== '' || winner) return;
  cell.textContent = currentPlayer;
  moves++;
  checkForWinner();
  switchPlayer();
}

// Function to check for a winner
function checkForWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let i = 0; i < winningCombos.length; i++) {
    const combo = winningCombos[i];
    const a = cells[combo[0]].textContent;
    const b = cells[combo[1]].textContent;
    const c = cells[combo[2]].textContent;
    if (a !== '' && a === b && b === c) {
      winner = true;
      highlightWinner(combo);
      updateScore();
      break;
    }
  }

  if (moves === 9 && !winner) {
    winner = true;
    alert('Tie game!');
  }
}

// Function to highlight the winning combination
function highlightWinner(combo) {
  combo.forEach(i => cells[i].classList.add('winner'));
}

// Function to switch to the next player
function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  pOne.classList.toggle('active');
  pTwo.classList.toggle('active');
}

// Function to update the score
function updateScore() {
  if (currentPlayer === 'X') {
    pOneScore++;
    pOne.textContent = `Player 1 (${pOneScore})`;
  } else {
    pTwoScore++;
    pTwo.textContent = `Player 2 (${pTwoScore})`;
  }
}

// Function to handle reset button click
function handleReset() {
  currentPlayer = 'X';
  moves = 0;
  winner = false;
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('winner');
  });
  pOne.classList.add('active');
  pTwo.classList.remove('active');
}

// Function to handle clear score button click
function handleClearScore() {
  pOneScore = 0;
  pTwoScore = 0;
  pOne.textContent = 'Player 1';
  pTwo.textContent = 'Player 2';
}

// Set up the initial state of the game
handleReset();
