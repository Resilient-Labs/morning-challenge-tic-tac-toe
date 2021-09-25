//Group Moses: Shannon, Samekh, Alexa, David, Roxana, Nathan
// Also: MDN, James, FreeCodeCamp

/*Set up event target
-event target focuses on a specific element*/

/*Add event listener 'click' to each target and assign accordingly
-.addEventListener tool*/

/*run function for either a 'O' or 'X' per player to take turn
-using if else statement*/

//add in the marker for each player (replace .innertext 'O' or 'X')

//set up a conditional for when 

//Automatically switch player per turn or manually choose 'Player 1' or 'Player 2'?

//function to prevent users from clicking after game has been won




let game= document.getElementById("game");
let boxes = Array.from(document.getElementsByClassName("box"));
let restartBtn = document.getElementById("resetBtn");
let playText = document.getElementById("playText");
let spaces = [null, null, null, null, null, null, null, null, null];
let Player1 = "O";
let Player2 = "X";
let currentPlayer = Player1;

let drawBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = "";
    if (index < 3) {
      styleString += `border-bottom: 2px solid var(--teal);`;
    }
    if (index % 3 === 0) {
      styleString += `border-right: 2px solid var(--teal);`;
    }
    if (index % 3 === 2) {
      styleString += `border-left: 2px solid var(--teal);`;
    }
    if (index > 5) {
      styleString += `border-top: 2px solid var(--teal);`;
    }
    box.style = styleString;

    box.addEventListener("click", boxClicked);
  });
};

function boxClicked(e) {
  let id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (hasPlayerWon(currentPlayer)) {
      playText.innerHTML = `${currentPlayer} has won the game!`;
      return;
    }
    currentPlayer = currentPlayer === Player1 ? Player2 : Player1;
  }
}

let hasPlayerWon = (player) => {
  //from top left, check across, down, and diagonal
  if (spaces[0] === player) {
    if (spaces[1] === player && spaces[2] === player) {
      console.log(`${player} wins up top`);
      return true;
    }
    if (spaces[3] === player && spaces[6] === player) {
      console.log(`${player} wins on the left`);
      return true;
    }
    if (spaces[4] === player && spaces[8] === player) {
      console.log(`${player} wins on the diagonal`);
      return true;
    }
  }
  //from bottom check up and across
  if (spaces[8] === player) {
    if (spaces[2] === player && spaces[5] === player) {
      console.log(`${player} wins on the right`);
      return true;
    }
    if (spaces[7] === player && spaces[6] === player) {
      console.log(`${player} wins on the bottom`);
      return true;
    }
  }
  //from middle check middle vertical and middle horizontal
  if (spaces[4] === player) {
    if (spaces[3] === player && spaces[5] === player) {
      console.log(`${player} wins on the middle horizontal`);
      return true;
    }
    if (spaces[1] === player && spaces[7] === player) {
      console.log(`${player} wins on the middle vertical`);
      return true;
    }
  }
};

restartBtn.addEventListener("click", () => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  playText.innerHTML = `Let's Play!`;

  currentPlayer = Player1;
});

drawBoard();
