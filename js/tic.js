const status = document.querySelector('.status')
const block = document.querySelectorAll('.cell')
const resetBtn = document.querySelector('.reset')
// pasuse the game
let play = true;

//who is currently playing
let currentUser = '0'
//wining combinations
const winningCombination = [
    [3, 4, 5],
    [0, 1, 2],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
//current state of the game
let state = ['', '', '', '', '', '', '', '', '']

//messages for players, who won, is it a tie, and who's turn is it
const whoWins = () => `Player ${currentUser} is the Winner`
console.log(whoWins())
const darw = () => `It is a Draw`
console.log(darw())
const whoTurn = () => `It is ${currentUser} turn`
console.log(whoTurn())

//who's turn is it
status.innerText = whoTurn();
console.log(whoTurn())


//have every cell be clickable
block.forEach(cell => cell.addEventListener('click', clickCheck))
//get the grab the 'data-cell-index' attribute from the clicked cell, check if block has been click or not
function clickCheck(e){
  //assinged each section
  const cellClick = e.target
  console.log(cellClick)
  //grab the index from each cell
  const cellIndex = parseInt(cellClick.getAttribute('data-cell-index'))
  console.log(cellIndex)
  //if sections have been clicked on and if game is paused or not
  //if the cells the players clicked on dont match empty string  or if play is not true
  //if true for both, we ignore click
  if (state[cellIndex] !== '' || !play){
    return;
  }
  moveMade(cellClick, cellIndex)
  result()
}
//update current state of the game and who's turn it is
function moveMade(cellClick, cellIndex){
  state[cellIndex] = currentUser

  cellClick.innerText = currentUser
}
console.log(state)
console.log(currentUser)
console.log(moveMade)



//who won
function result(){
  let roundWon = false
  for(let i = 0; i <= 7; i++){
    const winCondition = winningCombination[i];
    console.log(winningCombination[0])
    console.log(winCondition[0])
    console.log(winCondition[1])
    console.log(winCondition[2])
    console.log(state)
      let a = state[winCondition[0]];
      console.log(a)
      let b = state[winCondition[1]];
      console.log(b)
      let c = state[winCondition[2]];
      console.log(c)
      if (a === '' || b === '' || c === '') {
            continue;
        } console.log(a)
        console.log(b)
        console.log(c)
        if (a === b && b === c) {
            roundWon = true;
            console.log(roundWon)
            break
        }

  }
  if(roundWon){
    status.innerText = whoWins()
    play = false
    return;
  }
  if(!state.includes('')){
    status.innerText = darw()
    play = false
    return;
  }
  switchUser();
}

function switchUser(){
  if(currentUser === "X"){
    currentUser = '0'
  }
  else{
    currentUser = 'X'
  }
  status.innerText = whoTurn()

  // currentUser = currentUser === "X" ? "O" : "X";
}
console.log(result())

resetBtn.addEventListener('click', playAgain)

function playAgain(){
  play = true;
  currentUser = '0'
  state = ['', '', '', '', '', '', '', '', '']
  status.innerText = whoTurn()
  block.forEach(cell => cell.innerText = '')
}
console.log(playAgain())
