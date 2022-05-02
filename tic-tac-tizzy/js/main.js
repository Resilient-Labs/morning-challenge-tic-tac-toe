/*📊 Morning Challenge: Tic-Tac-Toe

Goal: Create a two player Tic-Tac-Toe game. 

The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. 

Please make the game as OOP as possible.

Game Contructor method: should say click and space should change. will also check if winner, if none, will go to next player.

Player constructor

scoreboard constructor?
*/

//class definition ( Use when having a lot of ( good way to org data and behavior ))
class TicTacToeGame {
  variable = 'value'
  turnCounter = 0 
  
  

  constructor(){

    //Clear button
    this.clearButton = document.querySelector("#clear");

    //Winner message
    this.result = document.querySelector("#result");

    //Game starts with playerTurn at true
    this.playerTurn = true;

    //Winner message
    this.result = document.querySelector("#result");
  }

  count(){
    game.turnCounter++
    return game.turnCounter
  }

  tie(){ 
    if (game.turnCounter === 9){
      result.innerText = "It's a tie!"
      // return console.log("It's a tie!")
    }
  }

};

const game = new TicTacToeGame() /* "instantiating" an object using a class */ 

//Example of object literal
// const game = {
//   turnCounter: 0
// }

// **below are all functions and variables i've make into the class definition**

// let count = () => {
//   game.turnCounter++
//   return game.turnCounter
// }

// //Clear button
// const game.clearButton = document.querySelector("#clear");

// function tie (){ 
//   if (game.turnCounter === 9){
//     // result.innerText = "It's a tie!"
//     console.log("It's a tie!")
//   }
// }

//Game starts with playerTurn at true
// let playerTurn = true;

//Winner message
// const game.result = document.querySelector("#result");

// **Above are all functions and variables i've make into the class definition**


//Game boxes
const box1 = document.querySelector("#one");
const box2 = document.querySelector("#two");
const box3 = document.querySelector("#three");
const box4 = document.querySelector("#four");
const box5 = document.querySelector("#five");
const box6 = document.querySelector("#six");
const box7 = document.querySelector("#seven");
const box8 = document.querySelector("#eight");
const box9 = document.querySelector("#nine");

document.querySelector(".container").addEventListener("click", playerClick);

//Adds x or o when player clicks
function playerClick(e) {
  //We check if it has a class of mark. mark will indicate if it's marked.
  if (!e.target.classList.contains("mark")) {
    //this adds the class of mark so that nothing further can be added to the box.
    e.target.className += " mark";
    //this adds x or o to the inner text. If true it returns x. If false it returns o.
    e.target.innerText = game.playerTurn == true ? "X" : "O";
    //this runs to switch the player turn to the next.
    game.playerTurn == true ? (game.playerTurn = false) : (game.playerTurn = true);

    document.querySelector("#counterTxt").innerHTML = game.count()
    // console.log(e.target.id)
    // console.log(boxChecker(e.target.id))
    winningCombos();
    // This shit above(line ) dont work
  }
}



//Board

function winningCombos() {
  // Checking and comparing each text
  if (
    box1.innerText === "X" &&
    box2.innerText === "X" &&
    box3.innerText === "X"
  ) {
    return (game.result.innerText = 'Player "X" is the Winner!!');
  } else if (
    box4.innerText === "X" &&
    box5.innerText === "X" &&
    box6.innerText === "X"
  ) {
    return (game.result.innerText = 'Player "X" is the Winner!!');
  } else if (
    box7.innerText === "X" &&
    box8.innerText === "X" &&
    box9.innerText === "X"
  ) {
    return (game.result.innerText = 'Player "X" is the Winner!!');
  } else if (
    box1.innerText === "X" &&
    box4.innerText === "X" &&
    box7.innerText === "X"
  ) {
    return (game.result.innerText = 'Player "X" is the Winner!!');
  } else if (
    box2.innerText === "X" &&
    box5.innerText === "X" &&
    box8.innerText === "X"
  ) {
    return (game.result.innerText = 'Player "X" is the Winner!!');
  } else if (
    box3.innerText === "X" &&
    box6.innerText === "X" &&
    box9.innerText === "X"
  ) {
    return (game.result.innerText = 'Player "X" is the Winner!!');
  } else if (
    box1.innerText === "X" &&
    box5.innerText === "X" &&
    box9.innerText === "X"
  ) {
    return (game.result.innerText = 'Player "X" is the Winner!!');
  } else if (
    box3.innerText === "X" &&
    box6.innerText === "X" &&
    box9.innerText === "X"
  ) {
    return (game.result.innerText = 'Player "X" is the Winner!!');
  }
  if (
    box1.innerText === "O" &&
    box2.innerText === "O" &&
    box3.innerText === "O"
  ) {
    return (game.result.innerText = 'Player "O" is the Winner!!');
  } else if (
    box4.innerText === "O" &&
    box5.innerText === "O" &&
    box6.innerText === "O"
  ) {
    return (game.result.innerText = 'Player "O" is the Winner!!');
  } else if (
    box7.innerText === "O" &&
    box8.innerText === "O" &&
    box9.innerText === "O"
  ) {
    return (game.result.innerText = 'Player "O" is the Winner!!');
  } else if (
    box1.innerText === "O" &&
    box4.innerText === "O" &&
    box7.innerText === "O"
  ) {
    return (game.result.innerText = 'Player "O" is the Winner!!');
  } else if (
    box2.innerText === "O" &&
    box5.innerText === "O" &&
    box8.innerText === "O"
  ) {
    return (game.result.innerText = 'Player "O" is the Winner!!');
  } else if (
    box3.innerText === "O" &&
    box5.innerText === "O" &&
    box7.innerText === "O"
  ) {
    return (game.result.innerText = 'Player "O" is the Winner!!');
  } else if (
    box1.innerText === "O" &&
    box5.innerText === "O" &&
    box9.innerText === "O"
  ) {
    return (game.result.innerText = 'Player "O" is the Winner!!');
  } else if (
    box3.innerText === "O" &&
    box6.innerText === "O" &&
    box9.innerText === "O"
  ) {
    return (game.result.innerText = 'Player "O" is the Winner!!');
  }

  game.tie()
}


game.clearButton.addEventListener("click", clearGame);

function clearGame() {
  box1.innerText = "  ";
  box2.innerText = "  ";
  box3.innerText = "  ";
  box4.innerText = "  ";
  box5.innerText = "  ";
  box6.innerText = "  ";
  box7.innerText = "  ";
  box8.innerText = "  ";
  box9.innerText = "  ";
  game.result.innerText = "";
  
  box1.classList.remove("mark");
  box2.classList.remove("mark");
  box3.classList.remove("mark");
  box4.classList.remove("mark");
  box5.classList.remove("mark");
  box6.classList.remove("mark");
  box7.classList.remove("mark");
  box8.classList.remove("mark");
  box9.classList.remove("mark");

  game.turnCounter = 0

  document.querySelector("#counterTxt").innerHTML = 0
}
