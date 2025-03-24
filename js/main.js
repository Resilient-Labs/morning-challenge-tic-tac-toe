const tiles = document.querySelectorAll(".tile")
let gameStatus = document.querySelector("#gameStatus")
const resetButton = document.querySelector("#reset")
const winPossibilities = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let spaces = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "x"
let playing = false;

startGame()

function startGame(){
    tiles.forEach(tile => tile.addEventListener("click", displayTile))
    resetButton.addEventListener("click", resetGame)
    playing = true
}

function displayTile(){
    gameStatus.textContent = `It's ${currentPlayer}'s turn`
    let index = this.getAttribute("index")
    if (spaces[index] != "" || !playing){
        return
    }
    updateTile(this, index)
}

function updateTile(tile, index){
    spaces[index] = currentPlayer
    tile.innerText = currentPlayer
    checkWinner()
    switchPlayer()
}

function switchPlayer(){
    currentPlayer = (currentPlayer == "x") ? "o" : "x"
    gameStatus.innerText = `It's ${currentPlayer}'s turn`
}

function checkWinner(){
    let winnerWinner = false
    for(let i = 0; i < winPossibilities.length; i++){
        let possibility = winPossibilities[i]
        let tileOne = spaces[possibility[0]]
        let tileTwo = spaces[possibility[1]]
        let tileThree = spaces[possibility[2]]
        if(tileOne == "" || tileTwo == "" || tileThree == ""){
            continue
        }
        if(tileOne == tileTwo && tileTwo === tileThree){
            winnerWinner = true
            endStatus.textContent = `Congratulations! ${currentPlayer} won!`
            console.log(endStatus.textContent)
            playing = false
            break
        } else if(!spaces.includes("")){
            endStatus.textContent = `It's a tie! Play again.`
            playing = false
        }
    }
}

function resetGame(){
    spaces = ["", "", "", "", "", "", "", "", ""]
    currentPlayer = "x"
    playing = true
    tiles.forEach(tile => tile.innerText = "")
    gameStatus.textContent = `It's ${currentPlayer}'s turn`
}

/* ### Goal: Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.

pseudocode -> HTML -> js -> css

What can the user do?
1. click on button to choose who goes first as x
2. click on space to place their x/o

What can the user expect?
1. display x/o as your item
3. display scoreboard with outcome
    - 3 in a row for user -> win
    - tie or filled board with no win
    - 3 in a row for computer -> lose

What can the user see?
2. tile to display x/o on our turn
3. see scoreboard on the side with points
3. message alert for winner or loser */

//for loop playerTile then otherTile

//boolean value true 
// on click = is o true? display o
// 9 event listeners

// Original Work
/*let playerOneTile = ""
let playerTwoTile = ""
let turnCounter = 0

document.querySelector("#randomizer").addEventListener("click", getXOrO)
document.querySelector("#boxOne").addEventListener("click", tileClick)
document.querySelector("#boxTwo").addEventListener("click", tileClick)
document.querySelector("#boxThree").addEventListener("click", tileClick)
document.querySelector("#boxFour").addEventListener("click", tileClick)
document.querySelector("#boxFive").addEventListener("click", tileClick)
document.querySelector("#boxSix").addEventListener("click", tileClick)
document.querySelector("#boxSeven").addEventListener("click", tileClick)
document.querySelector("#boxEight").addEventListener("click", tileClick)
document.querySelector("#boxNine").addEventListener("click", tileClick)

function getXOrO(){
    let ranNum=Math.random()
    let playerTile = "x"
    if(ranNum<.5){
        playerTile = "o"
    }
    document.querySelector("#one").innerText = playerTile
    if(playerTile === "o"){
        otherTile = "x"
    }
    if (playerTile === "x"){
        otherTile = "o"
    }
    document.querySelector("#two").innerText = otherTile
    playerOneTile = playerTile 
    playerTwoTile = otherTile
}
}*/