
class Player {
    constructor(number, symbol) {
      this.number = number;
      this.symbol = symbol;
    }
  }
  
  class Board {
    constructor() {
      this.topLeft = document.querySelector("#topLeft");
      this.topMiddle = document.querySelector("#topMiddle");
      this.topRight = document.querySelector("#topRight");
      this.middleLeft = document.querySelector("#middleLeft");
      this.middle = document.querySelector("#middle");
      this.middleRight = document.querySelector("#middleRight");
      this.bottomLeft = document.querySelector("#bottomLeft");
      this.bottomMiddle = document.querySelector("#bottomMiddle");
      this.bottomRight = document.querySelector("#bottomRight");
    }
  
    // Reset the board 
    reset() {
      this.topLeft.innerText = "";
      this.topMiddle.innerText = "";
      this.topRight.innerText = "";
      this.middleLeft.innerText = "";
      this.middle.innerText = "";
      this.middleRight.innerText = "";
      this.bottomLeft.innerText = "";
      this.bottomMiddle.innerText = "";
      this.bottomRight.innerText = "";
    }
  }
  
  class Game {
    constructor() {
      this.player1 = new Player(1, "X");
      this.player2 = new Player(2, "O");
      this.board = new Board();
      this.currentPlayer = 1;
  
      this.board.topLeft.addEventListener("click", event => this.takeTurn(event));
      this.board.topMiddle.addEventListener("click", event => this.takeTurn(event));
      this.board.topRight.addEventListener("click", event => this.takeTurn(event));
      this.board.middleLeft.addEventListener("click", event => this.takeTurn(event));
      this.board.middle.addEventListener("click", event => this.takeTurn(event));
      this.board.middleRight.addEventListener("click", event => this.takeTurn(event));
      this.board.bottomLeft.addEventListener("click", event => this.takeTurn(event));
      this.board.bottomMiddle.addEventListener("click", event => this.takeTurn(event));
      this.board.bottomRight.addEventListener("click", event => this.takeTurn(event));
    }
  
    takeTurn(event) {
      if (event.target.innerText !== "") return;
  
      if (this.currentPlayer === 1) {
        event.target.innerText = this.player1.symbol;
        this.checkForWin(1);
        this.currentPlayer = 2;
      } else {
        event.target.innerText = this.player2.symbol;
        this.checkForWin(2);
        this.currentPlayer = 1;
      }
    }
  
    checkForWin(playerNumber) {
      const tl = this.board.topLeft.innerText;
      const tm = this.board.topMiddle.innerText;
      const tr = this.board.topRight.innerText;
      const ml = this.board.middleLeft.innerText;
      const m = this.board.middle.innerText;
      const mr = this.board.middleRight.innerText;
      const bl = this.board.bottomLeft.innerText;
      const bm = this.board.bottomMiddle.innerText;
      const br = this.board.bottomRight.innerText;
  
      if (tl !== "" && tl === tm && tl === tr) {
        alert(`Player ${playerNumber} has won!`);
        this.resetBoard();
        return;
      }
      if (ml !== "" && ml === m && ml === mr) {
        alert(`Player ${playerNumber} has won!`);
        this.resetBoard();
        return;
      }
      if (bl !== "" && bl === bm && bl === br) {
        alert(`Player ${playerNumber} has won!`);
        this.resetBoard();
        return;
      }
      if (tl !== "" && tl === ml && tl === bl) {
        alert(`Player ${playerNumber} has won!`);
        this.resetBoard();
        return;
      }
      if (tm !== "" && tm === m && tm === bm) {
        alert(`Player ${playerNumber} has won!`);
        this.resetBoard();
        return;
      }
      if (tr !== "" && tr === mr && tr === br) {
        alert(`Player ${playerNumber} has won!`);
        this.resetBoard();
        return;
      }
      if (tl !== "" && tl === m && tl === br) {
        alert(`Player ${playerNumber} has won!`);
        this.resetBoard();
        return;
      }
      if (tr !== "" && tr === m && tr === bl) {
        alert(`Player ${playerNumber} has won!`);
        this.resetBoard();
        return;
      }
    }
  
    
    resetBoard() {
      this.board.reset();
    }
  }
  
  const game = new Game();