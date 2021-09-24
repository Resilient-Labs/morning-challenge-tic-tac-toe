//variables
let clickNum = 0
const gameboardSquares = document.querySelectorAll('.gameboardsquare');
const gameboard = document.querySelector('#gameboard');
const gamestatus = document.querySelector('#winnerOrTie')
gamestatus.innerHTML = ""

//event listeners
gameboard.addEventListener('click', ticTacToegameboard.clickHandler)
document.querySelector('.restartGame').addEventListener('click', restartGame)

//a function for when the gameboard is clicked
// function clickHandler(event) {
//     // event.target.innerHTML = "O"
//     if(!event.target.innerHTML){
//         clickNum += 1

//         if (clickNum % 2 === 0) {
//             event.target.innerHTML = "O"
//         }else{
//             event.target.innerHTML = "X"
//         }
    
//         let win = checkWinner()
//         if(win === "tie"){
//             gamestatus.innerHTML = "There's a tie!"
//         }else if(win){
//             gamestatus.innerHTML = `Player ${win} is winner!!!`
//         }    
//     } 
// }

function checkWinner() {
    let win = checkEqualSquares(0,1,2)
    
    if(win){
        return win
    }

    win = checkEqualSquares(3,4,5)
    if(win){
        return win
    }

    win = checkEqualSquares(6,7,8)
    if(win){
        return win
    }

    win = checkEqualSquares(0,3,6)
    if(win){
        return win
    }

    win = checkEqualSquares(1,4,7)
    if(win){
        return win
    }

    win = checkEqualSquares(2,5,8)
    if(win){
        return win
    }

    win = checkEqualSquares(0,4,8)
    if(win){
        return win
    }
    win = checkEqualSquares(2,4,6)
    if(win){
        return win
    }
    
    if(clickNum === 9){
        return 'tie'
    }

    return null
}

function checkEqualSquares(square1, square2, square3){
    if (gameboardSquares[square1].innerHTML === gameboardSquares[square2].innerHTML
        && gameboardSquares[square2].innerHTML === gameboardSquares[square3].innerHTML
        && gameboardSquares[square1].innerHTML !== ''){
        return gameboardSquares[square1].innerHTML
    }else{
        return null
    }
}

function restartGame(){
    for(let i = 0; i < gameboardSquares.length; i++){
        gameboardSquares[i].innerHTML = ""
    }  
    gamestatus.innerHTML = ""
}


//OOP

const ticTacToegameboard = {
    clickHandler: function(event) {
        if(!event.target.innerHTML){
            clickNum += 1
    
            if (clickNum % 2 === 0) {
                event.target.innerHTML = "O"
            }else{
                event.target.innerHTML = "X"
            }
        
            let win = checkWinner()
            if(win === "tie"){
                gamestatus.innerHTML = "There's a tie!"
            }else if(win){
                gamestatus.innerHTML = `Player ${win} is winner!!!`
            }    
        } 
    },
}



//a function that has an event listener for a click and produce an x, then immediately an event listener for a click that will produce o
//a function that declares the game over and shows the winner
//a function that declares when there is a tie
//a function to count the number of wins for each player and reset the game
//a function to clear to game and start over



//variable with an array with win combos of each cell 
// const winCombos = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6],
// ]

    // //top row
    // if (gameboardSquares[0].innerHTML === gameboardSquares[1].innerHTML
    //     && gameboardSquares[1].innerHTML === gameboardSquares[2].innerHTML
    //     && gameboardSquares[0].innerHTML !== '') {
    //     return gameboardSquares[0].innerHTML
    //     //middle row
    // } else if (gameboardSquares[3].innerHTML === gameboardSquares[4].innerHTML
    //     && gameboardSquares[4].innerHTML === gameboardSquares[5].innerHTML
    //     && gameboardSquares[3].innerHTML !== '') {
    //     return gameboardSquares[3].innerHTML
    //     //bottom row
    // } else if (gameboardSquares[6].innerHTML === gameboardSquares[7].innerHTML
    //     && gameboardSquares[7].innerHTML === gameboardSquares[8].innerHTML
    //     && gameboardSquares[6].innerHTML !== '') {
    //     return gameboardSquares[6].innerHTML
    //     //left column
    // } else if (gameboardSquares[0].innerHTML === gameboardSquares[3].innerHTML
    //     && gameboardSquares[3].innerHTML === gameboardSquares[6].innerHTML
    //     && gameboardSquares[0].innerHTML !== '') {
    //     return gameboardSquares[0].innerHTML
    //     //middle column
    // } else if (gameboardSquares[1].innerHTML === gameboardSquares[4].innerHTML
    //     && gameboardSquares[4].innerHTML === gameboardSquares[7].innerHTML
    //     && gameboardSquares[1].innerHTML !== '') {
    //     return gameboardSquares[1].innerHTML
    //     //right column
    // } else if (gameboardSquares[2].innerHTML === gameboardSquares[5].innerHTML
    //     && gameboardSquares[5].innerHTML === gameboardSquares[8].innerHTML
    //     && gameboardSquares[2].innerHTML !== '') {
    //     return gameboardSquares[2].innerHTML
    // //diagonals
    // } else if (gameboardSquares[0].innerHTML === gameboardSquares[4].innerHTML
    //     && gameboardSquares[4].innerHTML === gameboardSquares[8].innerHTML
    //     && gameboardSquares[0].innerHTML !== '') {
    //     return gameboardSquares[0].innerHTML
    // } else if (gameboardSquares[2].innerHTML === gameboardSquares[4].innerHTML
    //     && gameboardSquares[4].innerHTML === gameboardSquares[6].innerHTML
    //     && gameboardSquares[2].innerHTML !== '') {
    //     return gameboardSquares[2].innerHTML
    // }else{
    //     return null
    // }

//function checkEqualSquares 
//checkEqualSquares(0,1,2)
//
