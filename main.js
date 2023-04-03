let currentPlayer = "X"; //Keep track of whose turn it is. Player "X" starts first.


// Cell selection
let cellDivs = document.querySelectorAll("#cells"); //returns a nodelist
cellDivs = Array.from(cellDivs); //Convert NodeList into an array

//Add eventListener to all the cells
cellDivs.forEach((cell) => {
  cell.addEventListener("click", () => {

    //Check if the cell has innertext. If it does it means cell has already been selected.
    if (cell.innerText != "") {
      return;
    }

    //Instantiate the gameboard class
    const gameboard = new Gameboard()

    

    //Place the X or O into the Dom/cell
    cell.innerText = currentPlayer;

    //Check for a draw
    gameboard.checkDraw();

    //Check for winner
    gameboard.checkForWinner();


    //Once a player has selected, change the players turn
    currentPlayer = currentPlayer == "X" ? "O" : "X"; // This changes the player's turn. If currentplayer is "X", let "O" go have a turn
  });

});

//The Gameboard class holds all the methods
class Gameboard{

//Function checks if there's a draw
checkDraw() {
  // returns true if every cell has innerText of "X" or "O"
  let draw = cellDivs.every(
    (element, index) =>
      cellDivs[index].innerText == "X" || cellDivs[index].innerText == "O" //Places an "X" or "O" in the cell that is targeted by the .every method.
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
const gameboard =new Gameboard()
document.querySelector("#reset").addEventListener("click", gameboard.restart); // When game is over, can reset the game.