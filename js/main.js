// Project by House Moses: Cyd V., Alexx H., Denielle D., James P., Joshua F., Kelly Ch., Mecca Y, Tiago D., & William S.

//Create an object called "game". Since this game will be object oriented, most of what we will do will reside comepletely within the object.

const game = {
    //create the two players (both human in this case)
    playerOne: 'x',
    playerTwo: 'o',
    //create an array out of the divs in your html. This is your game board, and you are assigning each square/move area a number. This will help with the scoring system.
    array: Array.from(document.querySelectorAll('.box')),
    //create a turn counter to help track who's turn it is
    turn: 0,
    //create an array listing all of the possible winning combinations from the array based on the numbers we assigned in the above array property.
    winningArray: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]],
    //create a function that will initate the game
    runGame(event){
        //this function will help us mark our box of choice when we play the game
        if (event.target.innerText !== ''){
            //if the box already has a move in it, do not allow the player to proceed with choosing it.
            return
        }
        //if not, go ahead and increase the turn tracker, and mark the board with the correct player's piece. X is odd, O is even.
        game.turnTracker()
        //this would not run unless I had game.turn. I originally had this.turn. Why could I use game?
        if (game.turn % 2 !== 0){
            event.target.innerText = game.playerOne
            console.log('Player X made a move!')
        } else {
            event.target.innerText = game.playerTwo
            console.log('Player O made a move!')
        }
        //after each turn, the game will check to see if there is a win or a tie. The corresponding methods are written below.
        game.isWin()
        game.isTie()
    },
    //turn tracker function referenced above. It increases the turn and indicate which player's turn it is
    turnTracker(){
        this.turn++
        if (this.turn % 2 !== 0) {
            document.querySelector('#playerTurn').innerText = "It is Player O's turn!"
        } else {
            document.querySelector('#playerTurn').innerText = "It is Player X's turn!"
        }
    },
    //This method will check if there is a winner.
    isWin() {
        for (let i = 0; i < this.winningArray.length; i++) {
            if (this.array[this.winningArray[i][0]].innerText !== '' &&
            this.array[this.winningArray[i][0]].innerText === this.array[this.winningArray[i][1]].innerText &&
           this.array[this.winningArray[i][0]].innerText === this.array[this.winningArray[i][2]].innerText){
                //if a winning combination is found, first, stop the game. full stopGame method below
                game.stopGame()
                //Then, depending on the turn (since the winning move is the last move) the computer will report back the winner!
                if (this.turn % 2 !== 0){
                    document.querySelector('#whoWon').innerText = 'Player X is the Winner!'
                    console.log('Player X is the Winner!')
                } else {
                    document.querySelector('#whoWon').innerText = 'Player O is the Winner!'
                    console.log('Player O is the Winner!')
                }
            }
        }
    },
    //This method will check if there is a tie after 9 turns (maximum) have been played. It also makes sure a winner was not already declared by cheking the contents of the whoWon section of the DOM.
    isTie() {
        if (this.turn === 9 && document.querySelector('#whoWon').innerText === ''){
            document.querySelector('#whoWon').innerText = 'Issa Tie T_T'
            game.stopGame()
        } else {
            return
        }
    },
    //This method will stop the game
    stopGame() {
        const block = document.querySelector('.playField')
        block.removeEventListener('click', game.runGame)
        console.log('The game is over. Please press the "Play Again" button to play again.')
        document.querySelector('#playerTurn').innerText = "Game Over! Play Again below!"
    },
    //This method will reset the game (attached to the reset button)
    resetGame() {
        document.querySelector('.playField').addEventListener('click', game.runGame)
        game.turn = 0
        for (let i = 0; i < game.array.length; i++){
            game.array[i].innerText = ' '
        }
        document.querySelector('#whoWon').innerText = ' '
        document.querySelector('#playerTurn').innerText = "Player X will begin!"
    }
}
//These are our two event listeners that will pull from our object and get the game going!
document.querySelector('.playField').addEventListener('click', game.runGame)
document.querySelector('#resetBtn').addEventListener('click', game.resetGame)