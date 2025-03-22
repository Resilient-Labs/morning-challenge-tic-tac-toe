// start the game with two players
class Player {
  constructor(playerName, playerShape, playerWins) {
    this.name = playerName
    this.shape = playerShape
    this.wins = playerWins
  }
  win(numberOfGames) {
    this.wins += 1;
    document.querySelector('h2').innerText = `${this.shape} WON. ${this.name} has ${this.wins} wins of ${numberOfGames} games`;
  }
}

class Board {
  constructor() {
    this.TL= '1'
    this.TC= '2'
    this.TR= '3'
    this.ML= '4'
    this.MC= '5'
    this.MR= '6'
    this.BL= '7'
    this.BC= '8'
    this.BR= '9'
  }
}

class TicTacToe {
  constructor() {
    this.playerOne = new Player('Player One', '❌', 0)
    this.playerTwo = new Player('Player Two', '🟡', 0)
    this.board = new Board();
    this.shapes = {
      'x': '❌',
      'o': '🟡',
      'X': '❌',
      'O': '🟡',
    }
    this.numberOfGames = 1;
    this.turn = true
    this.winning = false
  }
  start() {
    console.log('GAME START!');
  }
  makePlayers() {
    let playerOneName = document.getElementById('playerOneName').value || this.playerOne.name;
    let playerTwoName = document.getElementById('playerTwoName').value || this.playerTwo.name;
  
    let playerOneShape = document.querySelector('input[name="playerOneShape"]:checked')?.value || 'x';
    playerOneShape = this.shapes[playerOneShape];
    let playerTwoShape = playerOneShape === this.shapes['x'] ? this.shapes['o'] : this.shapes['x'];
  
    // Create two players
    this.playerOne.name = playerOneName;
    this.playerOne.shape = playerOneShape;
    this.playerTwo.name = playerTwoName;
    this.playerTwo.shape = playerTwoShape;

    document.querySelector('h3').innerText = `${this.playerOne.shape} ${this.playerOne.name}  VS  ${this.playerTwo.name} ${this.playerTwo.shape}`
  }
  nextGame() {
    this.board = new Board();
    this.winning = false;
    this.numberOfGames += 1;
    document.getElementById('tic').innerHTML = `
      <section class="top">
        <div id="TL"></div>
        <div id="TC"></div>
        <div id="TR"></div>
      </section>
      <section class="middle">
        <div id="ML"></div>
        <div id="MC"></div>
        <div id="MR"></div>
      </section>
      <section class="bottom">
        <div id="BL"></div>
        <div id="BC"></div>
        <div id="BR"></div>
      </section>
    `
  }
  placeShape(e) {
    if (this.winning) {
      alert('Game Over, please reset the board');
    } else if (
      this.board[e.target.id || e.target.parentElement.id] === this.playerOne.shape ||
      this.board[e.target.id || e.target.parentElement.id] === this.playerTwo.shape ||
      this.winning
      ) {
      alert('Play in a different square or reset the board');
    } else {
      if (this.turn == true) {
        document.getElementById(`${e.target.id || e.target.parentElement.id}`).innerHTML = `<span>${this.playerOne.shape}</span>`;
        this.board[e.target.id] = this.playerOne.shape;
        this.checkWin();
      } else {
        document.getElementById(`${e.target.id || e.target.parentElement.id}`).innerHTML = `<span>${this.playerTwo.shape}</span>`;
        this.board[e.target.id] = this.playerTwo.shape;
        this.checkWin();
      }
      this.turn = !this.turn;
    }
  }
  checkWin() {
    if (this.board['TC'] == this.board['TL'] && this.board['TR'] == this.board['TC']) {
      this.logWin()
    } else if (this.board['MC'] == this.board['ML'] && this.board['MR'] == this.board['MC']) {
      this.logWin()
    } else if (this.board['BC'] == this.board['BL'] && this.board['BR'] == this.board['BC']) {
      this.logWin()
    } else if (this.board['TC'] == this.board['MC'] && this.board['MC'] == this.board['BC']) {
      this.logWin()
    } else if (this.board['TL'] == this.board['ML'] && this.board['ML'] == this.board['BL']) {
      this.logWin()
    } else if (this.board['TR'] == this.board['MR'] && this.board['MR'] == this.board['BR']) {
      this.logWin()
    } else if (this.board['TL'] == this.board['MC'] && this.board['MC'] == this.board['BR']) {
      this.logWin()
    } else if (this.board['TR'] == this.board['MC'] && this.board['MC'] == this.board['BL']) {
      this.logWin()
    }
  }
  logWin() {
    this.winning = true;
    if (this.turn == true) {
      this.playerOne.win(this.numberOfGames);
    } else {
      this.playerTwo.win(this.numberOfGames);
    }
  }
}


const game = new TicTacToe();

document.getElementById('submitNames').addEventListener('click', game.makePlayers.bind(game));
document.getElementById('nextGame').addEventListener('click', game.nextGame.bind(game));
document.querySelector('.ticTacToe').addEventListener('click', game.placeShape.bind(game))
