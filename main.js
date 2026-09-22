class TicTacToe {
    constructor() {
        // grab elements from the html
        this.cells = document.querySelectorAll('.cell');
        this.status = document.querySelector('#status');
        this.restart = document.querySelector('#restart');

        // add the winning combinations
        this.winComb = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            [0, 4, 8],
            [2, 4, 6]
        ];

        //listen for cell click
        this.cells.forEach((cell, index) => {
            cell.addEventListener('click', () => {
                this.handleClick(cell, index);
            });
        });

        //listen for restart
        this.restart.addEventListener('click', () => {
            this.init();
        });

        //start game
        this.init();
    }

    // initialize or restart game variables and event listeners
    init() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.isActive = true;
        this.cells.forEach(cell => {
            cell.textContent = '';
        });
        this.status.textContent = "Player X's turn";
    }

    //process a click
    handleClick(cell, index) {
        //dont allow clicks on used cells or game end
        if (this.board[index] !== '' || !this.isActive) {
            return;
        }

        //add x or o to board and array
        this.board[index] = this.currentPlayer;
        cell.textContent = this.currentPlayer;

        //check game
        this.checkForResult();
    }


    //toggle turns
    changePlayer() {
        if (this.currentPlayer === 'X') {
            this.currentPlayer = 'O';
        } else {
            this.currentPlayer = 'X';
        }
        this.status.textContent = `Player ${this.currentPlayer}'s turn`;
    }

    //test for any win conditions met
    checkForResult() {
        let win = false;

        for (let i = 0; i < this.winComb.length; i++) {
            const [x, y, z] = this.winComb[i];

            if (this.board[x]!== '' && this.board[x] === this.board[y] && this.board[x] === this.board[z]) {
                win = true;
                break;
            }
        }

        //someone won
        if (win) {
            this.status.textContent = `Player ${this.currentPlayer} wins!`;
            this.isActive = false;
            return;
        }

        //draw if no empty slots left
        if (!this.board.includes('')) {
            this.status.textContent = 'Game ended in a draw!'
            this.isActive = false;
            return;
        }

        //no winner yet switch players and continue
        this.changePlayer();

    }


}

const newGame = new TicTacToe();