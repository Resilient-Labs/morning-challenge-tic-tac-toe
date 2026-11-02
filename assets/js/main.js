//Player class with name and symbol
class Player{
    constructor(name, symbol){
        this.name=name;
        this.symbol=symbol;
    }
}
//Game class keeps track of the cells, whose turn it is, and who won
class Game{
    constructor(player1, player2){
        this.player1=player1;
        this.player2=player2;
        this.restart();
    }
//Restart the game
    restart(){
        this.cells=["", "", "", "", "", "", "", "", ""];
        this.currentPlayer=this.player1;
        this.gameOver=false;
        this.message=this.player1.name+"'s turn";
    }
//Called when a cell is clicked
    play(index){
//Does nothing if the game is over or the cell is filled
        if(this.gameOver||this.cells[index]!==""){
            return;
        }
        this.cells[index]=this.currentPlayer.symbol;
        if(this.checkWin()){
            this.message=this.currentPlayer.name + " wins!";
            this.gameOver=true;
//The includes() method is used to check if an array or a string contains a specific value. It performs a case-sensitive search and returns a boolean value: true if the value is found, and false if it is not.
        } else if(!this.cells.includes("")){ 
            this.message="It's a tie!";
            this.gameOver=true;
        } else{
//Switches turns to another player
            if(this.currentPlayer===this.player1){
                this.currentPlayer=this.player2;
            }else{
                this.currentPlayer=this.player1;
            }
            this.message=this.currentPlayer.name + "'s turn";
        }
    }
//Checks if it's a winner
    checkWin(){
//Array inside of Array
        const wins=[
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]  
        ];
        for(let i=0; i<wins.length; i++){
            const a=wins[i][0]; //0 . . . 
            const b=wins[i][1]; //1 . . .
            const c=wins[i][2]; //2 . . .
            if(this.cells[a]!=="" && this.cells[a]===this.cells[b] && this.cells[a]===this.cells[c]){
                return true;
            }
        }
        return false;
    }
}
//Create the two players and start a new game
const player1=new Player("Player 1", "X");
const player2=new Player("Player 2", "O");
const game=new Game(player1, player2);
//Get the cells, the message, and the restart button from the page
const cells=document.querySelectorAll(".cell");
const message=document.querySelector("#message");
const resetButton=document.querySelector("#reset");
//Copies game data to the page display
function showGame(){
    for(let i=0; i <cells.length; i++){
        cells[i].textContent=game.cells[i];
    }
    message.textContent=game.message;
}
for(let i=0; i<cells.length; i++){
    cells[i].addEventListener("click", function(){
        game.play(i);
        showGame();
    });
}
resetButton.addEventListener("click", function(){
    game.restart();
    showGame();
});
showGame();