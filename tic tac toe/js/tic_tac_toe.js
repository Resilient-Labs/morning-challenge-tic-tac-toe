// worked with Alief, Kiany, and Eden

// Create an object for the entire click field called board game
const gameBoard = {
  // make an object property for the state of the game, 'it's not gameover'
  gameOver: false,
  // propert for selecting each box class
  boxes: document.querySelectorAll('.box'),
  // make an object property for each box inside boardgame
  box1: document.getElementById('box1'),
  box2: document.getElementById('box2'),
  box3: document.getElementById('box3'),
  box4: document.getElementById('box4'),
  box5: document.getElementById('box5'),
  box6: document.getElementById('box6'),
  box7: document.getElementById('box7'),
  box8: document.getElementById('box8'),
  box9: document.getElementById('box9'),
  // reset property
  resetButton: document.getElementById("reset")
}
// THINGS TO KEEP IN MIND
// what does the computer need to keep track of?
// which boxes have which markers
// whose turn is it
// what does the computer need to be able to do?
// check if there are three in a row
// check if the boxes are full
// reset the game

// name the players as objects with a marker for strings
const playerOne = {
  marker: `<img src="css/bacon.png">`
    // marker: "X"

};

const playerTwo = {
  marker: `<img src="css/eggs.png">`
  // marker: "O"
};

// change turns
let whoseTurnIsIt = playerOne

// click events
// 1. make all thingies clickable
// 2. each click gives an x or o
// 3. remember what it is
// 4. when 3 in the row, win!

// iterator loop to allow all boxes to be clickable
gameBoard.boxes.forEach((box) => {
  box.addEventListener('click', onClick)
})

// worked with Hoang Nguyen
// function that allows only empty box to be clicked and calls function makeMove
function onClick(click) {
  // if there's a winner, do nothing except alert
  if (gameBoard.gameOver === true) {
    alert("Game is over, silly! Restart the game!")
  } else {
    // gets the locations of gameboard.boxes in html & makesMove in the innerText
    const box = click.target
    if (box.innerText === "") {
      makeMove(box)
    }
  }
}

// worked with Hoang Nguyen
// function that makes a move by setting the box's text to the active player's marker
// and then switches the active player
function makeMove(box) {
  box.innerHTML = whoseTurnIsIt.marker

  // we need to switch whose turn it is
  if (whoseTurnIsIt === playerOne) {
    whoseTurnIsIt = playerTwo
  } else {
    whoseTurnIsIt = playerOne
  }

  document.querySelector(".player").innerHTML = whoseTurnIsIt.marker
  // wait ten milliseconds so that the marker has time to be painted
  setTimeout(checkForWin, 10)
}

// check win by looping through an array of possibilities
// corresponding array combo is a boolean

// worked with Hoang Nguyen
function checkForWin() {
  winningConditions.forEach((row) => {
    // check if the same string is inside each box in row
    // get the info: the string in the box is 'X' or 'O'
    if (didPlayerOneWin(row)) {
      alert('Bacon is the winner!!!')
      gameBoard.gameOver = true
    }
    else if (didPlayerTwoWin(row)) {
      alert('Egg is the winner!!!')
      gameBoard.gameOver = true
    }
  })
  // if the game is NOT over, but the boxes are full, then game over
  // write this outside the loop so there's no alerting x9
  if(!gameBoard.gameOver && boxesAreAllFull()) {
    alert(`It's a draw. Play again.`)
    gameBoard.gameOver = true
  }
}

// ___________validate the wins and if it's a draw________________________________

function didPlayerTwoWin(row) {
  return row[0].innerHTML === playerTwo.marker &&
  row[1].innerHTML === playerTwo.marker &&
  row[2].innerHTML === playerTwo.marker
}

function didPlayerOneWin(row) {
  return row[0].innerHTML === playerOne.marker &&
  row[1].innerHTML === playerOne.marker &&
  row[2].innerHTML === playerOne.marker
}

// worked with a mentor
// go through each box and check if it's empty
// if we find an empty box, the answer is false
// and it is not a draw
function boxesAreAllFull() {
  result = true
  gameBoard.boxes.forEach((box) => {
    if(box.innerHTML === " ") {
      result = false
    }
  })
  // we went the through the loop and now we're outside of it
  // and so if we haven't found an empty box, that means all of the boxes are full
  // and then it is a draw
  return result
}
const winningConditions = [
  [gameBoard.box1, gameBoard.box2, gameBoard.box3],
  [gameBoard.box4, gameBoard.box5, gameBoard.box6],
  [gameBoard.box7, gameBoard.box8, gameBoard.box9],
  [gameBoard.box1, gameBoard.box4, gameBoard.box7],
  [gameBoard.box2, gameBoard.box5, gameBoard.box8],
  [gameBoard.box3, gameBoard.box6, gameBoard.box9],
  [gameBoard.box1, gameBoard.box5, gameBoard.box9],
  [gameBoard.box3, gameBoard.box5, gameBoard.box7],
]

// reset game
gameBoard.resetButton.addEventListener('click', reset)

function reset() {
  gameBoard.boxes.forEach((box) => {
    box.innerText = " "
  })
  gameBoard.gameOver = false
}
