const gridTemp = document.querySelectorAll('div.square')
const grid = Array.from(gridTemp)
const whosTurn = document.querySelector('whosTurn')
const whoWon = document.querySelector('#whoWon')
const resetButt = document.getElementById('reset')
const xScore = document.getElementById('X').innerText 
const oScore = document.getElementById('O').innerText 

console.log(this.grid, 'grid')

class Game{

    constructor(){
        // property turn
        this.whosTurn = 'X'

	    // property grid
        this.grid = Array.from(gridTemp)

        for (let square of this.grid){
            square.addEventListener('click', (e) =>  this.playerMove(e) )
            console.log(square, 'square')
        }

        this.xScore = 0
        this.oScore = 0

        resetButt.addEventListener('click', () => this.reset())

        // winning con 
        this.winningMatches = [[ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ], [ 0, 4, 8 ], [ 2, 4, 6 ]]
    }
	// method check turn / toggle  (Cory helped me debug this in community)
    playerMove(e) {
        if (e.target.className !== 'X' && e.target.className !== 'O') {
          // set the current player's class on the clicked square
          e.target.className = this.whosTurn;
      
          // check for a win on the current player's turn
          if (this.checkWin()) {
            // add a new class to the squares to indicate the win
            const [a, b, c] = this.winningMatches.find(([a, b, c]) => {
              const squareA = this.grid[a];
              const squareB = this.grid[b];
              const squareC = this.grid[c];
              return (
                squareA.classList.contains(this.whosTurn) &&
                squareB.classList.contains(this.whosTurn) &&
                squareC.classList.contains(this.whosTurn)
              );
            });
            this.grid[a].classList.add('win');
            this.grid[b].classList.add('win');
            this.grid[c].classList.add('win');
      
            // update the score and reset the game after a delay
            this.updateScore();
            setTimeout(() => {
              this.reset();
            }, 500);
          } else {
            // toggle the turn if no win is detected
            this.whosTurn = this.whosTurn === 'X' ? 'O' : 'X';
          }
        }
      }

    checkWin = function(){
        for (let i = 0; i < this.winningMatches.length; i++){
            let [ a, b, c ] = this.winningMatches[i]
            if (this.grid[a].classList.contains('O')  && this.grid[b].classList.contains('O')  && this.grid[c].classList.contains('O') || this.grid[a].classList.contains('X')  && this.grid[b].classList.contains('X')  && this.grid[c].classList.contains('X')){
                return whoWon.innerText = 'player ' + this.whosTurn + ' wins'
            } 
            
        }           
    }
    updateScore(){
        const xScoreElem = document.getElementById('X');
        const oScoreElem = document.getElementById('O');
    
        if (this.whosTurn === 'X') {
            this.xScore++;
            xScoreElem.innerText = this.xScore;
        } else {
            this.oScore++;
            oScoreElem.innerText = this.oScore;
        }
    }
    reset() {
        for (let square of this.grid) {
          square.className = '';
        }
        this.whosTurn = 'X';
        whoWon.innerText = '';
    }
}
new Game()


	// method check for winning combo
        
        
	        // winning combos

	        // name if winning combo or not

	 // method proceed if no win / still empty space