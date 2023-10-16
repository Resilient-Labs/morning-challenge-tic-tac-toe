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

let player = "x";
let cell = document.querySelectorAll(".cells");
let restart = document.getElementById("restart");
const winConditions = [           //array with all possible matching wins combinations cond's
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let options = ["", "", "", "", "", "", "", "", ""];
let running = true;

cell = Array.from(cell);

cell.forEach(element => {
    element.addEventListener("click", () => {
        if (element.innerText !== "" || !game.session) {
            return;
        }

        element.innerText = player;

        game.winner();
        game.checkDraw();

        player = player === "x" ? "o" : "x";
    });
});

class Create {
    constructor() {
        this.session = true;
    }

    checkDraw() {
        if (!this.session) {
            return;
        }
        let draw = cell.every(element => element.innerText == "x" || element.innerText == "o");

        if (draw) {
            alert('draw');
            this.session = false;
        }
    }
    




    winner() {
        
            //Slot machine Win form
        function checkWin(results) {
            console.log(results)
            // console.log(results[0])
            const firstSymbol = results[0];
            const isWin = results.every(symbol => symbol === firstSymbol);
            //every method is like a for( Loop ) goes through every element 
            return isWin;

    // Implement the 'winner' method to check for win conditions
}

const game = new Create();
restart.addEventListener('click', () => game.runAgain());
