

// let currentPlayer = '🗡️' 
// let currentGame = ["", "", "", "", "", "", "", "", ""]
// let gameActive = true
// const restartButton = document.querySelector('#restartBtn')
// const displayText = document.querySelector('#statusText')



//create a click event for boxes
boxClick = (event) => {
    const clickedBox = event.target
    const clickedBoxIndex = parseInt(clickedBox.getAttribute('cellIndex'))
        if (Board.game[clickedBoxIndex] !== "" || !Board.gameActive) {
            return;
        }
        Board.game[clickedBoxIndex] = Board.player
        clickedBox.innerText = Board.player
        Board.validateResults ()
        // displayText.innerText = `${currentPlayer} turn`
        Board.togglePlayer()      
    }

document.querySelectorAll('.box').forEach(box => box.addEventListener('click', boxClick));
document.querySelector('#restartBtn').addEventListener('click', Board.restartGame)



class Board {
    constructor (currentPlayer, currentGame, gameActive) {
        this.player = currentPlayer,
        this.game = currentGame,
        this.gameActive = gameActive
    }

    //initial Status
    initialStatus () {
        displayText.innerText = `player ${this.player} goes first`
    }

    //create a function to toggle players
    togglePlayer() {
        this.player === '🗡️' ? this.player = '🛡️' : this.player === '🛡️' ? this.player = '🗡️':
        console.log(this.player)
    }

    // checking if someone won
    validateResults() {
        if (this.Game[0] === this.Game[1] && this.Game[2] === this.Game[0] && this.Game[0] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }
        else if (this.Game[3] === this.Game[4] && this.Game[4] === this.Game[5] && this.Game[3] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }
        else if (this.Game[6] === this.Game[7] && this.Game[7] === this.Game[8] && this.Game[6] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }
        else if (this.Game[6] === this.Game[7] && this.Game[7] === this.Game[8] && this.Game[6] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }
        else if (this.Game[0] === this.Game[3] && this.Game[3] === this.Game[6] && this.Game[3] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }
        else if (this.Game[1] === this.Game[4] && this.Game[4] === this.Game[7] && this.Game[1] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }
        else if (this.Game[2] === this.Game[5] && this.Game[5] === this.Game[8] && this.Game[2] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }
        else if (this.Game[0] === this.Game[4] && this.Game[4] === this.Game[8] && this.Game[0] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }
        else if (this.Game[2] === this.Game[4] && this.Game[4] === this.Game[6] && this.Game[2] === this.player) {
            document.querySelector('#statusText').innerText = `player ${this.player} won`
            this.gameActive = false
        }

    }

    // restart
    restartGame = () => {
        this.gameActive = true
        this.Player = '🗡️'
        this.Game = ["", "", "", "", "", "", "", "", ""]
        document.querySelector('#statusText').innerText = `player ${this.player} goes first`
        document.querySelectorAll('.box').forEach(box => box.innerText = "");

    }
}


const board = new Board () 
let currentPlayer = new Board.player('🗡️')
let game = new Board.game(["", "", "", "", "", "", "", "", ""])
let gameActive = new Board.gameActive(true) 

