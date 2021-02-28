class Board {
  constructor() {
    this.currentPlayer = 'x'
    this.squaresList = []
    console.log('new board')
    for (let i = 0; i < 9; i++) {
      const thisSquare = new Square(i + 1, this)
      document.querySelector(`#s${i+1}`).addEventListener('click', function() {
        thisSquare.clickSquare()
      })
      this.squaresList.push(thisSquare)
    }
  }
  getCurrentPlayer() {
    return this.currentPlayer
  }
  changeCurrentPlayer() {
    if (this.currentPlayer === 'x') {
      this.currentPlayer = 'o'
    } else {
      this.currentPlayer = 'x'
    }
    return this.currentPlayer
  }
  checkWinner(){
    if (this.squaresList[0].getState() === this.squaresList[1].getState() &&
     this.squaresList[2].getState() === this.squaresList[0].getState() &&
      this.squaresList[2].getState() != null){
       alert('winner' + this.squaresList[0].getState())
     }
  }
  clear(){
    this.currentPlayer = 'x'
    for (let i = 0; i < 9; i++){
      this.squaresList[i].clear()
    }
  }
}
