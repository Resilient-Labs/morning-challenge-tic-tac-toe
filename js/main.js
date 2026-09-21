class Player {
constructor(symbol){
this.symbol = symbol;
}


}

let player1 = new Player( 'X')  
let player2 = new Player( 'O')

const board = {
    squares: ['','','','','','','','',''],

 
}

const game = {
  currentPlayer: player1,

    changePlayer(){
        if (this.currentPlayer ===player1){
            this.currentPlayer = player2;
        } else {
            this.currentPlayer = player1;
        }

    } 

    };

    document.querySelectorAll('.square').forEach(square =>{
        square.addEventListener('click', function(event){
            let index = event.target.getAttribute('square-index');
            if(board.squares[index] !== ''){
                return;
            }
 
    board.squares[index] = game.currentPlayer.symbol;
    event.target.innerText = game.currentPlayer.symbol;

    let s = board.squares;
    if(
(s[0] === s[1] && s[2] === s[0] && s[0] !== '') ||
(s[3] === s[4] && s[5] === s[3] && s[3] !== '') ||
(s[6] === s[7] && s[8] === s[6] && s[6] !== '') ||
(s[0] === s[3] && s[6] === s[0] && s[0] !== '') ||
(s[1] === s[4] && s[7] === s[1] && s[1] !== '') ||
(s[2] === s[5] && s[8] === s[2] && s[2] !== '') ||
(s[0] === s[4] && s[8] === s[0] && s[0] !== '') ||
(s[2] === s[4] && s[6] === s[2] && s[2] !== '') 
    ){
        document.querySelector('#messages').innerText = `${game.currentPlayer.symbol} wins`;
return;
    }

    game.changePlayer();
});

});