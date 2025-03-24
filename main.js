// WHAT CAN IT DO?
// WHAT CAN I EXPECT?
// WHAT CAN WE SEE?

    //display choose player

window.onload = function() {
      alert("Choose your player, X or O! Good Luck!");
    };



// function move(arr) {
//     const array = ['X' , 'O']
//     array.forEach(element => {
//         if(arr[0] === true || arr[1] === true ){
//             document.querySelector('.zero').innerText = 'X'
//         } else{
//             document.querySelector('.zero').innerText = 'O'
//         }
//     });
// }

// function move1(arr) {
//     const array = ['X' , 'O']
//     array.forEach(element => {
//         if(arr[0] === true || arr[1] === true ){
//             document.querySelector('.one').innerText = 'X'
//         } else{
//             document.querySelector('.one').innerText = 'O'
//         }
//     });
// }




// class Wins{
//     constructor( moveX, moveO, switchTurns, twoInARow, threeInARow){
//         this.moveX = moveX
//         this.moveO = moveO
//         this.switch = switchTurns
//         this.twoInARow = twoInARow
//         this.threeInARow = threeInARow
//     }
// }

// twoInARow(){
//     alert('You need one more to win!')
// }

// threeInARow(){
//     this.threeInARow += 1
//     alert('BOSS MOVES! YOU WIN!')
// }

// starting with a board of empty spaces and making sure play X goes first
class GameBoard{
    constructor(){
        this.game = ['','','','','','','','','']
        this.player = 'X'
    }

// play either X or O 
    firstMove(index) {
        if(this.game[index] === ''){
            this.game[index] = this.player
            this.checkWinna()
            this.switchTurns()
        }
    }

// SWITCH OF PLAYERS X AND O 
switchTurns(){
    this.player = this.player === 'X' ? 'O' : 'X'
}

// Who's the WINNER? lists of all winning combos
checkWinna(){
    const winnings = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];


    // loop and display winner in h2
    for (const combo of winnings){ 
        const [x, y, z] = combo;
      if (this.game[x] && this.game[x] === this.game[y] && this.game[x] === this.game[z]) {
        document.querySelector('#text').innerText = `ANGELIC MOVES! ${this.game[x]} WINS!`;
        

        // if there are 3 in a row change element color to PINK
        document.querySelectorAll('.tile')[x].classList.add('winner');
            document.querySelectorAll('.tile')[y].classList.add('winner');
            document.querySelectorAll('.tile')[z].classList.add('winner');

            return;
        }
    }
        
// if there is a tie
if (!this.game.includes('')) {
    document.querySelector('#text').innerText = "Ooo so close.. it's a Tie!"
}

}

}

//trying to create a new game.. grabbing all tiles to either play X or O
const game = new GameBoard()
const tiles = document.querySelectorAll('.tile')

tiles.forEach((tile, index) => {
    tile.addEventListener('click',() => {
        game.firstMove(index);
        tile.innerText = game.game[index]
    })
})

// after results, click Play Again!
document.querySelector('#reset').addEventListener('click', () => {
    game.game = ['', '', '', '', '', '', '', '', '']
    document.querySelector('#text').innerText = ''
    tiles.forEach(tile => {
        tile.innerText = ''
        tile.classList.remove('winner')
    })
})