let playerOne = 'X';

document.querySelector('button').addEventListener('click', startOver);

//RESET GAME LOGIC
function startOver() {
  playerOne = 'X';
  squares.forEach((element) => (element.innerText = ''));
  alert('BOARD CLEARED!');
}

let squares = document.querySelectorAll('.square');
squares = Array.from(squares);
console.log(squares);

//WHAT SHOULD BE HAPPENING AFTER EACH CLICK, WE NEED TO BE CHECKING
squares.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.innerText != '') {
      return;
    }
    element.innerText = playerOne;
    whoWon();
    isItDraw();
    playerOne = playerOne == 'X' ? 'O' : 'X';
  });
});

//LOGIC TO SEE IF THERE IS A WINNING COMBINATION, IS RUNNING AFTER EVERY CLICK, SHOULD BE CHECKING AT EACH INSTANCE
function whoWon() {
  if (
    (squares[0].innerText == playerOne &&
      squares[1].innerText == playerOne &&
      squares[2].innerText == playerOne) ||
    (squares[0].innerText == playerOne &&
      squares[4].innerText == playerOne &&
      squares[8].innerText == playerOne) ||
    (squares[0].innerText == playerOne &&
      squares[3].innerText == playerOne &&
      squares[6].innerText == playerOne) ||
    (squares[2].innerText == playerOne &&
      squares[5].innerText == playerOne &&
      squares[8].innerText == playerOne) ||
    (squares[3].innerText == playerOne &&
      squares[4].innerText == playerOne &&
      squares[5].innerText == playerOne)
  ) {
    alert('YOU WON!');
  }
}

//IF THERE IS A DRAW, WE NEED TO ALERT
function isItDraw() {
  let draw = squares.every(
    (element, index) =>
      squares[index].innerText == 'X' || squares[index].innerText == 'O',
  );

  if (draw) {
    alert('NO ONE WON :(');
  }
}
