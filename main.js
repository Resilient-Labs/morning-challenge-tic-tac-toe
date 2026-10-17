class Player {
  constructor(name, symbol, cssClass) {
    this.name = name;
    this.symbol = symbol;
    this.cssClass = cssClass;
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

class Scoreboard {
  constructor() {
    this.ballScore = 0;
    this.racketScore = 0;
    this.drawScore = 0;
    this.ballScoreDisplay = document.querySelector("#ballScore");
    this.racketScoreDisplay = document.querySelector("#racketScore");
    this.drawScoreDisplay = document.querySelector("#drawScore");
  }

  addPoint(player) {
    if (player.name === "Player Ball") {
      this.ballScore++;
    } else {
      this.racketScore++;
    }
    this.updateDisplay();
  }
  addDraw() {
    this.drawScore++;
    this.updateDisplay();
  }

  updateDisplay() {
    this.ballScoreDisplay.textContent = this.ballScore;

    this.racketScoreDisplay.textContent = this.racketScore;

    this.drawScoreDisplay.textContent = this.drawScore;
  }

  reset() {
    this.ballScore = 0;
    this.racketScore = 0;
    this.drawScore = 0;

    this.updateDisplay();
  }
}

class TennisGame {
  constructor() {
    this.playerOne = new Player("Player Ball", "🎾", "ball");
    this.playerTwo = new Player("Player Racket", "🏸", "racket");

    this.board = new Board();
    this.scoreboard = new Scoreboard();
    this.currentPlayer = this.playerOne;
    this.gameOver = false;

    this.cells = document.querySelectorAll(".cell");
    this.message = document.querySelector("#gameMessage");

    this.restartButton = document.querySelector("#restartButton");
    this.resetScoreButton = document.querySelector("#resetScoreButton");

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

    this.resetScoreButton.addEventListener("click", () => {
      this.scoreboard.reset();
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
      this.message.textContent = "That court position is already taken!";
      return;
    }

    clickedCell.textContent = this.currentPlayer.symbol;

    clickedCell.classList.add(this.currentPlayer.cssClass);

    const winningCombinations = this.checkWinner();

    if (winningCombinations) {
      this.gameOver = true;
      this.scoreboard.addPoint(this.currentPlayer);

      this.highlightWinner(winningCombinations);

      this.message.textContent = `🏆 ${this.currentPlayer.name} wins the match!`;
      return;
    }

    if (this.board.isFull()) {
      this.gameOver = true;
      this.scoreboard.addDraw();
      this.message.textContent = "It's a draw! The match ends in a draw.";

      return;
    }

    this.switchPlayer();
    this.message.textContent = `${this.currentPlayer.symbol} ${this.currentPlayer.name}'s turn!`;
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

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;

      if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
        return combination;
      }
    }
    return null;
  }

  highlightWinner(combination) {
    combination.forEach((index) => {
      this.cells[index].classList.add("winner");
    });
  }

  restartGame() {
    this.board.reset();

    this.currentPlayer = this.playerOne;

    this.gameOver = false;

    this.cells.forEach((cell) => {
      cell.textContent = "";

      cell.classList.remove("ball", "racket", "winner");
    });

    this.message.textContent = "🎾 Player Ball serves first!";
  }
}

const game = new TennisGame();
