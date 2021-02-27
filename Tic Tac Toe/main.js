// 2 players, each player is represented by an X or an O (dog or cat)
// A grid that is 3 by 3 so 9 boxes total
// Display who wins after each round in the dom
// A few event listeners for the X’s and O’s
// A counter to keep track of winner if possible like rock paper scissors game
//If players want to play new game, they can just refresh the page
// Create a basic html and css first so we can see what is going on and what will be working
//
console.log('main.js')
// document.getElementById("box1").addEventListener("click", playerMove)
let currentPlayer = 'x'


// document.getElementById('box1').addEventListener('click', box)
// document.getElementById('box2').addEventListener('click', box)
// document.getElementById('box3').addEventListener('click', box)
// document.getElementById('box4').addEventListener('click', box)
// document.getElementById('box5').addEventListener('click', box)
// document.getElementById('box6').addEventListener('click', box)
// document.getElementById('box7').addEventListener('click', box)
// document.getElementById('box8').addEventListener('click', box)
// document.getElementById('box9').addEventListener('click', box)

function box(e) {
  //
   document.getElementById('puppy').innerHTML = "<img src='images/puppy.jpg' >"
  // console.log('hello')
  console.log(currentPlayer);
   put 'x' or 'o' on page
   if (currentPlayer === 'x') {
     e.target.innerHTML = "<img class='img' src='images/puppy.jpg'>"
     e.target.classList.toggle('x')

   } else {
   e.target.innerHTML = "<img class='img' src='images/black.jpg'>"
   e.target.classList.toggle('o')
   }

  detectWin()
  // toggle current player
  if (currentPlayer === 'o') {
    currentPlayer = 'x'
  } else {
    currentPlayer = 'o'
  }

}
let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')
let box4 = document.getElementById('box4')

function detectWin() {
  console.log(box1, box2, box3)

}

// refered to coding challange tic tac toe
// box[i] = player_turn;
let winning_combos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
]
for (let i = 0; i < winning_combos.length; i++) {
  let winning_row = winning_combos[i]
  let p1 = winning_row[0]
  let p2 = winning_row[1]
  let p3 = winning_row[2]
  if (p1 == p2 && p2 == p3 && p1) {
    alert('winner! player ${player_turn}')
  }
}
// refered to coding challange tic tac toe
// box[i] = player_turn;

class Square{
  status = null
  id = 0

  handleClick(e){
  // e.target.innerHTML = "<img class='img' src='images/puppy.jpg'>"
  // console.log('clicked on', this.id, e.target)
  if (currentPlayer === 'x') {
    e.target.innerHTML = "<img class='img' src='images/puppy.jpg'>"
    e.target.classList.toggle('o')

  } else {
  e.target.innerHTML = "<img class='img' src='images/black.jpg'>"
  e.target.classList.toggle('o')
   }

   }
  constructor(id) {
    this.id = id
    document.getElementById('box' + id).addEventListener('click', (e) => this.handleClick(e))
  }
}


class Board {
 squares = []
 currentPlayer = 'x'

// set up squares
  constructor() {
  for (let i = 1; i <= 9; i++) {
    const square = new Square(i)
    }
  }
  changeCurrentPlayer() {
    if (currentPlayer === 'x') {
      currentPlayer = 'o'
    } else {
      currentPlayer = 'x'
    }
    return currentPlayer
  }
 }
 const board = new Board()




//
// document.getElementById('x').onClick('click', box)
// function {
//
// }

// when box is clicked either an dog or cat will appear
