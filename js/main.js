// create a 2 player game of tic tac toe
// create board with 3 rows and 3 columns

// class/constructor to create different players
class Player {
    constructor(identity){
        this.identity = identity;
    }
}

// identity X or O
const player1 = new Player('X');
const player2 = new Player('O');
const boardSquare = document.querySelectorAll('.boardSquare')
const resetBtn = document.querySelector('button')

// Loop throguh node list and add eventListener
boardSquare.forEach(square => square.addEventListener('click', addXO))


// create a way to place x or o
    // one click = x 
    // 2 clicks = o
let counter = 0;
function addXO(e){
    counter++
    if(counter % 2 === 0){
        e.target.innerHTML = 'O';
        checkWin()
    }else if(counter % 2 !== 0){
        e.target.innerHTML = 'X';
        checkWin()
    }
}

//  conditional 
    // if result 1 === 2 ==== 3 
    // then winner
    // else, next player goes
// const winningCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6], 
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//     ];

function checkWin(){
    if((boardSquare[0].innerText=== 'X' || boardSquare[0].innerText=== 'O') && (boardSquare[0].innerText === boardSquare[1].innerText && boardSquare[0].innerText === boardSquare[2].innerText)){
        document.querySelector('p').innerText = "You Win!"
    }else if((boardSquare[3].innerText=== 'X' || boardSquare[3].innerText=== 'O') && (boardSquare[3].innerText === boardSquare[4].innerText && boardSquare[3].innerText === boardSquare[5].innerText)){
        document.querySelector('p').innerText = "You Win!"
    }else if((boardSquare[6].innerText=== 'X' || boardSquare[6].innerText=== 'O') && (boardSquare[6].innerText === boardSquare[7].innerText && boardSquare[6].innerText === boardSquare[8].innerText)){
        document.querySelector('p').innerText = "You Win!"
    }else if((boardSquare[0].innerText=== 'X' || boardSquare[0].innerText=== 'O') && (boardSquare[0].innerText === boardSquare[3].innerText && boardSquare[0].innerText === boardSquare[6].innerText)){
        document.querySelector('p').innerText = "You Win!"
    }else if((boardSquare[1].innerText=== 'X' || boardSquare[1].innerText=== 'O') && (boardSquare[1].innerText === boardSquare[4].innerText && boardSquare[1].innerText === boardSquare[7].innerText)){
        document.querySelector('p').innerText = "You Win!"
    }else if((boardSquare[2].innerText=== 'X' || boardSquare[2].innerText=== 'O') && (boardSquare[2].innerText === boardSquare[5].innerText && boardSquare[2].innerText === boardSquare[8].innerText)){
        document.querySelector('p').innerText = "You Win!"
    }else if((boardSquare[0].innerText=== 'X' || boardSquare[0].innerText=== 'O') && (boardSquare[0].innerText === boardSquare[4].innerText && boardSquare[0].innerText === boardSquare[8].innerText)){
        document.querySelector('p').innerText = "You Win!"
    }else if((boardSquare[2].innerText=== 'X' || boardSquare[2].innerText=== 'O') && (boardSquare[2].innerText === boardSquare[4].innerText && boardSquare[2].innerText === boardSquare[6].innerText)){
        document.querySelector('p').innerText = "You Win!"
    }else if((boardSquare[0].innerText=== 'X' || boardSquare[0].innerText=== 'O') && (boardSquare[1].innerText=== 'X' || boardSquare[1].innerText=== 'O') && (boardSquare[2].innerText=== 'X' || boardSquare[2].innerText=== 'O') && (boardSquare[3].innerText=== 'X' || boardSquare[3].innerText=== 'O') && (boardSquare[4].innerText=== 'X' || boardSquare[4].innerText=== 'O') && (boardSquare[5].innerText=== 'X' || boardSquare[5].innerText=== 'O') && (boardSquare[6].innerText=== 'X' || boardSquare[6].innerText=== 'O') && (boardSquare[7].innerText=== 'X' || boardSquare[7].innerText=== 'O') &&(boardSquare[8].innerText=== 'X' || boardSquare[8].innerText=== 'O')){
        document.querySelector('p').innerText = "It's a draw! Reset and try again"
    }else{
        return
    }
}


// Reset the Game
resetBtn.addEventListener('click', reset)

function reset(){
    boardSquare.forEach(square => square.innerText = ' ')
    document.querySelector('p').innerText = ' '
}