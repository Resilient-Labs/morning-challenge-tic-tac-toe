// player representation
class Player {
    constructor(number, symbol) {
        this.number = number;
        this.symbol = symbol;
    }
}


//display board
class Board {
    constructor() {
        // boards are displayed by the ids
        // add querySelector for div grid
        // add a selector for the clear button
        this.box1 = document.querySelector("#box1");
        this.box2 = document.querySelector("#box2");
        this.box3 = document.querySelector("#box3");
        this.box4 = document.querySelector("#box4");
        this.box5 = document.querySelector("#box5");
        this.box6 = document.querySelector("#box6");
        this.box7 = document.querySelector("#box7");
        this.box8 = document.querySelector("#box8");
        this.box9 = document.querySelector("#box9");
        this.ticTacToeGrid = document.querySelector("#ticTacToeGrid");
        this.clear = document.querySelector("#clear")
    }
}


// a class for the game 
class Game {
    constructor() {
        this.player1 = new Player(1, "x");
        this.player2 = new Player(2, "o");
        this.board = new Board();
        this.currentPlayer = 1;

        // Add event listeners to clear the game & to click the boxes
        this.board.ticTacToeGrid.addEventListener("click", event => this.clickBox.call(this, event));
        this.board.clear.addEventListener("click", event => this.clickClear.call(this, event));
    }

        // function to clear the board
        clickClear(event) {
            document.querySelectorAll('section').forEach(section => section.innerText = "")
            document.querySelector(".text").innerText = ""
        }

    clickBox(event) {
        if (event.target.innerText !== "") return;

        if (this.currentPlayer === 1) {
            event.target.innerText = this.player1.symbol;
            this.checkForWin(1);
            this.currentPlayer = 2;
        }
        else {
            event.target.innerText = this.player2.symbol;
            this.checkForWin(2);
            this.currentPlayer = 1;
        }
    }

    // declaring variable for the boxes
    checkForWin(playerNumber) {
         // defining top row 
        const topLeft = this.board.box1.innerText;
        const topMiddle = this.board.box2.innerText;
        const topRight = this.board.box3.innerText;
        // defining middle row 
        const middleLeft = this.board.box4.innerText;
        const middleMiddle = this.board.box5.innerText;
        const middleRight = this.board.box6.innerText;
        // defining bottom row 
        const bottomLeft = this.board.box7.innerText;
        const bottomMiddle = this.board.box8.innerText;
        const bottomRight = this.board.box9.innerText;

         // Check if a player has gotten three in a row
        //!== makes sure that tl, ml,bl are not equal to empty "" string
        if (topLeft === topMiddle && topLeft === topRight && topLeft !== "") {
            // Display a message when the game ends
            document.querySelector(".text").innerText = `Player ${playerNumber} has won!`;
        } else if (middleLeft === middleMiddle && middleLeft === middleRight && middleLeft !== "") {
            // Display a message when the game ends
            document.querySelector(".text").innerText = `Player ${playerNumber} has won!`;
        } else if(bottomLeft === bottomMiddle && bottomLeft === bottomRight && bottomLeft !== "") {
            // Display a message when the game ends
            document.querySelector(".text").innerText = `Player ${playerNumber} has won!`;
        } // Check if a player has gotten three in a row (column)
        else if (topLeft === middleLeft && topLeft === bottomLeft && topLeft !== "") {
            // Display a message when the game ends
            document.querySelector(".text").innerText = `Player ${playerNumber} has won!`;
        } else if (topMiddle === middleMiddle && topMiddle === bottomRight && topMiddle !== "") {
            // Display a message when the game ends
            document.querySelector(".text").innerText = `Player ${playerNumber} has won!`;
        } else if (topRight === middleRight && middleRight === bottomRight && topRight !== "") {
            // Display a message when the game ends
            document.querySelector(".text").innerText = `Player ${playerNumber} has won!`;
        } // Check if a player has gotten three in a row (diagonal)
        else if (topLeft === middleMiddle && topLeft === bottomRight && topLeft !== "") {
            // Display a message when the game ends
            document.querySelector(".text").innerText = `Player ${playerNumber} has won!`;
        } else if (topRight === middleMiddle && topRight === bottomLeft && topRight !== "") {
            // Display a message when the game ends
            document.querySelector(".text").innerText = `Player ${playerNumber} has won!`;
        } 
    } 
}


const game = new Game();



