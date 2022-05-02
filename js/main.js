
// Object class constructor to make each Player

class MakePlayer{
    constructor(exOrOh, playerTurn){
    this.selections = []                        //stores the id of the 
    this.exOrOh = exOrOh                        //player marker
    this.playerTurn = playerTurn
  } 
    
    makeMove(boxIndex) {              //shouldn't these be id value rather than boxIndex?
    this.selections.push(boxIndex)    //same here
  }
  }
  

let playerX = new MakePlayer ('X', true)        //the string 'X' and the first turn
let playerO = new MakePlayer ('O', false)       //the sting 'o' and the second turn

let currentPlayer = playerX 
let winMsg = document.querySelector(".whoWon")       
let whichPlayer =  document.querySelector("#whichPlayer")  
let turnCount = 0   
let winStatus = false     

let eachBox = document.querySelectorAll(".box")

const boxValue = document.querySelector(".boxes")    //placing section(.boxes) containing the 9 squares into variable boxValue
boxValue.addEventListener('click', whenBoxClicked)   //placing addEventListener on boxValue: click event - whenBoxClicked runs

let clear = document.querySelector("#clear") //event listener for reset button
clear.addEventListener('click', resetGame)

function whenBoxClicked(e){                     //e as a parameter means this function requires e(event) to run
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
            winMsg.innerText = 'We have a winner!!' 

          }               
      }

function changePlayer (){
console.log("changePlayer")
if(currentPlayer === playerX){      //Our currentPlayer always starts as playerX, so if no one has one after(duh), we switch
    whichPlayer.innerText = 'O\'s turn.'
    currentPlayer = playerO
  }else{
    whichPlayer.innerText = 'X\'s turn.'
    currentPlayer = playerX         //keeps the other player from putting down a marker - it stays currentPlayer's turn
  }  
}


 //winStatus reflects the state of the game - beginning of game has no winner, so false
//just providing a visual
//jump to winningConditions - we are going to perform these actions on each condition 

//we are filtering through each condition by taking each boxNumber(element in the condition array) and placing it in the .includes() method as an argument. The .includes() method(which returns a boolean value) then takes the boxNumber and runs through every element in the currentPlayer's selections array(the array logging the id number of every box into which they've placed a marker), only taking those that match. The matched numbers are taken by the .filter() method and placed into an array (this method works by taking elements that fulfill the requirements and creating a new array) This new array is then stored by the matchList variable..

//each winningConditions array has three elements inside, so you must match all three to win.
//if your matchList === 3, then we flip winStatus to true and you've won!


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
      winMsg.innerText='It\'s a Tie!'
    }
    return winStatus                 
  } 


function resetGame() {
    turnCount = 0
    winStatus = false
    winMsg.innerText = ''
    whichPlayer.innerHTML = ''
    let eachBox = document.querySelectorAll(".box")
    eachBox.forEach(box => {
    box.innerText = ''
        })
 }

let winningConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]] //all possible winning combinations

