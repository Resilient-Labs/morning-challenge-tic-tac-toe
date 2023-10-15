//How does Tic Tac Toe Work??

//There are two players
//Each player can play either X || O
//Each time a player takes their turn, it switches to the next player's turn 
//When either one of the player has 3 matching in a row OR it is a tie, game ends 


//First let's create the player. The first player always starts with X

let currentPlayer = 'X'

//Then let's assign a place for the determination of the game to show 

let winLoseTie = document.querySelector('p')

//Next I want to make the cells into an array so i can use index to target each cell.

let cells = document.querySelectorAll('.cells')

console.log(cells)

//Turn into an array

cells = Array.from(cells) //Turns nodeList into an array for me to work with 

console.log(cells)


//Now I want to loop through each cell

cells.forEach(cell => {
    //create a smurf (or event listener) for when player clicks on a cell of the board
    cell.addEventListener('click', () => {
        ///I want to make it so when a player chooses a cell, if the cell is already filled they can't place their mark.
        if (cell.innerText != '') {
            return
        }

        //create new gameboard object to initalize it 
        const ticTacToeBoard = new GameBoard()

        // when the player clicks on a cell, the click inserts the player's mark (X || O)
        cell.innerText = currentPlayer

        //check board for a win 
        ticTacToeBoard.checkForWin()

        //check board for a draw
        ticTacToeBoard.checkforDraw()


        //Then once the current player places their mark I want to switch players
        if (currentPlayer === 'X') {
            return currentPlayer = 'O'
        } else {
            return currentPlayer = 'X'
        }

    })
})

//I want to be able to reset the board to play a new game

//Add a smurf(event listener) so when new game button is pressed it runs a function

document.querySelector('#new-game').addEventListener('click', () => {
    //loop through cells and clear them
    cells.forEach(cell => cell.innerText = '')
    //reset player back to X 
    currentPlayer = 'X'
    //reset winlosetie annoucement
    winLoseTie.innerHTML = ''
    console.log('resetting')
})



//I want to create a class that creates a gameboard. 

class GameBoard {
    //No parameters needed for this that I can think of, can you have a class without a constructor? 
    constructor() {}

    //I want to make a method to check for win, specific cells need to be have the same values for a win.

    checkForWin() {
        //check for the win conditions! There should be 8 winning combinations
        if (cells[0].innerText === currentPlayer && cells[1].innerText === currentPlayer && cells[2].innerText === currentPlayer) {
            winLoseTie.innerHTML = `Player ${currentPlayer} wins!`
        } else if (cells[0].innerText === currentPlayer && cells[4].innerText === currentPlayer && cells[8].innerText === currentPlayer) {
            winLoseTie.innerHTML = `Player ${currentPlayer} wins!`
        } else if (cells[0].innerText === currentPlayer && cells[3].innerText === currentPlayer && cells[6].innerText === currentPlayer) {
            winLoseTie.innerHTML = `Player ${currentPlayer} wins!`
        } else if (cells[2].innerText === currentPlayer && cells[4].innerText === currentPlayer && cells[6].innerText === currentPlayer) {
            winLoseTie.innerHTML = `Player ${currentPlayer} wins!`
        } else if (cells[1].innerText === currentPlayer && cells[4].innerText === currentPlayer && cells[7].innerText === currentPlayer) {
            winLoseTie.innerHTML = `Player ${currentPlayer} wins!`
        } else if (cells[2].innerText === currentPlayer && cells[5].innerText === currentPlayer && cells[8].innerText === currentPlayer) {
            winLoseTie.innerHTML = `Player ${currentPlayer} wins!`
        } else if (cells[4].innerText === currentPlayer && cells[3].innerText === currentPlayer && cells[5].innerText === currentPlayer) {
            winLoseTie.innerHTML = `Player ${currentPlayer} wins!`
        } else if (cells[7].innerText === currentPlayer && cells[8].innerText === currentPlayer && cells[6].innerText === currentPlayer) {
            winLoseTie.innerHTML = `Player ${currentPlayer} wins!`
        }
        //console.log('check for win working')
    }

    //now I need a method to check for when there isnt a winner...

    checkforDraw() {
        //need to check every cell in the array...

        //found array method .every() on MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

       const drawCowboy = cells.every((e) => e.innerText === 'X' || e.innerText === 'O')
        if (drawCowboy) {
            winLoseTie.innerHTML = 'Oh Shoot! It\'s a tie'
        }

    }

}


