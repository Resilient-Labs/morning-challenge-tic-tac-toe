/* Step 1: creating an object called game that contains properties of the game and
methods to run when users play the game*/
const game = {
  //Step 2: giving player one and player two a property to specify the symbol associated with it (game pieces)
  playerOne: "x",
  playerTwo: "o",
  //Step 3:taking each div from the document and turning them into an array (assigning them numbers) to target that specific part, easier to compare when determining the winner of the game.
  array: Array.from(document.querySelectorAll("div")),
  // starting the turn count at zero, will be reassigned on each click
  turn: 0,
  //Create an array listing all of the possible winning combinations based on the index numbers of the divs in your HTML
  winningArray: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
  //Step 5: the function we want to run every time someone clicks a div
  runGame(event) {
    // filling in an X or O when the div is clicked
    // if the div is already occupied by an X or O (or anything really), function will end
    if (event.target.innerText !== "") {
      return;
    }
    game.turnTracker();
    // if the number of turns is odd, it will add an X to the div
    if (game.turn % 2 !== 0) {
      event.target.innerText = game.playerOne;
      console.log("Player X made a move!");
    } else {
      // if the number of turns is even, it will add an O to the div
      event.target.innerText = game.playerTwo;
      console.log("Player O made a move!");
    }
    //check if anyone has won
    game.isWin();
    //check if there's a tie
    game.isTie();
  },
  // increments the turn every time it is called
  turnTracker() {
    this.turn++;
  },
  //HOW DO WE KNOW WE WIN??? VICTORY ROYALE
  isWin() {
    for (let i = 0; i < this.winningArray.length; i++) {
      if (
        this.array[this.winningArray[i][0]].innerText !== "" &&
        this.array[this.winningArray[i][0]].innerText ===
          this.array[this.winningArray[i][1]].innerText &&
        this.array[this.winningArray[i][0]].innerText ===
          this.array[this.winningArray[i][2]].innerText
      ) {
        game.stopGame();
        if (this.turn % 2 !== 0) {
          document.querySelector(".winner").innerText = "player X wins!";
        } else {
          document.querySelector(".winner").innerText = "player O wins!";
        }
      } 
    }
  },
  isTie(){
    if (this.turn === 9 && document.querySelector('.winner').innerText === ''){
      document.querySelector('.winner').innerText = 'issa tie'
      game.stopGame()
    }
  },
  stopGame() {
    const block = document.querySelector("section");
    block.removeEventListener("click", game.runGame);
  },
  resetGame() {
    document.querySelector("section").addEventListener("click", game.runGame);
    game.turn = 0;
    for (let i = 0; i < game.array.length; i++) {
      game.array[i].innerText = "";
    }
    document.querySelector(".winner").innerText = " ";
  },
};

//Step 4: putting an event listener on the entire section containing all of the divs
//when the user clicks, this runs a function in object "game"
document.querySelector("section").addEventListener("click", game.runGame);
document.querySelector(".reset").addEventListener("click", game.resetGame);
console.log(game.array);


