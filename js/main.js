//Steps:
// 1. create Players
// 2. assign x or o
// 3.player one clicks a square
// 4. x/o is placed where clicked
// 5. check to see if game is over or continuing
// 6. if game over,  check to see who won, alert winner, restart game maybe
// 7.if game continues, switch to next player repeat steps 5&6


//3.setting the game gameBoard

let gameBoard = (() =>{
  let board = ["", "", "", "", "", "", "", "", ""]

  let setBoard = (index, playerIcon) =>{
    if(index > board.length){
      return board[index] = playerIcon
      console.log(board[index] = playerIcon)
    }
  }

  let fillIn = (index) => {
    if(index > board.length){
      return board[index]
    }
  }
})


//1.creating player1/2
class Players{
  constructor(playerIcon){
    this.playerIcon = playerIcon;
  }
  getPlayerIcon(){
    return playerIcon
  }
}


let playerOne = new Players("X")
let playerTwo = new Players("O")
let round = 1
let roundOver = false

let playGameRound = (getIndex) => {
  gameBoard.setboard(getIndex, currentPlayerIcon())





  const currentPlayerIcon = () => {
    if (round % 2 === 1){
      return playerX.getplayerIcon()
    }else{
      return playerO.getplayerIcon();
    }
  }
}

//each of the 9 game gameSections
const gameSections = document.querySelectorAll(".gameSections")

//3. click event for gameSections
gameSections.forEach((selectSquare) => selectSquare.addEventListener("click", () => {
  console.log("square was selected")
}))




//6. array for the wining combos
const wins = [[0,1,2], [3, 4, 5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
