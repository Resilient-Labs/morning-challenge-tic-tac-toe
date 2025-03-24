// Goal: Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.
const ticTacToe = {
    isO: false,
    fireworks: document.getElementById('congratulations'),
    restart: document.getElementById('restart'),
    playButton: document.getElementById('play'),
    gameGuy: document.getElementById('gameGuy'),
    winLines: [
        rowOne = document.getElementsByClassName('r1'),
        rowTwo = document.getElementsByClassName('r2'),
        rowThree = document.getElementsByClassName('r3'),
        columnOne = document.getElementsByClassName('c1'),
        columnTwo = document.getElementsByClassName('c2'),
        columnThree = document.getElementsByClassName('c3'),
        diagonalOne =document.getElementsByClassName('d1'),
        diagonalTwo =document.getElementsByClassName('d2'),
    ],
    players: {
        amount: 2,
        player1: "X",
        player2: "O",
        player1Score: document.getElementById('playerX').innerHTML,
        player2Score: document.getElementById('playerO').innerHTML,
    },
    checkForWin: function() {
    ticTacToe.winLines.forEach(property => {
    const elements = property;

    const firstInnerHTML = elements[0].innerHTML;
    for (let i = 1; i < elements.length; i++) {
      if (elements[i].innerHTML !== firstInnerHTML || elements[i].innerHTML === "") {
        return false;
      } 
    } if (firstInnerHTML === 'X') {
        console.log("X wins")
        document.getElementById('playerX').innerHTML ++
        ticTacToe.fireworks.classList.remove('hidden')
    } else {
        console.log("O wins")
        document.getElementById('playerO').innerHTML ++
        ticTacToe.fireworks.classList.remove('hidden')
    }
  })
}
   

}
// let isO = false
 ticTacToe.playButton.addEventListener('click', () => {
    gameGuy.classList.add('hidden')
})
ticTacToe.players.player1Score = 0
 

const boxes = document.querySelectorAll('.box');

boxes.forEach(element => {
    element.addEventListener('click', () => {
    console.log(element);
    if (element.innerHTML === "") {
    if (ticTacToe.isO === false) {
        element.innerHTML = "X"
    } else {
        element.innerHTML = "O"
    }
}
    ticTacToe.isO = !ticTacToe.isO
    ticTacToe.checkForWin()
})
})

ticTacToe.restart.addEventListener('click', () => {
    boxes.forEach(element => {
        element.innerHTML = ""
        ticTacToe.fireworks.classList.add('hidden')
    })
})








































































// const grid = {
//     gridOne: document.getElementById('gOne'),
//     gridTwo: document.getElementById('gTwo'),
//     gridThree: document.getElementById('gThree'),
//     gridFour: document.getElementById('gFour'),
//     gridFive: document.getElementById('gFive'),
//     gridSix: document.getElementById('gSix'),
//     gridSeven: document.getElementById('gSeven'),
//     gridEight: document.getElementById('gEight'),
//     gridNine: document.getElementById('gNine'),
// }
// const rowOne = document.getElementsByClassName('r1')


// grid.gridOne.addEventListener('click', () => {
//     if (isO === false) {
//         grid.gridOne.innerHTML = "X"
//     } else {
//         grid.gridOne.innerHTML = "O"
//     }
//     isO = !isO
//     winLines.checkForWin(winLines.rowOne )
//     checkForWin(winLines.columnTwo)
//     checkForWin(winLines.diagonalOne)
// })
// grid.gridTwo.addEventListener('click', () => {
//     if (isO === false) {
//         gridTwo.innerHTML = "X"
//     } else {
//         gridTwo.innerHTML = "O"
//     }
//     isO = !isO

// })
// gridThree.addEventListener('click', () => {
//     if (isO === false) {
//         gridThree.innerHTML = "X"
//     } else {
//         gridThree.innerHTML = "O"
//     }
//     isO = !isO
// })
// gridFour.addEventListener('click', () => {
//     if (isO === false) {
//         gridFour.innerHTML = "X"
//     } else {
//         gridFour.innerHTML = "O"
//     }
//     isO = !isO
// })
// gridFive.addEventListener('click', () => {
//         if (isO === false) {
//         gridFive.innerHTML = "X"
//     } else {
//         gridFive.innerHTML = "O"
//     }
//     isO = !isO
// })
// gridSix.addEventListener('click', () => {
//         if (isO === false) {
//         gridSix.innerHTML = "X"
//     } else {
//         gridSix.innerHTML = "O"
//     }
//     isO = !isO
// })
// gridSeven.addEventListener('click', () => {
//         if (isO === false) {
//         gridSeven.innerHTML = "X"
//     } else {
//         gridSeven.innerHTML = "O"
//     }
//     isO = !isO
// })
// gridEight.addEventListener('click', () => {
//         if (isO === false) {
//         gridEight.innerHTML = "X"
//     } else {
//         gridEight.innerHTML = "O"
//     }
//     isO = !isO
// })
// gridNine.addEventListener('click', () => {
//         if (isO === false) {
//         gridNine.innerHTML = "X"
//     } else {
//         gridNine.innerHTML = "O"
//     }
//     isO = !isO
// })


//first click id always an x sencond is O ect.

//first player will click on a box in a grid of 9

//box selected will display an x 

//second play will click a box / box will display on O

// when there are 3 matching symbols in a row game ends and winner is displayed bellow 

// winning symbol gets 1 point added to score

//Player can click reset button to reset board and restart game.




// grid is object: 

// if  "O is false display x " else display O