

let currentPlayer = '🗡️' 
let currentGame = ["", "", "", "", "", "", "", "", ""]
let gameActive = true
const restartButton = document.querySelector('#restartBtn')
const displayText = document.querySelector('#statusText')


displayText.innerText = `player ${currentPlayer} goes first`


class Board {
    constructor (currentPlayer, currentGame, gameActive) {
        this.player = currentPlayer,
        this.game = currentGame,
        this.game = gameActive
    }




}

//create a click event for boxes
boxClick = (event) => {
    const clickedBox = event.target
    const clickedBoxIndex = parseInt(clickedBox.getAttribute('cellIndex'))
        if (currentGame[clickedBoxIndex] !== "" || !gameActive) {
            return;
        }
        currentGame[clickedBoxIndex] = currentPlayer
        clickedBox.innerText = currentPlayer
        validateResults ()
        // displayText.innerText = `${currentPlayer} turn`
        togglePlayer()
        
    }

document.querySelectorAll('.box').forEach(box => box.addEventListener('click', boxClick));

//create a function to toggle players
togglePlayer = () => {
    currentPlayer === '🗡️' ? currentPlayer = '🛡️' : currentPlayer === '🛡️' ? currentPlayer = '🗡️':
    console.log(currentPlayer)
}


// }

// checking if someone won
validateResults = () => {
    if (currentGame[0] === currentGame[1] && currentGame[2] === currentGame[0] && currentGame[0] === currentPlayer) {
        document.querySelector('#statusText').innerText = `player ${currentPlayer} won`
        gameActive = false
    }
    else if (currentGame[3] === currentGame[4] && currentGame[4] === currentGame[5] && currentGame[3] === currentPlayer) {
        document.querySelector('#statusText').innerText = `player ${currentPlayer} won`
        gameActive = false
    }
    else if (currentGame[6] === currentGame[7] && currentGame[7] === currentGame[8] && currentGame[6] === currentPlayer) {
        document.querySelector('#statusText').innerText = `player ${currentPlayer} won`
        gameActive = false
    }
    else if (currentGame[6] === currentGame[7] && currentGame[7] === currentGame[8] && currentGame[6] === currentPlayer) {
        document.querySelector('#statusText').innerText = `player ${currentPlayer} won`
        gameActive = false
    }
    else if (currentGame[0] === currentGame[3] && currentGame[3] === currentGame[6] && currentGame[3] === currentPlayer) {
        document.querySelector('#statusText').innerText = `player ${currentPlayer} won`
        gameActive = false
    }
    else if (currentGame[1] === currentGame[4] && currentGame[4] === currentGame[7] && currentGame[1] === currentPlayer) {
        document.querySelector('#statusText').innerText = `player ${currentPlayer} won`
        gameActive = false
    }
    else if (currentGame[2] === currentGame[5] && currentGame[5] === currentGame[8] && currentGame[2] === currentPlayer) {
        document.querySelector('#statusText').innerText = `player ${currentPlayer} won`
        gameActive = false
    }
    else if (currentGame[0] === currentGame[4] && currentGame[4] === currentGame[8] && currentGame[0] === currentPlayer) {
        document.querySelector('#statusText').innerText = `player ${currentPlayer} won`
        gameActive = false
    }
    else if (currentGame[2] === currentGame[4] && currentGame[4] === currentGame[6] && currentGame[2] === currentPlayer) {
        document.querySelector('#statusText').innerText = `player ${currentPlayer} won`
        gameActive = false
    }
}


// restart
restartGame = () => {
    gameActive = true
    currentPlayer = '🗡️'
    currentGame = ["", "", "", "", "", "", "", "", ""]
    document.querySelector('#statusText').innerText = `player ${currentPlayer} goes first`
    document.querySelectorAll('.box').forEach(box => box.innerText = "");

}

document.querySelector('#restartBtn').addEventListener('click', restartGame)

