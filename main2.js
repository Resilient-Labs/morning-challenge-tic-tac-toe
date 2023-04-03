
// const cell = document.querySelector("#cells");

// // Cell selection
// let cellDivs = document.querySelectorAll("#cells"); //returns a nodelist
// cellDivs = Array.from(cellDivs); //Convert NodeList into an array

// //Add eventListener to all the cells
// cellDivs.forEach((cell) => {
//   cell.addEventListener("click", () => {

//     let currentPlayer = document.createElement("img")
// currentPlayer.src = "img/X.png";


//     //Check if the cell has innertext. If it does it means cell has already been selected.
//     if (cell.innerHTML != "") {
//       return;
//     }

//     //Instantiate the gameboard class
//     const gameboard = new Gameboard();



//     let player1 = document.createElement("img");
//     player1.src = "img/X.png";
//     player1.classList.add("X")

//     let player2 = document.createElement("img");
//     player2.src = "img/O.png";
//     player2.classList.add("O")
    
   
// console.log(player1, player2, currentPlayer)
// console.log(currentPlayer.classList.contains("X"))

//      //Once a player has selected, change the players turn
//     if(currentPlayer.classList.contains("X")){
//         currentPlayer = player2;
//     } else {
//         currentPlayer = player1;
//     }

//     //  currentPlayer = currentPlayer.classList.contains("X") ? player2 : player1; // This changes the player's turn. If currentplayer is "X", let "O" go have a turn

//     //Place the X or O into the Dom/cell
//     cell.appendChild(currentPlayer);

//     // //Check for a draw
//     // gameboard.checkDraw();

//     //Check for winner
//     gameboard.checkForWinner();

   
//   });
// });

// Create an <img> element for the current player and set its source and class to "img/X.png" and "X" respectively
let currentPlayer = document.createElement("img");
currentPlayer.src = "img/X.png";
currentPlayer.classList.add("X");

const player1 = document.createElement("img");
player1.src = "img/X.png";
player1.classList.add("X");
const player2 = document.createElement("img");
player2.src = "img/O.png";
player2.classList.add("O");

// Select all cells and convert the NodeList into an array
let cellDivs = Array.from(document.querySelectorAll("#cells"));

// For each cell, add a click event listener
cellDivs.forEach((cell) => {
  cell.addEventListener("click", () => {
    // If the cell is already taken, return immediately
    if (cell.innerHTML !== "") {
      return;
    }

    // Create two <img> elements for each player and set their sources and classes
    const player1 = document.createElement("img");
    player1.src = "img/X.png";
    player1.classList.add("X");
    const player2 = document.createElement("img");
    player2.src = "img/O.png";
    player2.classList.add("O");

    // If the current player is X, switch to O and vice versa
    if (currentPlayer.classList.contains("X")) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }

    // Add the current player's <img> element to the cell
    cell.appendChild(currentPlayer);

    // Instantiate a new Gameboard object
    const gameboard = new Gameboard();

    // Check for a draw
    gameboard.checkDraw();

    // Check for a winner
    gameboard.checkForWinner();
  });
});

//The Gameboard class holds all the methods
class Gameboard {
  //Function checks if there's a draw
  checkDraw() {
    //returns true if every cell has innerText of "X" or "O"
    let draw = cellDivs.every(
      (element, index) =>
        cellDivs[index].innerText == player1 ||
        cellDivs[index].innerText == player2 //Places an "X" or "O" in the cell that is targeted by the .every method.
    );

    //if True, it's a draw
    if (draw) {
      document.querySelector(".displayWinner").classList.remove("hidden"); //remove hidden class
      document.querySelector(".winnerMessage").innerText = "It's a DRAW"; //insert text to show who won
    }
  }

  //Function checks for a winner
  checkForWinner() {
    if (
      cellDivs[0].innerText == currentPlayer &&
      cellDivs[1].innerText == currentPlayer &&
      cellDivs[2].innerText === currentPlayer //first row
    ) {
      document.querySelector(".displayWinner").classList.remove("hidden"); // remove hidden class
      document.querySelector(
        ".winnerMessage"
      ).innerText = `${currentPlayer} Wins!`; //Insert Text to show who won
    } else if (
      cellDivs[3].innerText == currentPlayer &&
      cellDivs[4].innerText == currentPlayer &&
      cellDivs[5].innerText === currentPlayer //second row
    ) {
      document.querySelector(".displayWinner").classList.remove("hidden"); // remove hidden class
      document.querySelector(
        ".winnerMessage"
      ).innerText = `${currentPlayer} Wins!`; //Insert Text to show who won
    } else if (
      cellDivs[6].innerText == currentPlayer &&
      cellDivs[7].innerText == currentPlayer &&
      cellDivs[8].innerText === currentPlayer //third row
    ) {
      document.querySelector(".displayWinner").classList.remove("hidden"); // remove hidden class
      document.querySelector(
        ".winnerMessage"
      ).innerText = `${currentPlayer} Wins!`; //Insert Text to show who won
    } else if (
      cellDivs[0].innerText == currentPlayer &&
      cellDivs[3].innerText == currentPlayer &&
      cellDivs[6].innerText === currentPlayer //first column
    ) {
      document.querySelector(".displayWinner").classList.remove("hidden"); // remove hidden class
      document.querySelector(
        ".winnerMessage"
      ).innerText = `${currentPlayer} Wins!`; //Insert Text to show who won
    } else if (
      cellDivs[1].innerText == currentPlayer &&
      cellDivs[4].innerText == currentPlayer &&
      cellDivs[7].innerText === currentPlayer //second column
    ) {
      document.querySelector(".displayWinner").classList.remove("hidden"); // remove hidden class
      document.querySelector(
        ".winnerMessage"
      ).innerText = `${currentPlayer} Wins!`; //Insert Text to show who won
    } else if (
      cellDivs[2].innerText == currentPlayer &&
      cellDivs[5].innerText == currentPlayer &&
      cellDivs[8].innerText === currentPlayer //third column
    ) {
      document.querySelector(".displayWinner").classList.remove("hidden"); // remove hidden class
      document.querySelector(
        ".winnerMessage"
      ).innerText = `${currentPlayer} Wins!`; //Insert Text to show who won
    } else if (
      cellDivs[0].innerText == currentPlayer &&
      cellDivs[4].innerText == currentPlayer &&
      cellDivs[8].innerText === currentPlayer //diagonal left to right
    ) {
      document.querySelector(".displayWinner").classList.remove("hidden"); // remove hidden class
      document.querySelector(
        ".winnerMessage"
      ).innerText = `${currentPlayer} Wins!`; //Insert Text to show who won
    } else if (
      cellDivs[2].innerText == currentPlayer &&
      cellDivs[4].innerText == currentPlayer &&
      cellDivs[6].innerText === currentPlayer //diagonal right to left
    ) {
      document.querySelector(".displayWinner").classList.remove("hidden"); // remove hidden class
      document.querySelector(
        ".winnerMessage"
      ).innerText = `${currentPlayer} Wins!`; //Insert Text to show who won
    }
  }

  //Restart button
  restart() {
    //Reset currentPlayer back to "X"
    currentPlayer = "X";

    //Remove all innerText from the cells.
    cellDivs.forEach((cell) => (cell.innerText = ""));
    document.querySelector(".displayWinner").classList.add("hidden"); //add the hidden class to hide winning message.
  }
}

//Instantiate the Gameboard again bc it's in the global scope now.
const gameboard = new Gameboard();
document.querySelector("#reset").addEventListener("click", gameboard.restart); // When game is over, can reset the game.
