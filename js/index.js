// Select a box
// Then make it x or 0 depending the player
// Create two players objets
let allDivs = document.querySelectorAll("div");
let playerTurn = true;
let move = 0;
let winCondition = false;

let startButton = document.getElementById("startButton").addEventListener("click", startGame)
let resetButton = document.getElementById("resetButton").addEventListener('click', resetGame)

class Player{
    constructor(player, sign){
        this.player = player;
        this.sign = sign;
    }

    returnSign(){
        return this.sign
    }

    checkWin(){ 
        // Checking the patterns to see who wins
        if(allDivs[0].innerHTML != "" &&
            (allDivs[0].innerHTML == allDivs[1].innerHTML && allDivs[1].innerHTML == allDivs[2].innerHTML)){
                console.log(`${this.player} won!`);
                winCondition = true;
        }
        else if(allDivs[3].innerHTML != "" &&
            (allDivs[3].innerHTML == allDivs[4].innerHTML && allDivs[4].innerHTML == allDivs[5].innerHTML)){
                console.log(`${this.player} won!`);
                winCondition = true;
            }
        else if(allDivs[6].innerHTML != "" &&
            (allDivs[6].innerHTML == allDivs[7].innerHTML && allDivs[7].innerHTML == allDivs[8].innerHTML)){
                console.log(`${this.player} won!`);
                winCondition = true;
            }
        else if(allDivs[0].innerHTML != "" &&
            (allDivs[0].innerHTML == allDivs[4].innerHTML && allDivs[4].innerHTML == allDivs[8].innerHTML)){
                console.log(`${this.player} won!`);
                winCondition = true;
            }
        else if(allDivs[2].innerHTML != "" &&
            (allDivs[2].innerHTML == allDivs[4].innerHTML && allDivs[4].innerHTML == allDivs[6].innerHTML)){
                console.log(`${this.player} won!`);
                winCondition = true;
            }
    }

    checkTie(){
        if(move == 9 && winCondition == false){
            alert("IT WAS A TIE GAME, THE GAME WILL RESTART")
            resetGame()
        }
    }
    
}

function startGame(){
    let playerOne = new Player("One", "X");
    let playerTwo = new Player("Two", "O");
    allDivs.forEach((x) =>{
        x.addEventListener('click', () =>{
            if(playerTurn){
                x.innerHTML = playerOne.returnSign();
                playerTurn = false;
                move++
                playerOne.checkWin()
                playerOne.checkTie()
                console.log(move + "@"+  winCondition);
            }
            else if(playerTurn != true){
                x.innerHTML = playerTwo.returnSign();
                playerTurn = true;
                move++;
                playerTwo.checkWin();
                playerTwo.checkTie()

                console.log(move + "W" + winCondition);
            }
        })
    })

}

function resetGame(){
    allDivs.forEach((x) =>{
        x.innerHTML = "";
    })
    move = 0;
    winCondition = false;
}