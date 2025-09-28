// <!-- ### Per RC- Goal: Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible. -->

// Psudeo Code
// okie so when playing the game of tic tac toe, first: I need boxes that will sit next to each other(9 total for 3x3).
// Second I need to show two players.
// Third I need the boxes to hold and display the values of X and O in a pattern that allows there to be a winner or a draw.
// Store the game in a 2D array(source for this idea from reddit:https://www.reddit.com/r/learnjavascript/comments/xfu9iz/tictactoe_game_in_javascript/ )
// Players click on boxes they want to place their X or O in can't click on already used boxes.
// I need a place to show the winner in the UI and DOM.
// I need a button to reset the game. : This pseudo code are my own logic

// Create a class contructor function for the game
/*Create a class constructor function for the players, designnating X and O and keeping track of who goes when?

/*Create a class constructor function for the checking of wins*/

// Almost anything in JS can be an object(refer to it or manipulate it) per Cal

class Players {
  constructor(number, symbol) {
    this.number = number; // the computer is dumb so say every single thing
    this.symbol = symbol;
  } // start big and then refine and chunk smaller
  // THE BLUEPRINT JAY Z
  // telling the game we are creating players and what do they look like, like a blueprint for each player
  // the computer is dumb so say every single thing
  //when the game starts two players are created from this class
  //important casue it know to only create these two players
  //creating instances using the this keyword
}

class Board {
  constructor() {
    this.one = document.querySelector("#one");
    this.two = document.querySelector("#two");
    this.three = document.querySelector("#three");
    this.four = document.querySelector("#four");
    this.five = document.querySelector("#five");
    this.six = document.querySelector("#six");
    this.seven = document.querySelector("#seven");
    this.eight = document.querySelector("#eight");
    this.nine = document.querySelector("#nine");
    // this board class reps the 3x3 grid and each property points to  a real sq by it's id in the html
    // this class maps the gameboard in my code to the real board in the browsers
  }
}

class Game {
  constructor() {
    this.player1 = new Players(1, "X");
    this.player2 = new Players(2, "O");
    this.board = new Board();
    //new makes it easier to reset the game
    //consistant naming conventions is very key
    this.currentTurn = 1;
    //this is controlling the order of player turns
    // creating player 1 with X and player 2 with O
    // creates the board object, which is why we left it empty
    //starts with player 1 turn
    this.resetBtn = document.querySelector("#reset");
    //querySelector is me highlighting anything I'm referencing and connects my HTML to my js
    // wwe did this with the board class
    // reset btn here cause this is part of the game rules
    this.resetBtn.addEventListener("click", () => this.resetAll());
    // we are saying onclick run the function "resetAll", resetAll will clear the game
    this.board.one.addEventListener("click", (Event) =>
      this.clickGrid.call(this, Event)
    );
    this.board.two.addEventListener("click", (Event) =>
      this.clickGrid.call(this, Event)
    );
    this.board.three.addEventListener("click", (Event) =>
      this.clickGrid.call(this, Event)
    );
    this.board.four.addEventListener("click", (Event) =>
      this.clickGrid.call(this, Event)
    );
    this.board.five.addEventListener("click", (Event) =>
      this.clickGrid.call(this, Event)
    );
    this.board.six.addEventListener("click", (Event) =>
      this.clickGrid.call(this, Event)
    );
    this.board.seven.addEventListener("click", (Event) =>
      this.clickGrid.call(this, Event)
    );
    this.board.eight.addEventListener("click", (Event) =>
      this.clickGrid.call(this, Event)
    );
    this.board.nine.addEventListener("click", (Event) =>
      this.clickGrid.call(this, Event)
    );
    // addEventLister to each sq
    //when a sq is clicked it runs the clickGrid function
    //why the .call(this, Event) so the code knows which game instance it's working with
  }
  //running functions for the restAll and the clickGrid
  clickGrid(Event) {
    if (Event.target.innerText !== "")
        return;
    Event.target.classList.remove("player1","player2");

      if (this.currentTurn === 1) {
        //checking if that box is not empty with the != not
        // if the box is filled it won't let me click again and this is in the click function
        // add the classList to make it easier to style 
        Event.target.innerText = this.player1.symbol;
        Event.target.classList.add("player1");
        this.checkWin(1);
        this.currentTurn = 2;
      } else if (this.currentTurn === 2) {
        Event.target.innerText = this.player2.symbol;
        Event.target.classList.add("player2");
        this.checkWin(2);
        this.currentTurn = 1;
      }
    //do click logic three scenerio
    //when player one clicks we're targeting something and it's doing something to that sq
    //you're writing your own dictionary and then creating your essay with the logic
    // if else statement if player 1 place an X check for win and then same for play 2 and back again till winner declared or draw
  }
  checkWin(){
    const b1 = this.board.one.innerText;
    const b2 = this.board.two.innerText;
    const b3 = this.board.three.innerText;
    const b4 = this.board.four.innerText;
    const b5 = this.board.five.innerText;
    const b6 = this.board.six.innerText;
    const b7 = this.board.seven.innerText;
    const b8 = this.board.eight.innerText;
    const b9 = this.board.nine.innerText;
    //just pulled the syntax and symbol from every sq in the grid
    // there was a playerNum
    
    if (
        (b1 !== "" && b1 === b2 && b2 === b3 ) || 
        (b1 !== "" && b1 === b4 && b4 === b7 ) || 
        (b1 !== "" && b1 === b5 && b5 === b9 ) || 
        (b2 !== "" && b2 === b5 && b5 === b8 ) || 
        (b3 !== "" && b3 === b6 && b6 === b9 ) || 
        (b3 !== "" && b3 === b5 && b5 === b7 ) || 
        (b4 !== "" && b4 === b5 && b5 === b6 ) || 
        (b7 !== "" && b7 === b8 && b8 === b9 ) 
        
        //I'm checking if b1 top sq is not empty, if it satisfies this and that
        //and b1 is equal to b2
        //this is assuming this is xxx across the grid
        //if all these winning combos are satisitfied what should we do now
    ) {
        document.querySelector("#winningMsg").innerText = "Winner"
        // highlighting empty msg tag and adding Winner to the empty winning msg tag
    }

  }

    resetAll(){
        this.board.one.innerText = "";
        this.board.two.innerText = "";
        this.board.three.innerText = "";
        this.board.four.innerText = "";
        this.board.five.innerText = "";
        this.board.six.innerText = "";
        this.board.seven.innerText = "";
        this.board.eight.innerText = "";
        this.board.nine.innerText = "";
        //when I hit my reset button it runs resetAll function and clears all the boxes on the board and clears the win msg
        //resets to player 1's turn for next game

        document.querySelector("#winningMsg").innerText = "";
        this.currentTurn = 1;
    }
}

    const game = new Game()
    //the above lets the computer know to make a new game after the resetAll function runs


// This code was worked on in community remo with Cal 
//reset button
// const resetBtn = document.querySelector("#reset");
// resetBtn.addEventListener("click", reset);
// // source: https://github.com/sylviesworldcss/slot-machine/blob/answer/index.html
// // source: https://stackoverflow.com/questions/66094315/adding-a-reset-button-to-a-javascript-html-game
