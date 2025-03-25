//creates class player that holds info like that player number and a value for symbol
class Player {
    constructor(number, symbol) {
        this.number = number;
        this.symbol = symbol;
    }
}
//creates board with all these different spaces
class Board {
    constructor() {       
        // Lays out and targets each of the 9 squares
        // est this instance for each selected square on 3 by 3 tic tac toe grid
        this.squareTopLeft = document.querySelector("#squareTopLeft");
        this.squareTopMiddle = document.querySelector("#squareTopMiddle");
        this.squareTopRight = document.querySelector("#squareTopRight");
        this.squareMidLeft =  document.querySelector('#squareMidLeft');
        this.squareMidMid =  document.querySelector('#squareMidMid');
        this.squareMidRight =  document.querySelector('#squareMidRight');
        this.squareBotLeft =  document.querySelector('#squareBotLeft');
        this.squareBotMid =  document.querySelector('#squareBotMid');
        this.squareBotRight =  document.querySelector('#squareBotRight');
    }
}
//creates class game with rules and est players with a specific number and symbol either X or O to play
class Game {
    constructor() {
        this.player1 = new Player(1, "X");
        this.player2 = new Player(2, "O");
        this.board = new Board();

        // Controls order of player turns
        this.currentPlayer = 1;

        this.resetButton = document.querySelector("button");
        this.resetButton.addEventListener("click", () => this.resetGame());

        // Event listeners on every click per each square to run event function
        this.board.squareTopLeft.addEventListener("click", event => this.clickSquare.call(this, event));
        this.board.squareTopMiddle.addEventListener("click", event => this.clickSquare.call(this, event));
        this.board.squareTopRight.addEventListener("click", event => this.clickSquare.call(this, event));
        this.board.squareMidLeft.addEventListener("click", event => this.clickSquare.call(this, event));
        this.board.squareMidMid.addEventListener("click", event => this.clickSquare.call(this, event));
        this.board.squareMidRight.addEventListener("click", event => this.clickSquare.call(this, event));
        this.board.squareBotLeft.addEventListener("click", event => this.clickSquare.call(this, event));
        this.board.squareBotMid.addEventListener("click", event => this.clickSquare.call(this, event));
        this.board.squareBotRight.addEventListener("click", event => this.clickSquare.call(this, event));
    }
//allows click to only ron on empty squares
    clickSquare(event) {
        if (event.target.innerText !== "") return;
        //removes old player class for color displays every turn
        event.target.classList.remove("player1", "player2");

//adds symbol n runs on each innertext of target square so it displays symbol inside
        if (this.currentPlayer === 1) {
            event.target.innerText = this.player1.symbol;
            event.target.classList.add("player1");
            this.checkForWin(1);
            this.currentPlayer = 2;//switches to next player turn
        }
        else if(this.currentPlayer === 2){
            event.target.innerText = this.player2.symbol;
            event.target.classList.add("player2");
            this.checkForWin(2);
            this.currentPlayer = 1;//switches back to player1
        }
    }

    // Win checks to see if players hit 3 squares in a row on the board
    checkForWin(playerNumber) {
        const d1 = this.board.squareTopLeft.innerText;
        const d2 = this.board.squareTopMiddle.innerText;
        const d3 = this.board.squareTopRight.innerText;
        const d4 = this.board.squareMidLeft.innerText;
        const d5 = this.board.squareMidMid.innerText;
        const d6 = this.board.squareMidRight.innerText;
        const d7 = this.board.squareBotLeft.innerText;
        const d8 = this.board.squareBotMid.innerText;
        const d9 = this.board.squareBotRight.innerText;
// declares const d1-9 for each square left to right, top to down
//shows all winning combos below, and makes sure not empty string for the first squares
        if (
            (d1 !== "" && d1 === d2 && d2 === d3) ||
            (d4 !== "" && d4 === d5 && d5 === d6) ||
            (d7 !== "" && d7 === d8 && d8 === d9) ||
            (d1 !== "" && d1 === d4 && d4 === d7) ||
            (d2 !== "" && d2 === d5 && d5 === d8) ||
            (d3 !== "" && d3 === d6 && d6 === d9) || 
            (d1 !== "" && d1 === d5 && d5 === d9) ||
            (d3 !== "" && d3 === d5 && d5 === d7)
        ) {
            document.querySelector("#winMessage").innerText = `Player ${playerNumber} is a WINNER WINNER CHICKEN DINNER!`;
        }
    }
//resets game to all squares starting w empty strings for next round
    resetGame() {
        this.board.squareTopLeft.innerText = "";
        this.board.squareTopMiddle.innerText = "";
        this.board.squareTopRight.innerText = "";
        this.board.squareMidLeft.innerText = "";
        this.board.squareMidMid.innerText = "";
        this.board.squareMidRight.innerText = "";
        this.board.squareBotLeft.innerText = "";
        this.board.squareBotMid.innerText = "";
        this.board.squareBotRight.innerText = "";

        document.querySelector("#winMessage").innerText = "";
        this.currentPlayer = 1;
    }//resets win message as well to play again
}

const game = new Game();

// //pull request message
// //I completed the challenge: 5
// I feel good about my code: 2
// Anything specific on which you want feedback: I am not comfortable with the code, I tried my best to make it as object oriented as possible with constructors, arrays and classes. I still feel a disconnect trying to piece together new information or content we learned, codeacademy and the in-class Car Factory practice definitely helped. Had to watch the 100Devs episode on constructors, arrays and objects as well to hear it once over again.