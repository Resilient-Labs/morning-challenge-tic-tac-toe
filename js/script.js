//received help from Daniel, Ernest and Marcos

// placed all section elements in an array stored in the variable board, this will be the board tiles
const board = Array.from(document.querySelectorAll('.box'));

//placed all winning combinations of the game into an array
const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

//created game object
const game = {
    // properties that has information about the turn count and who the current player is
    turn: 1,
    currentPlayer: 'X',
    // method that updates the the player's sign based on the turn count
    nextTurn: function(){
        if(this.turn % 2 == 0){
            this.currentPlayer = 'O'
        }else{
            this.currentPlayer = 'X'
        }
    },
    // method that prints who the current player is
    checkCurrentPlayer: function(){
        document.getElementById('whoseTurn').innerHTML = 'PLAYER TURN: ' + this.currentPlayer;
    },
    // method that checks who won by using a for loop to go through all win combinations 
    checkWin: function(){
        for (let i = 0; i < combinations.length; i++) {
            // declaring array variable that will store and match the indexes of combination and board array
            const [a, b, c] = combinations[i];
            // conditional checks if matching player signs exist for each win combination
            if (
                board[a].textContent !== "" &&
                board[a].textContent === board[b].textContent && 
                board[a].textContent === board[c].textContent
            ) {
                // if winning conditions are met, displays winner message
                document.getElementById('message').innerHTML = ' THE WINNER IS ' + board[a].textContent;
                // makes board unclickable after winning by adding a class called 'unclickable'
                board.forEach(element => {
                    element.classList.add('unclickable');
                });
                // highlights winning board tile combination by adding a class called 'winningTiles' to each winning array element in board and combination
                board[a].classList.add('winningTiles');
                board[b].classList.add('winningTiles');
                board[c].classList.add('winningTiles');
                // removes current player turn message 
                document.getElementById('whoseTurn').style.display = 'none';
            }
        }
    },
    // method that checks for a draw by using a for loop to go through all win combinations 
    checkDraw: function(){
        for (let i = 0; i < combinations.length; i++) {
            const [a, b, c] = combinations[i];
            // conditional that checks the reverse of checkWin, in addition it checks for the turn count being 10
            if (
                this.turn == 10 &&
                board[a].textContent !== "" &&
                board[a].textContent !== board[b].textContent && 
                board[a].textContent !== board[c].textContent
            ) {
                // if draw conditions are met, draw message is shown
                document.getElementById('message').innerHTML = 'DRAW! REFRESH TO PLAY AGAIN!';
                // hides player turn message 
                document.getElementById('whoseTurn').style.display = 'none';
            }
        }
    },
}

// shows starting state of a new game
document.getElementById('instructions').innerHTML = 'X BEGINS GAME! 3 WINS = GAME OVER';
game.checkCurrentPlayer();

// gives a click event to each board tile or section
board.forEach(element => {
    element.onclick = function(event){
        const tileTarget = event.target;
        // prints player sign into targeted element
        tileTarget.innerHTML = game.currentPlayer;
        // the element is made unclickable by adding a css class called 'unclickable
        tileTarget.classList.add('unclickable');
        // increase turn count
        game.turn++;
        // switches player sign
        game.nextTurn();
        game.checkDraw();
        game.checkWin();
        game.checkCurrentPlayer();
        // removes instructions from display 
        document.getElementById('instructions').style.display = 'none';
    };

});





