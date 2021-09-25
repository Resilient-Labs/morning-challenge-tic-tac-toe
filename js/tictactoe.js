
class TicTacToe {
	constructor() {
		this.board = new Array(9)
		this.player = 'O'
		this.isWon = false
    this.displayStatus = document.querySelector('.gameStatus')
    this.displayTurn = document.querySelector('.playerTurn')
    
		this.winConditions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]; 
	}

	checkWin() {
		for (let condition of this.winConditions) {
      const box1 = this.board[condition[0]]
      const box2 = this.board[condition[1]]
      const box3 = this.board[condition[2]]
      if (box1 && box1 === box2 && box2 === box3){
        this.displayStatus.innerText = 'Player won'
        this.displayTurn.innerText = 'Please click restart game'
        this.isWon = true;
        
				
      }
		}
	}

	isValidMove(index) {
		return this.board[index] === undefined && !this.isWon ? true : false
		// return this.board[index] ? false : true
	}

	playerMove(index) {
   
		if (!this.isValidMove(index)){
		this.board[index] = this.player
		this.player === 'X' ? this.player = 'O' : this.player = 'X'
		this.emptyBoxes = this.emptyBoxes - 1
		this.checkWin()
		}
	}

  restartGame(){
  document.querySelector('.gameRestart').onclick = function x (){
  document.querySelectorAll('.box').forEach(box => box.innerText = "")
}}

printToDom (e){
  let index = Array.from(e.target.parentElement.children).indexOf(e.target)
  console.log(index)
  e.target.innerText = newTicTacToe.playerMove(index)
  newTicTacToe.checkWin();
  newTicTacToe.restartGame();
}


}

document.getElementById('gameContainer').addEventListener("click", printToDom)
let newTicTacToe = new TicTacToe()
function printToDom (e){
  let index = Array.from(e.target.parentElement.children).indexOf(e.target)
  console.log(index)
  e.target.innerText = newTicTacToe.playerMove(index)
  newTicTacToe.checkWin();
  newTicTacToe.restartGame();
}




