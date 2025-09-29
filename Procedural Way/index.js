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

//  ------------------- Pseudo Code ------------------- 
//  -select avatars for both players, show available then selected avatar preview 
//  -start game button to hide avatar selection and show game board 
//  -players take turns clicking cells to place their moves 
//  -check for win or draw after each move 
//  -display winner or draw message 
//  -restart button to reset the game and go back to avatar selection 
//  Goal: Write with OOP version and class version
//  Ensure proper citation of any sources used below all code e.g. tutorials, code snippets, AI tools 

// - array for player one avatar selections. used help of Google AI overview and Co-Pilot for guidance

const playerOneAvatars = [
  { name: "Alucard", src: 'assets/img/avatar/alucard.jpg' },  
  { name: "Carmilla", src: 'assets/img/avatar/carmilla.jpg' },
  { name: "Dracula", src: 'assets/img/avatar/dracula.jpg' },
  { name: "Isaac", src: 'assets/img/avatar/isaac.jpg' },
  { name: "Lenore", src: 'assets/img/avatar/lenore.jpg' },
  { name: "Lisa", src: 'assets/img/avatar/lisa.jpg' },
  { name: "Morana", src: 'assets/img/avatar/morana.jpg' },
  { name: "Striga", src: 'assets/img/avatar/striga.jpg' },
  { name: "Sypha", src: 'assets/img/avatar/sypha.jpg' },
  { name: "Trevor", src: 'assets/img/avatar/trevor.jpg' }
];

// - array for player two avatar selections, code re-usability. Looked Up on Stack Overflow
const playerTwoAvatars = playerOneAvatars.slice();

// - player selection variables
let playerOneAvatar = ""; // placeholder for chosen avatar
let playerTwoAvatar = ""; // placeholder for chosen avatar
let currentPlayer = "1"; // 1 = player one, 2 = player two
let options = ["","","","","","","","",""]; // empty array to track gameboard status
let running = false; // boolean to track if game is active. game is not running now

// - create DOM elements: grab elements from HTML id or class
const avatarSelection = document.getElementById("avatarSelection"); // entire avatar selection section
const avatarGridOne = document.getElementById("avatarGridOne");
const avatarGridTwo = document.getElementById("avatarGridTwo");
const selectedAvatarOne = document.getElementById("selectedAvatarOne");
const selectedAvatarTwo = document.getElementById("selectedAvatarTwo");
const selectedAvatarOneName = document.getElementById("selectedAvatarOneName");
const selectedAvatarTwoName = document.getElementById("selectedAvatarTwoName");

const startButton = document.getElementById("startButton");
const playerOneDisplay = document.getElementById("playerOneDisplay");
const playerTwoDisplay = document.getElementById("playerOneDisplay");
const playerOneGameAvatar = document.getElementById("playerOneGameAvatar");
const playerTwoGameAvatar = document.getElementById("playerTwoGameAvatar");
const playerOneName = document.getElementById("playerOneName");
const playerTwoName = document.getElementById("playerTwoName");

const gameContainer = document.getElementById("gameContainer");
const gameBoard = document.getElementById("gameBoard");
const cells = document.querySelectorAll(".cell");
const playerMove = document.getElementById("playerMove");
const resetButton = document.getElementById("resetButton");

// - initially hide selected avatars and gameboard until start
playerOneDisplay.style.display = "none";
playerTwoDisplay.style.display = "none";
gameContainer.classList.add("gameboardHidden");

// - create avatar images and sets up click behaviour. used help of Google AI overview and Co-Pilot for guidance
function createAvatarOptions(grid, avatars, player){
  avatars.forEach(avatar => { //loop through each avatar object
    const img = document.createElement("img"); // create img
    img.src = avatar.src;  //set img src
    img.alt = avatar.name; //alt name if img doesnt load
    img.dataset.name = avatar.name; // store avatar name to data
    
    img.addEventListener("click", () => {
      selectAvatar(player, avatar); // select avatar when clicked
      grid.querySelectorAll("img").forEach(i => i.classList.remove("selected")); // remove previous selection red border
      img.classList.add("selected"); // add red border for selected
    });
    grid.appendChild(img); // add avatar image to grid
  });
}

function selectAvatar(player, avatar){
  if(player === 1){
    playerOneAvatar = "assets/img/player-move/playerone.png";
    selectedAvatarOne.style.backgroundImage = `url('${avatar.src}')`;
    selectedAvatarOneName.textContent = `You have selected: ${avatar.name}`;
  } else {
    playerTwoAvatar = "assets/img/player-move/playertwo.png";
    selectedAvatarTwo.style.backgroundImage = `url('${avatar.src}')`;
    selectedAvatarTwoName.textContent = `You have selected: ${avatar.name}`;
  }
}

// - create avatar options for both players
createAvatarOptions(avatarGridOne, playerOneAvatars, 1);
createAvatarOptions(avatarGridTwo, playerTwoAvatars, 2);

// - once the start button is clicked, move onto gameboard screen
startButton.addEventListener("click", () => {
  if(!playerOneAvatar || !playerTwoAvatar){ // check if both players selected avatars
    alert("Please select avatars for both players!");
    return; //stop if selection is not done
  }

  // Hide avatar selection screen
  playerOneDisplay.style.display ="flex"; // show player info section
  playerTwoDisplay.style.display = "flex"; // show player info section
  avatarSelection.style.display = "none"; // hide avatar selection
  startButton.style.display = "none";     // hide start button
  gameContainer.classList.remove("gameboardHidden"); // show gameboard

  // Show gameboard and player info
  selectedAvatarOne.style.display = "block"; // show player one avatar
  selectedAvatarTwo.style.display = "block"; // show player two avatar
  gameBoard.style.display = "grid"; // show 3x3 grid
  resetButton.style.display = "block"; //show reset button
  playerMove.textContent = "Player One's turn"; //show Player turn, 1 as default  

  // display the selected avatars in game board
  playerOneGameAvatar.style.backgroundImage = selectedAvatarOne.style.backgroundImage; 
  playerOneName.textContent = selectedAvatarOneName.textContent.replace("You have selected: ", "");

  playerTwoGameAvatar.style.backgroundImage = selectedAvatarTwo.style.backgroundImage; 
  playerTwoName.textContent = selectedAvatarTwoName.textContent.replace("You have selected: ", "");

  running = true; //game is running now
});

// - start game
startGame();

function startGame(){
  for(let i = 0; i < cells.length; i++){ //loop through all 3x3 cells
    cells[i].addEventListener("click", cellClicked); //add clickable event to each cell
  }

  resetButton.addEventListener("click", restartGame);//add clickable event to reset button
}

// - clickable event for each cell clicked
function cellClicked(){
  let index = cellsToIndex(this); //get index of each cell clicked
  if(options[index] !== "" || !running) return; //ignore if cell filled/game inactive

  updateCell(this, index); //place each player move
  if(checkWinner()){ //check if player won
    playerMove.textContent = "Player " + currentPlayer + " wins!"; //tell player has won
    running = false; //stop game
  } else if(boardFull()){ //if board is full ends as draw
    playerMove.textContent = "Draw!"; //tell players its a draw
    running = false; //stop game
  } else {
    changePlayer(); //keep on switching turns
  }
}

// - maps cell element to index to apply to updateCell status
function cellsToIndex(cell){
  for(let i = 0; i < cells.length; i++){
    if(cells[i] === cell) return i;
  }
  return -1;
}

// - update cell with fixed player-move image. used help of Google AI overview and Co-Pilot for guidance
function updateCell(cell, index){
  let img = document.createElement("img"); //create a new <img> element
  // - use fixed move images for each player
  img.src = currentPlayer === "1" 
            ? "assets/img/player-move/playerone.png"  //player 1 move image
            : "assets/img/player-move/playertwo.png"; //player 2 move image
  img.classList.add("move"); //add 'move' class for styling
  cell.appendChild(img); //add the image inside the clicked cell
  options[index] = currentPlayer; // mark the cell as occupied by current player
}

// - switch player
function changePlayer(){
  currentPlayer = currentPlayer === "1" ? "2" : "1"; //toggle between player 1 and 2
  playerMove.textContent = "Player " + currentPlayer + "'s turn";//show whose turn it is
}

// - restart game
function restartGame(){
  options = ["","","","","","","","",""]; //reset game status, clears board
  for(let i = 0; i < cells.length; i++){
    cells[i].innerHTML = ""; //clear cell contents
  }
  currentPlayer = "1"; //always start with player 1
  playerMove.textContent = "Player " + currentPlayer + "'s turn"; //show player turn
  running = true; //game is running now

  avatarSelection.style.display = "none";
  startButton.style.display = "none";
  resetButton.style.display = "flex";

  avatarGridOne.querySelectorAll("img").forEach(i => i.classList.remove("selected"));
  avatarGridTwo.querySelectorAll("img").forEach(i => i.classList.remove("selected"));
}

// - check winner
function checkWinner(){ //all possible winning combos on 3x3 grid
  const winConditions = [ //sub-arrays with indices of cells for winning line
    [0,1,2], //top row
    [3,4,5], //middle row
    [6,7,8], //bottom row
    [0,3,6], //left column
    [1,4,7], //middle column
    [2,5,8], //right column
    [0,4,8], //diagonal from top-left to bottom-right
    [2,4,6]  //diagonal from top-right to bottom-left
  ];

  for(let i = 0; i < winConditions.length; i++){ //loop through each combo
    let a = winConditions[i][0]; //gives three cell indices for current winning combo
    let b = winConditions[i][1];
    let c = winConditions[i][2];
// - check if all three cells are occupied by the same player
// - options[a] !== "" ensures the cells are not empty
// - options[a] === options[b] && options[a] === options[c] ensures all three have the same player    
    if(options[a] !== "" && options[a] === options[b] && options[a] === options[c]){
      return true; //winner
    }
  }
  return false; //no winner
}

// - check if board is full
function boardFull(){
  for(let i = 0; i < options.length; i++){ //loops through each option value as index+1 to see if is empty
    if(options[i] === "") return false;
  }
  return true; // all filled
}

// Citations: 
// - Referenced from Stack Overflow: https://codereview.stackexchange.com/questions/184130/tic-tac-toe-oop 
// - Referenced from Tutorial: https://www.youtube.com/watch?v=AnmwHjpEhtA - Tic Tac Toe Game Tutorial
// - Use of Google AI overview and Co-Pilot Suggestions to assist with code syntax and debug
// - Avatar images from Castlevania series, credited to original artists and Konami