// Collaborated with Guthemberg, Jerry and Kevin Charles.

let user1 = {
    points: 0,
    symbol: "X",
    positions: []
}

let user2 = {
    points: 0,
    symbol: "O",
    positions: []
}

let turn;
let clicks = 0;
let winningCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
let board = document.querySelectorAll('li');
let scorePlayer1 = document.querySelector('#scorePlayer1');
let scorePlayer2 = document.querySelector('#scorePlayer2');
let playAgain = document.querySelector('#clearBoard');
// Track positions on the board
Array.from(board).forEach(cell => cell.addEventListener('click', (e) => {
    console.log(`You clicked on ${e.target.dataset.position}`);
}))

let box = document.querySelectorAll('.box');
let rows = document.querySelectorAll('.rows');
let selected = [];
//Target each cell and count clicks
Array.from(box).forEach(b => b.addEventListener('click', (e)=> {
    if(!selected.includes(e.target.dataset.position)){
        if(e.target.tagName === 'LI')
            clicks++;
        selected.push(e.target.dataset.position);
        myTurn(e.target.dataset.position);
        (clicks % 2 === 0) ? b.style.backgroundImage = `url(\'o.png\')`: b.style.backgroundImage = `url(\'x.png\')`;
    }
}))

playAgain.addEventListener('click', () => {
    Array.from(rows).forEach(r => {
        for(i = 1; i < 10; i++)
            document.querySelector(`[data-position=\'${i}\']`).style.backgroundImage = 'none';
    })
    selected = [];
    user1.positions = [];
    user2.positions = [];
    clicks = 0;
    playAgain.style.display = 'none';
});




function myTurn(chosen) {
    if (clicks % 2 == 0){
        turn = 1;
        user2.positions.push(chosen);
        if (user2.positions.length >= 3)
            didYouWin(user2);
    }
    else{
        turn = 0;
        user1.positions.push(chosen);
        if (user1.positions.length >= 3)
            didYouWin(user1);
    }
}

function didYouWin(player) {
    for(i = 0; i < winningCombos.length; i++) {
        let winner = [];
        for(j = 0; j < player.positions.length; j++) {
            if(winningCombos[i].includes(Number(player.positions[j])))
                winner.push(player.positions[j]);
        }
        console.log(winner);
        if (winner.length === 3) {
            player.points += 1;
            alert("YOU WIN");
            console.log(player.points);
            (player.symbol === 'X') ? scorePlayer1.innerText = player.points : scorePlayer2.innerText = player.points;
            playAgain.style.display = 'block';
            return;
        }
    }
    if (selected.length === 9) {
        alert('DRAW!');
        playAgain.style.display = 'block';
    }
}
/*
Adding some AI

for(i = 0; i < winningCombos.length; i++)
// i= 0 and winningCombos.length will always be 8
let combo = [];
{
    for(j  = 0; j < player.positions.length; j++)
        if ( winningCombos[i].includes(player.positions[j]) )// if winningCombos at i has player.positions at j
            combo.push(player.positions[j]); // pushing what cells are selected into combo[]
    if (combo.length == 2)        //
        for(k = 0; k <= combo.length; k++) {
            if(!combo.includes(winningCombos[6][k]){
               nextMoveByCPU ==>  WinningCombo[6][k]

        }
    }
    i  =       0              1         2             3           4             5            6            7
winningCombos = [[1,  2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7] ]
winningCombos.length is 8


    */
