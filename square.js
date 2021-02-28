class Square {
  constructor(id, board) {
    this.id = id
    this.board = board
    console.log('the board works', this.board);
    this.state = null
    console.log(`new square; ${id}`, "this", this)
  }
  clickSquare() {
    if (this.state === null) {
      this.state = this.board.getCurrentPlayer()
      console.log(`clicked on square; ${this.id} player; ${this.state}`, "board:", this.board, "this:", this)
      let img = document.createElement('img')
      img.src = `img/${this.state}.png`
      document.querySelector(`#s${this.id}`).appendChild(img)
      board.checkWinner()
      this.board.changeCurrentPlayer()
    }
  }
  getState(){
    return this.state
  }
  clear(){
    this.state = null
    document.querySelector(`#s${this.id}`).innerHTML = ""
  }
}



//find a way to check for a winner
//call check win function in the clicksquare function .. everytime they click check for a winner
