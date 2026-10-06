//We need a player to start off the game
let currentPlayer = '🔥'

//create a button in HTML with an ID of restart
document.querySelector('#restart').addEventListener('click', restartGame)

//We need something that selects ALL the cells to clear the game. We can use: querySelectorAll. Let's make a variable called cellDivs
let cellDivs = document.querySelectorAll('#cell')
// let restart = document.querySelector('button')

cellDivs = Array.from(cellDivs) //this converts node list into an array

cellDivs.forEach(cell => {cell.addEventListener('click', () => {
    if(cell.innerText != ''){
        return
    }
    console.log()
    cell.innerText = currentPlayer;
    //Switch currentPlayer between 'X' and 'O'
    checkForDraw();
    checkWinner();
    currentPlayer = currentPlayer == '🔥' ? '🌊' : '🔥'

})})

function checkForDraw () {
    let draw = cellDivs.every((element, index) => cellDivs[index].innerText == '🔥' || cellDivs[index].innerText == '🌊')
    if (draw) {
        alert ("It's a draw!")
    }
}

function checkWinner (){
    if (cellDivs[0].innerText == currentPlayer && cellDivs[1].innerText == currentPlayer && cellDivs[2].innerText == currentPlayer){
        alert('WINNER WINNER')
    }else if(cellDivs[2].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[6].innerText == currentPlayer){
        alert('WINNER WINNER')
    }else if(cellDivs[0].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[8].innerText == currentPlayer){
        alert('WINNER WINNER')
    }else if(cellDivs[3].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[5].innerText == currentPlayer){
        alert('WINNER WINNER')
    }else if(cellDivs[6].innerText == currentPlayer && cellDivs[7].innerText == currentPlayer && cellDivs[8].innerText == currentPlayer){
        alert('WINNER WINNER')
    }else if(cellDivs[0].innerText == currentPlayer && cellDivs[3].innerText == currentPlayer && cellDivs[6].innerText == currentPlayer){
        alert('WINNER WINNER')
    }else if(cellDivs[1].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[7].innerText == currentPlayer){
        alert('WINNER WINNER')
    }else if(cellDivs[2].innerText == currentPlayer && cellDivs[5].innerText == currentPlayer && cellDivs[8].innerText == currentPlayer){
        alert('WINNER WINNER')
    }   
}
function restartGame (){
    currentPlayer = '🔥'
    cellDivs.forEach(cell => cell.innerText = '')
    alert("Let's play again!")
}