// worked on JS, received assistance from Godwin
let daGame = document.getElementById('daGame')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winningblocks')

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)
let gameOver = false

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}
// watched YouTube video: https://www.youtube.com/watch?v=oZrp3Atkz18&t=1815s
function boxClicked(e) {
    const id = e.target.id 

    if (!spaces[id] && !gameOver) { 
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        // line 26-41 debugged with Chat GPT
        if (playerHasWon() !== false) {
            daGame.innerText = `${currentPlayer} has won!`
            let winning_blocks = playerHasWon()
            winning_blocks.map(box => 
                boxes[box].style.backgroundColor = winnerIndicator
            )
            gameOver = true
            return
        }

    
        if (!spaces.includes(null)) {
            daGame.innerText = "It's a draw!"
            gameOver = true
            return
        }

        
        currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT
    }
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition
        if (spaces[a] && (spaces[a] === spaces[b] && spaces[a] === spaces[c])) {
            return [a, b, c]
        }
    }
    return false
}
// used google gemni
restartBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)
    gameOver = false 

    boxes.forEach(box => {
        box.innerText = ''
        box.style.backgroundColor = ''
    })
    daGame.innerText = 'Tic Tac Toe'
    currentPlayer = X_TEXT
}

startGame()



// ```
//         )
//     })
// }
// class Player{
//     constructor(tokenSelector){
//         tokenSelector = this.tokenSelector
//     }
// }
// const squares = document.querySelectorAll(".square")
// squares.forEach((square, i) =>{
//     square.addEventListener('click',()=>{
//         console.log(i)
//         if(square.innerHTML === '' && turnO === false){
//             square.innerHTML = 'x'
//             turnO = true
//         }else if(square.innerHTML === '' && turnO === true){
//             square.innerHTML = 'o'
//             turnO = false
//         }
//         if(square.innerHTML = 0, 1, 2)
//     })
// })
// ```javascript
// const combinations = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];

// let turnO = false; // false = X, true = O
// const squares = document.querySelectorAll(".square");
// const statusText = document.querySelector("#status"); // optional status area
// const resetBtn = document.querySelector("#reset");    // optional reset button

// // Handle square clicks
// squares.forEach((square, i) => {
//   square.addEventListener("click", () => {
//     if (square.innerHTML !== "") return; // already filled

//     square.innerHTML = turnO ? "O" : "X";
//     if (checkWin()) {
//       statusText.innerText = `${turnO ? "O" : "X"} wins!`;
//       disableBoard();
//       return;
//     }

//     if (isDraw()) {
//       statusText.innerText = "It's a draw!";
//       return;
//     }

//     turnO = !turnO; // switch turn
//   });
// });

// // Check for winner
// function checkWin() {
//   return combinations.some(comb => {
//     const [a, b, c] = comb;
//     return (
//       squares[a].innerHTML &&
//       squares[a].innerHTML === squares[b].innerHTML &&
//       squares[a].innerHTML === squares[c].innerHTML
//     );
//   });
// }

// // Check for draw
// function isDraw() {
//   return [...squares].every(square => square.innerHTML !== "");
// }

// // Disable further moves after win
// function disableBoard() {
//   squares.forEach(sq => sq.style.pointerEvents = "none");
// }

// // Reset game
// if (resetBtn) {
//   resetBtn.addEventListener("click", () => {
//     squares.forEach(sq => {
//       sq.innerHTML = "";
//       sq.style.pointerEvents = "auto";
//     });
//     statusText.innerText = "";
//     turnO = false;
//   });
// }
// ```
