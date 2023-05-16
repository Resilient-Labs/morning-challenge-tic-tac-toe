// Goal: Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.
// How to submit your code for review:
// Fork and clone this repo
// Create a new branch called answer
// Checkout answer branch
// Push to your fork
// Issue a pull request
// Your pull request description should contain the following:
// (1 to 5 no 3) I completed the challenge
// (1 to 5 no 3) I feel good about my code
// Anything specific on which you want feedback!

const btn = document.querySelector("#reset");

let xScore = 0;
let oScore = 0;
function increaseXScore(){
	xScore+=1;
	document.querySelector("#XScore").innerHTML = xScore;
}
function increaseOScore(){
	oScore+=1;
	document.querySelector("#OScore").innerHTML = oScore;
}

class TicTacToe {
    constructor() {
      this.board = Array.from(document.querySelectorAll('button'));
      this.message = document.querySelector('#message');
      this.resetButton = document.querySelector('#reset');
      this.currentPlayer = 'X';
      this.gameFinished = false;
  
      this.board.forEach(cell => cell.addEventListener('click', () => this.handleClick(cell)));
      this.resetButton.addEventListener('click', () => this.handleReset());
      this.message.textContent = `${this.currentPlayer}'s turn`;
    }
  
    checkWin() {
      const winningMoves = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      for (let i = 0; i < winningMoves.length; i++) {
        const [a, b, c] = winningMoves[i];
        if (this.board[a].textContent === this.currentPlayer &&
            this.board[b].textContent === this.currentPlayer &&
            this.board[c].textContent === this.currentPlayer) {
            this.board[a].classList.add('winner');
            this.board[b].classList.add('winner');
            this.board[c].classList.add('winner');
          return true;
        }
      }
      return false;
    }
  
    handleClick(cell) {
      if (cell.textContent !== '' || this.gameFinished) {
        return;
      }
      cell.textContent = this.currentPlayer;
      if (this.checkWin()) {
        this.message.textContent = `${this.currentPlayer} Wins!`;
          if(this.currentPlayer === "X") {
            increaseXScore()
          } else {
            increaseOScore()
          }
        this.gameFinished = true;
        return;
      }
      if (this.board.every(cell => cell.textContent !== '')) {
        this.message.textContent = "It's a tie!";
        this.gameFinished = true;
        return;
      }
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      this.message.textContent = `${this.currentPlayer}'s turn`;
    }
  
    handleReset() {
      this.board.forEach(cell => cell.textContent = '');
      this.board.forEach(cell => cell.classList.remove('winner'));
      this.currentPlayer = 'X';
      this.gameFinished = false;
      this.message.textContent = `${this.currentPlayer}'s turn`;
      btn.innerText = "Reset Game"
    }
}

const game = new TicTacToe();
