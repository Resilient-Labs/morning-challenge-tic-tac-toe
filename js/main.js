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

const boxValue = document.querySelector(".boxes")    //placing section(.boxes) containing the 9 squares into variable boxValue
boxValue.addEventListener('click', whenBoxClicked)   //placing addEventListener on boxValue: click event - whenBoxClicked runs

let clear = document.querySelector("#clear")
clear.addEventListener('click', resetGame)

  

function whenBoxClicked(e){ 
  if(e.target.innerText === ""){ 
  // while (turnCount < 9){
  turnCount++   
  // }  
//if the target of the event is an empty string, execute these instructions:
  e.target.innerText = currentPlayer.exOrOh   //currentPlayer's exOrOh value in the target's innerText - first turn = the string 'X'
  let idValue = e.target.getAttribute('id'); //.getAttribute() grabs value of attribute(id of targeted boxes) - we placed into idValue
  idValue = Number(idValue)            //reassigning idValue - converting the strings from the e.target's id('1', '2'...) into numbers
  currentPlayer.makeMove(idValue) //executes makeMove on the currentPlayer - makeMove is pushing the idValue into the selections array
    checkWin()                    //calling checkWin() function - jump to checkWin()
    if(checkWin() === true ){
      winnerMessage.innerText = `Winner: Player ${currentPlayer.exOrOh}!` 
    }
    changePlayer()                //calling changePlayer() function - jump to changePlayer()
  }

    
}

function changePlayer (){

  if(currentPlayer === playerX){      //Our currentPlayer always starts as playerX, so if no one has one after(duh), we switch
      currentPlayer = playerO
    }else{
      currentPlayer = playerX         //keeps the other player from putting down a marker - it stays currentPlayer's turn
    }  
    document.querySelector("#whichPlayer").innerText = ` Next: Player ${currentPlayer.exOrOh}`
}


function checkWin(){
                //winStatus reflects the state of the game - beginning of game has no winner, so false
  // console.log(winningConditions)     //just providing a visual
  // console.log(currentPlayer.selections)  //twinsies
  winningConditions.forEach(condition => { //jump to winningConditions - we are going to perform these actions on each condition   
    let matchList = condition.filter(boxNumber =>   currentPlayer.selections.includes(boxNumber)) 

//we are filtering through each condition by taking each boxNumber(element in the condition array) and placing it in the .includes() method as an argument. The .includes() method(which returns a boolean value) then takes the boxNumber and runs through every element in the currentPlayer's selections array(the array logging the id number of every box into which they've placed a marker), only taking those that match. The matched numbers are taken by the .filter() method and placed into an array (this method works by taking elements that fulfill the requirements and creating a new array) This new array is then stored by the matchList variable..

      if(matchList.length === 3){   //each winningConditions array has three elements inside, so you must match all three to win.
        winStatus = true            //if your matchList === 3, then we flip winStatus to true and you've won!
        document.querySelector('.boxes').classList.add("stopClick")
        document.querySelector("#whichPlayer").classList.add("dispNone")
        return true                 //idk why these are here tbh because where are we returning this?
      }else if((turnCount === 9) && (winStatus === false)){
        winnerMessage.innerText='Draw!'
        document.querySelector("#whichPlayer").classList.add("dispNone")
      }
    
    })
  return winStatus                 
} 

function resetGame() {
  window.location.reload();
  turnCount = 0
  winStatus = false
  winnerMessage.innerText = ''
  currentPlayer.selections = []
  // document.querySelectorAll('.box').reset()
  document.querySelector('.boxes').classList.toggle("stopClick")
  document.querySelector("#whichPlayer").classList.add("dispNone")
  // for (let i=0; i<allXO.length; i++){
  //   return allXO[i] = " "
  // }

  // let childrenOfBoxes = document.querySelector('.boxes').contents()
  // console.log(childrenOfBoxes)
  // includes
// }).remove();​​​​​​​
  // document.querySelectorAll('.box').innerText.replaceAll('O',' ')
  // playerX.selections = []  
  // playerO.selections = []
}

let winningConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]] //all possible winning combinations

//LEFT TO DO: prevent players from continuing game after win reset button


// Reset Psuedocode

// empty box strings -
// reset counter -
// clear winnerMessage.innerText -
// clear selections array -
// winStatus=false - 

// issues


