class TicTacToeGame{
    constructor(){
        this.board = ["", "", "", "", "", "", "", "", ""]
        this.player = "x"
    }

    playerMove(index) {
        if(this.board[index] === ""){
            this.board[index] = this.player
            this.switchPlayer()
            this.whoWon()
        }
    }

    anotherMove(index) {
        if (this.board[index] === '') {
            this.board[index] = this.player;
        }
    }
    
    takeTurns(){
    this.player = this.player === "x" ? "o" : "x"
    }

    whoWon(){
        let winPossibilities = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    
        for (strike of winPossibilities){ 
            let [a, b, c] = strike
            if (this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
            document.querySelector("h2").innerText = `Congratulations! ${this.board[x]} WINS!`
            }
        }
    }
}


/* ### Goal: Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.

pseudocode -> HTML -> js -> css

What can the user do?
1. click on button to choose who goes first as x
2. click on space to place their x/o

What can the user expect?
1. display x/o as your item
3. display scoreboard with outcome
    - 3 in a row for user -> win
    - tie or filled board with no win
    - 3 in a row for computer -> lose

What can the user see?
2. tile to display x/o on our turn
3. see scoreboard on the side with points
3. message alert for winner or loser */

//for loop playerTile then otherTile

//boolean value true 
// on click = is o true? display o
// 9 event listeners

/*function getXOrO(){
    let ranNum=Math.random()
    let playerTile = "x"
    if(ranNum<.5){
        playerTile = "o"
    }
    document.querySelector("#one").innerText = playerTile
    if(playerTile === "o"){
        otherTile = "x"
    }
    if (playerTile === "x"){
        otherTile = "o"
    }
    document.querySelector("#two").innerText = otherTile
    playerOneTile = playerTile 
    playerTwoTile = otherTile
    turnCounter = playerOneTile
}*/