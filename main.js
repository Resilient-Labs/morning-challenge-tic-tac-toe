
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

let playerX = new MakePlayer ('X', true)        
let playerO = new MakePlayer ('O', false)       
let winnerMessage = document.querySelector(".whoWon")
let turnCount = 0
let winStatus = false

let currentPlayer = playerX                               

const boxValue = document.querySelector(".boxes")   
boxValue.addEventListener('click', whenBoxClicked)  

let clear = document.querySelector("#clear")
clear.addEventListener('click', resetGame)

  

function whenBoxClicked(e){  
  if((e.target.innerText === "") && (turnCount < 9)){ 
    turnCount++
    console.log(turnCount)
    e.target.innerText = currentPlayer.exOrOh
    changePlayer() 
    }  
  let idValue = Number(e.target.getAttribute('id'));           
  currentPlayer.makeMove(idValue) 
    checkWin()                    
    if(checkWin() === true ){
      console.log('You won')
      winnerMessage.innerText = 'You won' 
    }               

}

function changePlayer (){
  console.log("changePlayer")
  if(currentPlayer === playerX){  
      currentPlayer = playerO
    }else{
      currentPlayer = playerX     
    }  
}

function checkWin(){
  winningConditions.forEach(condition => { 
    let matchList = condition.filter(boxNumber =>   currentPlayer.selections.includes(boxNumber)) 
      if(matchList.length === 3){   
        winStatus = true            
        return true                
      }
    })
  if(turnCount === 9 && winStatus === false){
    console.log('draw')
    console.log(winStatus)
    console.log(turnCount)
    winnerMessage.innerText='draw'
  }
  return winStatus                 
} 

function resetGame() {
  turnCount = 0
  winStatus = false
  let eachBox = document.querySelectorAll('.box')
  eachBox.forEach(box => {
    box.innerText = ''
  })

  winnerMessage.innerText = ''
  playerX.selections = []  
  playerO.selections = []
}

let winningConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]] 


