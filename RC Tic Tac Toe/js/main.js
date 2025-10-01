const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

class Game {
    constructor(containerName) {
        this.container = document.querySelector(`[name = "${containerName}"]`)
        this.cells = this.container.querySelectorAll(".cell");
        this.statusText = this.container.querySelector("#statusText");
        this.restartBtn = this.container.querySelector("#restartBtn");
        this.options = ["", "", "", "", "", "", "", "", ""];
        this.currentPlayer = "X";
        this.running = false;
        this.initializeGame();
    }

    initializeGame() {
        this.cells.forEach(cell => cell.addEventListener("click", (game)=>{this.cellClicked(cell)}));
        this.restartBtn.addEventListener("click", (game)=>{this.restartGame(this)});
        this.statusText.textContent = `${this.currentPlayer}'s turn`;
        this.running = true;
    }
    cellClicked(cell) {

        const cellIndex = parseInt(cell.getAttribute("cellIndex"));
        if (this.options[cellIndex] != "" || !this.running) {
            return;
        }

        this.updateCell(cell, cellIndex);
        this.checkWinner();
    }
    updateCell(cell, index) {
        this.options[index] = this.currentPlayer;
        cell.textContent = this.currentPlayer;
    }
    changePlayer() {
        this.currentPlayer = (this.currentPlayer == "X") ? "O" : "X";
        this.statusText.textContent = `${this.currentPlayer}'s turn`;
    }
    checkWinner() {
        let roundWon = false;

        for (let i = 0; i < winConditions.length; i++) {
            const condition = winConditions[i];
            const cellA = this.options[condition[0]];
            const cellB = this.options[condition[1]];
            const cellC = this.options[condition[2]];

            if (cellA == "" || cellB == "" || cellC == "") {
                continue;
            }
            if (cellA == cellB && cellB == cellC) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            this.statusText.textContent = `${this.currentPlayer} wins!`;
            this.running = false;
        }
        else if (!this.options.includes("")) {
            this.statusText.textContent = `Draw!`;
            this.running = false;
        }
        else {
            this.changePlayer();
        }
    }
    restartGame(game) {
        game.currentPlayer = "X";
        game.options = ["", "", "", "", "", "", "", "", ""];
        console.log(this)
        game.statusText.textContent = `${game.currentPlayer}'s turn`;
        game.cells.forEach(cell => cell.textContent = "");
        game.running = true;
    }
}

let game = new Game('board')
let game2 = new Game('board2')



// Citation BroCodez & M.Kazin
// href: https://www.youtube.com/watch?v=AnmwHjpEhtA&list=WL&index=5