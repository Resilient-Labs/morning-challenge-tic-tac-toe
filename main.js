//References: https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.

//received assistance during class and review session with classmates

//https://medium.com/@canankorkut1/how-to-create-a-tic-tac-toe-with-html-css-and-javascript-10a25fddd356: used these two to complement my thought process and pseudo-code
//https://www.youtube.com/watch?v=B3pmT7Cpi24


class TicTacToe{
    constructor(){//set variables
        this.squares = document.querySelectorAll('.face');
        this.message= document.querySelector('h2');
        this.reset= document.getElementById('reset');
        this.players=['X', 'O'];//Player X, Player O
        this.player=this.players[0];

        //all possibilities for winning: check rows, columns, diagonals
        this.allPossibilities = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]];

        //click events applied to squares
        for (let i=0; i<this.squares.length; i++){
            this.squares[i].addEventListener('click', (e) =>{
                if(e.target.textContent !== ""){
                    return;
                }
                e.target.textContent=this.player;

                //check if there is a win or tie
                if(this.win()){
                    this.message.textContent=` Player ${this.player} wins!`;
                } else if(this.tie()){
                    this.message.textContent = `It's a tie!`;
                }else{

                    //next player takes turn
                    if(this.player == this.players[0]){
                        this.player = this.players[1];
                        this.message.textContent = "It is Player O's turn.";
                    }else{
                        this.player = this.players[0];
                        this.message.textContent = "It is Player X's turn."
                    }
                }
            });
        }
        //listen to the reset button
        this.reset.addEventListener('click', () => {
            for(let i = 0; i<this.squares.length; i++){
                this.squares[i].textContent = "";
            }
            this.player = this.players[0];
            this.message.textContent="Player X goes first!"

        });


    }

    //check if player wins
    win(){
        for(let i=0; i<this.allPossibilities.length; i++){
            const [a, b, c] = this.allPossibilities[i];
            if(this.squares[a].textContent ===this.player && this.squares[b].textContent === this.player
                && this.squares[c].textContent === this.player){
                return true;
            }

        }
        return false;
    }
    //nobody wins
    tie(){
        for(let i = 0; i<this.squares.length; i++){
            if(this.squares[i].textContent === ""){
                return false;
            }
        }
        return true;
    }
}
let startgame= new TicTacToe();


