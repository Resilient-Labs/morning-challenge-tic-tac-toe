//event listener to allow someone to click on which player turn it is
//a function that has an event listener for a click and produces an x, then immediately an event listener for a click that will produce o
//variable with an array with win combos of each cell 
//a function that declares the game over and shows the winner
//a function that declares when there is a tie -- *NOT DONE
//a function to count the number of wins and reset the game -- *NOT DONE
//a function to clear to the game and start over

// ^^^^^^^^^House CASS pseudo code done together^^^^^^^

// let boxes = Array.from(document.querySelectorAll('.box'))
//     boxes.forEach(function(box) {
//         box.addEventListener('click', playerChoice)
//     })

// // need to write a function that runs when either palyer clicks on a box of choice
// function playerChoice(event){
//     if (playersTurn == 'player1'){
//         document.querySelector('#player').innerText = '0'
//     event.target.innerText = 'X'
//     playersTurn = 'player2'
//     }
//     else if (playersTurn == 'player2'){
//         document.querySelector('#player').innerText = 'X'
//         event.target.innerText = 'O'
//         playersTurn = 'player1'
//     }

// // Winning instances for both X and O. hard coded. 
// if (
//     boxes[0].innerText == 'X' && boxes[1].innerText == 'X' && boxes[2].innerText == 'X' ||
//     boxes[3].innerText == 'X' && boxes[4].innerText == 'X' && boxes[5].innerText == 'X' ||
//     boxes[6].innerText == 'X' && boxes[7].innerText == 'X' && boxes[8].innerText == 'X' ||
//     // up and down winning scenarios
//     boxes[0].innerText == 'X' && boxes[3].innerText == 'X' && boxes[6].innerText == 'X' ||
//     boxes[1].innerText == 'X' && boxes[4].innerText == 'X' && boxes[5].innerText == 'X' ||
//     boxes[2].innerText == 'X' && boxes[5].innerText == 'X' && boxes[8].innerText == 'X' ||
//     // diag winning scenaarios
//     boxes[0].innerText == 'X' && boxes[4].innerText == 'X' && boxes[8].innerText == 'X' ||
//     boxes[2].innerText == 'X' && boxes[4].innerText == 'X' && boxes[6].innerText == 'X'){
//     document.querySelector('#message').classList = 'endgame'
//     document.querySelector('#winner').innerText = '1'
// } else if(
//     boxes[0].innerText == 'O' && boxes[1].innerText == 'O' && boxes[2].innerText == 'O' ||
//     boxes[3].innerText == 'O' && boxes[4].innerText == 'O' && boxes[5].innerText == 'O' ||
//     boxes[6].innerText == 'O' && boxes[7].innerText == 'O' && boxes[8].innerText == 'O' ||
//     // up and down winning scenarios
//     boxes[0].innerText == 'O' && boxes[3].innerText == 'O' && boxes[6].innerText == 'O' ||
//     boxes[1].innerText == 'O' && boxes[4].innerText == 'O' && boxes[5].innerText == 'O' ||
//     boxes[2].innerText == 'O' && boxes[5].innerText == 'O' && boxes[8].innerText == 'O' ||
//     // diag winning scenaarios
//     boxes[0].innerText == 'O' && boxes[4].innerText == 'O' && boxes[8].innerText == 'O' ||
//     boxes[2].innerText == 'O' && boxes[4].innerText == 'O' && boxes[6].innerText == 'O'){
//     document.querySelector('#message').classList = 'endgame'
//     document.querySelector('#winner').innerText = '2'
// }

// }

// let playersTurn = 'X'

let boxes = Array.from(document.querySelectorAll('.box'))
    boxes.forEach(function(box) {
        box.addEventListener('click', playGame)
    })
const game = {
    playerOne: 'player1',
    playerTwo: 'player2',
    playersTurn: this.playerOne,
    playerChoice(){
        if (this.playersTurn == this.playerOne){
        this.playersTurn = this.playerTwo
        return 'X'
        }
        else {
            this.playersTurn = this.playerOne
            return 'O'
        }
    },
    winnercheck(){
        if (
            boxes[0].innerText == 'X' && boxes[1].innerText == 'X' && boxes[2].innerText == 'X' ||
            boxes[3].innerText == 'X' && boxes[4].innerText == 'X' && boxes[5].innerText == 'X' ||
            boxes[6].innerText == 'X' && boxes[7].innerText == 'X' && boxes[8].innerText == 'X' ||
            // up and down winning scenarios
            boxes[0].innerText == 'X' && boxes[3].innerText == 'X' && boxes[6].innerText == 'X' ||
            boxes[1].innerText == 'X' && boxes[4].innerText == 'X' && boxes[7].innerText == 'X' ||
            boxes[2].innerText == 'X' && boxes[5].innerText == 'X' && boxes[8].innerText == 'X' ||
                // diag winning scenaarios
            boxes[0].innerText == 'X' && boxes[4].innerText == 'X' && boxes[8].innerText == 'X' ||
            boxes[2].innerText == 'X' && boxes[4].innerText == 'X' && boxes[6].innerText == 'X'){
            document.querySelector('#message').classList = 'endgame'
            document.querySelector('#winner').innerText = '1'
        } else if(
            boxes[0].innerText == 'O' && boxes[1].innerText == 'O' && boxes[2].innerText == 'O' ||
            boxes[3].innerText == 'O' && boxes[4].innerText == 'O' && boxes[5].innerText == 'O' ||
            boxes[6].innerText == 'O' && boxes[7].innerText == 'O' && boxes[8].innerText == 'O' ||
            // up and down winning scenarios
            boxes[0].innerText == 'O' && boxes[3].innerText == 'O' && boxes[6].innerText == 'O' ||
            boxes[1].innerText == 'O' && boxes[4].innerText == 'O' && boxes[7].innerText == 'O' ||
            boxes[2].innerText == 'O' && boxes[5].innerText == 'O' && boxes[8].innerText == 'O' ||
            // diag winning scenaarios
            boxes[0].innerText == 'O' && boxes[4].innerText == 'O' && boxes[8].innerText == 'O' ||
            boxes[2].innerText == 'O' && boxes[4].innerText == 'O' && boxes[6].innerText == 'O'){
            document.querySelector('#message').classList = 'endgame'
            document.querySelector('#winner').innerText = '2'
        }
    }
}

function playGame(e){
    // document.querySelector('#player').innerText = game.playersTurn
    e.target.innerText = game.playerChoice()
    game.winnercheck()
}
// reset button function.  targets all the boxes and resets the inner text to a blank string.

document.getElementById('reset').addEventListener('click', reset)

function reset(){
    Array.from(document.querySelectorAll('.box'))
    boxes.forEach(function(box) {
        box.innerText = ''
        document.querySelector('#message').classList.remove('endgame')
    })
}




    // conver tthe code into object oriented



//     let playersTurn = 'X'
//     let boxes = document.querySelector('.box')

//     // let reset = document.getElementById('reset').addEventListener('click',resetGame)

// const boxZero = new Choice('boxZero')
// const boxOne = new Choice('boxOne')
// const boxTwo = new Choice('boxTwo')
// const boxThree = new Choice('boxThree')
// const boxFour = new Choice('boxFour')
// const boxFive = new Choice('boxFive')
// const boxSix = new Choice('boxSix')
// const boxSeven = new Choice('boxSeven')
// const boxEight = new Choice('boxEight')

// let clickCounter = 0

//     function Choice(section) { 
//         this.element = document.getElementById(section)
//         this.player = playersTurn
//         this.playGame = () => {
//             this.element.innerText = this.player
//             if(boxZero.player === boxOne.player && boxOne.player === boxTwo.player)
//             (boxThree.player === boxFour.player && boxFour.player === boxFive.player)
//             (boxSix.player === boxSeven.player && boxSeven.player === boxEight.player)

//             (boxZero.player === boxThree.player && boxThree.player === boxSix.player)
//             (boxOne.player === boxFour.player && boxFour.player === boxSeven.player)
//             (boxTwo.player === boxFive.player && boxFive.player === boxEight.player)

//             (boxZero.player === boxFour.player && boxFour.player === boxEight.player)
//             (boxSix.player === boxFour.player && boxFour.player === boxTwo.player)
//             {
//                 document.querySelector('#message').classList = 'endgame'
//                 document.querySelector('#winner').innerText = this.player
//             }
//             playersTurn = 'O'
//         }
//         this.listener = this.element.addEventListener('click', this.playGame)
//     }





