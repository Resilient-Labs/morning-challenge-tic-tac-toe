class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }
}

class Board {
  constructor() {
    this.cells = ["", "", "", "", "", "", "", "", ""];
  }

  placeMove(index, symbol) {
    if (this.cells[index] !== "") {
      return false;
    }

    this.cells[index] = symbol;
    return true;
  }

  reset() {
    this.cells = ["", "", "", "", "", "", "", "", ""];
  }
  isFull() {
    return this.cells.every(function (cell) {
      return cell !== "";
    });
  }
}

class TicTacToe {
  constructor() {
    this.playerOne = new Player("Player X", "X");
    this.playerTwo = new Player("Player O", "O");

    this.board = new Board();

    this.currentPlayer = this.playerOne;

    this.gameOver = false;

    this.cells = document.querySelectorAll(".cell");
    this.message = document.querySelector("#gameMessage");

    this.restartButton = document.querySelector("#restartButton");

    this.startGame();
  }

  startGame() {
    this.cells.forEach((cell) => {
      cell.addEventListener("click", (event) => {
        this.handleCellClick(event);
      });
    });

    this.restartButton.addEventListener("click", () => {
      this.restartGame();
    });
  }
  handleCellClick(event) {
    if (this.gameOver) {
      return;
    }

    const clickedCell = event.target;

    const index = Number(clickedCell.dataset.index);

    const moveWasPlaced = this.board.placeMove(
      index,
      this.currentPlayer.symbol,
    );

    if (!moveWasPlaced) {
      this.message.textContent = "That space is already taken!";
      return;
    }

    clickedCell.textContent = this.currentPlayer.symbol;

    clickedCell.classList.add(this.currentPlayer.symbol.toLowerCase());

    if (this.checkWinner()) {
      this.message.textContent = `Congratulations ${this.currentPlayer.name} wins!`;

      this.gameOver = true;

      return;
    }

    if (this.board.isFull()) {
      this.message.textContent = "It's a draw! Nobody escaped victorious.";

      this.gameOver = true;

      return;
    }

    this.switchPlayer();

    this.message.textContent = `${this.currentPlayer.name}'s turn `;
  }

  switchPlayer() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else {
      this.currentPlayer = this.playerOne;
    }
  }

  checkWinner() {
    const board = this.board.cells;

    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];
    return winningCombinations.some((combination) => {
      const [a, b, c] = combination;

      return board[a] !== "" && board[a] === board[b] && board[b] === board[c];
    });
  }

  restartGame() {
    this.board.reset();

    this.currentPlayer = this.playerOne;

    this.gameOver = false;

    this.cells.forEach((cell) => {
      cell.textContent = "";

      cell.classList.remove("x");
      cell.classList.remove("o");
    });

    this.message.textContent = `${this.currentPlayer.name}'s turn`;
  }
}

const game = new TicTacToe();
