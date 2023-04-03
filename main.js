document.querySelectorAll("#cells").forEach((cell, index) => {
  cell.dataset.cell = index;
  cell.addEventListener("click", play);
});

class Game {
  constructor() {
    this.player1 = "x";
    this.player2 = "o";
    this.currentplayer = this.player1;
    this.gameFinished = false;
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.winning = [
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
  start(e) {
    console.log(this.currentplayer);
    e.target.classList.add(this.currentplayer);
    this.board[e.target.dataset.cell] = this.currentplayer;

    this.count++;
    this.checkWin();
    this.switchPlayer();
  }
  switchPlayer() {
    if (this.currentplayer === this.player1) {
      this.currentplayer = this.player2;
    } else {
      this.currentplayer = this.player1;
    }
  }
  checkWin() {
    this.winning.forEach((x, index) => {
      let combo = this.winning[index];
      console.log(this.board);
      console.log("combom 0:", this.board[combo[0]]);
      console.log("combom 1:", this.board[combo[1]]);
      console.log("combom 2:", this.board[combo[2]]);

      if (
        this.board[combo[0]] === "" ||
        this.board[combo[1]] === "" ||
        this.board[combo[2]] === ""
      ) {
        return;
      }

      if (
        this.board[combo[0]] === this.board[combo[1]] &&
        this.board[combo[1]] === this.board[combo[2]]
      ) {
        console.log("win");
        document.querySelector("#result").innerHTML =
          this.currentplayer + " Wins";
        document.querySelectorAll("#cells").forEach((cell) => {
          cell.removeEventListener("click", play);
          this.gameFinished = true;
        });
      }

      if (this.board.indexOf("") === -1 && this.gameFinished === false) {
        document.querySelector("#result").innerHTML = "Its a Draw";
      }
    });
  }
}

let game = new Game();

function play(e) {
  game.start(e);
}
