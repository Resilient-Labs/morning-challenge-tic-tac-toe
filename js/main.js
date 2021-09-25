let tiles = Array.from(document.querySelectorAll('.tile'));
let playerDisplay = document.querySelector('.display-player');
let resetButton = document.querySelector('#reset');
let announcer = document.querySelector('.announcer');

/*
board representation
[0][1][2]
[3][4][5]
[6][7][8]
*/

const game =  {
    board: ['','','','','','','',''],
    currentPlayer: 'X',
    isGameActive: true,
    playerO: 'Player O Won',
    playerX: 'Player X Won',
    tie: 'tie',
    winningCombos: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ],

    //logic for if a player won or tie game
    handleResultValidation: () => {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winningCombos = game.winningCombos[i];
            const a = game.board[winningCombos[0]];
            const b = game.board[winningCombos[1]];
            const c = game.board[winningCombos[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

    if (roundWon) {
            game.announce(game.currentPlayer === 'X' ? game.playerX : game.playerO);
            game.isGameActive = false;
            return;
        }

    if (!game.board.includes(''))
        game.announce(game.tie);
    },
    //announces rather player X or O won or tie game and is invoked inside handleResult method
    announce: (type) => {
        switch(type){
            case game.playerO:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case game.playerX:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case game.tie:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
    },
 
    //check to make sure an X and O can't be placed in the same tile
    isValidAction: (tiles) => {
        if (tiles.innerText === 'X' || tiles.innerText === 'O'){
            return false;
        }

        return true;
    },

    //updates the board with an X or O
    updateBoard: (index) => {
        game.board[index] = game.currentPlayer;
    },

    //changes from player X to O
    changePlayer: () => {
        playerDisplay.classList.remove(`player${game.currentPlayer}`);
        game.currentPlayer = game.currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = game.currentPlayer;
        playerDisplay.classList.add(`player${game.currentPlayer}`);
    },
    //
    userAction: (tiles, index) => {
        if(game.isValidAction(tiles) && game.isGameActive) {
            tiles.innerText = game.currentPlayer;
            tiles.classList.add(`player${game.currentPlayer}`);
            game.updateBoard(index);
            game.handleResultValidation();
            game.changePlayer();
        }
    },

    // resetBoard: () => {
    //     board = ['', '', '', '', '', '', '', ''];
    //     isGameActive = true;
    //     announcer.classList.add('hide');

    //     if (game.currentPlayer === 'O') {
    //         game.changePlayer();
    //     }

    //     tiles.forEach(tile => {
    //         tile.innerText = '';
    //         tile.classList.remove('playerX');
    //         tile.classList.remove('playerO');
    //     });
        
    // }

}
resetButton.addEventListener('click', () => {window.location.href = window.location.href})
tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => game.userAction(tile, index));
});








// //active state of game board
// let board = ['','','','','','','',''];
// let currentPlayer = 'X';
// let isGameActive = true

// //end game state 
// const playerO = 'Player O Won';
// const playerX = 'Player X Won';
// const tie = 'Tie';
