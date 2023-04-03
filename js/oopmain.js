

// let currentPlayer = '🗡️' 
// let currentGame = ["", "", "", "", "", "", "", "", ""]
// let gameActive = true
// const restartButton = document.querySelector('#restartBtn')
const displayText = document.querySelector('#statusText')


class Board {
    constructor (currentPlayer, currentGame, gameActive) {
        this.player = currentPlayer,
        this.game = currentGame,
        this.gameActive = gameActive
    }

    // static get displayText() { return this.displayText = `player ${this.player} goes first`; }

    //initial Status
    // this.displayText.innerText = `player ${this.player} goes first`

    //create a function to toggle players
    togglePlayer() {
        this.player === '🗡️' ? this.player = '🛡️' : this.player === '🛡️' ? this.player = '🗡️':
        console.log(this.player)
    }

    // checking if someone won
    validateResults() {
        if (this.game[0] === this.game[1] && this.game[2] === this.game[0] && this.game[0] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }
        else if (this.game[3] === this.game[4] && this.game[4] === this.game[5] && this.game[3] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }
        else if (this.game[6] === this.game[7] && this.game[7] === this.game[8] && this.game[6] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }
        else if (this.game[6] === this.game[7] && this.game[7] === this.game[8] && this.game[6] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }
        else if (this.game[0] === this.game[3] && this.game[3] === this.game[6] && this.game[3] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }
        else if (this.game[1] === this.game[4] && this.game[4] === this.game[7] && this.game[1] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }
        else if (this.game[2] === this.game[5] && this.game[5] === this.game[8] && this.game[2] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }
        else if (this.game[0] === this.game[4] && this.game[4] === this.game[8] && this.game[0] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }
        else if (this.game[2] === this.game[4] && this.game[4] === this.game[6] && this.game[2] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }

    }

    // restart
    restartGame = () => {
        this.gameActive = true
        this.Player = '🗡️'
        this.game = ["", "", "", "", "", "", "", "", ""]
        document.querySelector('#statusText').innerText = `player ${this.player} goes first`
        document.querySelectorAll('.box').forEach(box => box.innerText = "");

    }
}

const board = new Board ('🗡️', ["", "", "", "", "", "", "", "", ""], true)

displayText.innerText = `player ${board.player} goes first`

//create a click event for boxes
boxClick = (event) => {
    const clickedBox = event.target
    const clickedBoxIndex = parseInt(clickedBox.getAttribute('cellIndex'))
        if (board.game[clickedBoxIndex] !== "" || !board.gameActive) {
            return;
        }
        board.game[clickedBoxIndex] = board.player
        clickedBox.innerText = board.player
        board.validateResults ()
        // displayText.innerText = `${currentPlayer} turn`
        board.togglePlayer()      
    }

document.querySelectorAll('.box').forEach(box => box.addEventListener('click', boxClick));
document.querySelector('#restartBtn').addEventListener('click', board.restartGame)//create a click event for boxes






