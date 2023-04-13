// Define the Board class
class Board {
    constructor() {
      this.cells = Array(9).fill("");
      this.turn = "white";
      this.winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    }
  
    // Method to create the board
    create() {
      const gameBoard = document.querySelector("#gameboard");
  
      this.cells.forEach((cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        cellElement.id = index;
        cellElement.addEventListener("click", () => {
          this.addGo(cellElement);
        });
        gameBoard.append(cellElement);
      });
    }
  
    // Method to add the go
    addGo(cellElement) {
      if (cellElement.firstChild) {
        return;
      }
  
      const goDisplay = document.createElement("div");
      goDisplay.classList.add(this.turn);
      cellElement.append(goDisplay);
      this.cells[cellElement.id] = this.turn;
  
      if (this.checkScore()) {
        this.endGame();
      } else {
        this.turn = this.turn === "white" ? "pink" : "white";
        document.querySelector(
          "#info"
        ).textContent = `it is now ${this.turn}'s turn.`;
      }
    }
  
    // Method to check the score
    checkScore() {
      for (const combo of this.winningCombos) {
        const cellsInCombo = combo.map((index) => this.cells[index]);
        if (cellsInCombo.every((cell) => cell === "white")) {
          this.winner = "white";
          return true;
        } else if (cellsInCombo.every((cell) => cell === "pink")) {
          this.winner = "pink";
          return true;
        }
      }
  
      return false;
    }
  
    // Method to end the game
    endGame() {
      document.querySelector("#info").textContent = `${this.winner.toUpperCase()} WINS!`;
      const gameBoard = document.querySelector("#gameboard");
      gameBoard.innerHTML = "";
      this.cells = Array(9).fill("");
      this.create();
    }
  }
  
  // Create a new instance of the Board class and call its create() method
  const board = new Board();
  board.create();