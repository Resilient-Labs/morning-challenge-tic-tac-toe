/*Set up event target
-event target focuses on a specific element*/

/*Add event listener 'click' to each target and assign accordingly
-.addEventListener tool*/

/*run function for either a 'O' or 'X' per player to take turn
-using if else statement*/

//add in the marker for each player (replace .innerHTML 'O' or 'X')

//set up a conditional for when

//Automatically switch player per turn or manually choose 'Player 1' or 'Player 2'?

//function to prevent users from clicking after game has been won

//any visual assets? X, O, header image?

//OBJECT ORIENTED PROGRAMMING

class Player {
  constructor(token) {
    this.token = token;
  }
}

class Game {
  constructor() {
    this.player1 = new Player("<img src=\"tina-dance.gif\" width=\"150px\" height=\"140px\">");
    this.player2 = new Player("<img src=\"cca.gif\" width=\"150px\" height=\"140px\">");
    this.currentPlayer = this.player1;
  }

    winnerCheck() {
    let arr = document.querySelectorAll("section");
  
    if (
      arr[0].innerHTML === arr[1].innerHTML &&
      arr[1].innerHTML === arr[2].innerHTML &&
      arr[0].innerHTML !== ""
    ) {
      alert("You Win!");
    } else if (
      arr[3].innerHTML === arr[4].innerHTML &&
      arr[4].innerHTML === arr[5].innerHTML &&
      arr[3].innerHTML !== ""
    ) {
      alert("You Win!");
    } else if (
      arr[6].innerHTML === arr[7].innerHTML &&
      arr[7].innerHTML === arr[8].innerHTML &&
      arr[6].innerHTML !== ""
    ) {
      alert("You Win!");
    } else if (
      arr[0].innerHTML === arr[3].innerHTML &&
      arr[3].innerHTML === arr[6].innerHTML &&
      arr[0].innerHTML !== ""
    ) {
      alert("You Win!");
    } else if (
      arr[1].innerHTML === arr[4].innerHTML &&
      arr[4].innerHTML === arr[7].innerHTML &&
      arr[1].innerHTML !== ""
    ) {
      alert("You Win!");
    } else if (
      arr[2].innerHTML === arr[5].innerHTML &&
      arr[5].innerHTML === arr[8].innerHTML &&
      arr[2].innerHTML !== ""
    ) {
      alert("You Win!");
    } else if (
      arr[0].innerHTML === arr[4].innerHTML &&
      arr[4].innerHTML === arr[8].innerHTML &&
      arr[0].innerHTML !== ""
    ) {
      alert("You Win!");
    } else if (
      arr[2].innerHTML === arr[4].innerHTML &&
      arr[4].innerHTML === arr[6].innerHTML &&
      arr[2].innerHTML !== ""
    ) {
      alert("You Win!");
    } else if (
      arr[0].innerHTML !== "" &&
      arr[1].innerHTML !== "" &&
      arr[2].innerHTML !== "" &&
      arr[3].innerHTML !== "" &&
      arr[4].innerHTML !== "" &&
      arr[5].innerHTML !== "" &&
      arr[6].innerHTML !== "" &&
      arr[7].innerHTML !== "" &&
      arr[8].innerHTML !== ""
    ) {
      alert("tie!");
    }
  }

  playerSwitch(event) {
    if((event.target.innerHTML === this.player1.token) || (event.target.innerHTML === this.player2.token)){
        return
    }else{
     if(counter % 2 === 0 ){
         event.target.innerHTML= this.currentPlayer.token // x - Tina
         this.currentPlayer= this.player2
     }else{
         event.target.innerHTML= this.currentPlayer.token  // o - Louise
         this.currentPlayer = this.player1
     }
     counter ++
    }

     console.log("click #: " + counter)

    this.winnerCheck();
    // console.log(this.player1.token)
  }

}

let counter = 0;
let newGame = new Game();

function runGame(event){
    newGame.playerSwitch(event)
}
// let newGameButton = document.getElementById('newGame').addEventListener('click', newGame.playerSwitch )
document
  .getElementById("container")
  .addEventListener("click", runGame);
console.log(newGame);

// FUNCTIONAL PROGRAMMING
//variables
// let winner = document.getElementById('winner')
//functions

//event listeners and functions
//  document.getElementById("container").addEventListener("click", newGame.playerSwitch)

//let counter = 0

// place marker function

// function playerMove(event) {

//    if((event.target.innerHTML === "<img src=\"cca.gif\" width=\"150px\" height=\"150px\">") || (event.target.innerHTML === "<img src=\"tina-dance.gif\" width=\"150px\" height=\"150px\">")){
//        return
//    }else{
//     if(counter % 2 === 0 ){
//         event.target.innerHTML="<img src=\"tina-dance.gif\" width=\"150px\" height=\"150px\">" // O
//     }else{
//         event.target.innerHTML="<img src=\"cca.gif\" width=\"150px\" height=\"150px\">"  // X
//     }
//     counter ++
//    }

//     console.log("click #: " + counter)

//     winnerCheck()
// }

//check winner function
// function winnerCheck() {
//   let arr = document.querySelectorAll("section");

//   if (
//     arr[0].innerHTML === arr[1].innerHTML &&
//     arr[1].innerHTML === arr[2].innerHTML &&
//     arr[0].innerHTML !== ""
//   ) {
//     alert("You Win!");
//   } else if (
//     arr[3].innerHTML === arr[4].innerHTML &&
//     arr[4].innerHTML === arr[5].innerHTML &&
//     arr[3].innerHTML !== ""
//   ) {
//     alert("You Win!");
//   } else if (
//     arr[6].innerHTML === arr[7].innerHTML &&
//     arr[7].innerHTML === arr[8].innerHTML &&
//     arr[6].innerHTML !== ""
//   ) {
//     alert("You Win!");
//   } else if (
//     arr[0].innerHTML === arr[3].innerHTML &&
//     arr[3].innerHTML === arr[6].innerHTML &&
//     arr[0].innerHTML !== ""
//   ) {
//     alert("You Win!");
//   } else if (
//     arr[1].innerHTML === arr[4].innerHTML &&
//     arr[4].innerHTML === arr[7].innerHTML &&
//     arr[1].innerHTML !== ""
//   ) {
//     alert("You Win!");
//   } else if (
//     arr[2].innerHTML === arr[5].innerHTML &&
//     arr[5].innerHTML === arr[8].innerHTML &&
//     arr[2].innerHTML !== ""
//   ) {
//     alert("You Win!");
//   } else if (
//     arr[0].innerHTML === arr[4].innerHTML &&
//     arr[4].innerHTML === arr[8].innerHTML &&
//     arr[0].innerHTML !== ""
//   ) {
//     alert("You Win!");
//   } else if (
//     arr[2].innerHTML === arr[4].innerHTML &&
//     arr[4].innerHTML === arr[6].innerHTML &&
//     arr[2].innerHTML !== ""
//   ) {
//     alert("You Win!");
//   } else if (
//     arr[0].innerHTML !== "" &&
//     arr[1].innerHTML !== "" &&
//     arr[2].innerHTML !== "" &&
//     arr[3].innerHTML !== "" &&
//     arr[4].innerHTML !== "" &&
//     arr[5].innerHTML !== "" &&
//     arr[6].innerHTML !== "" &&
//     arr[7].innerHTML !== "" &&
//     arr[8].innerHTML !== ""
//   ) {
//     alert("tie!");
//   }
// }

// still need: reset game function
