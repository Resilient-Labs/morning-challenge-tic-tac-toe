let player = document.getElementById('player')
let resetBtn = document.getElementById('resetBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

// console.log(boxes)

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')
const ohs = "O"
const exes = "X"
let currentPlayer = exes
let spaces = Array(9).fill(null)
console.log(['spaces: ', spaces])
// when you can't see it is confusing: Visibility is Key

class boardGame {

  constructor(){
    this.combos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
  }
  playerHasWon() {
    for (const condition of this.combos) {
      let [a, b, c] = condition

      if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
        console.log('spacescondition: ', spaces)
        return [a,b,c]
      }
    
    }
    return false
  }

  // call after
 
  restart() {
    spaces.fill(null)

    boxes.forEach( box => {
      box.innerText = ''
      box.style.backgroundColor=''
    })
    player.innerText = 'Tic Tac Toe'

    currentPlayer = exes
  }
  
}
const gameBoard = new boardGame()

function boxClicked(e) {
  console.log(e)
  const id = e.target.id 

  if(!spaces[id]){
    spaces[id] = currentPlayer
    e.target.innerText = currentPlayer

    if(gameBoard.playerHasWon() !==false){
      player.innerText = `${currentPlayer} has won!`
      let winning_blocks = gameBoard.playerHasWon()

      winning_blocks.map( box => boxes[box].style.backgroundColor = winnerIndicator)
      return
    }

    currentPlayer = currentPlayer == exes ? ohs : exes
  }
}

// console.log(gameBoard.playerHasWon)
// use the instance var to access the class and properties: gameBoard is the instance

// NO HOISTING you can only hoist with the function keyword but DON'T why cause no!
//  on here we are accessing the method with the instance gameBoard
boxes.forEach(box => box.addEventListener('click', boxClicked))

resetBtn.addEventListener('click', gameBoard.restart)
// startGame()

