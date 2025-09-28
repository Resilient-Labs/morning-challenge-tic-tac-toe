/*let activePlayer = "X";
let isXTurn = true;
const whosTurn = document.querySelector('.whosTurn');


/// h3 Whos turn is it?
function switchTurn() {

    if (activePlayer === "X") {
        activePlayer = "O";
    } else {
        activePlayer = "X";
    }
whosTurn.innerHTML = `It's ${activePlayer}'s turn`;
    }



// collect all elements to replace empty with x or o
const r1 = document.querySelector('.r1');
const r1a = document.querySelector('.r1a');
const r1b = document.querySelector('.r1b');
const r2 = document.querySelector('.r2');
const r2a = document.querySelector('.r2a');
const r2b = document.querySelector('.r2b');
const r3 = document.querySelector('.r3');
const r3a = document.querySelector('.r3a');
const r3b = document.querySelector('.r3b');

let game = [r1, r1a, r1b, r2, r2a, r2b, r3, r3a, r3b];


/// add x or o to game board
game.forEach(block => {
  block.addEventListener("click", function() {

    if (block.innerHTML === "") {


      block.innerHTML = activePlayer; 

     
      if (activePlayer === "X") {

        activePlayer = "O";
      } else {

        activePlayer = "X";
    
      }
    }
  });
});

*/






/*
const winnerWinner = document.querySelector('.winnerWinner');

//winning arguments 
//3 in a row
//3 in a column
//3 diagonal
function winX(game) {
    // if
    //by column
    //r1 ===r2 === r3  win!
    //r1a ===r2a ===r3a win!
    //r1b ===r2b === r3b win!
if (r1 === r2 && r2 === r3 && (r1 === "X")) {
  console.log("Three in a row! X Player WINS!");
  winnerWinner.innerHTML = "Three in a row! X Player WINS!";
}
else if (r1a === r2a && r2a === r3a && (r1a === "X")) {
  console.log("Three in a row! X Player WINS!");
  winnerWinner.innerHTML = "Three in a row! X Player WINS!";
}

else if (r1b === r2b && r2b=== r3b && (r1b === "X")) {
  console.log("Three in a row! X Player WINS!");
  winnerWinner.innerHTML = "Three in a row! X Player WINS!";
}





    // if
    // by row
    //r1 === r1a === r1b
    //r2 === r2a === r2b
    //r3 === r3a === r3b
else if (r1 === r1a && r1a === r1b && (r1 === "X")) {
  console.log("Three in a row! X Player WINS!");
  winnerWinner.innerHTML = "Three in a row! X Player WINS!";
}
else if (r2 === r2a && r2a === r2b && (r2 === "X")) {
  console.log("Three in a row! X Player WINS!");
  winnerWinner.innerHTML = "Three in a row! X Player WINS!";
}
else if (r3 === r3a && r3a === r3b && (r3 === "X")) {
  console.log("Three in a row! X Player WINS!");
  winnerWinner.innerHTML = "Three in a row! X Player WINS!";
}


    // if
    // diagonal
    //r1=== r2a ===r3b
    //r1b=== r2a ===r3
    else if (r1 === r2a && r2a === r3b && (r1 === "X")) {
  console.log("Three in a row! X Player WINS!");
  winnerWinner.innerHTML = "Three in a row! X Player WINS!";
  }
    else if (r1b === r2a && r2a === r3 && (r1b === "X")) {
  console.log("Three in a row! X Player WINS!");
  winnerWinner.innerHTML = "Three in a row! X Player WINS!";
}
}


function winO(ame) {
    // if
    //by column
    //r1 ===r2 === r3  win!
    //r1a ===r2a ===r3a win!
    //r1b ===r2b === r3b win!
if (r1 === r2 && r2 === r3 && (r1 === "O")) {
  console.log("Three in a row! O Player WINS!");
  winnerWinner.innerHTML = "Three in a row! O Player WINS!";
}
else if (r1a === r2a && r2a === r3a && (r1a === "O")) {
  console.log("Three in a row! O Player WINS!");
  winnerWinner.innerHTML = "Three in a row! O Player WINS!";
}

else if (r1b === r2b && r2b=== r3b && (r1b === "O")) {
  console.log("Three in a row! O Player WINS!");
  winnerWinner.innerHTML = "Three in a row! O Player WINS!";
}






    // if
    // by row
    //r1 === r1a === r1b
    //r2 === r2a === r2b
    //r3 === r3a === r3b
else if (r1 === r1a && r1a === r1b && (r1 === "O")) {
  console.log("Three in a row! O Player WINS!");
  winnerWinner.innerHTML = "Three in a row! O Player WINS!";
}
else if (r2 === r2a && r2a === r2b && (r2 === "O")) {
  console.log("Three in a row! O Player WINS!");
  winnerWinner.innerHTML = "Three in a row! O Player WINS!";
}
else if (r3 === r3a && r3a === r3b && (r3 === "O")) {
  console.log("Three in a row! O Player WINS!");
  winnerWinner.innerHTML = "Three in a row! O Player WINS!";
}





    // if
    // diagonal
    //r1=== r2a ===r3b
    //r1b=== r2a ===r3
  else if (r1 === r2a && r2a === r3b && (r1 === "O")) {
  console.log("Three in a row! O Player WINS!");
  winnerWinner.innerHTML = "Three in a row! O Player WINS!";
  }
    else if (r1b === r2a && r2a === r3 && (r1b === "O")) {
  console.log("Three in a row! O Player WINS!");
  winnerWinner.innerHTML = "Three in a row! O Player WINS!";
}

}
*/








//************* My own code was not working, I put my whole code commentedinto chatgpt and it explained
///********** why it was not working   and gave me the folling which is below*/
let activePlayer = "X";
const whosTurn = document.querySelector('.whosTurn');
const winnerWinner = document.querySelector('.winnerWinner');

// collect all cells
const r1 = document.querySelector('.r1');
const r1a = document.querySelector('.r1a');
const r1b = document.querySelector('.r1b');
const r2 = document.querySelector('.r2');
const r2a = document.querySelector('.r2a');
const r2b = document.querySelector('.r2b');
const r3 = document.querySelector('.r3');
const r3a = document.querySelector('.r3a');
const r3b = document.querySelector('.r3b');

let game = [r1, r1a, r1b, r2, r2a, r2b, r3, r3a, r3b];

// winning combos
const winningCombos = [
  [r1, r2, r3],     // col 1
  [r1a, r2a, r3a],  // col 2
  [r1b, r2b, r3b],  // col 3
  [r1, r1a, r1b],   // row 1
  [r2, r2a, r2b],   // row 2
  [r3, r3a, r3b],   // row 3
  [r1, r2a, r3b],   // diag
  [r1b, r2a, r3]    // diag
];

// check winner
function checkWinner(player) {
  for (let combo of winningCombos) {
    if (
      combo[0].innerHTML === player &&
      combo[1].innerHTML === player &&
      combo[2].innerHTML === player
    ) {
      winnerWinner.innerHTML = `Three in a row! ${player} Player WINS!`;
      return true;
    }
  }
  return false;
}

// add click event to each cell
game.forEach(block => {
  block.addEventListener("click", function() {
    if (block.innerHTML === "" && winnerWinner.innerHTML === "") {
      block.innerHTML = activePlayer;

      // check win
      if (checkWinner(activePlayer)) {
        return; // stop game
      }

      // switch player
      activePlayer = activePlayer === "X" ? "O" : "X";
      whosTurn.innerHTML = `It's ${activePlayer}'s turn`;
    }
  });
});
