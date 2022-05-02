class MakePlayer{
  constructor(exOrOh, playerTurn){
    this.selections = []                         
    this.exOrOh = exOrOh                        
    this.playerTurn = playerTurn
  } 
  
  makeMove(boxIndex) {              
    this.selections.push(boxIndex)   
  }
}

class Game {
  constructor() {
    this.playerX = new MakePlayer ('X', true)     //this playerX is actually an instance of the MakePlayer 
    this.playerO = new MakePlayer ('O', false)
    this.winStatus = false
    this.turnCount = 0
    this.winnerMessage = document.querySelector(".whoWon") 
    this.currentTurnMessage = document.querySelector('.playerTurn')
  }
  whenBoxClicked(e){  
    if((e.target.innerText === "") && (game.turnCount < 9)){ 
      game.turnCount++
      console.log(game.turnCount)
      e.target.innerText = currentPlayer.exOrOh
      game.changePlayer() 
      }  
    let idValue = Number(e.target.getAttribute('id'));         
    currentPlayer.makeMove(idValue) 
      game.checkWin()                    
      if(game.checkWin() === true){
        console.log('You won')
        game.winnerMessage.innerText = 'You won' 
      }               
  } 
  changePlayer (){
    console.log("changePlayer")
    if(currentPlayer === game.playerX){  
        currentPlayer = game.playerO
        game.currentTurnMessage.innerText = "Player O's turn"
      }else{
        currentPlayer = game.playerX    
        game.currentTurnMessage.innerText = "Player X's turn" 
      }  
  }
  checkWin(){
    winningConditions.forEach(condition => { 
      let matchList = condition.filter(boxNumber =>   currentPlayer.selections.includes(boxNumber)) 
        if(matchList.length === 3){   
          game.winStatus = true            
          return true                
        }
      })
    if(game.turnCount === 9 && game.winStatus === false){
      console.log('draw')
      console.log(game.winStatus)
      console.log(game.turnCount)
      game.winnerMessage.innerText='draw'
      
    }
    return game.winStatus                 
  }
  resetGame() {
    game.turnCount = 0
    game.winStatus = false
    let eachBox = document.querySelectorAll('.box')
    eachBox.forEach(box => {
      box.innerText = ''
    })
    game.winnerMessage.innerText = ''
    game.currentTurnMessage.innerText = "Player X's turn"
    game.playerX.selections = []  
    game.playerO.selections = []
  }

}

let game = new Game
let currentPlayer = game.playerX  

const boxValue = document.querySelector(".boxes")   
boxValue.addEventListener('click', game.whenBoxClicked)  

let clear = document.querySelector("#clear")
clear.addEventListener('click', game.resetGame)

let winningConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]] 

//keep moving code into game class
//id state of game - what aspects of game are changing over time
//define instance properties to reference those
//update code to reference correctly
// //turncount variable --
//winStatus  -- 
//idValue dub 
//winnerText --
//matchList dub




