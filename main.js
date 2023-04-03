let player = "X";
const x = document.querySelector(".closeOne");
const y = document.querySelector(".closeTwo");
let winner = document.getElementById("winner");
let cells = document.querySelectorAll("#cells");
cells = Array.from(cells); // this (Array.from()) turns html elements or node lists into an array.

cells.forEach((cell) => {
  // we are looping through each value in the array cells, passing it through the conditional below
  cell.addEventListener("click", () => {
    if (cell.innerText != "") {
      // if cell is not an empty string aka if cell has an X or O in it, return aka exit
      return;
    }
    cell.innerText = player; // if the string is empty, make the inner text player, which is equal to playerX.icon or playerO.icon
    // function to check for winner
    game.checkWinner();
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
    let draw = cells.every(
      (element, index) =>
        cells[index].innerText == "X" || cells[index].innerText == "O"
    );
    if (
      cells[0].innerText == player &&
      cells[1].innerText == player &&
      cells[2].innerText == player
    ) {
      winModal();
    } else if (
      cells[0].innerText == player &&
      cells[3].innerText == player &&
      cells[6].innerText == player
    ) {
      winModal();
    } else if (
      cells[0].innerText == player &&
      cells[4].innerText == player &&
      cells[8].innerText == player
    ) {
      winModal();
    } else if (
      cells[1].innerText == player &&
      cells[4].innerText == player &&
      cells[7].innerText == player
    ) {
      winModal();
    } else if (
      cells[2].innerText == player &&
      cells[4].innerText == player &&
      cells[6].innerText == player
    ) {
      winModal();
    } else if (
      cells[2].innerText == player &&
      cells[5].innerText == player &&
      cells[8].innerText == player
    ) {
      winModal();
    } else if (
      cells[3].innerText == player &&
      cells[4].innerText == player &&
      cells[5].innerText == player
    ) {
      winModal();
    } else if (
      cells[6].innerText == player &&
      cells[7].innerText == player &&
      cells[8].innerText == player
    ) {
      winModal();
    } else if (draw) {
      drawModal();
    }
  };
}
// MODALS
const winModal = () => {
  document.getElementById("winModal").style.display = "block";
  winner.innerText = `${player} Wins!`;
};
const drawModal = () => {
  document.getElementById("drawModal").style.display = "block";
};
const closeOne = () => {
  window.location.reload();
};
const closeTwo = () => {
  window.location.reload();
};
// EVENT LISTENERS
x.addEventListener("click", closeOne);
y.addEventListener("click", closeTwo);
// INSTANTIATIONS
const game = new Game();
const playerX = new Player("X");
const playerO = new Player("O");