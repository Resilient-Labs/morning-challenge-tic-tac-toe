// NOTES ON JAVASCRIPT CONCEPTS
// forEach = executes a specific function (callback) once for each array element. element, index, array are provided 
// e.g array.forEach((element) => {}); or array.forEach(callback) 
// map() = creates a new array populated with the results of calling a provided function on every element in the calling array 
// e.g array.map((element) => {return element * 2;}); 
// filter() = creates a new array with all elements that pass the test implemented by the provided function 
// e.g array.filter((element) => {return element > 10;}); 
// reduce() = reduce elements of array to single value (e.g sum of all elements) 
// e.g array.reduce((accumulator, currentValue) => {return accumulator + currentValue;}, initialValue); 
// an object is a collection of properties, and a property is an association between a name (or key) and a value. 
// a property's value can be a function, in which case the property is known as a method. 
// object = {key: value, function(){}} 
// this = reference object on immediate context e.g player.name = this.name 
// constructor = a special method for creating and initializing an object created within a class e.g constructor or function (name){this.name = name;} 
// new = creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function e.g new Player(); 
// method = a function which is a property of an object e.g this.cell = function(){cell.innerHTML = "";} 
// class = a blueprint for creating objects with pre-defined properties and methods e.g class Player {constructor(name){this.name = name;}} 
// static = defines a static method or property for a class. called with class name, not on instances of the class e.g static methodName(){} 
// inheritance = allows new class to inherit properties and methods from existing class ( parent -> child) for code reusability e.g class Child extends Parent {}

//  ********************* Pseudo Code ********************* 
//  -select avatars for both players, show available then selected avatar preview 
//  -start game button to hide avatar selection and show game board 
//  -players take turns clicking cells to place their moves 
//  -check for win or draw after each move 
//  -display winner or draw message 
//  -restart button to reset the game and go back to avatar selection 
//  Goal: Write with OOP version and class version
//  Ensure proper citation of any sources used below all code e.g. tutorials, code snippets, AI tools 

// ********************* Avatar Images *********************
const avatars = [ // List of all avatar images players can choose from
  'assets/img/alucard.jpg',
  'assets/img/carmilla.jpg',
  'assets/img/dracula.jpg',
  'assets/img/hector.jpg',
  'assets/img/isaac.jpg',
  'assets/img/lenore.jpg',
  'assets/img/lisa.jpg',
  'assets/img/morana.jpg',
  'assets/img/striga.jpg',
  'assets/img/sypha.jpg',
  'assets/img/trevor.jpg',
];

// ********************* DOM Elements *********************
const avatarSelection = document.querySelector(".avatarSelection");

const avatarOneList = document.getElementById("avatarOne");
const selectedAvatarOne = document.getElementById("selectedAvatarOne");
const playerOneName = document.getElementById("playerOneName");

const avatarTwoList = document.getElementById("avatarTwo");
const selectedAvatarTwo = document.getElementById("selectedAvatarTwo");
const playerTwoName = document.getElementById("playerTwoName");

const startButton = document.getElementById("startMe");

const gameBoardSection = document.getElementById("gameBoard");
const gamePlayerOneAvatar = document.getElementById("gameAvatarOne");
const gamePlayerTwoAvatar = document.getElementById("gameAvatarTwo");
const gamePlayerOneName = document.getElementById("gamePlayerOneName");
const gamePlayerTwoName = document.getElementById("gamePlayerTwoName");

const cells = document.querySelectorAll(".cell");
const playerTurn = document.getElementById("playerTurn");
const resetButton = document.getElementById("resetMe");

// ********************* Player Class *********************
class Player {
  constructor(name, moveImage) {
    this.name = name;
    this.avatar = null;
    this.moveImage = moveImage;
  }
}

// ********************* Board Class ********************* 
class Board {
  constructor() {
    this.cells = Array(9).fill("");
  }
  setCell(index, value) {
    this.cells[index] = value;
  }
  checkWin(value) {   //check if the player has won
    const combos = [  //list all possible winning combinations
        [0,1,2],[3,4,5],[6,7,8], 
        [0,3,6],[1,4,7],[2,5,8], 
        [0,4,8],[2,4,6]          
    ];

    for (let i = 0; i < combos.length; i++) { //loop through each combo
      let win = true;
      for (let w = 0; w < combos[i].length; w++) { //check if all cells in this combo have the player's value
        if (this.cells[combos[w]] !== value) {
            win = false; 
            break;
        }
      }
      if (win) {
        return true; //winning combo found
      }
    }
    return false; //no winning combo found
  }
  checkDraw() {   //check if the game is a draw
      for (let i = 0; i < this.cells.length; i++) {       //loop through all cells
          if (this.cells[i] === "") {
              return false; //found an empty cell, not a draw
          }
      }
      return true; //all cells filled, it's a draw
  }
  clear() {
    this.cells = Array(9).fill("");
  }
}

// ********************* Load Avatars ********************* Guidance from AI Tools on how to tackle this in OOP way
function loadAvatars(container, preview, showName, player) {
  container.innerHTML = ""; // clear the avatar container so we start fresh

  for (let i = 0; i < avatars.length; i++) { // loop through all avatar image paths
    const img = document.createElement("img"); // create a new <img> element
    img.src = avatars[i]; // set the image source to the current avatar

    img.addEventListener("click", () => { // run this function when an avatar is clicked
      const allImages = container.querySelectorAll("img"); // get all images in this container

      for (let w = 0; w < allImages.length; w++) { // loop through all images
        allImages[w].classList.remove("selected"); // remove the 'selected' highlight from all images
      }

      img.classList.add("selected"); // add 'selected' class to the clicked image
      preview.style.backgroundImage = `url(${avatars[i]})`; // show the clicked avatar in the preview box

      let name = avatars[i].split("/").pop().split(".")[0]; // extract the file name (without path or extension)
      name = name.charAt(0).toUpperCase() + name.slice(1); // capitalize the first letter of the name

      player.name = name; // store the selected name in the player object
      player.avatar = avatars[i]; // store the selected avatar image in the player object
      showName.textContent = name; // display the selected name on the page
    });

    container.appendChild(img); // add the image to the avatar selection container
  }
}


// ********************* Initialize Players *********************
const playerOne = new Player("Player One", "assets/img/playerone.png");
const playerTwo = new Player("Player Two", "assets/img/playertwo.png");

loadAvatars(avatarOneList, selectedAvatarOne, playerOneName, playerOne);
loadAvatars(avatarTwoList, selectedAvatarTwo, playerTwoName, playerTwo);

// ********************* Game Class ********************* Guidance from AI Tools on how to tackle this in OOP way
class Game {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentPlayer = playerOne;
    this.board = new Board();
    this.gameActive = false;

    for (let i = 0; i < cells.length; i++) {     // cell click events
      cells[i].addEventListener("click", () => this.handleMove(i)); //click cells for player moves
    }

    resetButton.addEventListener("click", () => this.restartGame()); //click button to restart game
    startButton.addEventListener("click", () => this.startGame()); //click button to start game
  }

  handleMove(index) { //assistance and guidance from AI tools to understand how to tackle this in an OOP way
    if (!this.gameActive || this.board.cells[index] !== "") { //ignore clicks if game over or square is not empty
      return;
    }
    this.board.setCell(index, this.currentPlayer.moveImage); // Update our board array to store playerMoveImg in cell

    cells[index].innerHTML = ""; //clear old content
    const img = document.createElement("img"); //create img elements for each player move
    img.src = this.currentPlayer.moveImage; // source is from playermove pngs
    img.classList.add("move"); //gives classlist move
    cells[index].appendChild(img); //add img to clicked cell so players see move

    if (this.board.checkWin(this.currentPlayer.moveImage)) { //check if player won after move
      playerTurn.textContent = `${this.currentPlayer.name} WINS!`;
      this.gameActive = false; //if they won, stop the game is return
      return;
    }

    if (this.board.checkDraw()) {
      playerTurn.textContent = "It's a draw!";
      this.gameActive = false; //if they draw, stop the game is return
      return;
    }

    this.currentPlayer = this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne;     // switch player
    playerTurn.textContent = `It's ${this.currentPlayer.name}'s turn`;     // tells whose turn
  }

  resetBoard() { //clear board
    this.board.clear();
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerHTML = "";
    }
    this.currentPlayer = this.playerOne;
    playerTurn.textContent = `It's ${this.currentPlayer.name}'s turn`;
    this.gameActive = true;
  }

  restartGame() { //clear board and show back avatar selection screen
    this.resetBoard();
    gameBoardSection.style.display = "none"; // what to show and hide
    avatarSelection.style.display = "flex";
    playerTurn.style.display = "none";
    resetButton.style.display = "none";
    startButton.style.display = "block";
  }

  startGame() { //start game only after selecting avatars
    if (!playerOne.avatar || !playerTwo.avatar) {
      alert("Both players must select avatars!");
      return;
    }

    avatarSelection.style.display = "none"; // what to show and hide
    startButton.style.display = "none";
    gameBoardSection.style.display = "flex";
    resetButton.style.display = "block";
    playerTurn.style.display = "block";

    gamePlayerOneAvatar.style.backgroundImage = `url(${playerOne.avatar})`;     // show selected avatars and names
    gamePlayerTwoAvatar.style.backgroundImage = `url(${playerTwo.avatar})`;
    gamePlayerOneName.textContent = playerOne.name;
    gamePlayerTwoName.textContent = playerTwo.name;

    this.resetBoard(); //board has been reset from previous game
  }
}

// ********************* Initialize Game *********************
const ticTacToeGame = new Game(playerOne, playerTwo);


// Citations: 
// - Referenced from Stack Overflow: https://codereview.stackexchange.com/questions/184130/tic-tac-toe-oop 
// - Referenced from Tutorial: https://www.youtube.com/watch?v=AnmwHjpEhtA - Tic Tac Toe Game Tutorial
// - Use of Google AI overview and ChatGpt Suggestions to guide with code syntax and debug. Especially with Avatar Selection logic
// - Avatar images from Castlevania series, credited to original artists and Konami