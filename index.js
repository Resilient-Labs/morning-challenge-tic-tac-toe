//Idea's & thought's
//Use the slot machine win formula for the 3 matching slots x/o possibly
//maybe make it so its per click for user? Example User 1 is first to click, User 2 is second click
//Or make a button within the block/cell to have a choice of either x/o
//User needs to decide between x/o possible with single click & double click event listener?
//Can use the calculator example to make the blocks/cell's & clickablilty & layout
//User has to let the next person play....
//Need a way to refresh the game after either a win/lose or all blocks are filled
//How can i make it as OOP as possible?

//PSUEDO
//The first user needs to click to select a block & select x/o
//the second user needs to have the same ability
//A click returns a x or O so i need event listeners 
//I need to have a formula to check if 3 symbols match in the 3x3 grid

//Blocks could be numbered?
// need to display either a win or loss to the resulting user

//Ro made a good point of how the game should play as a single turn for each player.

//Maybe make it all X & create else if statement for O user
// let userOne = "x" //represent's player &  
//clear the game same as refresh
//anounces winner or loser "Player one/X wins! - Player two/O wins!"

//if else conditional to check the winConditions
let playerOne = "x";
let playerTwo = "o";
let currentPlayer = playerOne; 
let cell = document.querySelectorAll(".cells");
let restart = document.getElementById("restart");
restart.addEventListener("click", clearButton);
// const winConditions = [           //array with all possible matching wins combinations cond's
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],          // 8 Possible Win's
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ];
// let selectCells = ["", "", "", "", "", "", "", "", ""];    // 9 Cell's
// let running = true;
// || !running

cell = Array.from(cell);

function clearButton(){
    cell.forEach(element => {
        element.innerText = ""
    })
  }

cell.forEach(element => {
    element.addEventListener("click", () => {
        if (element.innerText !== "") {
            return;
        }
        
        const boardGame = new Board();
        element.innerText = currentPlayer;
        
        boardGame.checkDraw()
        boardGame.testWinner()

        // document.createElement()

        currentPlayer = currentPlayer === playerOne ? playerTwo: playerOne
      })})

        class Board {
                checkDraw() {
                    let finished = cell.every((element, index) => cell[index].innerText == "x" || cell[index].innerText == "o")
                  
                    if(finished){
                      document.querySelector("#statusText").innerText = `It is a draw!` // Insert text to show who won
                      console.log('testerr')
                    }
                  }   
 

         testWinner() {   //this applies to the first combo of win conditions
            console.log('.');
            //first sol
            if (cell[0].innerText == currentPlayer && cell[1].innerText == currentPlayer && cell[2].innerText == currentPlayer) {
                document.querySelector("#statusText").innerText = `${currentPlayer} Wins YAAY!`
            }

             else if (cell[3].innerText == currentPlayer && cell[4].innerText == currentPlayer && cell[5].innerText == currentPlayer) {
                document.querySelector("#statusText").innerText = `${currentPlayer} Wins YAAY!`
             }

             else if (cell[6].innerText == currentPlayer && cell[7].innerText == currentPlayer && cell[8].innerText == currentPlayer) {
                document.querySelector("#statusText").innerText = `${currentPlayer} Wins YAAY!`
             }
             else if (cell[0].innerText == currentPlayer && cell[3].innerText == currentPlayer && cell[6].innerText == currentPlayer) {
                document.querySelector("#statusText").innerText = `${currentPlayer} Wins YAAY!`      
             }
             else if (cell[1].innerText == currentPlayer && cell[4].innerText == currentPlayer && cell[7].innerText == currentPlayer) {
                document.querySelector("#statusText").innerText = `${currentPlayer} Wins YAAY!`        
             }
             else if (cell[2].innerText == currentPlayer && cell[5].innerText == currentPlayer && cell[8].innerText == currentPlayer) {
                document.querySelector("#statusText").innerText = `${currentPlayer} Wins YAAY!`      
             }
             else if (cell[0].innerText == currentPlayer && cell[4].innerText == currentPlayer && cell[8].innerText == currentPlayer) {
                document.querySelector("#statusText").innerText = `${currentPlayer} Wins YAAY!`   
             }
             else if (cell[2].innerText == currentPlayer && cell[4].innerText == currentPlayer && cell[6].innerText == currentPlayer) {
                document.querySelector("#statusText").innerText = `${currentPlayer} Wins YAAY!`
                } 
            }
        }

        
    
    const boardGame = new Board();