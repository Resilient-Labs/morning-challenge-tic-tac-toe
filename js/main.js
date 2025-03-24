//Goal: Create a two player Tic-Tac-Toe game. 
// The users should be able to click to place their X or O
// And if they win the program should mention their win in the DOM. 
// Please make the game as OOP as possible.
//Make 3 objects
// gameboard object and updates it 
// player object that holds name and symbol
// game object with turns and win checks

//User clicks on a box
//Calls function onUserSelectBox()
    //Check if box is empty
        //false - display you cant move here
        //true - display symbol
    //Check if win
        //false - computer moves
        //true - alert('congrats')

//create class player that has name of player and saves their symbol whether team X or O
 class Player {
     constructor(name, symbol) {
         this.name = name;
         this.symbol = symbol;
     }
 }
 //create class of the game, that stores 9 empty squares of the tic tac toe board, starting each empty inside
 class Game {
     constructor() {
         this.board = ['', '', '', '', '', '', '', '', ''];
         this.players = [new Player("Player 1", "X"), new Player("Player 2", "O")];
         this.currentPlayer = this.players[0]; // First Player is Player 1
         this.gameOver = false;
         this.winCombos = [
             [0, 1, 2], [3, 4, 5], [6, 7, 8], // Row combos w index of arrays, example- 0,1,2 is top row, 3,4,5 is mid row, 6,7,8 is bot row
             [0, 3, 6], [1, 4, 7], [2, 5, 8], // Column combos
             [0, 4, 8], [2, 4, 6]  // Diagonal combos
         ];
     }
 
     makeMove(index) {
         if (this.board[index] === '' && !this.gameOver) {
             this.board[index] = this.currentPlayer.symbol;
             document.getElementById(`d${index + 1}`).innerText = this.currentPlayer.symbol;
             // add plus one since divs start d1 and indexes start at 0 counting ^
             if (this.checkWin()) {
                 document.getElementById("winMessage").innerText = `${this.currentPlayer.name} is the WINNER WINNER CHICKEN DINNER!`;
                 this.gameOver = true;
                 return;
             }
             
             this.currentPlayer = (this.currentPlayer === this.players[0]) ? this.players[1] : this.players[0];
         }
     }

 //Check if any of those three-in-a-row spots are filled with same symbol X or O
// Look at all possible ways to win (rows, columns, diagonals).
// For each winning combo, check:
// - Are all three squares filled?
// - Do they all contain the same symbol ("X" or "O")?
// If YES → The player has won.
// If NO → Keep playing.
     checkWin() {
         return this.winCombos.some(combo => 
             this.board[combo[0]] !== '' &&
             this.board[combo[0]] === this.board[combo[1]] &&
             this.board[combo[1]] === this.board[combo[2]]
         );
     }
 //sets every square to empty strings again to reset and play nother round
     resetGame() {
         this.board = ['', '', '', '', '', '', '', '', ''];
         this.currentPlayer = this.players[0];
         this.gameOver = false;
         document.getElementById("winMessage").innerText = '';
         document.querySelectorAll('.square').forEach(square => square.innerText = '');
     }
 }
 
 // Start new tic tac toe game
 const game = new Game();
 
 // Add event listeners to squares w click
 document.querySelectorAll('.square').forEach((square, index) => {
     square.addEventListener("click", () => game.makeMove(index));
 });
 
 // Reset button n game clears board
 document.getElementById("reset").addEventListener("click", () => game.resetGame());


//Last Attempt Start        
// function Player(name, symbol) {
//     this.name = name;
//     this.symbol = symbol;
// }

// class Game {
//     constructor() {
//         this.board = ['', '', '', '', '', ' ', '', '', ''];
//         this.player = [new Player("Player 1", "X"), new Player("Player 2", "O")];
//         this.currentPlayer = this.player[0]; //First Player is Player 1 since it is 0 in index
//  }
// };

// //Method to make a move on square
// this.makeMove = function(index){
//     if(this.board.[index] === ""){
//         this.board.[index] = this.currentPlayer.symbol;
//         if (this.checkWin(row, column))    
//     }
// }


// const winCombos = [
//     [0, 1, 2], // Rows
//     [3, 4, 5], // Rows
//     [6, 7, 8], // Rows
//     [0, 3, 6], // Columns
//     [1, 4, 7], // Columns
//     [2, 5, 8], // Columns
//     [0, 4, 8], //Diagonals
//     [2, 4, 6]  //Diagonals
// ];

// this.checkWin = function( ,) {

// }

// const showWinner = (winner) => {
//     msg.innerText = `Congrats, Player ${winner} is the Winner!`;
//     disableBoxes();
// };
//Last attempt end

//SECONDARY ATTEMPT START
// let boxes = document.querySelectorAll('.square');
// let resetBtn = document.querySelector('#reset');
// let turnX = true; //Player X start
// let msg = document.querySelector('#winMessage');
// //All possible winning combinations, rows, columns and diagonals
// const winCombos = [
//     [0, 1, 2], 
//     [3, 4, 5], 
//     [6, 7, 8], // Rows
//     [0, 3, 6], 
//     [1, 4, 7], 
//     [2, 5, 8], // Columns
//     [0, 4, 8], 
//     [2, 4, 6]  //Diagonals
// ];
//END SECONDARY ATTEMPT!


//Third Attempt Start
//  //User clicks on a box

// //Create empty board of boxes, as an array, empty for now, gameBoardGrid Object

// //Create players and assign teams, x or o symbol

// //Assign player names

// //Start with player 1 and order of turns

// //changes turn to next player after a move

// let game = new Game(player1, player2);

// //Event listener click per square

// // Add event listener to reset button
