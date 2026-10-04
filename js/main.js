
let currentplayer = 'X'

document.querySelector('#reset').addEventListener('click',restartGame)
let allCells = document.querySelectorAll('.gameBoard div')
console.log(allCells)
allCells = Array.from(allCells)
console.log(allCells)
allCells.forEach(cell => {
    cell.addEventListener('click', () => {
        if(cell.innerText !=""){
            return
        }
        console.log()

        cell.innerText = currentplayer

        win()
        checkForDraw()
        currentplayer = currentplayer == 'X' ? 'O': 'X'
    })
})

function checkForDraw() {
    let draw = allCells.every((Element,index) => allCells[index].innerText == 'X' || allCells[index].innerText == 'O');
    if (draw){
        alert('ITS A DRAW')
    }
}

function win(){
    if(allCells[0].innerText == currentplayer && allCells[1].innerText == currentplayer){
        alert('You won this time...')
    }
}
 
function restartGame() {
    currentplayer = 'X'
    allCells.forEach(cell => cell.innerText = '')
    alert('Run it back')
}