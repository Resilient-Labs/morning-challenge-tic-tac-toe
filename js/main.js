/******************************** (START) CODING NOTES **************************/
// when do i use this? to refer to a property of an object YOU CAN ONLY USE IT INSIDE AN OBJECT
//what does it mean to **call** a method or a function?
// CALLING METHOD: Object.methodName()
// CALLING FUNCTION: functionName()
// The difference between a parameter and an arguement: parameter is a placeholder that  is located within the paranthesis and an arguement is when you pass your value into your method or function
//if my method takes in 3 parameters, how many arguements does it take?: three
//can i put my parameters placeholder as my arguement?: NO
//Why does this.board[null] not work?: because you need to put in a index and null isnt index

/******************************** (END) CODING NOTES **************************/

/*------------------------------------------------------------------------------------*/

/******************************** (START) TESTING PLAYER OBJECT **************************/
// let player_1 = new Player(
//   "x",
//   "Hold on to your diapies, babies, I'm the new REPTAR",
//   "https://i.gifer.com/embedded/download/1t0.gif"
// )

//THIS BOTH MEAN THE SAME THING THE FIRST ONE ACCESSES THE POERTEY DIRECLTY THE SECOND ONE USES A GETTER
// player_1.symbol
// player_1.designatedSymbol()  //getter

// console.log(player_1.sayTaunt())
// console.log(player_1.designatedSymbol());
// console.log(player_1.displayVisualTaunt());
// let player_2 = new Player(
//   "o",
//   "Hold on to your diapies, babies, REPTAR is mine",
//   "tic-tac-toe/img/chuckie-win.gif"
// )

// console.log(player_2.sayTaunt());
// console.log(player_2.designatedSymbol());
// console.log(player_1.displayVisualTaunt());
/******************************** (END)TESTING PLAYER OBJECT **************************/

/*------------------------------------------------------------------------------------*/

/******************************** (START)TESTING MAP OBJECT **************************/
// let mapObject = new Map();
//     console.log('at index 5 put an o')
//     mapObject.updateCells("5", "o");
//     console.log("at index 2 put an x");
//     mapObject.updateCells("2", "x");
// ******testing for all ways to win w/ X****///

// let mapObject = new Map()
// mapObject.updateCells("0","x")//trying to test to make sure our update cells work
// mapObject.updateCells("7", "o")// continue testing to see if logic is right figuring it out
// mapObject.clearCells();
// mapObject.updateCells("5", "o")
// mapObject.updateCells("2", "x");
// mapObject.updateCells("4", "x");
// mapObject.updateCells("3", "o");
// mapObject.updateCells("8", "o");
// mapObject.updateCells("6", "x");
// console.log(mapObject.checkToseeWinner("x"));

/******************************** (END)TESTING MAP OBJECT **************************/

/*------------------------------------------------------------------------------------
 *
 *
 * --------------------------------------------------------------------------------- */
class Player {
  constructor(symbol, taunt, visualTaunt) {
    this.symbol = symbol;
    this.taunt = taunt;
    this.visualTaunt = visualTaunt;
  }
  //GETTER METHODS
  designatedSymbol() {
    return this.symbol;
  }

  sayTaunt() {
    return this.taunt;
  }

  displayVisualTaunt() {
    return this.visualTaunt;
  }
}

/*------------------------------------------------------------------------------------
 *  This is an object that is used to manage the tic tac toe board.
 *
 * --------------------------------------------------------------------------------- */
class Map {
  constructor() {
    this.board = [null, null, null, null, null, null, null, null, null];
  }

  /* This method to be able to update the cell at the currrent index where current player places there symbol which could be X or O 
   * if  there already is a symbol there then it does nothing.
   * @param index string:  is the id of the html element that the user is trying to update for example: "1"
   *  corresponding to cell 2 or "0" corresponding to cell 1
   * @param  symbol string: the symbol of the current user (each player has either an X or an O)
   * @return true or false  Boolean 
   * */
  updateCells(target, symbol) {
    /* you are able to pass a string integer as an index to an array*/
    if (this.board[target.id] === null) {
      this.board[target.id] = symbol;
      target.innerText = symbol;
      return true;
      //To Do: add code to HTML for symbol to update
    }
    return false;
    /* checking to see if array element of index is updated w/ symbol*/
    console.log(this.board);
  }

  /* This method is used to reset the board and it clears the board tic tac toe
   * with all the users symbols of x's and o's and sets each cell index to null to start with no symbols
   * */
  clearCells() {
    let cellItems =  document.querySelectorAll('div.cell-item')
    cellItems.forEach((cellItem) => {
      cellItem.innerText = ""
    });
    console.log()
    /* check if board was cleared*/
    console.log(this.board);
  }



  /* This method is to check if the current player has won by checking all the possible ways of winning the game for
   * tic tac toe three in a row.
   * @param symbol string the symbol of the current user (each player has either an X or an O)
   * @return boolean (true or false) true being that you won or false being that you lost
   * */
  checkToSeeWinner(symbol) {
    if (
      this.board[0] === symbol &&
      this.board[1] === symbol &&
      this.board[2] === symbol
    ) {
      return true;
    } else if (
      this.board[3] === symbol &&
      this.board[4] === symbol &&
      this.board[5] === symbol
    ) {
      return true;
    } else if (
      this.board[6] === symbol &&
      this.board[7] === symbol &&
      this.board[8] === symbol
    ) {
      return true;
    } else if (
      this.board[0] === symbol &&
      this.board[3] === symbol &&
      this.board[6] === symbol
    ) {
      return true;
    } else if (
      this.board[1] === symbol &&
      this.board[4] === symbol &&
      this.board[7] === symbol
    ) {
      return true;
    } else if (
      this.board[2] === symbol &&
      this.board[5] === symbol &&
      this.board[8] === symbol
    ) {
      return true;
    } else if (
      this.board[0] === symbol &&
      this.board[4] === symbol &&
      this.board[8] === symbol
    ) {
      return true;
    } else if (
      this.board[2] === symbol &&
      this.board[4] === symbol &&
      this.board[6] === symbol
    ) {
      return true;
    }
    return false;
  }
  // check first row three in a row
}

/*------------------------------------------------------------------------------------
 *  This is an object that is used to manage the tic tac toe board.
 *
 * --------------------------------------------------------------------------------- */
class Game {
  constructor() {
    //clear x's and os if there was a previoud game played

    // you need to create 2 game players
    //Designate x and o to a player
    this.player_1 = new Player(
      "🦖",
      "Hold on to your diapies, babies, I'm the new REPTAR",
      "https://i.gifer.com/embedded/download/1t0.gif"
    );

    this.player_2 = new Player(
      "🍼",
      "Hold on to your diapies, babies, REPTAR is mine",
      "tic-tac-toe/img/chuckie-win.gif"
    );
    //Designate which player starts and whos turn it is
    this.turn = this.player_1.designatedSymbol();
    // you need to create a map instance
    this.board = new Map();
    this.board.clearCells()


    //create a property with the starting # of turns
    this.totalTurns = 9;
    console.log(
      "*************************************************************"
    );
    console.log(this.totalTurns);
    console.log(this.turn);
    console.log(this.player_1);
    console.log(this.player_2);
    console.log(this.board);
    console.log(
      "*************************************************************"
    );
    this.gameActive = true;
  }

  /* This method will allow current player to make their move to place their symbol
   * then update whos turn it is to let the next player go by updating the 'turn' (property)
   * @param id string the id refers back to the element in dom of cell example is "1" or "2" or "0" etc.. (index for cells)
   * */
  takeTurn(target) {
    //check to see if game is active
    // if its not then it shouldnt be able to add anything
    if(!this.gameActive){
      return;
    }


    /** passing these twp parameters bc need id to identify where i will update and based on whos turn it is, ill know what symbol they use*/
    let result = this.board.updateCells(target, this.turn);
    // create a tenrary operator and create oconditon you are checking to see if first opotion is true , if not true then defualt to to false option which is player 1 in this case
   
    if(result){
      this.totalTurns --
      console.log("totalTurns: " + this.totalTurns)
// if this players turn went successfully we want to confirm its there turn if they didnt win 
// notify that they won and prevent the loser from clicking anything else
      if (this.board.checkToSeeWinner(this.turn)) {
        document.querySelector('h3').innerText = "hey player with" + this.turn + " you won"    
        this.gameActive = false;
        
      }
      else if(!this.totalTurns){
        document.querySelector("h3").innerText =
          "hey kiddos it's a tie";  
          this.gameActive = false;
      }
      

      this.turn =
        this.player_1.designatedSymbol() === this.turn
          ? this.player_2.designatedSymbol()
          : this.player_1.designatedSymbol();
    }
  }
}

// console.log(player_2.designatedSymbol());

//querySelector returns an object object.methodNmae
document.querySelector("#play-game").addEventListener("click", startGame);
//trying to loop thru to add an eventlistner to be able to add x's and o's

//added a variable to store my array of elements
const cellItems = document.querySelectorAll("div.cell-item");

console.log(cellItems);

//global variable to reference where I want is so i can refeernce it in multiple functions bc if i did it inside it other functions it would be a local scope not being able to acess

let gameObject;

//added event listers to all cells
cellItems.forEach((cellItem) => {
  cellItem.addEventListener("click", clickableCell);
});

//pass event as parameter to give me the event that happens
function clickableCell(event) {
  gameObject.takeTurn(event.target);
  console.log("cellItems");
  console.log(event.target.id);
}

// let allXandOs =

function startGame() {
  
  // CREATE AN INSTANCE OF THE GAME OBEJCT
  gameObject = new Game();
}
