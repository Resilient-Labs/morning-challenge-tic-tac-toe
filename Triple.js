let player = "x" //create variable for player1
let cell = document.querySelectorAll('#cells') //grabbing each cell within the game
let restart = document.querySelector('#reset') //for reset button


cell = Array.from(cell) //changes the cell to a cell array

//for each on cell array and add event listener
cell.forEach(element => {

    element.addEventListener('click', () => {

        if (element.innerText != "" || ! tttgame.active) {
            return
        }
        
        element.innerText = player

        tttgame.winnerWinnerChickenDinner()//function to check if you're a winner

        tttgame.checkDraw() //function to check for a tie

        //ternary operator for player1
        player = player === "x" ? "o" : "x";
    })
})

//returns true if every cell has innerText of "x" or "o"

class TTTGame {
    constructor() {
        this.active = true // use this.active to tell us if the game is in progress, if it's not in progress then the game is over
    }
    
    checkDraw() {
       if(! this.active){
        return
       }

        let draw = cell.every((element, index) => cell[index].innerText == "x" || cell[index].innerText == "o"); //.every checks to see that each cell matches a condition

        if (draw) {
            alert('draw') //if true , it's a draw
            this.active = false
        }
    }

    winnerWinnerChickenDinner() {
        if (cell[0].innerText === player && cell[1].innerText === player && cell[2].innerText === player) {
            alert('You Win!');
            this.active = false
        } else if (cell[3].innerText === player && cell[4].innerText === player && cell[5].innerText === player) {
            alert('You Win!');
            this.active = false
        } else if (cell[6].innerText === player && cell[7].innerText === player && cell[8].innerText === player) {
            alert('You Win!');
            this.active = false
        } else if (cell[0].innerText === player && cell[3].innerText === player && cell[6].innerText === player) {
            alert('You Win!');
            this.active = false
        } else if (cell[1].innerText === player && cell[4].innerText === player && cell[7].innerText === player) {
            alert('You Win!');
            this.active = false
        } else if (cell[2].innerText === player && cell[5].innerText === player && cell[8].innerText === player) {
            alert('You Win!');
            this.active = false
        } else if (cell[0].innerText === player && cell[4].innerText === player && cell[8].innerText === player) {
            alert('You Win!');
            this.active = false
        } else if (cell[2].innerText === player && cell[4].innerText === player && cell[6].innerText === player) {
            alert('You Win!');
            this.active = false
        }
    }

    runAgain() {
        window.location.reload()
        this.active = true
        cell.forEach(element => element.innerText = "")
        // document.querySelector('#announcement').innerText = ""
    }
}


//reset function for reset button 

const tttgame = new TTTGame()
restart.addEventListener('click', tttgame.runAgain)
    // //reset player 1 back to "x"
    // player1 = "x"

    //remove all innerText from the cells.


    // cells.forEach(cell => cell.innerText = "")
    // document.querySelector('.displaywinner').classList.add('hidden')

