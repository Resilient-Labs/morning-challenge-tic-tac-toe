// worked on this with Tenzin, Danny, Joyce, Jessica, Patricia, and Valery

let currentPlayer = 'x'

//grab reset button in the DOM and put it in a variable
const restartBtn = document.querySelector('#restartBtn')

// grabbing each cell of the game and put it in a variable
let cells = document.querySelectorAll('.cells')
//change the cells to array format
// reassign cell to enter Node List mode. ADD TO ANKI!!
cells = Array.from(cells)

// console log to see visually what array index corresponds with each cell
// console.log(cells)


// forEach on cell array and add event listener
// click will run on another function
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        // cell needs to be made empty for new value (x or o) to be able to be added to the board

        // could add || statement to this if to also stop the game from going further if someone has already won
        if(cell.innerText != "" ){
            return
        }

        cell.innerText = currentPlayer
        
        gameBoard.checkTie() // checks to see if there's a tie

        gameBoard.checkWinner() // this checks to see who wins

        // ternary operator for currentPlayer -- currentPlayer starts at X becomes O then returns to X
        currentPlayer = currentPlayer == 'x' ? 'o' : 'x';
            
    })
})


class GameBoard {
    // method to check if there's a tie
    checkTie() {
        // the every() method tests whether elements in an array pass a test
        // every single index meets this condition if all cells have either x or o 
        // current bug -- find a way to connect check tie with in someone already won (currently the game alerts tie even if someone wins on the very last move)
        let tie = cells.every((element, index) => cells [index].innerText == 'x' || cells[index].innerText == 'o');
        if (tie) {
            alert('TIE')
        }
    }

    // method to check if winner (if the listed cells are all selected, alert fires)
    checkWinner() {
        //cells are the array created from cells.forEach
        if(cells[0].innerText == currentPlayer && cells[1].innerText == currentPlayer && cells [2].innerText == currentPlayer) {
            alert(`${currentPlayer} Wins!`)
        }else if(cells[3].innerText == currentPlayer && cells[4].innerText == currentPlayer && cells[5].innerText == currentPlayer) {
            alert(`${currentPlayer} Wins!`)
        }else if(cells[6].innerText == currentPlayer && cells[7].innerText == currentPlayer && cells[8].innerText == currentPlayer) {
            alert(`${currentPlayer} Wins!`)
        }else if(cells[0].innerText == currentPlayer && cells[3].innerText == currentPlayer && cells[6].innerText == currentPlayer) {
            alert(`${currentPlayer} Wins!`) 
        }else if(cells[1].innerText == currentPlayer && cells[4].innerText == currentPlayer && cells[7].innerText == currentPlayer) {
            alert(`${currentPlayer} Wins!`) 
        }else if(cells[2].innerText == currentPlayer && cells[5].innerText == currentPlayer && cells[8].innerText == currentPlayer) {
            alert(`${currentPlayer} Wins!`) 
        }else if(cells[0].innerText == currentPlayer && cells[4].innerText == currentPlayer && cells[8].innerText == currentPlayer) {
            alert(`${currentPlayer} Wins!`) 
        }else if(cells[2].innerText == currentPlayer && cells[4].innerText == currentPlayer && cells[6].innerText == currentPlayer) {
            alert(`${currentPlayer} Wins!`) 
        }
    }

    // method to reload the page aka restart the whole game
    restartGame() {
        window.location.reload()
    }
}

// instantiates GameBoard and places it in a variable called gameBoard that can be referenced across the page
const gameBoard = new GameBoard() 
//add event listener for restart function
restartBtn.addEventListener('click', gameBoard.restartGame)

