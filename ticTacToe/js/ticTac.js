// Declare variables for players
let playerOne = 'X'; playerOne = 'O'
// Make a variable for selected my cells
let cells = document.querySelectorAll('.inline')
cells = Array.from(cells) //Converts node Lists into an array
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.innerText != '') {
            return 'PUT SOMETHING'
        }
        cell.innerText = playerOne
        playerOne = playerOne == 'X' ? 'O' : 'X'
    })
});
function tied() {
    let tie = cells.every((element, index) => cells[index].innerText == 'X' || cells[index].innerText == 'O');
    if (tie) {
        alert('TIEDDD BOZO')
    }
}
function winner() {
    if (cells[0].innerText == playerOne && cells[1].innerText == playerOne && cells[2].innerText == playerOne) {
    alert('You Win!')
} else if (cells[3].innerText == playerOne && cells[4].innerText == playerOne && cells[5].innerText == playerOne) {
    alert('You Win!')
} else if (cells[6].innerText == playerOne && cells[7].innerText == playerOne && cells[8].innerText == playerOne) {
    alert('You Win!')
} else if (cells[0].innerText == playerOne && cells[4].innerText == playerOne && cells[8].innerText == playerOne) {
    alert('You Win!')
} else if (cells[2].innerText == playerOne && cells[4].innerText == playerOne && cells[6].innerText == playerOne) {
    alert('You Win!')
} else if (cells[0].innerText == playerOne && cells[3].innerText == playerOne && cells[6].innerText == playerOne) {
    alert('You Win!')
} else if (cells[1].innerText == playerOne && cells[4].innerText == playerOne && cells[7].innerText == playerOne) {
    alert('You Win!')
} else if (cells[2].innerText == playerOne && cells[5].innerText == playerOne && cells[8].innerText == playerOne) {
    alert('You Win!')
}
}