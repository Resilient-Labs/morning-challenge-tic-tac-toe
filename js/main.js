const restart = document.querySelector('#restart')
let currentPlayer = 'X'
let gameCells = document.querySelectorAll('#cells')
let message = document.querySelector('#message')
 //returns a node list 
gameCells = Array.from(gameCells) //reassign node list into an array so that we can iterate through each cell and apply an event listener to all of them. Array.from is a prototype method. returns html collection -> transforms into array so we can use the forEach function 
class TicTacToeGame{
  constructor(){
    this.cells = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
  }


  checkWin(){
    const winSolution = 
    [ [0, 1, 2], 
      [3, 4, 5], 
      [6, 7, 8], 
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]
    //winOption is an array of numbers [0, 1 ,2]
    //.every returns boolean 
    let winResult = false
    winSolution.forEach(winOption => {
      if(winOption.every(index => 
      this.cells[index] === currentPlayer)){
        winResult = true 
        message.innerText = 'Winner!'
      }
    }) 
  
    return winResult

    //if any of this.cells are in an index combination = 
    //!any of the winSolutions! 
    //then display win and end game 
    //worked with mentor Michael Kazin 
   
  }

  checkTie(){
    let tie = this.cells.every((owner, index) => owner == 'X' || owner == 'O') 
    return tie 
  }
  updateData(index, owner){
    this.cells[index] = owner
  }
  restart(){
    this.cells = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
  
  }
}

let gameData = new TicTacToeGame()
restart.addEventListener('click', () => {
  gameData.restart()
  gameCells.forEach(cell => cell.innerText = '')
  message.innerText = '' //clear the game data and the html 
})

gameCells.forEach((cell, index) => {
  cell.addEventListener('click', () => { 
    if(cell.innerText != ''){   
      return 
    } 
    //if not empty, return. checks to see if cell has already been selected by player
    //if already clicked, return exits the addeventlistener function 

    cell.innerText = currentPlayer //change the selected cell to the og currentPlayer 'X'
    gameData.updateData(index, currentPlayer)
    didSomeoneWin() //checks for tie || win
    didWeTie() 

    currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
    //ternary: condition ? return values on true condition : return value if condition is false 
    //the currentPlayer == 'X' is the condition! == is comparison that will return a Boolean value 
    //if currentPlayer == x the ternary will return O, otherwise it returns x 
    //effectively switching the currentPlayer 
  }) 
})


function didWeTie(){
  // => without bracket implies return. with bracket you must specify return! 
  //every function takes a function as its paramter. just like the second parameter of add event listener 
  //function below checks to see if all cells are populated (game ends)
  //every checks return values from every function ran on each element (cell)
  //returns true if all of those return functions were 
  //let tie is being assigned a true value if each cell is populated 
  let tie = gameData.checkTie() 

  if(tie){
    document.querySelector('#message').classList.remove('hidden')
    //can be targeted in the css (if hidden has display none the remove will make it appear)
  }
}


function didSomeoneWin(){

 // [0, 1, 2] //0
 // [3, 4, 5] //1 index of the row is the quotient 
//[6, 7, 8] //2 index of the row!!! 6/3 =2
//+3 going down row
//[0] column is divisible by 3 and has % = 0 
// //first [1] (middle) column is % = 1 because its literally the first column
// // right column % = 2 (1 more than the middle)
// //quotient for dividing row by 3 

//   let plusThree = 0
//   let win = true 
//   for(let i = 0; i < 3; i++){
//     console.log(plusThree)
//     if(gameCells[plusThree].innerText !== currentPlayer){
//       win = false
//       break
//     }
//     plusThree += 3
//   } 
let winner = gameData.checkWin()
  if(winner){
    console.log('winner')
  }
} //y = mx + b
//


 

