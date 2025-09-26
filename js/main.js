const cells = document.querySelectorAll('.grid-cell');
cells.forEach(cell =>
    cell.addEventListener('click', () => play(cell))
);

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearGrid);


//////////////////////

class Player {
    constructor(name) {
        this.name = name;
        this.win = 0;
        this.choises = [];
    }
    getName(){
        return this.name;
    }
    addChoice(choice) {
        this.choises.push(+choice);
    }
    clearChoises() {
        this.choises = [];
    }
    wins() {
        this.win++;
        document.querySelector(`#${this.name.toLowerCase()}win`).innerText = this.win;
    }
}

const xPlayer = new Player('X');
const oPlayer = new Player('O');
let currentPlayer;

/////////////////////////

// 0.5 idea from StackOverflow https://stackoverflow.com/questions/45136711/javascript-random-generate-0-or-1-integer

if(Math.random() > 0.5) 
    currentPlayer = xPlayer;
else
    currentPlayer = oPlayer;

document.querySelector('.turn').innerText = currentPlayer.getName();

/////////////////////////

function play(cell) {
    cell.classList.add('disable');
    cell.innerText = currentPlayer.getName();
    currentPlayer.addChoice(+cell.id);
    doIWin(currentPlayer);
    switchPlayer();
}

function doIWin(player) {
    for (const combo of winCombos) {
        let strike = 0;
        for (const cell of combo) {
            if (player.choises.includes(cell)) {
                strike++;
            }
        }
        if (strike === 3) {
            player.wins();
            combo.forEach(c => {
                document.getElementById(c).style.backgroundColor = 'rgba(0, 0, 255, 0.495)';
            });
            setTimeout(clearGrid, 1500);
            break;
        }
    }
}

function clearGrid() {
    cells.forEach(cell => {
        cell.classList.remove('disable');
        cell.innerText = '';
        cell.style.backgroundColor = 'rgba(255, 0, 85, 0.613)';
    });
    xPlayer.clearChoises();
    oPlayer.clearChoises();
}

function switchPlayer() {
    currentPlayer = (currentPlayer === xPlayer) ? oPlayer : xPlayer;
    document.querySelector('.turn').innerText = currentPlayer.getName();
}

const winCombos = [
    //horiz
    [11, 12, 13],
    [21, 22, 23],
    [31, 32, 33],
    //verti
    [11, 21, 31],
    [12, 22, 32],
    [13, 23, 33],
    //diagonal
    [11, 22, 33],
    [31, 22, 13]
]

