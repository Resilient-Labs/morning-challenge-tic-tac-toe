// Goal: Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.

const placeHolder = document.querySelector('#placeHolder');
const blocks = document.querySelectorAll('#block')


const winningCondition = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],   //rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8],   //columns
      [0, 4, 8], [2, 4, 6]               //diagonals
    ];
//array for each block on the game board

let board = ["", "", "", "", "", "", "", "", ""]; 
let currentPlayer = "X";
let gameOn = false;
startGame();

//functions

function startGame(){
  blocks.forEach(block => block.addEventListener("click", blockClicked))
  placeHolder.textContent = currentPlayer;
  gameOn = true;

}
//function to show what will happen when a player clicks on the block

function blockClicked(){
    const onclick = this.getAttribute("onclick");

    if(board[onclick] != "" || !gameOn){
        return;
    }

  updateBlock(this, onclick)
  findWinner();
}
function updateBlock(block, index){
    board[index] = currentPlayer;
    block.textContent = currentPlayer;

}
//changing a player function to the next player if one plays his turn.
function changePlayer(){
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    placeHolder.textContent = currentPlayer;
    

}

function findWinner(){
    let roundCompleted = false;
    for(let i = 0; i <= 7; i++){
        const winning = winningCondition[i];
        const a = board[winning[0]];
        const b = board[winning[1]];
        const c = board[winning[2]];

    // if the blocks are empty, the game is still on and no winner yet
        if (a === "" || b === "" || c === "") {
            continue;
      }
    //checking the winner: if one of the winning conditions is same, we have the winner
      if (a === b && b === c){
        roundCompleted = true;
        break;
      }
 }
 if(roundCompleted){
    placeHolder.textContent = `${currentPlayer} won!!!`;
    gameOn = false; //if X or O wins, the game stops and they play again.
    return;
 }
 else if(!board.includes("")){
    placeHolder.textContent = `Tie-Refresh To Play Again`;
    gameOn = false; 

 }
 else{
    changePlayer();
 }

 }
    
//I Watched this youtube video and helped me to understand more about the game winning functions 
//https://www.youtube.com/watch?v=AnmwHjpEhtA&t=939s