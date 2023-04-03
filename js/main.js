
class TicTacToe {
    //creates an object factory for X
    constructor() {
        this.currentPlayer = 'X';
        //change from an array to a nodelist
        this.cellBody = Array.from(document.querySelectorAll('#cell')); //Converts NodeList into array (Array.from) 
    }
  
    start() {
        this.cellBody.forEach(cell => {
        //Add event listener to all the cells
        cell.addEventListener('click', () => {
            //check if the cell already has innerText. If it does it means cell has already been selected
          if (cell.innerText !== '') {
            return;
          }
          //adds text to each cell
          cell.innerText = this.currentPlayer;
          //Checks for a draw
          if (this.checkDraw()) {
            alert('It\'s a Draw!');
          }
          //checks for winner
          if (this.findWinner()) {
            alert(`${this.currentPlayer} Wins!`);
          }
          //Once a player has been selected, change the players turns
          this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'; //This changes the players turn. If the currentPlayer is = X, let 0 happen if X isn't present keep X add ternary operator into anki
        });
      });

      //create button for restart function
      document.querySelector('#restartBtn').addEventListener('click', () => {
        window.location.reload();
      });
    }
  
    checkDraw() {
        //returns true if every cellhas innerText of 'x' or 'o' (add to anki)
      return this.cellBody.every(cell => cell.innerText === 'X' || cell.innerText === 'O');
    }
  
    findWinner() {
        //if the cell index matches current player then they win
      if (this.checkRow(0, 1, 2) || this.checkRow(3, 4, 5) || this.checkRow(6, 7, 8) ||
          this.checkRow(0, 3, 6) || this.checkRow(1, 4, 7) || this.checkRow(2, 5, 8) ||
          this.checkRow(0, 4, 8) || this.checkRow(6, 4, 2)) {
        return true;
      }else {
        return false;
      }
    }
    checkRow(a, b, c) {
      return this.cellBody[a].innerText === this.currentPlayer && this.cellBody[b].innerText === this.currentPlayer && this.cellBody[c].innerText === this.currentPlayer;
    }
  }
  
  const game = new TicTacToe();
  game.start();

