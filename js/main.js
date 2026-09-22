


/*
Players:   class 
Player 1, obj1 name:this.name prop:symbol:"x" f(): chooseSquare()
Player 2, obj2 name:this.name prop:symbol:"y" f(): chooseSquare()
Board: 
properties: 9 squares: value:'' can be 'x' can be 'o' ['','','','','','','','','']
Game:
properties: 
2 players 
1 board: 9 squares
f(): switch player turns,
declare a winner, 
end, 

*/



document.getElementById('startGame').addEventListener('click', startGame)
let player1
let player2
let currentPlayer 
class Player {
    constructor(name,symbol){
        this.name = name
        this.symbol = symbol
    }
}
let message = document.querySelector('h2')
function startGame(){ 
  let player1Name = prompt('Enter player 1 name')
  let player2Name = prompt('Enter player 2 name')
  player1 = new Player (player1Name, "X")
  player2 = new Player (player2Name, "O")
    message.innerText = (`${player1.name}'s turn`)
currentPlayer = player1
}

const Board = { 
    squares : ['','','','','','','','','']

}
let square = document.querySelectorAll('.square')
        square.forEach((square, index) => {
    square.addEventListener('click',function(){
        showSymbol(square,index)
    })
    
})
function changePlayer(){
    if(currentPlayer === player1){
        currentPlayer = player2
        message.innerText = `${currentPlayer.name}'s turn`
    } else {
        currentPlayer = player1
        message.innerText = `${currentPlayer.name}'s turn`
    }
}
const strikes =[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]

]
function showSymbol(square, index) {
square.innerText = currentPlayer.symbol
Board.squares[index] = currentPlayer.symbol
console.log(currentPlayer.symbol)
checkWinner()
changePlayer()
}


function checkWinner(){
    strikes.forEach((strike) =>{

    if(Board.squares[strike[0]] === currentPlayer.symbol && 
        Board.squares[strike[1]] === currentPlayer.symbol && 
        Board.squares[strike[2]] === currentPlayer.symbol)
{
    message.innerText = `${currentPlayer.name} wins`
}
})
}



  
 
  