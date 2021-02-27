/**********************************
=====Constructor for gameboard=====
reads row and column custom attribute HTML container
Properties
  players-> array containing the content of the squares.
    array.length = number of players
  width: Boards are square by default
  currentPlayer randomly chooses a player to start
  Win condition: get shape in a series as long as board width
***********************************/
function Gameboard(players = ['X', 'O'], width = 3){
  /**************************
  ==initialization content==
  ***************************/
  this.players = players
  this.numWidth = width
  this.tiles =[]//stored as y,x
  //Choose first player index randomly
  this.currentPlayerIndex = 0
  this.prompt = document.querySelector('.prompt')


  //populate tiles[]
  //i is row
  //j is column in the row
  for (var i = 0; i < width; i++) {
    let newRow =[]
    for (var j = 0; j < width; j++) {
      newRow.push(new Tile(this, i, j, document.querySelector(`.row-${i} .square-${j}`)))
    }
    this.tiles.push(newRow)
  }

  /*****
  function
  Selects Random First Player
  *****/
  this.selectFirstPlayer = function(){
    console.log(`Setting new player`);
    this.currentPlayerIndex = Math.floor(Math.random() * this.players.length)
  }
  this.selectFirstPlayer()

  /***
  Gets the current Player object
  ***/
  this.getCurrentPlayer = function(){
    return this.players[this.currentPlayerIndex]
  }
  this.prompt.innerText = `First Player: ${this.getCurrentPlayer().name}`

  //sets currentplayer the next player in array
  this.nextPlayer = function(){
    this.currentPlayerIndex = (this.currentPlayerIndex+=1)%2
    console.log(this.aiPlayer);
    if(this.aiPlayer.active && this.aiPlayer.currentTurn===false){
      console.log(`computer taking turn`);
      this.prompt.innerText = `Computer Player: ${this.getCurrentPlayer().name} taking turn`
      this.aiPlayer.currentTurn = true
      this.aiPlayer.takeTurn()
    } else {
      this.aiPlayer.currentTurn = false
      console.log(`human turn`);
      this.prompt.innerText = `Current Player: ${this.getCurrentPlayer().name}`
    }

  }

  /**Ends game and disables all tiles**/
  this.gameOver = function() {
    this.tiles.forEach((innerArray, i) => {
      innerArray.forEach((item, j) => {
        item.domElement.disabled = "true"
      });
    });
  }

  //Checks win condition centered on the passed tile
  this.checkWin = function(tile) {
    let winLength = this.numWidth //How long the number of matching shapes have to be
    let win = false

    /*Check Vertical line Win Condition*/
    let winCheck = true
    for (var i = 0; i < winLength; i++) {
      winCheck = this.tiles[i][tile.x].shape === tile.shape && winCheck
    }
    win = win || winCheck

    /*Check horizontal line Win Condition*/
    winCheck = true
    for (var i = 0; i < winLength; i++) {
      winCheck = this.tiles[tile.y][i].shape === tile.shape && winCheck
    }
    win = win || winCheck


    /*Check backslash diag line Win Condition*/
    if (tile.x===tile.y) {
      winCheck=true
      for (var i = 0; i < winLength; i++) {
        winCheck = (this.tiles[i][i].shape === tile.shape) && winCheck
      }
      win = win || winCheck
    } else {
      win = win || false
    }

    /*Check forwardslash line Win Condition*/
    if (tile.x===(this.numWidth-tile.y-1)) {
      winCheck=true
      for (var i = 0; i < winLength; i++) {
        winCheck = this.tiles[i][this.numWidth-1-i].shape === tile.shape && winCheck
      }
      win = win || winCheck
    } else {
      win = win || false
    }
    //If game won, disable all remaining tiles
    if (win) {
      this.prompt.innerText = `${this.getCurrentPlayer().name} Wins!`
      this.gameOver()
    }
    return win
  }

  this.reset = function() {
    console.log(this.tiles)
    this.tiles.forEach((innerArray, i) => {
      innerArray.forEach((item, j) => {
        item.domElement.disabled = false
        item.shape = ""
        item.domElement.innerText = ""
      });
    });
    this.selectFirstPlayer()
  }
  document.querySelector('.reset').addEventListener('click', _ => {this.reset()})

  this.twoPlayer = document.querySelector('#twoPlayer')
  this.aiEasy = document.querySelector('#aiEasy')
  this.gameModes = [twoPlayer, aiEasy]
  this.currentGameMode = 'twoPlayer'

  this.twoPlayer.classList.add('selected')
  this.gameModes.forEach((item, i) => {
    item.addEventListener('click', (target)=>this.selectMode(target))
  });

  //Initialize AI
  this.aiPlayer = {
    active: false,
    // hardMode: false,
    // gameBoard: this,
    currentTurn: false,
    takeTurn: function(params){
      let validMove = false
      while(validMove === false) {
        let y = Math.floor(Math.random() * this.gameWidth)
        let x = Math.floor(Math.random() * this.gameWidth)
        if(this.tiles[y][x].shape==""){
          console.log(`choosing X: ${x} Y: ${y}`);
          validMove = true
          currentTurn = false
          this.tiles[y][x].setShape()
        }
      }
    }
  }
  this.aiPlayer.tiles = this.tiles
  this.aiPlayer.gameWidth = this.numWidth


  /***
  Function
  Resets game and dictates if ai is active
  ***/

  this.selectMode = function(click) {
    console.log(click.currentTarget)
    this.gameModes.forEach((item, i) => {
      item.classList.remove('selected')
    });
    click.currentTarget.classList.add('selected')
    this.currentGameMode = click.currentTarget.id
    if(click.currentTarget.id==='twoPlayer'){
      this.aiPlayer.active = false
      this.aiPlayer.currentTurn = false
    } else {
      this.aiPlayer.active = true
      this.aiPlayer.currentTurn = false
    }
    this.reset()
    // console.log(this.aiPlayer);
  }


  this.getGameMode = function(){
    return document.querySelector('.game-options .selected').id
  }

  /***
  function
  Checks if game is tied (no tiles left)
  ***/
  this.checkTie = function() {
    let isTied = true
    this.tiles.forEach((innerArray, i) => {
      innerArray.forEach((item, j) => {
        isTied = item.shape && isTied
      });
    });
    if(isTied) {
      console.log(`game over`);
      this.gameOver()
      this.prompt.innerText = 'Tie Game'
    }
    return isTied

  }

}

/**********************************
=====Constructor for tile==========
**********************************/
function Tile(gameboard, y, x, domElement){

  this.gameboard = gameboard
  this.x = x
  this.y = y
  this.domElement = domElement
  this.shape = ""

  this.domElement.addEventListener('click', _ => {this.setShape()})
  this.setShape = function(){
    if (true){//Depricate if statement, disabling buttons prevent overwritting
      let currentPlayer = this.gameboard.getCurrentPlayer()
      this.shape = currentPlayer.value
      currentPlayer.stampTile(this.domElement)

      this.domElement.disabled = 'true'
      if(!this.gameboard.checkWin(this) && !this.gameboard.checkTie()){
        this.gameboard.nextPlayer()//change this method to play AI player instead of checkWin
      }
    }
  }
}

/***********************************
=====Constructor for Player=========
name: string - Display Name
isImg: boolean if value is a img path
value: either the text to put into the
***********************************/

function Player(name, isImg, value) {
  this.name = name
  this.isImg = isImg
  this.value = value

  //places value into passed domElement
  this.stampTile = function(domElement){
    if(this.isImg){
      let img = document.createElement('img')
      img.setAttribute('src', value)
      img.classList.add('tile-img')
      domElement.appendChild(img)
    } else {
      domElement.innerText = this.value
    }
  }
}


/********************
===initialization====
********************/
initialize()

function initialize() {
  let player1 = new Player('Paws', true, './img/paw.png')
  let player2 = new Player('Cats', true, './img/cat.png')
  const players = [player1, player2]
  const width = 3
  let gameboard = new Gameboard(players, width)
}


/**
Aside panel functionality
**/
document.querySelector('.info-button').addEventListener('click', toggleAside)
document.querySelector('#hide-aside').addEventListener('click', toggleAside)

function toggleAside(){       document.querySelector('aside').classList.toggle('reveal')
}
/**
Aside Panel end
*/
