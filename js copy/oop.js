// team hayden work as a group in collberation screensharing  etc ..  took turns working on entire project 

// we first need to make a function that declares what the win condtions are (conditional)
// in the function we need to establish the win conditions (switch case)
// we need to determine in what object to call the function (goes in the game object vs. goes in the eventlistener? )


class Player{
    constructor(symbol){
      this.symbol = symbol
    }
  }
  
  // when the user clicks a button to start start the game, creates a new game
  // game.changeplayer
  // every game will have 2 players and board
  class Game{
    constructor(){
      this.player1 = new Player('X')
      this.player2 = new Player('O')
      this.winState = false
      this.currentPlayer = this.player1
      this.wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
      this.gameState = ['', '', '', '', '', '', '', '', '']
    }
    // always display currentPlayer (currentPlayer.innerText) when the changePlayer method runs to show the current changed player
    changePlayer(){
    //   // will change players turn
      this.currentPlayer = (this.currentPlayer  === this.player1) ?  this.currentPlayer = this.player2 : this.currentPlayer = this.player1
    }
    playGame(index){
      this.gameState[index] = this.currentPlayer.symbol
      this.turn++
    }
    checkWin(){
      for (var i = 0; i < this.wins.length; i++) {
        let combo = this.wins[i]
        if (this.gameState[combo[0]] && this.gameState[combo[0]] === this.gameState[combo[1]] && this.gameState[combo[1]] === this.gameState[combo[2]]) {
          this.winState = true
        }
      }   
      }
      reset(){
      this.player1 = new Player('X')
      this.player2 = new Player('O')
      this.winState = false
      this.currentPlayer = this.player1
      this.wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
      this.gameState = ['', '', '', '', '', '', '', '', '']
      }
    }
  
  
  //used for reset?
  let p1 = new Player('X')
  let p2 = new Player('O')
  let game = new Game(p1, p2)
  
 
  // in order to stop the game, we use a conditional with a booleen (true/false) that if on is true disable click event
  
 let array = Array.from(document.querySelectorAll('.box'))
    array.forEach((box) => {
    box.addEventListener('click', startGame)})
    
  function startGame(e){
      game.playGame(e.target.getAttribute('data'))
      document.querySelector('#player').innerHTML = game.currentPlayer.symbol
      e.target.innerHTML = game.currentPlayer.symbol
      game.checkWin()
      if(game.winState == true) {
        console.log('check')
        array.forEach((box) => {
        document.querySelector('#result').innerHTML = `Player ${game.currentPlayer.symbol} Wins!`
        document.querySelector('.game').style.background = 'rgb(235,72,177)'
        box.removeEventListener('click', startGame)})
      }
      if(game.gameState.indexOf('') === -1 && game.winState === false){
        console.log('checking')
        document.querySelector('#result').innerHTML = "It's a draw."
        document.querySelector('.game').style.background = 'light pink'
      }
      game.changePlayer()
      
      e.target.removeEventListener('click', startGame)
      
      //e.target is used because the event Startgame is being passed to the target
    }

    function reset(){
      game.reset()
      document.querySelectorAll('.box').forEach(function(box){
        box.innerHTML = ""
        document.querySelector('#result').innerHTML = ""
        document.querySelector('#player').innerHTML = "X"
        document.querySelector('.game').style.background = 'light blue'
        Array.from(document.querySelectorAll('.box'))
        array.forEach((box) => {
        box.addEventListener('click', startGame)})
      })
    }

document.querySelector('#reset').addEventListener('click', reset)
  