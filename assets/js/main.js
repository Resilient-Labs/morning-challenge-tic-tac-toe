//  PROCEDURAL WAY




let board = document.querySelector('#board')
let turnInfo = document.querySelector('h2')

document.querySelector('#reset').addEventListener('click', reset)



// create the board using an empty array to store each value X or O

let cells = ['', '', '', '', '', '', '', '', '']

let turn = 'circle'
let player = "Player 1"
turnInfo.textContent = `${player} is circle. Make the first move`

function makeBoard(){
    //iterate thru each empty spot in the array and create a cell to store the X or O in the HTML
    cells.forEach((cell, index) => {
        let square= document.createElement('div')
        //apply the styling to the div
        square.classList.add('box')
        //add event listeners on each cell that run the tic tac toe function
        square.addEventListener('click', ticTac)
        //append the actual box into the HTML
        board.append(square)

        //we'll need to reference each square by it's index in the array later so assign it an id of it's index
        square.id = index

    })

}

makeBoard()


function ticTac(e){
    //make a div to append the X or O inside of each cell
    let display = document.createElement('div')
    display.classList.add(turn) //assigned to either circle or x for the first move
    //put X or O wherever the target of the clicking is by changing the class list to correspond with whoever's turn it is
    e.target.append(display)
    //switch between player turns
    turn = turn === 'circle' ? 'x' : 'circle'
    player = player === 'Player 1' ? 'Player 2' : 'Player 1'
    turnInfo.textContent = `It's time for ${player} to go.`
    e.target.removeEventListener('click', ticTac) //so you can't click on the same box twice
    checkScore()
}


//make a function that checks the score by finding 3 in a row. It's going to check the indexes of the squares that have winning values
function checkScore(){
    let boxes = document.querySelectorAll('.box')
    console.log(boxes)
    let threeInARow= [
        [0,1,2] , [3,4,5] , [6,7,8] ,
        [0,3,6] , [1,4,7] , [2,5,8] ,
        [0,4,8] , [2,4,6] 
        ]

        console.log(boxes[0])
        //iterate thru each of the potential winning combos 
    threeInARow.forEach((arr) => {
        //use every to test that all tests result to true
        //for each number in the winning combo, go to do boxes[number], check and see if that div has a firstChild, if it does, check to see that the class list contains circle 
    let player1Wins=  arr.every(cell => boxes[cell].firstChild?.classList.contains('circle'))

    if (player1Wins){
        turnInfo.textContent = "Player 1 wins!!!!!!!"
    } 

    })

//do it again for player 2
    threeInARow.forEach((arr) => {
    let player2Wins=  arr.every(cell => boxes[cell].firstChild?.classList.contains('x'))

    if (player2Wins){
        turnInfo.textContent = "Player 2 wins!!!!!!!"
    } 

    })

    
}

function reset(){

    location.reload()

}



//OBJECT ORIENTED PROGRAMMING WAY ATTEMPT






    // class TicTacToe{

    //     constructor(){

    //         this.board = document.querySelector('#board')
    //         this.turnInfo = document.querySelector('h2')
    //         this.resetButton = document.querySelector('#reset')
    //         this.cells = ['', '', '', '', '', '', '', '', '']
    //         this.turn = 'circle'
    //         this.player = 'Player 1'
    //         this.turnInfo.textContent = `${this.player} is circle. Make the first move`
    //         this.resetButton.addEventListener('click', reset)
    //     }

    //     makeBoard() {
    //         this.cells.forEach((cell, index) => {
    //             let square = document.createElement('div')
    //             square.classList.add('box')
    //             square.addEventListener('click', )
    //             this.board.append(square)
    //             square.id = index
    //         })
    //     }


    //     reset(){
    //         location.reload()
    //     }


    //     }
































