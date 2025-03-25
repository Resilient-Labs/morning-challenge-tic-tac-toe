class Game {
    constructor() {
        this.grid = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    
        this.turnPlayer = 1;
        this.turnPlayerSymbol = {
            1: "x",
            2: "o"
        }
        
        this.gameWinner = null;
        this.setUpEventListeners();
    }

    setUpEventListeners() {
        const domCells = document.querySelectorAll(".cell");
        const nextGameButton = document.querySelector("button");

        domCells.forEach((e, i) => {
            const rowIndex = Math.floor(i / this.grid.length);
            const columnIndex = i % this.grid.length;

            e.addEventListener("click", this.handleClick.bind(this, rowIndex, columnIndex));
        });

        nextGameButton.addEventListener("click", this.restartGame.bind(this));
    }

    handleClick(rowIndex, columnIndex, event) {
        if (!this.gameWinner && this.grid[rowIndex][columnIndex] == null) {
            const symbol = this.turnPlayerSymbol[this.turnPlayer];
            this.grid[rowIndex][columnIndex] = symbol;

            event.target.classList.add("filled");
            event.target.firstChild.innerText = symbol;
            
            this.handleTurnTransition();
        }
    }

    checkForWin() {
        const winCondition =
        this.grid[0].every((e,i,arr) => e !== null && e === arr[0]) ||
        this.grid[1].every((e,i,arr) => e !== null && e === arr[0]) ||
        this.grid[2].every((e,i,arr) => e !== null && e === arr[0]) ||

        this.grid.every((e,i,arr) => e[0] !== null && e[0] === arr[0][0]) ||
        this.grid.every((e,i,arr) => e[1] !== null && e[1] === arr[0][1]) ||
        this.grid.every((e,i,arr) => e[2] !== null && e[2] === arr[0][2]) ||

        this.grid[0][0] !== null && this.grid[0][0] === this.grid[1][1] && this.grid[0][0] === this.grid[2][2] ||
        this.grid[0][2] !== null && this.grid[0][2] === this.grid[1][1] && this.grid[0][2] === this.grid[2][0];

        const tieCondition = this.grid.every(row => row.every(cell => cell !== null));

        if (winCondition) {
            this.gameWinner = this.turnPlayer;
        }
        else if (tieCondition) {
            this.gameWinner = 0;
        }
    }

    handleTurnTransition() {
        this.checkForWin();
        if (this.gameWinner == null) {
            this.turnPlayer = this.turnPlayer == 1 ? 2 : 1;
        } else {
            this.endGame();
        }
    }

    endGame() {
        const gameOverScreen = document.querySelector(".game-over");
        const winnerElement = document.querySelector(".game-over > span");
        winnerElement.innerText = this.gameWinner == 1 ? "Player 1 wins!" : this.gameWinner == 2 ? "Player 2 wins!" : "The game is a tie!";

        gameOverScreen.classList.add("active");
    }

    restartGame() {
        const gameOverScreen = document.querySelector(".game-over");
        const winnerElement = document.querySelector(".game-over > span");
        const domCells = document.querySelectorAll(".cell");

        winnerElement.innerText = "";
        domCells.forEach(e => e.classList.remove("filled"));
        domCells.forEach(e => e.firstChild.innerText = "");

        gameOverScreen.classList.remove("active");
        

        this.grid = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    
        this.turnPlayer = 1;     
        this.gameWinner = null;
    }
}

const game = new Game;