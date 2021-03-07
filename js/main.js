//Game State

//This is a constructor that creates the player and their starting score. 

function CreatePlayer(name, score) {
   
    this.name = name;
    this.score = score;

}

let player1 = new CreatePlayer('player1', 0)

let player2 = new CreatePlayer('player2', 0)

//'turnCount' is a variable that is used as a counter to track what the current turn number is. It begins at 1 and when it reaches 10, the event listener to click on the grid will be removed. It will be removed at 10 because by turn 10, all the squares in the grid will have been filled.

let turnCount = 1;


//There is a variable called 'currentState' to track the current play status of the game. If a player has won, the currentState will return 'player1' or 'player2,' depending on who won. It it is a draw, the currentState returns 'draw.' If the game is currently in progress because no on e has won and it's not a draw, currentState returns 'continue.' 

//currentState will return 4 possible values: 'player1',' player2', 'draw', 'continue'

let currentState = 'continue';

//The 'whoseTurn' function tracks whose turn it current is. It uses the 'turnCount' variable. If the 'turnCount' vairable is odd, then it is player 1's turn. if the 'turnCount' is even, then it is player 2's turn. 

//whoseTurn() returns either 'player1' or 'player2'

function whoseTurn() {
    if(turnCount % 2 !== 0){
        return "player1";
        
    } else{
        
        return "player2";
    }
}

//This is the array to present the game board. 
//Each element in arrGame represents a square on the game board. There are 9 squares. 

let arrGame = ["", "", "", "", "", "", "", "", ""];


//The 'doMove' function executes a move. It takes 2 parameters: 'player' and 'square.' Player will return either: 'player1,' 'player2,' or "" (empty string--no player). Square will returm a number from 1 - 9. 

//If the arrGame[i] is empty, arrGame[i] will be reassigned to player's value ('player1' or 'player2').

//The turnCount will updated by 1.

//The checkGame() function gets called to see if someone has won, if there is a draw, or if the game continues.

function doMove(player, square) {
    
    if(arrGame[square] === "") {
        
        arrGame[square] = player;
        
        turnCount +=1; 
        
        checkGame();
        
         
    }
    
}

//The 'checkSquares' functions checks if the squares are filled. If the 'if' condition is true, then it returns either 'player1' or 'player2.' Else, it will return an empty string, "".

//It takes 3 parameters: 'square1,' 'square2,' and 'square3.'  These values will be a number from 0-8; based off the arrGame index. 

//At this point, arrGame[i] has been reassigned to be either "player1", "player2", or "".

function checkSquares(square1, square2, square3) {
    
    if( arrGame[square1] === arrGame[square2] && arrGame[square1] === arrGame[square3] && arrGame[square1] !== "" ) {
        
        return arrGame[square1];
        
    } else {
        
        return "";
    }
    
}

//The checkGame function checks the array, arrGame after each click. It checks to see if there is a victory, draw, or if the game should continue. 

//It calls the checkSquares() function to check if either 'player1' or 'player2' has fulfilled a winning condition. There are 8 possible winning conditions. It returns 'player1' or 'player2' if there is a win. It will return "" if it not true.

//The return value of checkSquares(): 'player1','player2', "", will be asssigned to a new variable named 'result.'
//If 'result' is 'player1' or 'player2,' the 'currentState' variable is assined to the 'result' and the increaseScore function is called with the updated 'result.'

function checkGame() {
    
    //Checking diagonal squares
    
    let result = checkSquares(0, 4, 8); //'player1' or 'player2' or ""
    
    if( result !== "") {
        
        currentState = result; //'player1' or 'player2'
        
        increaseScore(result);

        return;

    } 
    
    result = checkSquares(2, 4, 6);
    
    if( result !== "") {
        
        currentState = result;

        increaseScore(result);
        
        return;
        
    } 
    
    //Checking horizonal squares
    
    result = checkSquares(0, 1, 2);
    
    if( result !== "" ) {
        
        currentState = result;

        increaseScore(result);
        
        return;
        
    }
    
    result = checkSquares(3, 4, 5);
    
    if( result !== "") {
        
        currentState = result;

        increaseScore(result);
        
        return;
        
    }
    
    result = checkSquares(6, 7, 8);
    
    if( result !== "") {
        
        currentState = result;

        increaseScore(result);
        
        return;
        
    }
    
    //Checking vertical squares
    
    result = checkSquares(0, 3, 6);
    
    if( result !== "") {
        
        currentState = result;

        increaseScore(result);
        
        return;
        
    }
    
    result = checkSquares(1, 4, 7);
    
    if( result !== "") {
        
        currentState = result;

        increaseScore(result);
        
        return;
        
    }
    
    result = checkSquares(2, 5, 8);
    
    if( result !== "") {
        
        currentState = result;

        increaseScore(result);
        
        return;
        
    }

    //If the count gets to 10 without a winner, it is a draw.
    
    if( turnCount === 10) {
        
        currentState = 'draw';

        increaseScore('draw');
        
        return;
    }
    
    //If no one won and the count is under 10, continue playing. 

    currentState = 'continue';
    
} 

//The 'playAgain' function clears the game board.


function playAgain() {
    
    arrGame = ["", "", "", "", "", "", "", "", ""];
    
    turnCount = 1;
    
    currentState = "continue";
    
}

//The 'resetGame' function clears the game board.

function resetGame() {
    
    arrGame = ["", "", "", "", "", "", "", "", ""];
    
    turnCount = 1;
    
    currentState = "continue";
    
}

//Game Score

//The starting scores for player 1, player 2, and the draw score are declared. The scores begin at 0. 

// let player1Score = 0;
// let player2Score = 0;
let drawScore = 0;

//The 'increaseScore' function increases the players' score or draw score by 1; it is tracked in the game state.

function increaseScore( state ) {

    if( state === "player1") {
    
        player1.score++;
    
    } else if ( state === "player2" ) {

        player2.score++;
        
    } else if ( state === "draw" ) {

        drawScore++; 

    }

    console.log(player1.score);
}




//HTML

//The variables for each player's mark/image is declared. Player1 is the fox. Player2 is the heat. 

let player1Mark = "./pic/fox.png"; //Fox image

let player2Mark = "./pic/bird.png"; //Bird image

//The 'setImage' function populates the square with a mark/image depending on which player has clicked on the square.

//The funciton takes 2 parameters: 'item' and 'index'.  The 

function setImage(item, index) {
    
    
    if( arrGame[index] === "player1" ) {
        
        item.setAttribute('src', player1Mark);
        
        
    } else if( arrGame[index] === "player2") {
        
        item.setAttribute('src', player2Mark);
        
    } else {
        
        item.setAttribute('src', "");
        
    }
    
}

//The 'setUpGridClick' function prepares for the click by adding the event listener to each of the 9 squares.

//It takes 1 parameter: 'item.' 'Item' refers to each of the 9 squares. 

function setUpGridClick(item) {
    
    item.removeEventListener('click', gridClick)
    item.addEventListener('click', gridClick)
    
}

//The 'gridClick' function calls the doMove() function. It looks at who is the player and which square they chose. Next, it calls the 'updateGrid' function which updates the game board with image. Then, the 'updateScore' function is called which updates the score.

function gridClick(e) {
    
    doMove(whoseTurn(), Number(e.target.getAttribute('numb'))); //Ex. doMove("player1," 2)

    updateGrid();

    updateScore();
    
}

//The 'removeGridClick' function removes the event listener. It removes ƒthe event listener by looking at the currentState value. If it is 'player1' or 'player2', then someone has played on the square and the ability to keep clicking on that square is removed. 

function removeGridClick(item) {
    
    item.removeEventListener('click', gridClick)
}


//The updateGrid function populates the mark/image after the click. It will populate the DOM with: "Fox wins!" "Bird wins!" "Draw!" or "".

//The variable 'gameGrid' is assigned the entire game board.

//The variable 'gridImgs' is assigned the image element/class within the game board. There are 9. 

//For each of the image elements, the setImage function. For each of the 9 squares, the setUpGridClick will be called. 

function updateGrid() {
    
    
    let gameGrid = document.querySelector('.gridContainer');
    
    let gridImgs = gameGrid.querySelectorAll('.itemImg');
    
    gridImgs.forEach( (item, index) => {
        
        setUpGridClick(item.parentElement);
        setImage(item, index);
        
        
        if(currentState !== "continue") {
            
            removeGridClick(item.parentElement);

        }

    } )
    
                
    updateResultsToDom();
   
    
}

function updateResultsToDom() {

    if(currentState === "player1"){
        document.querySelector('.h2Res').innerHTML = "Fox Win!"
    } else if (currentState === "player2"){
        document.querySelector('.h2Res').innerHTML = "Bird Win!"
    } else if (currentState === "draw") {
        document.querySelector('.h2Res').innerHTML = "Draw!"
    } else if( currentState === "continue" ) {
        document.querySelector('.h2Res').innerHTML = ""
    }

}

updateGrid();

//The 'updateScore' function updates the score in the DOM.

function updateScore() {

    if(currentState === "player1") {

        document.querySelector('#player1Score').innerHTML = player1.score;

    } else if( currentState === "player2" ) {

        document.querySelector('#player2Score').innerHTML = player2.score;

    } else if( currentState === "draw" ) {

        document.querySelector('#tdTie').innerHTML = drawScore;

    }

}

//The 'setScore0' function resets the score to 0 for all in the DOM.

function setScore0() {

        player1.score = 0;
        player2.score = 0;
        drawScore = 0;


        document.querySelector('#player1Score').innerHTML = 0;


        document.querySelector('#player2Score').innerHTML = 0;


        document.querySelector('#tdTie').innerHTML = 0;


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



