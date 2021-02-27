// got help by a mentor and our group //

// decalre variables
// winning conmbinations
// check where the player is on the board and move
// conditions for x and o are same or not the same
//  when its a tie
//  when x or o win
// to reset the boardgame

var cell = document.getElementsByClassName("gameSquare"),
  reset = document.getElementById("reset"),
  message = document.getElementById("message"),
  stepCount = 0,
  winCombinations = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [4, 5, 6],
    [7, 8, 9]
  ],
  dataX = [],
  dataO = [];

class Player {
  constructor(name) {
    this.name = name;
  }
}

class Game {
  constructor() {
    this.playerX = new Player("X");
    this.playerO = new Player("O");
    this.currentPlayer = this.playerX.name;

    console.log(this.currentPlayer);
  }

  addX() {
    for (var i = 0; i < cell.length; i++) {
      cell[i].addEventListener("click", currentStep);
    }

    var z = this.currentPlayer;

    function currentStep() {
      var num = +this.getAttribute("dataCell");
      //  if the condition is not the case than innerText will be set to z //
      if (!this.textContent) {
        this.innerText = z;

        //Ternary operation  ( basically else if statement ) //
        // Notes for self ...(condition) ? {code for YES} : {code for NO} //Ternary operation //
        z === "X"
          ? dataX.push(num) && this.classList.add("x")
          : dataO.push(num) && this.classList.add("o");
        if (
          //if the  length of the array is greater than 2 and executes the check Winfunction //
          (dataO.length > 2 || dataX.length > 2) &&
          (checkWin(dataO, num) || checkWin(dataX, num))
        ) {
          // the loop runs to remove the Click eventlistener and returns the winner //
          for (var i = 0; i < cell.length; i++) {
            cell[i].removeEventListener("click", currentStep);
          }
          return (message.innerText = "The winner is " + z);
        }
        // this is for once all the boxes are filled with X and o //
        changePlayer();
        stepCount++;
        stepCount == 9
          ? (message.innerText = "Tie")
          : (message.innerText = "The player is " + z);
      }
    }

    function changePlayer() {
      z === "X" ? (z = "O") : (z = "X");
    }
   

    function checkWin(arr, number) {
      // for (var w = 0, winLen = winCombinations.length;w < winLen ; w++) //
      var w;
      for (w = 0; w < winCombinations.length; w += 1) {
        var winArr = winCombinations[w],
          count = 0;
        if (winArr.indexOf(number) !== -1) {
          for (var a = 0, aLen = winArr.length; a < aLen; a++) {
            if (arr.indexOf(winArr[a]) !== -1) {
              count++;
              if (count === 3) {
                return true;
              }
            }
          }
          count = 0;
        }
      }
    }
  }
  reset() {
    reset.addEventListener("click", function () {
      for (var i = 0; i < cell.length; i++) {
        cell[i].innerText = "";
      }
      // clears the board//
      dataO = [];
      dataX = [];
      this.currentPlayer = "X";
      stepCount = 0;
      message.innerText = "The player is  " + this.currentPlayer;
      for (var i = 0; i < cell.length; i++) {
        cell[i].classList.remove("x", "o") // to remove the X & O from the square space //
      }
    });
  }
}

const game = new Game();
game.addX();
game.reset();
