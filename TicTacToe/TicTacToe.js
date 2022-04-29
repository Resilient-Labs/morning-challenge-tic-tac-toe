const board = document.querySelector("#gridBoard")
const grids = document.querySelectorAll("#gridBoard .grid")
let resetMe = document.querySelector("#resetgame")
let resultsOne = document.querySelector("#p1Result")
let resultsTwo = document.querySelector("#p2Result")
let resultsTie = document.querySelector("#tieResult")

let gameBoard = {

    // grids: new grid[8],
    playerScore: 0,
    playerTurns: 0,
    winnerCombos: [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ],


    boardSetup () {

    for (let grid of grids) {
        grid.classList.remove('x','o')
        grid.addEventListener('click', this.occupyGrid.bind(this), { once: true });
    }

    board.classList.remove('turnsX','turnsO');
    this.playerTurns = Math.round(Math.random(0,1)) == 1 ? 'x' : 'o';
    board.classList.add('turns' + this.playerTurns)
    },

    occupyGrid () {
    board.classList.add(this.playerTurns);

    if (this.checkForPlayerWin.bind(this)){
        console.log("TestingTwo")
        const restart = confirm(this.playerTurns.toUpperCase() + " WON! Restart game?" );

        if (restart) this.boardSetup();
    } else if (this.checkForPlayerWin.bind(this)) {
        const restart = confirm(" Draw! Restart game?" );

        if (restart) boardSetup();
    } else {
        this.playerTurns = this.playerTurns == 'x' ? 'o' : 'x';
        board.classList.remove('turnsO','turnsX');
        board.classList.add('turns' + this.playerTurns);
    }
    },

    checkForPlayerWin(){
    return this.winnerCombos.some(winnerCombo => {
        return winnerCombo.every(c => {
            if (grids[c].classList.contains(this.winnerCombos)){
            return true;
            }
            return false;
        })
    })
    },

    checkForPlayerDraw() {
    return [...grids].every(c => {
        if (
            c.classList.contains('x') || c.classList.contains('x')
        ) {
            return true;
        }
        return false;
    })
}
}

gameBoard.boardSetup()


// class BoardSetup {
//     constructor() {
//     this.playerName = "Player 1 (X)";
//     this.playerScore = 0;
//     this.updateBoard = function (){
//     resetMe.addEventListener('click', resetMe)
//     }
//     }
// }
// }

// console.log(BoardSetup.playerUpdate())

// let playerOne = new BoardSetup("Player 1 (X)", 0)
// console.log(playerOne)

// let playerTwo = new BoardSetup("Player 2 (O)", 0)
// console.log(playerTwo)
// let playerX = new Players("Player 1 (X)", 0)
// console.log(playerX);
// // Board functions
// class boardGame{
//     constructor() {
//         reset = new reset(board.classList.remove('turnsX', 'turnsO'))
//         resetBoard = resetMe.addEventListener('click', reset)

//         for (let grid of grids) {
//             grid.classList.remove('x',"o");
//             grid.addEventListener('click', fillInGrid, {once: true} );
//         }

//         playerTurns = Math.round(Math.random(0, 1)) == 1 ? 'x' : 'o';
//         board.classList.add('turns' + playerTurns);

//         fillInGrid(); {

//         }
//     }

// }

// const playerOne = {
//     playerOneName: "Player 1",
//     playerOneTurn: 'X',
//     playerOneWin: 'PLAYER 1 Wins!',
//     playerOneLost: 'PLAYER 1 Lost!',
//     playerOneScore: 0
// }

// const playerTwo = {
//     playerTwoName: "Player 2",
//     playerTwoTurn: 'O',
//     playerTwoWin: 'PLAYER 2 Wins!',
//     playerTwoLost: 'PLAYER 2 Lost!',
//     playerTwoScore: 0
// }

// let gridBoard = {
//     boardGrid: ['', '', '', '', '', '', '', '', ''],
//     isWinner: true,
//     winnerCombos: function(){
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],
//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
//         [0,4,8],
//         [2,4,6]
//     },

//     comboRotation: function(){
//         let i = 0,
//         gridCombo = winnerCombos.length[i],
//         do {i++}
//         while (i < winnerCombos.length)
//         if (gridBoard[gridCombo[0]] === '' || gridBoard[gridCombo[1]] === '' || gridBoard[gridCombo[2]] === ''){
            
//             }
//         }
//     }
// }

// let gridBoard = {
//     gridTiles: Array.from(document.querySelectorAll('.grid')),
//     displayPlayerTurns: grid,
//     boardGame: ['', '', '', '', '', '', '', '', ''],
//     activeGame: true,
//     playersTie: "TIE",
//     conditionsToWin: [
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],
//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
//         [0,4,8],
//         [2,4,6]
//     ],
//     resetGame: function() {
//     document.querySelector('.grid').forEach(grid => grid.innerText = "");
//     playerStats.PlayerOneScore.innerText = "";
//     resetMe.innerText = "";
//     displayTurn.innerText = `Go: ${playerOne.name}`
//     },

//     boardResults: function(){
        
//     }

// }

// function resetGame(){
//     document.querySelector('.grid').forEach(grid => grid.innerText = "");
//     playerOne.score.innerText = "";
//     resetMe.innerText = "";
//     displayTurn.innerText = `Go: ${playerOne.name}`
// }

// let playerOne = {
//     name: "Player 1",
//     score: 0
// }

// let playerTwo = {
//     name: "Player 2",
//     score: 0
// }