// worked with Akeem to debug and add OOP.//

let playerOne = 'X'; // this the global Variable

//Make a document query for the restart button

// const restartButton = document.querySelector ('#restart');
// restartButton.addEventListener('click', restart) 

//the variable is being targetted.
// select all the boxes in the board
let boardBox = document.querySelectorAll('.tile') //returns a Nodelist which is full of data. NodeList are similar to an array but is NOT an array
let restart = document.querySelector('#restart')

boardBox = Array.from(boardBox) // making NodeList into an Array with the Array.from method.

boardBox.forEach(element => {

    element.addEventListener('click', () => {
        if (element.innerText != '' /*|| ! ticTacToe.active*/) { //debugging will put back later. 
            return
        }

        element.innerText = playerOne
       
        // // // // check for Winner
        ticTacToe.checkWinner() //checks to see who won
       
        // // // // check for tie
        ticTacToe.takeTurn()


        

        //once a player takes their turn the next player goes.
        playerOne = playerOne === 'X' ? 'O' : 'X'
    })


})

//function to check the player's turn
class TicTacToe {
    constructor() {
        this.active = true //made a boolean because if player is not active then the game stops
    }

    takeTurn() {
        if (! this.active) {
            return
        }

        let draw = boardBox.every((element, index) => boardBox[index].innerText == 'X' || boardBox[index].innerText == 'O'); //.every checks that each tile or box matches the condition.
        if (draw) {
            alert('draw')
            this.active = false
        }

    }

    checkWinner() {
        if (boardBox[0].innerText === playerOne && boardBox[1].innerText === playerOne && boardBox[2].innerText === playerOne) {
            alert('You Win!');
            this.active = false
        } else if (boardBox[3].innerText === playerOne && boardBox[4].innerText === playerOne && boardBox[5].innerText === playerOne) {
            alert('You Win!');
            this.active = false
        } else if (boardBox[6].innerText === playerOne && boardBox[7].innerText === playerOne && boardBox[8].innerText === playerOne) {
            alert('You Win!');
            this.active = false
        } else if (boardBox[0].innerText === playerOne && boardBox[3].innerText === playerOne && boardBox[6].innerText === playerOne) {
            alert('You Win!');
            this.active = false
        } else if (boardBox[1].innerText === playerOne && boardBox[4].innerText === playerOne && boardBox[7].innerText === playerOne) {
            alert('You Win!');
            this.active = false
        } else if (boardBox[2].innerText === playerOne && boardBox[5].innerText === playerOne && boardBox[8].innerText === playerOne) {
            alert('You Win!');
            this.active = false
        } else if (boardBox[0].innerText === playerOne && boardBox[4].innerText === playerOne && boardBox[8].innerText === playerOne) {
            alert('You Win!');
            this.active = false
        } else if (boardBox[2].innerText === playerOne && boardBox[4].innerText === playerOne && boardBox[6].innerText === playerOne) {
            alert('You Win!');
            this.active = false
        }
    }

    restart() {
        window.location.reload()
        this.active = true
        // boardBox.forEach(element => element.innerText = "")
        // document.querySelector('announcement').innerText = ""
    }
}



const ticTacToe = new TicTacToe()
restart.addEventListener('click', ticTacToe.restart)


