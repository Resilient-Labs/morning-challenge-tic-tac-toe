// Morning Challenge: create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.

//measures the player based on the click. so if the click leaves no remainder, then it's x and if the click leaves a remainder it's 0
//function that compares the secions in conditionals to check for if there is a winner
document.getElementById("gameBox").addEventListener("click", playGame);
document.querySelector("button").addEventListener("click", clearBoard);


const gameBoard = new Board();

let boxes = document.querySelectorAll("section");
//variables
let results = document.getElementById("theResult");

// let clicks = 0;
// gameBoard.board = gameBoard.board.forEach((prev, cur, i) => {return prev = ' '})
// gameBoard.updateBoxes()
function playGame(e) {
//   const index = [...boxes].indexOf(e.target);
//   if (!gameBoard.fillBox(index)) {
//     return;
//   }
//   e.target.innerText = gameBoard.decision;
    gameBoard.fillBox(e)
  //   if (clicks % 2 === 0) {
  //     e.target.innerText = "x";
  //   } else {
  //     e.target.innerText = "o";
  //   }
  //   clicks++;

//   console.log("whoa it this " + clicks + "many");
  gameBoard.checkwinner()
  console.log(gameBoard.board)

}

function clearBoard(){
    gameBoard.clear()
    results.innerText = 'new game'
}

// function deleteBoard(){
//     document.querySelectorAll('section').forEach((box, index)=> {
//         box.innerText = this.board[index] || ''
//     })
// }





// you create an if else statement that targets that section, comparing the values of the array innertext
    //arr[0] === arr[1] && arr[0] === arr[2]
//a conditional that checks the element in the array for a value, and then clears the entire board

// function checkWinner(){
//     console.log(boxes)
//     if (boxes[0].innerText === boxes[1].innerText && boxes[0].innerText === boxes[2].innerText && boxes[0].innerText !== ''){
//         results.innerText = 'you win!!!'
//     }else if(boxes[3].innerText === boxes[4].innerText && boxes[4].innerText === boxes[5].innerText && boxes[3].innerText !== ''){
//         results.innerText = 'you win!!!'
//     }else if(boxes[6].innerText === boxes[7].innerText && boxes[7].innerText === boxes[8].innerText && boxes[6].innerText !== ''){
//         results.innerText = 'you win!!!'
//     }else if (boxes[0].innerText === boxes[3].innerText && boxes[3].innerText === boxes[6].innerText && boxes[0].innerText !== ''){
//         results.innerText = 'you win!!!'
//     }else if(boxes[1].innerText === boxes[4].innerText && boxes[4].innerText === boxes[7].innerText && boxes[1].innerText !== ''){
//         results.innerText = 'you win!!!'
//     }else if(boxes[2].innerText === boxes[5].innerText && boxes[5].innerText === boxes[8].innerText && boxes[2].innerText !== ''){
//         results.innerText = 'you win!!!'
//     }else if(boxes[0].innerText === boxes[4].innerText && boxes[4].innerText === boxes[8].innerText && boxes[0].innerText !== ''){
//         results.innerText = 'you win!!!'
//     }else if(boxes[2].innerText === boxes[4].innerText && boxes[4].innerText === boxes[6].innerText && boxes[2].innerText !== ''){
//         results.innerText = 'you win!!!'
//     }else if(boxes[0].innerText !== '' && boxes[1].innerText !== '' && boxes[2].innerText !== '' && boxes[3].innerText !== '' && boxes[4].innerText !== '' && boxes[5].innerText !== '' && boxes[6].innerText !== '' && boxes[7].innerText !== '' && boxes[8].innerText !== '' ){
//         results.innerText = 'nobody won'
//     }
// }

// function clearBoard(){

//     if ((boxes[0].innerText === 'x' || boxes[0].innerText === 'o' )){
//         document.querySelectorAll('.toe').forEach(toe => toe.textContent = '')
//     }
//     results.innerText = ' '
// }
