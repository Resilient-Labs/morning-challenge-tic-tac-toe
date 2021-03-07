const WINNING_SCENARIOS = [[0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8]];

class Game {
    constructor(player1, player2) {

        this.arrGame = ["", "", "", "", "", "", "", "", ""]
        this.currentState = 'continue'
        this.turnCount = 1
        this.player1 = player1
        this.player2 = player2
        this.winner = null 
        this.drawScore = 0

    }


    getCurrentState() {

        return this.currentState;
    }
   
    setCurrentState() {

        return this.currentState;
    }

    getArrGame() {
        

        return this.arrGame;
    }

    setArrGameIndex(index, value){

        this.arrGame[index] = value;//Ex. (1, player1) player.name is populated into the array index that the player clicked on.

        let playerWon = this.checkForWinner(value);//Returns true or false. Value is either player 1 or player2

        console.log(playerWon);

        if(playerWon === true) {

            this.winner = value;//Value is either player 1 or player2

            this.currentState = value;

            this.incrementScore();

        } else {

            this.currentState = 'continue'; 
        }
    }

    checkForWinner(player) {

        for ( const scenario of WINNING_SCENARIOS ) {

            let isWinningScenario = true;

            for ( const square of scenario) {

                if (this.arrGame[square] != player) {

                    isWinningScenario = false;

                } 

            }

            if(isWinningScenario) {

                return true;
            }

            console.log(scenario);
        }

        return false; 

    }

    incrementTurnCount() {

        if( (this.winner != this.player1 || this.player2) && this.turnCount === 9 ) {
        
            this.currentState = 'draw';
    
            this.incrementScore();
            
            return;

        } else {

        return this.turnCount++;

        }
    }

    getTurnCount() {

        return this.turnCount;
    }

    whoseTurn() {
        if(this.turnCount % 2 !== 0){
            return "player1";
            
        } else{
            
            return "player2";
        }
    }

    incrementScore() {

        if( this.winner === "player1" ) {
    
            player1.score++;
        
        } else if ( this.winner === "player2" ) {
    
            player2.score++;
            
        } else if ( this.currentState === "draw" ) {
    
            this.drawScore++; 
    
        }
    
      
    }

}



class Player{
    constructor(name, img) {
        this.name = name
        this.image = img
        this.score = 0
    }
}

let player1 = new Player('player1', './pic/fox.png' )

let player2 = new Player('player2', './pic/bird.png')

let game = new Game(player1, player2);



//Event listener is added on the squares.
function setUpGridClick(item) {
    
    item.removeEventListener('click', gridClick)
    item.addEventListener('click', gridClick)
    
}

function gridClick(e) {

    let player = game.whoseTurn();// Returns 'player' or 'player2', depending on the turnCount

    console.log(game.getTurnCount());
    console.log(player);

    let square = Number(e.target.getAttribute('numb')); // Returns a number from 0-8. Each square on the board is associated with a number from 0-8.
    

    let arrGame = game.getArrGame(); // ["", "", "", "", "", "", "", "", ""]


    if(arrGame[square] === "")  {
        
        game.setArrGameIndex(square, player);//Ex. (1, player1) player.name is populated into the array index that the player clicked on. Next, this.winner is updated.

        game.setCurrentState();

        game.incrementTurnCount();//this.turnCount increments.

        // game.incrementScore();

        console.log(game.currentState);

        
  
        
    } //if the square clicked on is empty, populate player.name into the array index that they cliked on


    updateGrid();

    updateScore();

    removeGridClick(e.target);
    
}

function updateGrid() {
    
    let gameGrid = document.querySelector('.gridContainer');
    
    let gridImgs = gameGrid.querySelectorAll('.itemImg');
    
    gridImgs.forEach( (item, index) => {
        
        setUpGridClick(item.parentElement);
        setImage(item, index);
        
        
        if(game.currentState != "continue") {
            
            removeGridClick(item.parentElement);

        }

    } )
                
    updateResultsToDom();
   
}

updateGrid();

function setImage(item, index) {
    
    
    if( game.arrGame[index] === "player1" ) {
        
        item.setAttribute('src', player1.image);
        
        
    } else if( game.arrGame[index] === "player2") {
        
        item.setAttribute('src', player2.image);
        
    } else {
        
        item.setAttribute('src', "");
        
    }
    
}

function removeGridClick(item) {
    
    item.removeEventListener('click', gridClick)
}

function updateResultsToDom() {

    if(game.currentState === "player1"){
        document.querySelector('.h2Res').innerHTML = "Fox Win!"
    } else if (game.currentState === "player2"){
        document.querySelector('.h2Res').innerHTML = "Bird Win!"
    } else if (game.currentState === "draw") {
        document.querySelector('.h2Res').innerHTML = "Draw!"
    } else if( game.currentState === "continue" ) {
        document.querySelector('.h2Res').innerHTML = ""
    }

}




function updateScore() {

    if(game.currentState === "player1") {

        document.querySelector('#player1Score').innerHTML = player1.score;

    } else if( game.currentState === "player2" ) {

        document.querySelector('#player2Score').innerHTML = player2.score;

    } else if( game.currentState === "draw" ) {

        document.querySelector('#tdTie').innerHTML = game.drawScore;

    }

}

function setScore0() {

    player1.score = 0;
    player2.score = 0;
    game.drawScore = 0;


    document.querySelector('#player1Score').innerHTML = 0;


    document.querySelector('#player2Score').innerHTML = 0;


    document.querySelector('#tdTie').innerHTML = 0;


}

//The 'playAgain' function clears the game board.


function playAgain() {
    
    game.arrGame = ["", "", "", "", "", "", "", "", ""];
    
    game.turnCount = 1;
    
    game.currentState = "continue";
    
}

//The 'resetGame' function clears the game board.

function resetGame() {
    
    game.arrGame = ["", "", "", "", "", "", "", "", ""];
    
    game.turnCount = 1;
    
    game.currentState = "continue";
    
}

//This the event listener for the 'Play Again' button. It clears the grid and allows for a new game to be played.

document.querySelector('.buttonPlayAgain').addEventListener('click', () => {

playAgain();
updateGrid();
})

//This the event listener for the 'Reset' button. It clears the grid and the score. It allows for a new game to be played. 

document.querySelector('.buttReset').addEventListener('click', () => {

resetGame();
setScore0();
updateGrid();
})
