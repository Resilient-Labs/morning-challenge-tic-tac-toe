class Game {
  constructor(){
    this.winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [0, 4, 8],
      [2, 4, 6]
    ];
    
  this.gameBoard = document.querySelector('#container')
  this.winName = document.querySelector('#winner')

  this.boardState = ['', '', '', '', '', '', '', '', '']
  this.squares = []
    for (let i = 0; i < 9; i++){
      let s = new Square(i)
      this.squares.push(s)
    }
  this.countGameBoardClicks = 0
  this.roundWon = false
  // When the player turn function runs, if there is a "this" it will refer to the game object not the event target
  this.playerTurn = this.playerTurn.bind(this)
  this.gameBoard.addEventListener('click', this.playerTurn)
  this.resetGame = this.resetGame.bind(this)
  document.querySelector('#reset').addEventListener('click', this.resetGame)
  }

  playerTurn(event) {
    if (this.roundWon !== true && !event.target.classList.contains('x') && !event.target.classList.contains('o')) {
      this.countGameBoardClicks += 1
      let playerMark = ((this.countGameBoardClicks % 2 === 0) ? 'x' : 'o')
      this.squares[Number(event.target.id)].setState(playerMark)
      console.log(this.squares)
      this.evaluateGame()
    };
  }
  
  evaluateGame(playerMark){
    let playerName = ((this.countGameBoardClicks % 2 === 0) ? 'Candiace Wins!' : 'Monique Wins!') 
  
    for (let i = 0; i <= this.winConditions.length - 1; i++) {
      const singleWinCondition = this.winConditions[i]
      console.log(this.winConditions[i])
      let a = this.squares[singleWinCondition[0]].getState();
      let b = this.squares[singleWinCondition[1]].getState();
      let c = this.squares[singleWinCondition[2]].getState();
      if (a === '' || b === '' || c === '') {
        continue;
      } 
      if (a === b && b === c) {
        this.roundWon = true;
        break;
      }
    }
    if(this.isGameWon()) {
      return this.winName.innerText = playerName
    } else if (this.isTie()){
      return this.winName.innerText = 'Tie!'
    }
  }

  isGameOngoing(){
    return this.countGameBoardClicks < 9 && this.roundWon === false
  }

  isGameWon(){
    return this.roundWon
  }

  isTie(){
    return !this.isGameOngoing() && !this.isGameWon()
  }
  
  resetGame(){
    this.squares.forEach(s => s.clear())
    this.countGameBoardClicks = 0
    this.winName.innerText = ''
    this.roundWon = false
  }
}

class Square{
  constructor(id){
    this.id = id
    this.boxElement = document.getElementById(id)
  }
  getState(){
    if (this.boxElement.classList.contains('x')){
      return 'x'
    } else if (this.boxElement.classList.contains('o')){
      return 'o'
    } else {return ''}
  }
  clear(){
    this.boxElement.classList.remove('x')
    this.boxElement.classList.remove('o')
  }
  setState(state){
    this.clear()
    if (state === 'x' || state === 'o'){this.boxElement.classList.add(state)}
  }
}

const game = new Game()
