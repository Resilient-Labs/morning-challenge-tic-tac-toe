//alert('works')

/*Goal: Create a two player Tic-Tac-Toe game. 
The users should be able to click to place 
their X or O and if they win the program
should mention their win in the DOM. 
Please make the game as OOP as possible.
*/


/* 
step 1: Determine where i can create objects
    -my players (2)
    -my game (clicking until we either run out of boxes = tie, or win = 3 in a row)

step 2: User interaction (OOP)
    How many players do i need?
        two players so player 1[X] and player 2[O]
    Wh goes first? 
        -traditional, X foes first and other one is assined O
    What happens if X or O wins?
        - If X wins then HTTML playerXscore updates
        -If O wins then playerOscore updates
    What happens if no one wins? 
        -the points get added to html id  Tie 
step 3: Which array patters determine the win?
    If either user gets three in a row:
        [0 1 2]
        [3 4 5]
        [6 7 8]
    Win patterns vertical, horizontal and X
    total win patterns within the array is 8? 
Step 4: if the person wins it should mention thier win in the DOM(document Object model):
    ex: document.write(" play ${playerXwin} won!") idk

Step 5: if theres one player then it shoul duse an API and have a computer play against the user
if i complete the basics on time then integrate step 5 else just simple
*/


//My players class , thier name player x, player Y, with thier makrts tic tac toe X, O
class Player{
    constructor(name, logo) {
        this.name = name;
        this.logo = logo;
        this.score= 0;
    }
}

const playerX = new Player("player X", "X")
const playerO = new Player("player O", "O")

class play {
    constructor(playerX, playerO) {
        this.playerO = playerO;
        this.playerX = playerX;
        this.currentPlayer = playerX;
        this.board = Array(9).fill(null)
        this.endGame = false; 

        this.winningPatterns = [
            /* rows*/[0, 1, 2], [3, 4, 5], [6, 7, 8],
            /*columns*/ [0, 3, 6], [1, 4, 7], [2, 5 ,8],
            /*the X */ [0, 4, 8], [2, 4, 6]
        ]

        this.cells= document.querySelectorAll(".cell")
        this.cells.forEach((cell, index) => {
            cell.addEventListener("click", () => this.daMoves(index));
    
        })
        document.getElementById("reset").addEventListener("click", () => this.resetboard());
    }
    daMoves(index) {
        if (this.endGame || this.board[index] !== null)
            return;
        this.board[index] = this.currentPlayer.logo;
        this.cells[index].textContent = this.currentPlayer.logo;

    
        if (this.winPatterns()) { 
            this.endGame = true; 
            this.currentPlayer.score++; 
            this.uupdateScore(); 
            document.getElementById("WinMessage").textContent = `The ${this.currentPlayer.name} won! imagine a win emoji`

        }

        else if (this.board.every(cell => cell !== null)) {
            this.endGame = true;
            const ties = document.getElementById("tieScore")
            ties.textContent = Number(ties.textContent) + 1; 

            document.getElementById("WinMessage").textContent = 'It is a tie'

        } else {
            this.switchPlayer();
        }
    }

    winPatterns() {
        return this.winningPatterns.some(pattern =>
            pattern.every(
                index => this.board[index] ===this.currentPlayer.logo)
            );
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer ===this.playerX ? this.playerO : this.playerX;
    }


    uupdateScore() {
        document.getElementById("playerXScore").textContent = this.playerX.score;
        document.getElementById("playerOScore").textContent = this.playerO.score;

    }

    resetboard() {
        this.board = Array(9).fill(null); 
        this.cells.forEach(cell => cell.textContent = "")
        this.endGame = false; 
        this.currentPlayer = this.playerX
        document.getElementById("WinMessage").textContent = ""
    }
}
    const game = new play(playerX, playerO)




