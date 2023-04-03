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
        if (element.innerText != '') {
            return
        }

        element.innerText = playerOne

        // // // // check for turns
        // ticTacToe.takeTurn()
        // console.log(ticTacToe)

        // // // // check for Winner
        // ticTacToe.checkWinner()

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
    
    let draw = boardBox.every((element, index) => element[index].innerText == 'X' || element[index].innerText == 'O'); //.every checks thta each tile or box matches the condition.
    if (draw) {
        alert('draw')
        this.active = false
    }
}

    checkWinner () {
        if (element[0].innerText === player && element[1].innerText === player && element[2].innerText === player) {
            alert('You Win!');
            this.active = false
        } else if (element[3].innerText === player && element[4].innerText === player && element[5].innerText === player) {
            alert('You Win!');
            this.active = false
        } else if (element[6].innerText === player && element[7].innerText === player && element[8].innerText === player) {
            alert('You Win!');
            this.active = false
        } else if (element[0].innerText === player && element[3].innerText === player && element[6].innerText === player) {
            alert('You Win!');
            this.active = false
        } else if (element[1].innerText === player && element[4].innerText === player && element[7].innerText === player) {
            alert('You Win!');
            this.active = false
        } else if (element[2].innerText === player && element[5].innerText === player && element[8].innerText === player) {
            alert('You Win!');
            this.active = false
        } else if (element[0].innerText === player && element[4].innerText === player && element[8].innerText === player) {
            alert('You Win!');
            this.active = false
        } else if (element[2].innerText === player && element[4].innerText === player && element[6].innerText === player) {
            alert('You Win!');
            this.active = false
        }
    }

    restart() {
        window.location.reload()
        this.active = true
        element.forEach(element => element.innerText = "")
        // document.querySelector('announcement').innerText = ""
    }
}



const ticTacToe = new TicTacToe()
restart.addEventListener('click', ticTacToe.restart)


