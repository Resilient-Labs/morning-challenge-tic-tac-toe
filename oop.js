const cellElements = document.querySelectorAll('.cell')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('.result')


class Game {
    constructor() {
        this.circleTurn = false
        this.CIRCLE_CLASS = "circle"
        this.X_CLASS = "x"
        this.currentLetter = this.X_CLASS
        this.WINNING_COMBINATIONS =  [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
    }
    startGame() {
        this.currentLetter = this.X_CLASS
        this.circleTurn = false
        cellElements.forEach(cell => {
          cell.classList.remove(this.X_CLASS)
          cell.classList.remove(this.CIRCLE_CLASS)
          cell.removeEventListener('click', handleClick)
          cell.addEventListener('click', handleClick, { once: true })
        })
        
        winningMessageElement.classList.remove('show')
    }
    
    endGame(draw) {
        if (draw) {
        winningMessageTextElement.innerText = 'Draw!'
        } else {
        winningMessageTextElement.innerText = `${this.circleTurn ? "O's" : "X's"} Wins!`
        }
        winningMessageElement.classList.add('show')
    }
      
    isDraw() {
        return [...cellElements].every(cell => {
        return cell.classList.contains(this.X_CLASS) || cell.classList.contains(this.CIRCLE_CLASS)
        })
    }
      
    placeMark(cell) {
        console.log(this.circleTurn)
        console.log(this.currentLetter)
        this.currentLetter = this.circleTurn ? this.CIRCLE_CLASS :  this.X_CLASS
        cell.classList.add(this.currentLetter)
        
        
        if (this.checkWin()) {
            this.endGame(false)
          } else if (this.isDraw()) {
            this.endGame(true)
          } else {
            this.swapTurns()
          }
    }
      
    swapTurns() {
        this.circleTurn = this.circleTurn ? false : true
    }
      
      
      
    checkWin() {
        
        return this.WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            console.log("checkingForWin")

            return cellElements[index].classList.contains(this.currentLetter)
        })
        })
    }
}
game = new Game () 
game.startGame()
restartButton.addEventListener('click',play)
function play() {
    game.startGame()
}


function handleClick(e) {
  const cell = e.target
  game.placeMark(cell)

}


