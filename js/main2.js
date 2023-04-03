let currentPlayer = 'x'

class Square {
  constructor(index) {
    this.index = index
    this.content = ""
  }
  changeContent(newContent) {
    if (this.content === '') {
      this.content = newContent
      document.getElementById(this.index).innerText = newContent
    } else {
      console.log('nope', this.index)
    }
  }
  getContent() {
    return this.content
  }
}
class Board {
  constructor() {
    this.gameOver = false
    this.squaresArr = []
    this.movesCount = 0
    for (let index = 0; index < 9; index++) {
      const square = new Square(index)
      this.squaresArr.push(square)
      document.getElementById(index).addEventListener('click', (event) => {
        console.log(`Player ${currentPlayer} clicked on square ${index} count ${this.movesCount}`)
        const currentSquare = this.squaresArr[index]
        if (currentSquare.getContent() === '' && this.gameOver === false) {
          currentSquare.changeContent(currentPlayer)
          this.checkWin()
          if (currentPlayer === 'x') {
            currentPlayer = 'o'
          } else {
            currentPlayer = 'x'
          }
          this.movesCount++
        }
      })
      // document.getElementById(index).addEventListener('keyup', (event) =>{
      //   console.log(event.target.value)
      // })
    }
  }

  checkWin() {
    if (this.checkSquaresEqual(0, 1, 2) ||
      this.checkSquaresEqual(0, 4, 8) ||
      this.checkSquaresEqual(0, 3, 6) ||
      this.checkSquaresEqual(1, 4, 7) ||
      this.checkSquaresEqual(2, 5, 8) ||
      this.checkSquaresEqual(3, 4, 5) ||
      this.checkSquaresEqual(6, 7, 8) ||
      this.checkSquaresEqual(6, 4, 2)) {
      alert(`${currentPlayer} win!`)
      this.gameOver = true
      console.log(`Winner ${currentPlayer} ${JSON.stringify(this.squaresArr)}`)
    }
  }
  
  checkSquaresEqual(a, b, c) { 
    if (this.squaresArr[a].getContent() === '') {
      return false
    }
    if (this.squaresArr[a].getContent() === this.squaresArr[b].getContent() && this.squaresArr[c].getContent() === this.squaresArr[a].getContent()) {
      return true
    } else {
      return false
    }
  }
}
const board = new Board()



