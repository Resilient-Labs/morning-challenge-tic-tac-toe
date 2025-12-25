//Get grid
//get buttons
//start game initializes game
//Sonic/P1 is always first
//3 win conditions
//game checks if there is a win, not who won
//then determines who the win belongs to
//horizontal win
//vertical win
//diagonal win
//draw condition
//click cell to place emblem
//reset button resets the game state (or refreshes?)
//---Created with assistance from a friend (walked me through the logic especially arrays and looping them)-----

const grid = document.getElementById('gameGrid');

const playerOneIndicator = document.getElementById('imageOutline1');
const playerTwoIndicator = document.getElementById('imageOutline2');

let p1_Score;
let p2_Score;

const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

const gridButt1 = document.getElementById('gridButt1');
const placeOutput1 = document.getElementById('gridOutput1');

const gridButt2 = document.getElementById('gridButt2');
const placeOutput2 = document.getElementById('gridOutput2');

const gridButt3 = document.getElementById('gridButt3');
const placeOutput3 = document.getElementById('gridOutput3');

const gridButt4 = document.getElementById('gridButt4');
const placeOutput4 = document.getElementById('gridOutput4');

const gridButt5 = document.getElementById('gridButt5');
const placeOutput5 = document.getElementById('gridOutput5');

const gridButt6 = document.getElementById('gridButt6');
const placeOutput6 = document.getElementById('gridOutput6');

const gridButt7 = document.getElementById('gridButt7');
const placeOutput7 = document.getElementById('gridOutput7');

const gridButt8 = document.getElementById('gridButt8');
const placeOutput8 = document.getElementById('gridOutput8');

const gridButt9 = document.getElementById('gridButt9');
const placeOutput9 = document.getElementById('gridOutput9');

const gridButtons = [gridButt1, gridButt2, gridButt3, gridButt4, gridButt5, gridButt6, gridButt7, gridButt8, gridButt9];
const gridOutputs = [placeOutput1, placeOutput2, placeOutput3, placeOutput4, placeOutput5, placeOutput6, placeOutput7, placeOutput8, placeOutput9];

let activeTurnPlayer;
let gameStart = false;

document.getElementById('resetButton').addEventListener('click', () => {
    window.location.reload();
})

//get Turn player and start game
//need to add extra checks to this
document.getElementById('startButton').addEventListener('click', () => {
    if(!gameStart) {
        gameStart = true;
        activeTurnPlayer = 1;
        getActiveTurnPlayer(activeTurnPlayer);
    }
});

//turn handling
function getActiveTurnPlayer(activeTurnPlayer) {
    //console.log(playerOne + ' is the Active Turn Player. Game Start!');
    if(gameStart) {
        if(activeTurnPlayer === 1) {
            playerOneIndicator.style.border = "dashed 10px blue";
        }
        if(activeTurnPlayer === 2) {
            playerTwoIndicator.style.border = "dashed 10px red";
        }
    }
};

function switchActiveTurnPlayer() {
    if(gameStart) {
        if(activeTurnPlayer === 1) {
            activeTurnPlayer = 2;
            playerOneIndicator.style.border = "dashed 10px rgb(97, 97, 97)";
            playerTwoIndicator.style.border = "dashed 10px red";
            return;
        }
        if(activeTurnPlayer === 2) {
            activeTurnPlayer = 1;
            playerTwoIndicator.style.border = "dashed 10px rgb(97, 97, 97)";
            playerOneIndicator.style.border = "dashed 10px blue";
            return;
        }
    }
}

let gridState = {
    rowOne : [gridButt1, gridButt2, gridButt3],
    rowTwo : [gridButt4, gridButt5, gridButt6],
    rowThree : [gridButt7, gridButt8, gridButt9]
};

let winConditions = [
    [[0,0],[0,1],[0,2]], //Top Row, Horizontal
    [[1,0],[1,1],[1,2]], //Middle Row Horizontal
    [[2,0],[2,1],[2,2]], //Bottom Row Horizontal
    [[0,0],[1,0],[2,0]], //First Column Vertical
    [[0,1],[1,1],[2,1]], //Middle Column Vertical
    [[0,2],[1,2],[2,2]], //Right Column Vertical
    [[0,0],[1,1],[2,2]], //Diagonal Left to Right
    [[0,2],[1,1],[2,0]]  //Diagonal Right to Left
]

//2d array to setup the board
let board = [
    [0,0,0], //[0,0][0,1][0,2]
    [0,0,0], //[1,0][1,1][1,2]
    [0,0,0] // [2,0][2,1][2,2]
];

document.getElementById('gridButt1').addEventListener('click', () => {
    if(gameStart) {
        placeEmblem(activeTurnPlayer, gridButt1, placeOutput1, 0,0);
    }
})

document.getElementById('gridButt2').addEventListener('click', () => {
    if(gameStart) {
        placeEmblem(activeTurnPlayer, gridButt2, placeOutput2, 0,1);
    }
})

document.getElementById('gridButt3').addEventListener('click', () => {
    if(gameStart) {
        placeEmblem(activeTurnPlayer, gridButt3, placeOutput3, 0,2);
    }
})

document.getElementById('gridButt4').addEventListener('click', () => {
    if(gameStart) {
        placeEmblem(activeTurnPlayer, gridButt4, placeOutput4, 1,0);
    }
})

document.getElementById('gridButt5').addEventListener('click', () => {
    if(gameStart) {
        placeEmblem(activeTurnPlayer, gridButt5, placeOutput5, 1,1);
    }
})

document.getElementById('gridButt6').addEventListener('click', () => {
    if(gameStart) {
        placeEmblem(activeTurnPlayer, gridButt6, placeOutput6, 1,2);
    }
})

document.getElementById('gridButt7').addEventListener('click', () => {
    if(gameStart) {
        placeEmblem(activeTurnPlayer, gridButt7, placeOutput7, 2,0);
    }
})

document.getElementById('gridButt8').addEventListener('click', () => {
    if(gameStart) {
        placeEmblem(activeTurnPlayer, gridButt8, placeOutput8, 2,1);
    }
})

document.getElementById('gridButt9').addEventListener('click', () => {
    if(gameStart) {
        placeEmblem(activeTurnPlayer, gridButt9, placeOutput9, 2,2);
    }
})

function placeEmblem(activeTurnPlayer, gridButtons, gridOutputs, row, column) {
    //Turn button off after clicking it
    gridButtons.style.visibility = 'hidden';
    if(activeTurnPlayer === 1) {
        let sonicEmblem = document.createElement('img');
        sonicEmblem.src = 'img/Sonicsmol.png';
        gridOutputs.appendChild(sonicEmblem);
        board[row][column] = activeTurnPlayer;
       
        checkWinner(board[row][column]);
        switchActiveTurnPlayer();
    }
    if(activeTurnPlayer === 2) {
        let shadowEmblem = document.createElement('img');
        shadowEmblem.src = 'img/ShadowSmol.png';
        
        gridOutputs.appendChild(shadowEmblem);
        board[row][column] = activeTurnPlayer;

        checkWinner(activeTurnPlayer);
        switchActiveTurnPlayer();
    }  
}

//Check button state, if visibility hidden is true, check 
//let i = 0, while i is LESS than winConditions.length (1) do -> let j = 0 while J is less than winConditions[i].length (0)
//set row = winCondtions[first array layer][second array layer][position]
//set column = winconditions[first array layer][second array][position]
//then, if board row column == 1 increase p1 score 1
//check for winner (score = 3), alert, else loop again
function checkWinner(row, column) {
    console.log(board[row][column]);
    for (let i = 0; i < winConditions.length; i++) {
        for(let j = 0; j < winConditions[i].length; j++) {
            row = winConditions[i][j][0];
            column = winConditions[i][j][1]

            if (board[row][column] == 1) {
                p1_Score += 1;
            }
            if (board[row][column] == 2) {
                p2_Score += 1;
            }
            if(p1_Score == 3) {
                alert('Sonic Wins!');
                gameStart = false;
            }
            if(p2_Score == 3) {
                alert('Shadow Wins!');
                gameStart = false;
            }
        }
        p1_Score = 0;
        p2_Score = 0;
        //alert draws somehow
    }
}