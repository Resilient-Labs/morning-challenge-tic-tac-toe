//HOW TIC-TAC-TOE WORKS
//2 players
//we must track both their turns
// X || O are the playing options 
//h3 #message options: win, draw, lose
//last player always wins/makes it a draw 

//TIC-TAC-TOE LAYOUT
//1 board object - the #gameBoard
//9 squares (#cells) - object properties
//a reset button, which allows 2 players to start the game over (should be clearing the board)
//append innerText (run function when square is clicked depending on player turn)

//_____________________________________________________________________________________________

//player x will start us off:
let currentPlayer = 'X';
document.querySelector('#reset').addEventListener('click', newGame) 
let decision = document.getElementById('message')
//select all the cells, will return a nodelist:
let cells = document.querySelectorAll('#cells')
cells = Array.from(cells)
// console.log(cells[0]) // being able to visualize the exact value I'm wanting to pull from (e.g. 'X')
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if(cell.innerText != ''){
      return
    }
    const gameBoard = new GameBoard() //instatiating the GameBoard object (remember: capitalized first letter for objects)
    cell.innerText = currentPlayer
    gameBoard.checkDraw() //calling on the methods from the GameBoard object 
    console.log('running')
    gameBoard.checkWinner()

    //ternary below- once a player has played, change turns: 
    currentPlayer = currentPlayer == 'X' ? 'O' : 'X' //this changes player turns; if x (currentPlayer) went, then O; if ? expression is true, then what's after : will follow 
  })
})
//function below is checking if there is a draw; will return true below if every cell has innerText of "x" or "o"; elemen is a placeholder
class GameBoard {
  checkDraw(){
  console.log('running 2')
  let draw = cells.every((element, index) => cells[index].innerText == 'X' || cells[index].innerText == 'O') //for the index in total; so every one cell has to equal 'X', otherwise it's a draw (.every((element, index))
  if(draw){
    // alert('draw')
    decision.innerHTML = "Its a draw"
  }
}

  // newGame(){
  // cells.forEach(cell => {cell.innerText = ""})
  // currentPlayer = 'X' 


  checkWinner(){
  if(cells[0].innerText == currentPlayer && cells[1].innerText == currentPlayer && cells[2].innerText == currentPlayer){
    decision.innerHTML = "Winner"
    // alert('winner') //so we added .innerText (line 40) to identify the win as == 'X' (or, to look for 'X')
  }else if(cells[0].innerText == currentPlayer && cells[3].innerText == currentPlayer && cells[6].innerText == currentPlayer){
    decision.innerHTML = "Winner"
    // alert('winner')
  }else if(cells[0].innerText == currentPlayer && cells[4].innerText == currentPlayer && cells[8].innerText == currentPlayer){
    decision.innerHTML = "Winner"
    // alert('winner')
}else if(cells[1].innerText == currentPlayer && cells[4].innerText == currentPlayer && cells[7].innerText == currentPlayer){
  decision.innerHTML = "Winner"
  // alert('winner')
}else if(cells[2].innerText == currentPlayer && cells[5].innerText == currentPlayer && cells[8].innerText == currentPlayer){
  decision.innerHTML = "Winner"
  // alert('winner')
}else if(cells[6].innerText == currentPlayer && cells[7].innerText == currentPlayer && cells[8].innerText == currentPlayer){
  decision.innerHTML = "Winner"
  // alert('winner')
}else if(cells[2].innerText == currentPlayer && cells[4].innerText == currentPlayer && cells[6].innerText == currentPlayer){
  decision.innerHTML = "Winner"
  // alert('winner')
}
}}
function newGame(){
  cells.forEach(cell => {cell.innerText = ""})
  currentPlayer = 'X' 
}

