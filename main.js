//psuedo code
//https://www.youtube.com/watch?v=dtaZl_Uxzbo
//used help from  a youtube tutorial to make this project and help from AI to make it as OOP as possible 
//create a tic tac toe game
// I will need a board two players display turns and winner and stop the game when ther is a win

class Game {
    // A constructor initializes the game state
    //I have six propreties for the game 
    //gameElement is a div used to create the board
    //infodisplay will be used to display a text on UI
    //startcells will be used to make columns and rows
    //currentplayer shows whos turn is it
    //isgameactive is when the game starts
    //winingcombos are for wining possibilities 
    constructor() {
        this.gameElement = document.querySelector('#game');
        this.infoDisplay = document.querySelector('#info');
        this.startCells = ["", "", "", "", "", "", "", "", ""];
        this.currentPlayer = 'circle';
        this.isGameActive = true;
        this.winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
       //a method
        this.init();
    }

    // A method to start and reset the game
    init() {
        this.infoDisplay.textContent = 'Circle goes first';//displays who goes first
        this.gameElement.innerHTML = ""; // Clear the board on reset
        this.createBoard();//a method
    }

    // Method to create the game board in the DOM
    //used a foreach loop to create our cells in the board
    //gave it a class to style it
    //added eventlistener click to make the addgo method work
    //append creates new cells from the parent board
    createBoard() {
        this.startCells.forEach((_cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('square');
            cellElement.id = index;
            cellElement.addEventListener("click", this.addGo.bind(this));
            this.gameElement.append(cellElement);
        });
    }

   // Method to handle a player's move
addGo(e) {
    if (!this.isGameActive) return; // Prevent moves after the game ends

    const targetCell = e.target;
    // Check if the cell has already been played
    if (targetCell.firstChild) return;

    const goDisplay = document.createElement('div');
    goDisplay.classList.add(this.currentPlayer);
    targetCell.append(goDisplay);

    // Check for a win *before* switching players
    this.checkScore();
    
    // Only switch the player if the game is still active
    if (this.isGameActive) {
        this.currentPlayer = this.currentPlayer === 'circle' ? 'cross' : 'circle';
        this.infoDisplay.textContent = `It is now ${this.currentPlayer}'s go`;
    }
}

    // Method to check for winning conditions
    checkScore() {
        const allSquares = document.querySelectorAll(".square");
//using a loop and conditionals to ckeck wining combos
//using endgame method to stop the game after wining
        for (const combo of this.winningCombos) {
            const [a, b, c] = combo;
            const hasClass = allSquares[a].firstChild?.classList.contains(this.currentPlayer) &&
                             allSquares[b].firstChild?.classList.contains(this.currentPlayer) &&
                             allSquares[c].firstChild?.classList.contains(this.currentPlayer);
            
            if (hasClass) {
                this.infoDisplay.textContent = `${this.currentPlayer.charAt(0).toUpperCase() + this.currentPlayer.slice(1)} Wins!`;
                this.endGame();
                return;
            }
        }

        // Check for a draw
        const isDraw = [...allSquares].every(square => square.firstChild);
        if (isDraw) {
            this.infoDisplay.textContent = "It's a draw!";
            this.endGame();
        }
    }
    
    // Method to end the game by removing event listeners
    endGame() {
        this.isGameActive = false;
        const allSquares = document.querySelectorAll(".square");
        allSquares.forEach(square => square.removeEventListener("click", this.addGo));
    }
}

// Create a new instance of the game to start
const ticTacToeGame = new Game();
  






