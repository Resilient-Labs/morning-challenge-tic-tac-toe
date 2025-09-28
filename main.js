// Reference: https://thejsway.net/chapter09/

// Set variables
const result = document.querySelector("h2");
const ul = document.querySelector("ul");
// Keep track of total number of player moves
let moves = 0;

// Look up board index based on click
const indexMap = {
  0: [0, 0],
  1: [0, 1],
  2: [0, 2],
  3: [1, 0],
  4: [1, 1],
  5: [1, 2],
  6: [2, 0],
  7: [2, 1],
  8: [2, 2],
};

class TicTacToe {
  constructor() {
    this.currentPlayer = "X";
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  newBoard() {
    console.log("New Game is starting...");
    moves = 0;
    for (let i = 0; i < 9; i++) {
      const li = document.createElement("li");
      li.id = `sq-${i}`;

      // Add event listeners to board
      li.onclick = () => this.playerMove(i);
      ul.appendChild(li);
    }
  }

  playerMove(i) {
    moves++;

    // Add X or O to board based on player click
    const square = document.getElementById(`sq-${i}`);
    const row = indexMap[i][0];
    const col = indexMap[i][1];

    // Add class to selected squares (for styling)
    square.classList.add("selected");

    if (this.board[row][col] === null) {
      square.innerText = this.currentPlayer;
      square.onclick = null;
      this.board[row][col] = this.currentPlayer;
    }

    // Check if current player won after each move
    this.checkWinner();
  }

  checkWinner() {
    if (moves === 9) {
      // Add gameover styling
      document.querySelectorAll("li").forEach((li) => {
        li.classList.add("gameover");
        li.classList.remove("selected");
      });
      result.innerText = `GAME OVER`;
    }
    // Check rows
    else if (
      this.board[0][0] &&
      this.board[0][0] === this.board[0][1] &&
      this.board[0][1] === this.board[0][2]
    ) {
      this.announceWinner([0, 1, 2]);
    } else if (
      this.board[1][0] &&
      this.board[1][0] === this.board[1][1] &&
      this.board[1][1] === this.board[1][2]
    ) {
      this.announceWinner([3, 4, 5]);
    } else if (
      this.board[2][0] &&
      this.board[2][0] === this.board[2][1] &&
      this.board[2][1] === this.board[2][2]
    ) {
      this.announceWinner([6, 7, 8]);
    } else if (
      // Check columns
      this.board[0][0] &&
      this.board[0][0] === this.board[1][0] &&
      this.board[1][0] === this.board[2][0]
    ) {
      this.announceWinner([0, 3, 6]);
    } else if (
      this.board[0][1] &&
      this.board[0][1] === this.board[1][1] &&
      this.board[1][1] === this.board[2][1]
    ) {
      this.announceWinner([1, 4, 7]);
    } else if (
      this.board[0][2] &&
      this.board[0][2] === this.board[1][2] &&
      this.board[1][2] === this.board[2][2]
    ) {
      this.announceWinner([2, 5, 8]);
    } else if (
      // Check diagonals
      this.board[0][0] &&
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2]
    ) {
      this.announceWinner([0, 4, 8]);
    } else if (
      this.board[0][2] &&
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0]
    ) {
      this.announceWinner([2, 4, 6]);
    } else {
      // if no winner, changeTurn()
      console.log("No winner yet");
      this.changeTurn();
    }
  }

  changeTurn() {
    // After play, change to next player
    console.log("Changing turns");
    const currentTurn = document.querySelector("span");
    if (this.currentPlayer === "X") {
      this.currentPlayer = "O";
      currentTurn.innerText = "O";
    } else {
      this.currentPlayer = "X";
      currentTurn.innerText = "X";
    }
  }

  announceWinner(winningThree) {
    // Add classes to winning squares for styling
    winningThree.forEach((i) => {
      document.getElementById(`sq-${i}`).classList.add("winner");
    });

    result.innerText = `Player ${this.currentPlayer} has won!`;
    console.log(`Player ${this.currentPlayer} has won!`);

    // Remove event listeners + hover styling when game is over
    document.querySelectorAll("li").forEach((li) => {
      li.onclick = null;
      li.classList.add("gameover");
      li.classList.remove("selected");
    });
  }

  reset() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.currentPlayer = "X";
    ul.innerHTML = "";
    result.innerHTML = "Turn: Player <span>X</span>";
    this.newBoard();
  }
}

const game = new TicTacToe();
game.newBoard();

// Allow game reset
document.querySelector("p").onclick = () => game.reset();
