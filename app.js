class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }
}

// here the player can get both a name and symbol to use in the game, we only need two to play the game and we can even change the symbol to something besides X and O if we wanted to 

class Board {
  constructor() {
    this.grid = Array(9).fill(null);
  }
//everytime we want to make a new board, constructor is called, we don't supply any parameters when calling `new Board()`. 
//so const board = new Board()
//when new Board() is created, create a grid that has 9 elements that are filled with the value null

  makeMove(position, symbol) {
    if (!this.grid[position]) {
      this.grid[position] = symbol;
      console.log("this.grid => ", this.grid)
      return true;
    }
    return false;
  }

  //staying within the Board, we create a function of makeMove that takes in the parameters of where on the board the user clicks and the symbol of the player
  // next if the player clicks on a square that is empty, makeMove returns true, to update the board. if player clicks on square that is already taken, the board will not update, return false

  checkWinner() {
    const combos = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];

    //here we create all the possible win conditions for a player (diagonal, horizontal, vertical)


    // a, b, c represents the three moves of the player and compares it to the possible wins they can make
    // if a,b and c are all the same value (symbol for the player) - that player wins
    for (let [a,b,c] of combos) {
      if (this.grid[a] && this.grid[a] === this.grid[b] && this.grid[a] === this.grid[c]) {
        return this.grid[a];
      }
    }
  
    // loop throught each cell in grid
    // if cells contain different values (symbols) - return draw
    if (this.grid.every(cell => cell)){
      return 'draw'
    }else{ 
      // if they contain null - keep game going 
  return null
}
}

 // return this.grid.every(cell => cell) ? "draw" : null;
//here is the ternary example which I still have trouble putting together, chatgpt helped me 
  reset() {
    this.grid.fill(null);
  }
}
// this instance method allows me to reset the board when the game is completed


class Game {

  // when i create a new game pass in the 2 players play tic-tac-toe
  // when creating the game - 
   // 1. create blank board 
   // 2. create players array with players
   // 3. set the first plyer to make first move
   // 4. set isOver to false (keeps game active)
   // 5. add new Audio for winner 
  constructor(player1, player2) {
    this.board = new Board();
    this.players = [player1, player2];
    this.currentPlayerIndex = 0;
    this.isOver = false;
    this.winSound = new Audio('./images/winning.mp3')
  }

  // whenever i need to get the current player making a play on the board i call this
  currentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  // when the player makes a turn pass in the position on th egrid the user clicks
  playTurn(position) {
    // if the game is over dont let players make move
    if (this.isOver) return;

    // if a player makes a move on the grid update the grid with the players symbol
    if (this.board.makeMove(position, this.currentPlayer().symbol)) {
      this.updateUI();

      // check to see if game has winner
      const result = this.board.checkWinner();

      if (result) {
        // if there is a winner - end game
        this.isOver = true;
        if (result === "draw") {
          // if draw - print message to screen
          gameStatus.textContent = "It's a draw!";
        } else {
          // display player's name that won 
          gameStatus.textContent = `🎉 ${this.currentPlayer().name} wins! 🎉`;
          this.winSound.play()
        }
      } else {
        // dispaly which players turn it is 
        this.currentPlayerIndex = 1 - this.currentPlayerIndex;
        gameStatus.textContent = `${this.currentPlayer().name}'s turn`;
      }
    }
  }

  // when i need to update the board (grid) i call this
  updateUI() {
    // loop through each cell in the grid 
    // set cell to symbol and update atttribute for grid cell to be "taken"
    cells.forEach((cell, i) => {
      console.log("index: ", i, " => ", cell)
      console.log("this.board.grid[i] => ", this.board.grid[i])
      cell.textContent = this.board.grid[i] || "";
      console.log(cell.textContent)
      // this is to check if there is a value in the cell of the grid
          // !!"X" => true
          // !!"O" => true
          // !!null => false
      cell.classList.toggle("taken", !!this.board.grid[i]);
    });
  }

  // when i need to reset the game i call this
  resetGame() {
    // pause winSound when game is reset...especially bc it's a 4 min audio lol
    this.winSound.pause()
    // fill board with nulls
    this.board.reset();
    // set game over to false
    this.isOver = false;
    // make player make first move
    this.currentPlayerIndex = 0;
    // update grid to be blank
    this.updateUI();
    // display player 1's name to screen
    gameStatus.textContent = `${this.currentPlayer().name}'s turn`;
  }
}

// ==== DOM Setup ====
const boardEl = document.getElementById("board");
const gameStatus = document.getElementById("gameStatus");
const resetBtn = document.getElementById("reset");

// Create 9 clickable cells
boardEl.innerHTML = "";
const cells = [];
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", () => game.playTurn(i));
  boardEl.appendChild(cell);
  cells.push(cell);
}

// Initialize game
const p1 = new Player("Player X", "X");
const p2 = new Player("Player O", "O");
const game = new Game(p1, p2);

resetBtn.addEventListener("click", () => game.resetGame());

//note that I had help with this from a fellow developer