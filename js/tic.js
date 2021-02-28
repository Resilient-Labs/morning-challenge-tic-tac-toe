const status = document.querySelector('.status')
const block = document.querySelectorAll('.cell')
const resetBtn = document.querySelector('.reset')
// pasuse the game
let isActive = true;

//who is currently playing
let currentUser = 'O'
//wining combinations
const winningCombinations = [
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
const whoWins = () => `Player ${currentUser} Is The Winner`
console.log(whoWins())
const darw = () => `It's A Draw`
console.log(darw())
const whoTurn = () => `It's Your Turn Player: ${currentUser} `
console.log(whoTurn())

//show who's turn is it
status.innerText = whoTurn();
console.log(whoTurn())


//have every cell be clickable
block.forEach(cell => cell.addEventListener('click', clickCheck))
//get the grab the 'data-cell-index' attribute from the clicked cell,
//check if block has been click or not
function clickCheck(e){
  //assinged each section
  const cellClick = e.target
  console.log(cellClick)
  //grab the index from each cell
  const cellIndex = parseInt(cellClick.getAttribute('data-cell-index'))
  console.log(cellIndex)
  //if sections have been clicked on and if game is paused or not
  //if the cells the players clicked on dont match empty string
  //or if play is not true
  //if true for all three, we ignore click
  // another axample const hasCellBeenClicked = state[cellIndex] !== ''
  if (state[cellIndex] === 'X' || state[cellIndex] === 'O' || isActive === false){
    return;
  }
  moveMade(cellClick, cellIndex)
  checkGameOver()
  if(isActive === true){
    switchUser()
  }

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
//if won
//if darw
//we should validate the game state
//either stop the game or change the  player, depending on if won, darw
//or if any avaible cells that still need to be clicked on

//game is over when there has been win or timeout
//game is not over when there are avaible cells
function checkGameOver(){
  let roundWon = 'I do not know'
  for(let i = 0; i < winningCombinations.length; i++){
    const winCombination = winningCombinations[i];
    console.log(winningCombinations[0])
    console.log(winCombination[0])
    console.log(winCombination[1])
    console.log(winCombination[2])
    console.log(state)
      let cellA = state[winCombination[0]];
      console.log(cellA)
      let cellB = state[winCombination[1]];
      console.log(cellB)
      let cellC = state[winCombination[2]];
      console.log(cellC)
      if (cellA === '' || cellB === '' || cellC === '') {
            continue;
        }

        if (cellA === cellB && cellB === cellC) {
            roundWon = true;
            console.log(roundWon)
            break
        }

  }
  if(roundWon === 'I do not know'){
    roundWon = false
  }

  if(roundWon === true){
    status.innerText = whoWins()
    isActive = false
    return;
  }
  // state.includes('') === false
  // state.includes('') !== true
  // !state.includes('') === true

  if(state.includes('') === false ){
    status.innerText = darw()
    isActive = false
    return;
  }
}
//if player x made a move, then it is player o turn
function switchUser(){
  if(currentUser === "X"){
    currentUser = 'O'
  }
  else{
    currentUser = 'X'
  }
  status.innerText = whoTurn()

  // currentUser = currentUser === "X" ? "O" : "X";
}


//reset game by putting it back to default

resetBtn.addEventListener('click', playAgain)

function playAgain(){
  isActive = true;
  currentUser = 'O'
  state = ['', '', '', '', '', '', '', '', '']
  status.innerText = whoTurn()
  block.forEach(cell => cell.innerText = '')
}
console.log(playAgain())
