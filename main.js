class TicTacToe {
    constructor(board, status, reset) {
        this.boardElement = board;
        this.status = status;
        this.reset = reset;
        this.board = board;
        this.currentPlayer = 'X';
        this.isGameOver = false;
        this.winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        this.buildGrid();

        this.reset.addEventListener('click' , (event) => {this.resetGame()})
    }

    buildGrid() {
        this.boardElement.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            cell.addEventListener('click', (event) => this.handleCellClick(event));
            this.boardElement.appendChild(cell);
        }
        this.board = Array(9).fill(null);
    }

    handleCellClick({ target }) {
        const index = Number(target.dataset.index);
        if (this.board[index] || this.isGameOver) return;

        this.board[index] = this.currentPlayer;
        target.innerText = this.currentPlayer;

        target.classList.add(`${this.currentPlayer.toLowerCase()}-marker`);

        if (this.checkWin()) {
            this.endGame(`Player ${this.currentPlayer} WINS!`);
        } else if (this.checkTie()) {
            this.endGame('It\'s a tie!');
        } else {
            this.switchPlayer();
        }
    }

    checkWin() {
        return this.winningCombinations.some(([a, b, c]) =>
            this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]
        );
    }

    checkTie() {
        return !this.board.includes(null);
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.status.innerText = `Player ${this.currentPlayer}'s turn`;
    }

    endGame(message) {
        this.status.innerText = message;
        this.isGameOver = true;
    }

    resetGame(){
        for (let i = 0; i < 9; i++){
            console.log(this.board[i]);
            this.board[i] = '8'
        }
        this.board = Array(9).fill(null);
        console.log("im resetting the game")
    }
}


new TicTacToe(
    document.getElementById('game'),
    document.getElementById('status'),
    document.getElementById('reset')
);



