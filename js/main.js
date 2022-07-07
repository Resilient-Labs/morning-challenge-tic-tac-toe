window.addEventListener('DOMContentLoaded', () => {
    const cells = Array.from(document.querySelectorAll('.cell'));
    const restart_game = document.querySelector('#restart');
    const winner = document.querySelector('.winner');
    const display = document.querySelector('.display-player');

    let game_space = ['', '', '', '', '', '', '', '', ''];
    let activePlayer = 'X';
    let gameOn = true;

    const X_WINS = 'X_WINS';
    const O_WINS = 'O_WINS';
    const DRAW = 'DRAW';

    // Array describing states that make a player a winner
    const winnerStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function run_algorithmn_game_check() {
        let game_over = false;
        for (let i = 0; i <= 7; i++) {

            // Indexing the values at the winning positions and try to 
            // compare if they are all moves by the same player

            const currentState = winnerStates[i];
            const a = game_space[currentState[0]];
            const b = game_space[currentState[1]];
            const c = game_space[currentState[2]];

            // as long as one is empty game still on, 
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                game_over = true;
                break;
            }
        }

    if (game_over) {
            declare_winner(activePlayer === 'X' ? X_WINS : O_WINS);
            gameOn = false;
            return;
        }

    if (!game_space.includes(''))
        declare_winner(DRAW);
    }

    const declare_winner = (type) => {
        switch(type){
            case O_WINS:
                winner.innerHTML = 'Player <span class="playerO">O</span> Wins';
                break;
            case X_WINS:
                winner.innerHTML = 'Player <span class="playerX">X</span> Wins';
                break;
            case DRAW:
                winner.innerText = 'Draw!';
        }
        winner.classList.remove('hide');
    };

    const shift_to_next_player = () => {
        display.classList.remove(`player${activePlayer}`);
        activePlayer = activePlayer === 'X' ? 'O' : 'X';
        display.innerText = activePlayer;
        display.classList.add(`player${activePlayer}`);
    }

    const CellNotPlayed = (cell) => {
        if (cell.innerText === 'X' || cell.innerText === 'O'){
            return false;
        }
        return true;
    };
    
    const resetBoard = () => {
        game_space = ['', '', '', '', '', '', '', '', ''];
        gameOn = true;
        winner.classList.add('hide');

        if (activePlayer === 'O') {
            shift_to_next_player();
        }

        cells.forEach(cell => {
            cell.innerText = '';
            cell.classList.remove('playerX');
            cell.classList.remove('playerO');
        });
    }

    const update_game_space =  (index) => {
        game_space[index] = activePlayer;
    }

    const Player_Move = (cell, index) => {
        if(CellNotPlayed(cell) && gameOn) {
            cell.innerText = activePlayer;
            cell.classList.add(`player${activePlayer}`);
            update_game_space(index);
            run_algorithmn_game_check();
            shift_to_next_player();
        }
    }

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => Player_Move(cell, index));
    });

    restart_game.addEventListener('click', resetBoard);
});