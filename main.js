let player = "X";
let x = document.querySelector(".closeOne");
let y = document.querySelector(".closeTwo");
let winner = document.getElementById("winner");
let cell = document.querySelectorAll("#cell");




cell = Array.from(cell); // turns html elements into array
cell.forEach((cell) => {  // looping through each value in the array, passing it through conditional

  cell.addEventListener("click", () => {
    if (cell.innerText != "") {    // if cell has an X or O in it, return
      return;
    }
    cell.innerText = player; // if the string is empty, make the inner text player, which is equal to playerX.icon or playerO.icon

    game.checkWinner();    // check win
    player = player == playerX.icon ? playerO.icon : playerX.icon; // if player is equal to X , make player1 equal to O, else make player1 equal to X
  });
});

class Player {
  constructor(icon) {
    this.icon = icon;
  }
}

class Game {
  checkWinner = () => {
    let draw = cell.every(
      (element, index) =>
        cell[index].innerText == "X" || cell[index].innerText == "O"
    );
    if (
      cell[0].innerText == player &&
      cell[1].innerText == player &&
      cell[2].innerText == player
    ) {
      winModal();
    } else if (
      cell[0].innerText == player &&
      cell[3].innerText == player &&
      cell[6].innerText == player
    ) {
      winModal();
    } else if (
      cell[0].innerText == player &&
      cell[4].innerText == player &&
      cell[8].innerText == player
    ) {
      winModal();
    } else if (
      cell[1].innerText == player &&
      cell[4].innerText == player &&
      cell[7].innerText == player
    ) {
      winModal();
    } else if (
      cell[2].innerText == player &&
      cell[4].innerText == player &&
      cell[6].innerText == player
    ) {
      winModal();
    } else if (
      cell[2].innerText == player &&
      cell[5].innerText == player &&
      cell[8].innerText == player
    ) {
      winModal();
    } else if (
      cell[3].innerText == player &&
      cell[4].innerText == player &&
      cell[5].innerText == player
    ) {
      winModal();
    } else if (
      cell[6].innerText == player &&
      cell[7].innerText == player &&
      cell[8].innerText == player
    ) {
      winModal();
    } else if (draw) {
      drawModal();
    }
  };
}

const game = new Game();
const playerX = new Player("X");
const playerO = new Player("O");

// MODAL AKA POP UP BOX 

const winModal = () => {
  document.getElementById("winModal").style.display = "block"; // displays win box 
  winner.innerText = `${player} Wins!`;
};
const drawModal = () => {
  document.getElementById("drawModal").style.display = "block"; // displays draw box
};




x.addEventListener("click", closeOne);
y.addEventListener("click", closeTwo);


const closeOne = () => {
  window.location.reload();
};
const closeTwo = () => {
  window.location.reload();
}