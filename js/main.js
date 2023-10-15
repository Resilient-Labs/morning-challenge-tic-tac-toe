class GameBoard {
    constructor() { }
    checkForWin() {
        if (cells[0].innerText == playerOne && cells[3].innerText == playerOne && cells[6].innerText == playerOne) 
        {
            winMes.innerHTML = `Player ${playerOne} Wins!`
        } else if (cells[1].innerText == playerOne && cells[4].innerText == playerOne && cells[7].innerText == playerOne) {
            winMes.innerHTML = `Player ${playerOne} Wins!`
        } else if (cells[2].innerText == playerOne && cells[5].innerText == playerOne && cells[8].innerText == playerOne) {
            winMes.innerHTML = `Player ${playerOne} Wins!`
        } else if (cells[0].innerText == playerOne && cells[1].innerText == playerOne && cells[2].innerText == playerOne) {
            winMes.innerHTML = `Player ${playerOne} Wins!`
        } else if (cells[3].innerText == playerOne && cells[4].innerText == playerOne && cells[5].innerText == playerOne) {
            winMes.innerHTML = `Player ${playerOne} Wins!`
        } else if (cells[6].innerText == playerOne && cells[7].innerText == playerOne && cells[8].innerText == playerOne) {
            winMes.innerHTML = `Player ${playerOne} Wins!`
        } else if (cells[0].innerText == playerOne && cells[4].innerText == playerOne && cells[8].innerText == playerOne) {
            winMes.innerHTML = `Player ${playerOne} Wins!`
        } else if (cells[2].innerText == playerOne && cells[4].innerText == playerOne && cells[6].innerText == playerOne) {
            winMes.innerHTML = `Player ${playerOne} Wins!`
        } else {
            //checks if every cell has a value and no winner the result is a draw
            const draw = cells.every((e)=> e.innerText === 'X' || e.innerText === 'O')
            if(draw){
                winMes.innerHTML = `Draw`
            }
        }
    }
}

let winMes = document.querySelector('.winMes')
let playerOne = 'X'


//turns all the cells into a node list
let cells = document.querySelectorAll('.cell')
console.log(cells)

//reassign cells into an array made from cells
cells = Array.from(cells)
console.log(cells)

//this forEach loop goes through each element of the cell
cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        //this makes sure the player cant override and choose a spot that has already been used
        if (cell.innerText != '') {
            return
        }

        //creates a gameboard object to access in this function
        const gameBoard = new GameBoard()

        //this plays player one which is always starts with X and holds the value in cell.innerText
        cell.innerText = playerOne

        //this applies the check for win method to the game board 
        gameBoard.checkForWin()



        //this checks whats the last players value if X it plays O next and if O it plays X next 
        playerOne = playerOne === 'X' ? 'O' : 'X'
    })

});

document.querySelector('#restartButton').addEventListener('click', restart)


//restarts the board
function restart(){
    //this makes each cell back to clear (empty string)
    cells.forEach((e)=> e.innerText = '')

    //reverts player one to start with X
    playerOne = 'X'

    //clears the winner message
    winMes.innerHTML = ``
}
