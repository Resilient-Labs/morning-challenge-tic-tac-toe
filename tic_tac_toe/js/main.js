//Pseudo Code
//Write function that incldes event listener that gives X when clicked and then an 0 when clicked again 
//Write function that declares winner and ends game
//Write function that declares tie games 
//Write function to capture player X & Player 0 wins
//Write function to clear game board and reset game

let playerUno ="X"
let playerDos ="O"

let playerTurn = playerUno
const ticTacToeBoard =document.querySelectorAll('.ticTacSquare')

let board =Array.from(ticTacToeBoard)
board.forEach(square=>square.addEventListener('click', gameBegins))



let beginGame = playerUno
let endGame =false


//Write function that incldes event listener that gives X when clicked and then an 0 when clicked again 
function gameBegins(click) {
  console.log('Hello world')
  if (ticTacToeBoard.endGame === true) {
    alert("Winner")
  } else { 
    const ticTacSquare = click.target
    if (ticTacSquare.innerText === "") {
      takeTurn(ticTacSquare)
    }
  }
}

function takeTurn(ticTacSquare) {
  let index =board.indexOf(ticTacSquare)
  board[index]=playerTurn
  console.log(board)
  ticTacSquare.innerHTML = playerTurn
  if (playerTurn === playerUno) {
    playerTurn= playerDos
  } else {
    playerTurn = playerUno
  }
  checkWin()
}

//Check Win
function checkWin(){
  if (board[2]===board[5]&& board[5]===board[8]){
    alert("Winner")

  } 
  else if (board[1]===board[4] && board[4]===board[7]){
    alert("Winner")

  } 
  else if (board[0]===board[3]&& board[3]=== board[6]){
    alert("Winner")

  } 

  else if (board[0]===board[1]&& board[1]=== board[2]){
    alert("Winner")

  } 
  else if (board[3]===board[4]&& board[4]=== board[5]){
    alert("Winner")

  } 
  else if (board[6]===board[7]&& board[7]=== board[8]){
    alert("Winner")

  } 
  else if (board[0]===board[4]&& board[4]=== board[8]){
    alert("Winner")

  } 
  else if (board[2]===board[4]&& board[4]=== board[6]){
    alert("Winner")

  } 


}


// board[1]===board[4] && board[4]===board[7], board[0]===board[3]&& board[3]=== board[6]

//reset button
// let btn = document.createElement("button");
// btn.innerHTML = "Reset";
// btn.type = "submit";
// btn.name = "formBtn";
// document.body.appendChild(btn);

document.querySelector('.reset').addEventListener('click',reset)

function reset() {
  console.log('Goodnight')
  document.querySelectorAll('.board').forEach
  (function (){
   document.querySelectorAll('.ticTacSquare').innerText = ""
   console.log('Test')
  })
  alert('Reset Game')
}


// function clearGame(){
//   document.querySelectorAll('.box').forEach
//   (function (box){
//       box.innerText = ""
//       document.querySelector('#winner').innerText =" "
//       document.querySelector('#player').innerText ="X"
//   })
//   alert('Thanks for playing!')
//   stopClickFunction = false
//   boxes[0].style.background = 'red'
//   boxes[1].style.background = 'red'
//   boxes[2].style.background = 'red'
//   boxes[3].style.background = 'red'
//   boxes[4].style.background = 'red'
//   boxes[5].style.background = 'red'
//   boxes[6].style.background = 'red'
//   boxes[7].style.background = 'red'
//   boxes[8].style.background = 'red'
// }







// function handleCellPlayed(clickedCell, clickedCellIndex) {
//   /*
//   We update our internal game state to reflect the played move, 
//   as well as update the user interface to reflect the played move
//   */
//       gameState[clickedCellIndex] = currentPlayer;
//       clickedCell.innerHTML = currentPlayer;
//   }

//   function handlePlayerChange() {
//     currentPlayer = currentPlayer === "X" ? "O" : "X";
//     statusDisplay.innerHTML = currentPlayerTurn();
// }

// function restartGame() {
//   playerOne ="X"
//   gameState = ["", "", "", "", "", "", "", "", ""];
//   statusDisplay.innerHTML = currentPlayerTurn();
//   document.querySelectorAll('.cell')
//   .forEach(cell => cell.innerHTML = "")

// }

//Games Resets
// ticTacToeBoard.addEventListener('click', gameBoard.clickHandler)
// document.querySelector('.reset').addEventListener('click', gameBoard.reset)