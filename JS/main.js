// Players 1 and 2. 
// HOW DO I OOP :(
    // HOW DO I OOP :(
        // HOW DO I OOP :(
            // HOW DO I OOP :(
                // HOW DO I OOP :(
                    // HOW DO I OOP :(
                        // HOW DO I OOP :(
                            // HOW DO I OOP :(
                                // HOW DO I OOP :(
                                    // HOW DO I OOP :(
                                        // HOW DO I OOP :(
                                            // HOW DO I OOP :(
                                                // HOW DO I OOP :(
                                                    // HOW DO I OOP :(
                                                        // HOW DO I OOP :(
                                                            // HOW DO I OOP :(
                                                                // HOW DO I OOP :(
                                                                    // HOW DO I OOP :(
                                                                        // HOW DO I OOP :(
                                                                            // HOW DO I OOP :(
                                                                                // HOW DO I OOP :(
                                                                                    // HOW DO I OOP :(
                                                                                        // HOW DO I OOP :(
                                                                                            // HOW DO I OOP :(
                                                                                                // HOW DO I OOP :(
                                                                                                    // HOW DO I OOP :(
                                                                                                        // HOW DO I OOP :(
                                                                                                            // HOW DO I OOP :(
//object user1
let user1 = {
    points: 0,
    symbol: "X",
    positions: []
}

// object user2
let user2 = {
    points: 0,
    symbol: "O",
    positions: []
}
// class Players{
//     constructor(user1, user2){
//     this.user1 = user1
//     this.user2 = user2
//     }
// }
// End of class?
// Constants and wins. turn object
let turn;
let clicks = 0;
let winningCombos = [ [1, 2, 3],[4, 5, 6],[7, 8, 9],[1, 4, 7],[2, 5, 8],[3, 6, 9],[1, 5, 9],[3, 5, 7]];
let board = document.querySelectorAll('li');
let playAgain = document.querySelector('#clearGame');
let scorePlayer1 = document.querySelector('#scorePlayer1');
let scorePlayer2 = document.querySelector('#scorePlayer2');

// set board. how to make this an object
let box = document.querySelectorAll('.box');
let rows = document.querySelectorAll('.rows');
let selected = [];
// Array to Target each cell and count clicks. how to make this an object
Array.from(box).forEach(b => b.addEventListener('click', (e) => {
    if (!selected.includes(e.target.dataset.position)) {
        if (e.target.tagName === 'LI')
            clicks++;
        selected.push(e.target.dataset.position);
        myGo(e.target.dataset.position);
        b.style.backgroundImage = 'url(\'pic/' + ((clicks % 2 === 0) ? 'astacasino' : 'zorocasino') + '.jpg';
    }
}))

// prompt play again when game cannot be played anymore, pressing again resets the game board, position and clicks. how to make this an object
playAgain.addEventListener('click', () => {
    for (i = 1; i < 10; i++)
        document.querySelector(`[data-position=\'${i}\']`).style.backgroundImage = 'none';
    selected = [];
    user1.positions = [];
    user2.positions = [];
    clicks = 0;
    playAgain.style.display = 'none';
});


// player turns function -> start win check. how do i make this an object?


function myGo(chosen) {
    if (clicks % 2 == 0) {
        turn = 1;
        user2.positions.push(chosen);
        if (user2.positions.length >= 3)
            checkIfWon(user2);
    } else {
        turn = 0;
        user1.positions.push(chosen);
        if (user1.positions.length >= 3)
            checkIfWon(user1);
    }
}

// check win function -> if won push winner to alert -> if lost push the computer to win alert -> if draw alert draw. Each displays Again after game completes. how to make this an object

function checkIfWon(player) {
    for (i = 0; i < winningCombos.length; i++) {
        let winner = [];
        for (j = 0; j < player.positions.length; j++) {
            if (winningCombos[i].includes(Number(player.positions[j])))
                winner.push(player.positions[j]);
        }
        console.log(winner);
        if (winner.length === 3) {
            player.points += 1;
            alert(`Player ${player.symbol === 'X' ? '1': '2'} Wins!!`);
            console.log(player.points);
            (player.symbol === 'X') ? scorePlayer1.innerText = player.points: scorePlayer2.innerText = player.points;
            playAgain.style.display = 'block';
            return;
        }
    }
    if (selected.length === 9) {
        alert('DRAW!');
        playAgain.style.display = 'block';
    }
}