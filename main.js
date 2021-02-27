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