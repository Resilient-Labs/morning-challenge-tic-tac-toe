// Create a two player Tic-Tac-Toe game. 
// The users should be able to click to place their X or O 
// If they win the program should mention their win in the DOM. 
// Please make the game as OOP as possible.


class Game{
    constructor(){
        this.turn = 'X';
        this.grid = new Array(9).fill(null);
    }

    nextPlayer(){
        this.turn = this.turn === 'X' ? this.turn = 'O' : this.turn = 'X'
    }

    move(i){
        this.grid[i] = this.grid[i] != null ? this.grid[i] = this.grid[i] : this.grid[i] = this.turn 
        this.nextPlayer()
    }


}

let game = new Game()


console.log(game.turn)
console.log(game.grid)