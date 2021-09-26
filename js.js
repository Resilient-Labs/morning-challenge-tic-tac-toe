

//a function that has an event listener for a click and produces an x, then immediately an event listener for a click that will produce o

var gameBoard = ['','','','','','','','','']
const playerOne = "X";
const playerTwo = "0";
let turn = 0

//variable with an array with win combos of each cell 
const winCombo = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
]
// loop through winCombos and check 

for (var i = 0; i < winCombo.length; i++) {
  let combo = winCombo[i]
  if (gameBoard[combo[0]] === '' || gameBoard[combo[1]] === '' || gameBoard[combo[2]] === '') {
    continue
  }
  if (gameBoard[combo[0]] === gameBoard[combo[1]] && gameBoard[combo[1]] === gameBoard[combo[2]]) {
    win = true
    console.log(win)
    break
  }
// the below box variable stores a reference from html and dqsa selects each element that has class BOX
const box = document.querySelectorAll('.box');
startGame();

function startGame() {
  document.querySelector(".endGame")
  gameBoard = Array.from(Array(9).keys());

//function that determines players turn 
function takeTurn(){


  if (turn % 2 === 0){
    playerOne.takeTurn();
  }else {
    playerTwo.takeTurn();
  }

  turn++;
}

function playerOne() {
  this.takeTurn = function() {
    console.log('Player One turn')
  }
}
  
  for (var i= 0; i < box.length; i++) {
    box[i].innerText = '';
    box[i].style.removeProperty('background-color')
    box[i].addEventListener('click', turnClick, false)
}







function getWinner() {
let winner = winningMix
return winner

}

//a function that declares when there is a tie
//a function to count the number of wins and reset the game
// a function to clear to the game and start */
}}