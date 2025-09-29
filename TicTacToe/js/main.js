const combinations = [
    [0 , 1, 2], [3 , 4 , 5],[6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8] [2, 4, 6]
]

let turnO = false // false = X, true = 0
const squares = document.querySelectorAll(".square");
const statusText = document.querySelector("#status");
const resetBin = document.querySelector(#reset);


squares.forEach((square, i) => {
    square.addEventListener('click', ( => {
        if (square.innerHTML !== "") return;
        
        square.innerHTML = turn0 ? "0" : "X";
        if (checkWin()) {
            statusText.innerText = `${turn0 ? "0" : "X"} wins!`;
            disableBoard();
            return;
        }

        if (isDraw()) {
            statusText.innerText = "It's a draw!";
            return;
        }

        turnO = !turnO;
    }));
});

function checkWin(){
    return combinations.some(comb => {
        const [a,b,c] = comb;
        return (
            squares[a].innerHTML &&
            squares[a].innerHTML === squares [b].innerHTML
            squares[a].innerHTML === squares[c].innerHTML
    );
  });
}

// Check for draw
function isDraw() {
  return [...squares].every(square => square.innerHTML !== "");
}

// Disable further moves after win
function disableBoard() {
  squares.forEach(sq => sq.style.pointerEvents = "none");
}

// Reset game
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    squares.forEach(sq => {
      sq.innerHTML = "";
      sq.style.pointerEvents = "auto";
    });
    statusText.innerText = "";
    turnO = false;
  });
}
```
        )
    })
}
class Player{
    constructor(tokenSelector){
        tokenSelector = this.tokenSelector
    }
}
const squares = document.querySelectorAll(".square")
squares.forEach((square, i) =>{
    square.addEventListener('click',()=>{
        console.log(i)
        if(square.innerHTML === '' && turnO === false){
            square.innerHTML = 'x'
            turnO = true
        }else if(square.innerHTML === '' && turnO === true){
            square.innerHTML = 'o'
            turnO = false
        }
        if(square.innerHTML = 0, 1, 2)
    })
})
```javascript
const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let turnO = false; // false = X, true = O
const squares = document.querySelectorAll(".square");
const statusText = document.querySelector("#status"); // optional status area
const resetBtn = document.querySelector("#reset");    // optional reset button

// Handle square clicks
squares.forEach((square, i) => {
  square.addEventListener("click", () => {
    if (square.innerHTML !== "") return; // already filled

    square.innerHTML = turnO ? "O" : "X";
    if (checkWin()) {
      statusText.innerText = `${turnO ? "O" : "X"} wins!`;
      disableBoard();
      return;
    }

    if (isDraw()) {
      statusText.innerText = "It's a draw!";
      return;
    }

    turnO = !turnO; // switch turn
  });
});

// Check for winner
function checkWin() {
  return combinations.some(comb => {
    const [a, b, c] = comb;
    return (
      squares[a].innerHTML &&
      squares[a].innerHTML === squares[b].innerHTML &&
      squares[a].innerHTML === squares[c].innerHTML
    );
  });
}

// Check for draw
function isDraw() {
  return [...squares].every(square => square.innerHTML !== "");
}

// Disable further moves after win
function disableBoard() {
  squares.forEach(sq => sq.style.pointerEvents = "none");
}

// Reset game
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    squares.forEach(sq => {
      sq.innerHTML = "";
      sq.style.pointerEvents = "auto";
    });
    statusText.innerText = "";
    turnO = false;
  });
}
```
