// //declare a player
//create a player class that will take their name and symbol
class playerInfo {
    constructor(name, symbol) {
        this.name = name
        this.symbol = symbol
    }

    announcement() {
        alert(`My name is ${this.name} and I am ${this.symbol}!`)
    }
}


let player1 = new playerInfo('Player 1', 'X')
let player2 = new playerInfo('Player 2', 'O')

let board = document.querySelectorAll('.box')
//create a listener to run the reset function if the button is clicked
document.querySelector('button').addEventListener('click', reset)

board = Array.from(board)

//since player1 is X he will go first
let player = player1.symbol 
//put a event listener waiting for any box to be clicked
board.forEach(square => {
    square.addEventListener('click', () => {
        
        //if the square is NOT empty, end the function
        if (square.innerText != '') {
            return
        } //if it is empty then put an 'X' there
        square.innerText = player
        //check to see if someone won
        win()
        //check to see if the game is a draw
        draw()
        //if player is 'x' then switch to 'o' otherwise keep player as 'x'
        // player = player1 == 'X' ? 'O' : 'X'
        //easier for me to see/read
        if (player == player1.symbol) {
            player = player2.symbol;
        } else {
            player = player1.symbol
        }

})
    
});

function draw() {
    //if every spot has an x's or o's then the game is a tie
    let tie = board.every((element, index) => board[index].innerText == 'X' || board[index].innerText == 'O')
    if (tie) {
        alert('This was a tie game!')
    }
}

function win() {
    let winner = `Player ${player} wins!`
    if (board[0].innerText == player && board[1].innerText == player && board[2].innerText == player) {
        alert(winner)
    } else if (board[3].innerText == player && board[4].innerText == player && board[5].innerText == player) {
        alert(winner)
    } else if (board[6].innerText == player && board[7].innerText == player && board[8].innerText == player) {
        alert(winner)
    } else if (board[0].innerText == player && board[3].innerText == player && board[6].innerText == player) {
        alert(winner)
    } else if (board[1].innerText == player && board[4].innerText == player && board[7].innerText == player) {
        alert(winner)
    } else if (board[2].innerText == player && board[5].innerText == player && board[8].innerText == player) {
        alert(winner)
    } else if (board[0].innerText == player && board[4].innerText == player && board[8].innerText == player) {
        alert(winner)
    } else if (board[2].innerText == player && board[4].innerText == player && board[6].innerText == player)
        alert(winner)
    }


function reset() {
    player = 'X'
    //when run change every space to an empty string
    board.forEach(square => square.innerText = '')
    alert(`The game has been reset. Press okay to play again. It will be Player ${player}'s turn`)
}

//WORKING CODE COPY - CREATING THE PLAYER AND BOARD
// let player = "X"

// let board = document.querySelectorAll('.box')

// document.querySelector('button').addEventListener('click', reset)

// board = Array.from(board)
// //put a event listener waiting for any box to be clicked
// board.forEach(square => {
//     square.addEventListener('click', () => {
//         //if the square is NOT empty, end the function
//         if (square.innerText != '') {
//             return
//         } //if it is empty then put an 'X' there
//         square.innerText = player
//         //check to see if someone won
//         win()
//         //check to see if the game is a draw
//         draw()
//         //if player is 'x' then switch to 'o' otherwise keep player as 'x'
//         player = player == 'X' ? 'O' : 'X'

// })
    
// });

// function draw() {
//     //if every spot has an x's or o's then the game is a tie
//     let tie = board.every((element, index) => board[index].innerText == 'X' || board[index].innerText == 'O')
//     if (tie) {
//         alert('This was a tie game!')
//     }
// }

// function win() {
//     if (board[0].innerText == player && board[1].innerText == player && board[2].innerText == player) {
//         alert('Winner')
//     } else if (board[3].innerText == player && board[4].innerText == player && board[5].innerText == player) {
//         alert('Winner')
//     } else if (board[6].innerText == player && board[7].innerText == player && board[8].innerText == player) {
//         alert('Winner')
//     } else if (board[0].innerText == player && board[3].innerText == player && board[6].innerText == player) {
//         alert('Winner')
//     } else if (board[1].innerText == player && board[4].innerText == player && board[7].innerText == player) {
//         alert('Winner')
//     } else if (board[2].innerText == player && board[5].innerText == player && board[8].innerText == player) {
//         alert('Winner')
//     } else if (board[0].innerText == player && board[4].innerText == player && board[8].innerText == player) {
//         alert('Winner')
//     } else if (board[2].innerText == player && board[4].innerText == player && board[6].innerText == player)
//         alert('Winner')
//     }


// function reset() {
//     player = 'X'
//     board.forEach(square => square.innerText = '')
//     alert("The game has been reset. Player X turn")
// }