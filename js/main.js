//Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.

//THE TIC TAC TOE GAME: Create a Class for 1.Player | 2.Board | 3.Game Play

//____________________________________________________________________________________________
//Class for the 2 players - User = Player | Letter = "X" or "O" 
class Player { 
    constructor(user, letter) { 
        this.user = user; 
        this.letter = letter;
    }
}

//____________________________________________________________________________________________
//Class for the game board and determining the spaces on the board, the moves, and winning possibilities
class Board { 
    constructor() { 
        this.boxes = Array(9).fill("");//all spaces (0-8) are empty strings to begin
    }
        
        placeLetter(index,letter) { 

            //if space is already filled_______________
            //Doesn't let player change space
            if(this.boxes[index] !== "") { 
                return false; 
            }
            
            //if player mark this space________________
            //storing player move data
            this.boxes[index] = letter; 
            return true; 
            }

            //WINNING COMBINATIONS INDEX FOR THE GAME
            checkWinner(letter) { 
                const winningCombos = [
                    [0,1,2], 
                    [3,4,5], 
                    [6,7,8], 
                    [0,3,6], 
                    [1,4,7], 
                    [2,5,8], 
                    [0,4,8],
                    [6,4,2] 
                ];
                
                return winningCombos.some((combo) => 
                combo.every(
                    (index) => this.boxes[index] === letter
                )
             );
            }

            noWinner() { 
                return this.boxes.every((box) => box !== ""); 
            }//no empty spaces on the board and there's no winner

            reset() { 
                this.boxes = Array(9).fill("")
            }//CLEARS THE ENTIRE BOARD TO RESTART THE GAME
    }
    
//____________________________________________________________________________________________
//Class for the GAME PLAY
//Make Players, Turn Tracking, Connect to the DOM, Displays, 
class Game { 
    constructor() { 
        this.playerX = new Player("Player X", "X"); 
        this.playerO = new Player("Player O", "O"); 

        this.board = new Board(); 

        this.currentPlayer = this.playerX; //which player's turn is it?
        this.gameOver = false; 

        //Connect to the DOM - 
        this.boardSpaces = document.querySelectorAll(".space"); 
        this.statusMessage = document.querySelector("#status");
        this.restartButton = document.querySelector("#restart");

        this.addEventListeners(); 
        this.updateDisplay(); 
    }

    //EVENT LISTENERS________________________________________________
    addEventListeners() { 
        this.boardSpaces.forEach((space) => {
            space.addEventListener("click", (spaceClicked) => { 
                this.playTurn(spaceClicked);
            });
         });

            //Listens for restart button
            this.restartButton.addEventListener('click',() => { 
            this.restartGame(); 
            });
    }
    //________________________________________________________________

    //PLAY TURN 
    //spaceClicked is the Click Event
    playTurn(spaceClicked) { 
            if(this.gameOver) { 
                return; 
            }

            const clickedSpace = spaceClicked.target;
            const index = Number (clickedSpace.dataset.index);
            const playerMove = this.board.placeLetter (index,this.currentPlayer.letter);
        

        if(!playerMove) { 
            return; 
        }

        clickedSpace.textContent = this.currentPlayer.letter;

        if(this.board.checkWinner(this.currentPlayer.letter)) { 
            this.statusMessage.textContent = 
            `${this.currentPlayer.user} wins!`;

            this.gameOver = true; 
            return; 

        } 

        if (this.board.noWinner()) { 
        this.statusMessage.textContent = "There is no winner!"; 
        this.gameOver = true; 
        return;    
        }

        //
        this.switchPlayer(); 
        this.updateDisplay();
    }

    //Switch Players
    switchPlayer() { 
        if(this.currentPlayer === this.playerX) {
            this.currentPlayer = this.playerO; 
        } else { 
            this.currentPlayer = this.playerX;
        }
    }

    updateDisplay() { 
        this.statusMessage.textContent = 
        `${this.currentPlayer.user}'s turn`;
        }

    
    //Reset data and clear out the game
    restartGame() { 
            this.board.reset(); 
            this.currentPlayer = this.playerX;
            this.gameOver = false; 
            this.boardSpaces.forEach((space) => { 
                space.textContent = ""; 
            }); 

            //Show that it isPlayer X's turn again
            this.updateDisplay();
        }  
}   
//END OF GAME PLAY CLASS____________________________________________________________________________________________

    //______________________________________________________
    // START THE GAME
    //______________________________________________________
    const game = new Game(); 


//Do I need to make the last "X" or "O" mark on the game when there's a winner?