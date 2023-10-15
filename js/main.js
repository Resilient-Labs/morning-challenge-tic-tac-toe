//create the class - using it as the blueprint for the game
class TicTacToe {
//set up the properties for the player and the grid
//array.from used to create an array from all 9 of the grid-items
    constructor() {
      this.player1 = 'X';
      this.grid = Array.from(document.querySelectorAll('#grid-item'));
    }


//create a method. this method(function) is used to define when a draw should happen
    isItDraw() {
    //used the every method because it checks if every element in the array meets the condition below.  if every cell has an x or o inside, and it does not meet the conditions for winner, then it is a draw
        let draw = this.grid.every((element) => element.innerText === 'X' || element.innerText === 'O');
        if (draw) {
            document.querySelector('#results').innerText = 'Draw! Restart Game!';
        }
      }
    //another method to see who is the winner
    //list out all possibilites of the outcome for winner
    //if true, it will say you won
      whoWon() {
        let winner = (this.grid[0].innerText === this.player1 && this.grid[1].innerText === this.player1 && this.grid[2].innerText === this.player1) ||
        (this.grid[3].innerText === this.player1 && this.grid[4].innerText === this.player1 && this.grid[5].innerText === this.player1) ||
        (this.grid[6].innerText === this.player1 && this.grid[7].innerText === this.player1 && this.grid[8].innerText === this.player1) ||
        (this.grid[0].innerText === this.player1 && this.grid[3].innerText === this.player1 && this.grid[6].innerText === this.player1) ||
        (this.grid[1].innerText === this.player1 && this.grid[4].innerText === this.player1 && this.grid[7].innerText === this.player1) ||
        (this.grid[2].innerText === this.player1 && this.grid[5].innerText === this.player1 && this.grid[8].innerText === this.player1) ||
        (this.grid[0].innerText === this.player1 && this.grid[4].innerText === this.player1 && this.grid[8].innerText === this.player1) ||
        (this.grid[2].innerText === this.player1 && this.grid[4].innerText === this.player1 && this.grid[6].innerText === this.player1);
    
        if (winner) {
            document.querySelector('#results').innerText = 'You win!';
        }
    }
    

    }

//used to create an instance. an instance is used access the class methods and its properties
const game = new TicTacToe();

//event listener for restart button
document.querySelector('button').addEventListener('click', restartButton);

//.forEach is used to create an event listener of click for each element in the array, so each box in the grid.
game.grid.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.innerText !== '') {
      return;
    }

    element.innerText = game.player1;
    game.whoWon(); // Call the method on the game instance
    game.isItDraw(); // Call the method on the game instance

//this conditional will have it alternate back and forth between x and o 
//if player 1 places x than the next player must put an o
    if (game.player1 === 'X') {
      game.player1 = 'O';
    } else {
      game.player1 = 'X';
    }
  });
});

//function created for the restart button
function restartButton() {
  game.grid.forEach((element) => {
    element.innerText = '';
  });
  //will clear the entire game board
  document.querySelector('#results').innerText = '';
}