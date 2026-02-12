//worked on this in a group with Mau and others, this code was inspired my Mau
// also used https://www.youtube.com/watch?v=AnmwHjpEhtA as a guide
//empty board
const cells = document.querySelectorAll('.cell');
const displayText = document.getElementById('displayText');
const resetButton = document.getElementById('resetButton');

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], //rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], //columns
    [0, 4, 8],
    [2, 4, 6]  //diagonals
]

//2 players
let currentPlayer = 'X';
let gameActive = false;
let board = ['', '', '', '', '', '', '', '', ''];
//each player has a turn
 //X or O added to UI

startGame(); 

function startGame() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked));
    resetButton.addEventListener('click', resetGame);
    displayText.textContent = `Player ${currentPlayer}'s turn`;
    gameActive = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute('cellIndex');

    if (board[cellIndex] !== '' || !gameActive) {
        return;
    } //prevent overwriting a cell or playing when game is over

    updateBoard(this, cellIndex);
    checkWin();
    // changePlayer();
}

function updateBoard(cell, index) {
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    displayText.textContent = `Player ${currentPlayer}'s turn`;
}
    //check for win or tie
    //3 squares match -> rows, columns, diagonals
    //if win, display winner

function checkWin() {
    let roundWon = false;

    for(let i = 0; i < winningCombos.length; i++) {
        const condition = winningCombos[i];
        const cellA = board[condition[0]];
        const cellB = board[condition[1]];
        const cellC = board[condition[2]];

        if (cellA === '' || cellB === '' || cellC === '') {
            continue;
        } //checls for empty cells

        if (cellA === cellB && cellB === cellC){
           roundWon = true;
              break; 
         }
        }

    if (roundWon) {
        displayText.textContent = `Player ${currentPlayer} wins! You get a cookie YUM! XD`;
        cookie.classList.toggle('hidden')
        gameActive = false;
    }
    else if (!board.includes('')) {
        displayText.textContent = `It's a tie!`;
        gameActive = false;
    }
    else {
        changePlayer();
    }
}
    //stop game -> remove event listeners
 //if board is full, game over -> display tie
 //if no win or tie
    //switch turns -> changing symbol from x -> o or o -> x
    //update display to show whose turn it is


//reset button to restart game  
//clear board
//set turn to player 1  
function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    displayText.textContent = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = '');
    gameActive = true;
    cookie.classList.toggle('hidden')
}
