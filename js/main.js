

class Player{
    constructor(symbol){
      this.symbol = symbol
    }
  }


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

    changePlayer(){

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



  let p1 = new Player('X')
  let p2 = new Player('O')
  let game = new Game(p1, p2)




 let array = Array.from(document.querySelectorAll('.square'))
    array.forEach((square) => {
    square.addEventListener('click', startGame)})

  function startGame(e){
      game.playGame(e.target.getAttribute('data'))
      document.querySelector('#player').innerHTML = game.currentPlayer.symbol
      e.target.innerHTML = game.currentPlayer.symbol
      game.checkWin()
      if(game.winState == true) {
        console.log('check')
        array.forEach((square) => {
        document.querySelector('#result').innerHTML = `Player ${game.currentPlayer.symbol} Wins!`
        square.removeEventListener('click', startGame)})
      }
      if(game.gameState.indexOf('') === -1 && game.winState === false){
        console.log('checking')
        document.querySelector('#result').innerHTML = "It's a draw."
      }
      game.changePlayer()

      e.target.removeEventListener('click', startGame)


    }
    function reset(){
      game.reset()
      document.querySelectorAll('.square').forEach(function(square){
        square.innerHTML = ""
        document.querySelector('#result').innerHTML = ""
        document.querySelector('#player').innerHTML = "X"
        Array.from(document.querySelectorAll('.square'))
        array.forEach((box) => {
        square.addEventListener('click', startGame)})
      })
    }
document.querySelector('#reset').addEventListener('click', reset)
