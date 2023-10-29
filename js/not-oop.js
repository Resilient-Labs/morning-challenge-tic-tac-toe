// worked on this with Tenzin, Danny, Joyce, Jessica, Patricia, and Valery

//create varaible for current player 
let currentPlayer = 'x'
//grab reset button
const restartBtn = document.querySelector('#restartBtn')

// grabbing each cell of the game
let cells = document.querySelectorAll('#cells')
//change the cells to array format
// reassign cell to enter Node List mode. add to anki!!
cells = Array.from(cells)
// console.log(cells)



// forEach on cell array and add event listener
// click will run on another function
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        // cell needs to be made empty for new value
        if(cell.innerText != "" ){
            return
        }

        cell.innerText = currentPlayer
        
        checkDraw()

        checkWinner()

        // ternary operator for currentPlayer
        currentPlayer = currentPlayer == 'x' ? 'o' : 'x';
            
    })
})

//function that looks for a tie
function checkDraw() {
    let draw = cells.every((element, index) => cells [index.innerText == 'x'] || cells[index].innerText == 'o');
    if(draw) {
        alert('draw')
    }
}



// function that looks for winner
function checkWinner() {
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

//restart function for reset button
function restartGame() {
    window.location.reload()
}

//add event listener for restart function
restartBtn.addEventListener('click', restart)