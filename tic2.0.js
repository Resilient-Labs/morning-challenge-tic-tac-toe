const info = document.querySelector('#turns');
const boxes = Array.from(document.getElementsByClassName('box'));

// variables of the players
const exes = 'X';
const hoes = 'O';

// First player starts with X
let currentPlayer = exes;

// create the win conditions
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


// boxes need to be filled later
const emptyBoxes = Array(9).fill(null);

// create function to start the game
function startGame(){
    boxes.forEach(box => box.addEventListener('click', boxClicked));
    info.textContent = `${currentPlayer}'s turn`; 
    
}

// create a function based off of when a box is clicked
function boxClicked(e){
    const HtmlId = e.target.id;
    if (!emptyBoxes[HtmlId]) {
        emptyBoxes[HtmlId] = currentPlayer;
        if (currentPlayer == exes) {
            e.target.innerText = exes;
        } else {
            e.target.innerText = hoes;
        }
        const winner = checkWhoWon();
        if (winner) {
            info.textContent = `${winner} Wins`;
            return;
        }
        switchPlayer();
    }
}



// create a function where it switches between X and O
function switchPlayer(){
    currentPlayer = currentPlayer == exes ? hoes : exes;
    info.textContent = `${currentPlayer}'s turn`;

    // checkWhoWon()
}

// create a function to check to see who won or if it's a draw
function checkWhoWon(){
    
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (emptyBoxes[a] && emptyBoxes[a] === emptyBoxes[b] && emptyBoxes[b] === emptyBoxes[c]) {
            return currentPlayer;
        }
    }

    if (!emptyBoxes.includes(null)) {
        return 'Draw';
    } else {
        return null;
    }
}

startGame();

// sources used multiple youtube videos 
// https://www.youtube.com/watch?v=AnmwHjpEhtA used primarily specially with creating the game board
// worked with house moses 
