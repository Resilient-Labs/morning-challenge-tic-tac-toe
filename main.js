// Need two players 
// what logic determins a win
// what logic determins a loss
 document.getElementById("customAlertDraw").style.display = "none";
let currentPlayer = 'X';
    currentPlayer = 'O'

// Make a button in html with the ID of restart
// document.querySelectorAll('#restart').addEventListener('click', restartGame);

// Select all the 'cells' to clear game
let cellDivs = document.querySelectorAll('#cell');

cellDivs = Array.from(cellDivs); 
// this converts node list into an array

cellDivs.forEach( cell => {cell.addEventListener('click', () =>{

    if(cell.innerText != ''){
        return
    }
    console.log();
    cell.innerText = currentPlayer;
    // switch currentPlay between 'x' and 'o'
    winGame();
    catsGame();
    currentPlayer = currentPlayer == 'X' ? 'O' : 'X'


    }
)})

function catsGame(){
    let draw = cellDivs.every((element, index) => cellDivs[index].innerText == 'X' || cellDivs[index].innerText == 'O');
    if(draw){
        showAlertDraw()
    }
}

function winGame(){
    if (cellDivs[0].innerText == currentPlayer && cellDivs[1].innerText == currentPlayer && cellDivs[2].innerText == currentPlayer){
        alert ('You Win!')
    }else if(cellDivs[3].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[5].innerText == currentPlayer){
         alert ('You Win!')
    }else if(cellDivs[6].innerText == currentPlayer && cellDivs[7].innerText == currentPlayer && cellDivs[8].innerText == currentPlayer){
         alert ('You Win!')
    }else if (cellDivs[0].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[8].innerText == currentPlayer){
         alert ('You Win!')
    }else if(cellDivs[2].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[6].innerText == currentPlayer){
         alert ('You Win!')
    }else if(cellDivs[0].innerText == currentPlayer && cellDivs[3].innerText == currentPlayer && cellDivs[6].innerText == currentPlayer){
         alert ('You Win!')
    }else if (cellDivs[1].innerText == currentPlayer && cellDivs[4].innerText == currentPlayer && cellDivs[7].innerText == currentPlayer){
         alert ('You Win!')
    }else if(cellDivs[2].innerText == currentPlayer && cellDivs[5].innerText == currentPlayer && cellDivs[8].innerText == currentPlayer){
         alert ('You Win!')
    }
}

document.querySelector('.reset').addEventListener('click', restartGame)
function restartGame(){
    // currentPlayer = 'X'

    cellDivs.forEach(cell => cell.innerText = '');
    alert ('New Game')
}

function showAlertDraw() {
  // Show the alert overlay by changing its CSS display property
  document.getElementById("customAlertDraw").style.display = "flex";
}
