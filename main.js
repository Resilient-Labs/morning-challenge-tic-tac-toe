/*
Board

Player
  player 1  
  player 2

Symbol
  X
  O

winning condition

*/
//this var corresponds to conditional on line 39, why is it in global scope? b/c it can then be used/ referenced outside from any function instead of it's existence being confined within the scope of just 1 function
let clicks = 1

class HTMLGameBoard { 
  constructor() {
    this.active = true
  //make an array from the board to represent each cell placement on the grid 
    this.grid = [[0,1,2],[3,4,5],[6,7,8]];// coordinates correspond with grid layout 
    //this refers to the object being instantiated (throughout the program- polymorphism) and .grid is a method we are creating 
    this.gridDraw();
  }
  

  gridDraw(x, y, symbol) {
    // function with the ability - change inner text of that element- on click of the interface
    Array.from(document.querySelectorAll('.col')).forEach(cell => {
      //cell is a param of the anon arrow function, representing each div with a 'col class 
      cell.addEventListener('click',(e) => {
        //(e) event object ( with built in properties) is the param passed to this function 
        if (this.active){
      /*event.target provides us access to the <li> element that was clicked. 
      data attribute through the dataset object, get the property by the part of the attribute name after data-*/
          console.log(e.target.dataset.cell)
          // this conditonal increments the # of clicks and makes all the even # of clicks X and odd #'s O's & checks for the winning condition ( by running the winning condition function) after every players draws 
          if(clicks % 2 === 0){
            e.target.innerText = "X"
            this.winningCondition()
            clicks += 1
          } else {
            e.target.innerText = "O"
            this.winningCondition()
            clicks += 1
          }
        }
        },{once:true})
    })
  }
  
  winningCondition(){
    const winningCombinations = [
      //note: potentially different strategy to compare the winning combinations array to the array corresponding the boards cells/ grid layout, see Kelly's example  
      //rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      //columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      //diagonal
      [0, 4, 8],
      [2, 4, 6]
    ]
    // //set variable to em'pty array for another function to 'push' into them
    // const oArray = []
    // console.log(oArray)
    // const xArray = []
    // console.log(xArray)

    // targe the inner text of each cell to check for winning condition, if characters match 3 in a row 
    const box0 = document.querySelector('[data-cell="0"]').innerText
    // console.log('box0 value',box0)
    const box1 = document.querySelector('[data-cell="1"]').innerText
    const box2 = document.querySelector('[data-cell="2"]').innerText
    const box3 = document.querySelector('[data-cell="3"]').innerText
    const box4 = document.querySelector('[data-cell="4"]').innerText
    const box5 = document.querySelector('[data-cell="5"]').innerText
    const box6 = document.querySelector('[data-cell="6"]').innerText
    const box7 = document.querySelector('[data-cell="7"]').innerText
    const box8 = document.querySelector('[data-cell="8"]').innerText

    // does this 'local' variable declared before, it is called/reference ? 
    let winningSymbol;

    // 8 possible winning conditions 

    if (box0 === box1 && box1 === box2){
      winningSymbol = box0
      // console.log('This player has won :', box0)
    }else if (box3 === box4 && box4 === box5){
      winningSymbol = box3
    } else if(box6 === box7 && box7 === box8){
      winningSymbol = box6
    } else if (box0 === box3 && box3 === box6){
      winningSymbol = box0
    } else if(box1 === box4 && box4 === box7){
      winningSymbol = box1
    } else if (box2=== box5 && box5 ===box8){
      winningSymbol = box2
    } else if (box0=== box4 && box4 ===box8){
      winningSymbol = box0
    } else if (box2 === box4 && box4 ===box6){
      winningSymbol = box2
    }
    //assign winning symbol to the corresponding click ( (even or odd) / player 1 or player 2) if the winning condition is met 

    //if either winning condition is met, stop the game by making  objects 'active' property = false 
    if(winningSymbol=== 'O'){
      this.active= false
      document.querySelector('.outcome').innerText= "Player 1 Wins!" 
    } else if(winningSymbol==='X'){
      this.active= false
      document.querySelector('.outcome').innerText= "Player 2 Wins!" 
      //accounting for a tie, only AFTER all the cells have been filled AND there is not "winning Symbol" value 
    }else if (clicks>=9 && (winningSymbol !== 'X'||winningSymbol !== 'O')){
      document.querySelector('.outcome').innerText= "It's a tie!"
    }
    
  } //function to clear the board and restart the game 
    //note: not able to play again after restart!!!!  how do I make it "active" again ?! 
    resetGame(){
      document.querySelectorAll('.col').forEach(cell => cell.innerHTML='')
      this.active= true
      //instantiating a new game to 'restart'
      htmlBoard = new HTMLGameBoard();

      //  box0 = document.querySelector('[data-cell="0"]').innerText= ''
      //  box1 = document.querySelector('[data-cell="0"]').innerText= ''
      //  box2 = document.querySelector('[data-cell="0"]').innerText= ''
      //  box3 = document.querySelector('[data-cell="0"]').innerText= ''
      //  box4 = document.querySelector('[data-cell="0"]').innerText= ''
      //  box5 = document.querySelector('[data-cell="0"]').innerText= ''
      //  box6 = document.querySelector('[data-cell="0"]').innerText= ''
      //  box7 = document.querySelector('[data-cell="0"]').innerText= ''
      //  box8 = document.querySelector('[data-cell="0"]').innerText= ''
    
    }
  
}

//creating a new HTMLGameBoard 'global' object, with the 'new' key word 
let htmlBoard = new HTMLGameBoard();

//create a new 'state of the game' by removing event listeners and calling the function that draws again 
// & embedding that in the reset method 

//why does the event listener for reset button have to be outside the scope of the class object/ reset method ? 
document.querySelector('.reset').addEventListener('click', htmlBoard.resetGame)



//-----------------------------------------------------------------------
//how to add a conditional to account for ties? 
/*function emptyCells ) { 
  return document.querySelectorAll('.col').filter(cell => typeof cell == ’string’)
  
  
  function checkTie( ){
    if(emptyCells().length == 0)
  
   // EVERY SQUARE FILLED UP *NO WINNER*

    // Array.from(document.querySelectorAll('.col')).forEach(box =>{
    //   console.log(Number(box.dataset.cell))// corresponds with # 0-8 (cell coordinates)
    //   console.log(box.innerText)//returns X or O 
    //   if(box.innerText === 'O'){
    //     oArray.push(Number(box.dataset.cell))
    //   } else {
    //     xArray.push(Number(box.dataset.cell))
    //   }
      // for(let i = 0; i < oArray.length; i++){
      //   if(winningCombinations[0][0]===[0][1] && [0][1] ===[0][2]){
      //     //
      //     document.querySelector('.outcome').innerText="Player X"
      //   }
      // }
      // if(this.equals()){
      //   console.log('Player 1 Wins!')
      // }else{
      //   console.log('Player 2 Wins!')
      // }
    //  })
    // console.log(this.grid)
    // console.log('oArray: ',oArray) 
    // console.log('xArray: ',xArray) 

    //3 x 3 grid of boxes = 8 possible winning combinations - rows - columns and diagonals-
    //use [ arrays of #'s] to represent possible winning combinations, each box/cell space corresponding with an (index) # b/w - 0-8
  

  // equals(a, b){
  //   //checking if 2 arrays (array of characters inside the cells, and array of #'s of the grid? ) equal each other
  //   return a.length === b.length && a.every((v, i) => v === b[i]);
  // }




//-------------------------------------------
//  class Player { 
  //  constructor(name, board, symbol) {
    //  this.name = name
    //  this.board = board
    //  this.symbol = symbol
  //  
//  }
//  class Symbol { 
  //  constructor(symbolChar) {
    //  this.symbolChar = symbolChar;
  //  }
//  }
// 
  // 
//  const SymbolX = 'X'
//  const SymbolO = 'O'
// 
// ------------------
// //board instantiated
//  htmlBoard.winningCondition()


 //players initialized("instantiate")
//  const playerOne = new Player(htmlBoard, "Player 1", new Symbol(SymbolO));
//  const playerTwo = new Player(htmlBoard, "Player 2", new Symbol(SymbolX))
//  // Pseudogame / test game
//  playerOne.draw(1,1); // Middle "coordinates"
//  playerTwo.draw(0,0); // Top-left "coordinates
//  playerTwo.alertInfo(); // Player 1:O 





//-------------
// alertInfo() {
  //   alert(this.name + ": " + this.symbol)
  // }
  
  // draw(x, y){
  //   // this.board.gridDraw(x, y, this.symbol)
  //   const result = document.querySelectorAll(".col")
  //   //convert nodeList to an Array to loop through
  //   const resultArr = Array.from(result)
    
  //   for (let i = 0; i < resultArr.length; i++) {
  //     // resultArr[i].addEventListener("click", drawX)
  //   }
  //   // How to read the index notation:
  //   // * pedantic: "Get the element at index `i` of `resultArr`
  //   // * cheeky: "Get the `i`-th element of resultArr" : Why `i`-th? Because 
  //   //   if i was a number, it would be 4 or 5 or 6, and we'd call that the 4th, or 5th, or 6th. Since it's a variable, it's just the i-th or the `index`th
  // }
  
  // drawX(clickEvent){
  // //  debugger;
  //  if (clickEvent.target.innerText === ''){
  //    clickEvent.target.innerText="X"
  //  }else{
  //    return;
  //  }
 
  //  for (let i = 0; i < resultArr.length; i++) {
  //    resultArr[i].addEventListener("click", drawO);
  //  }
  // }
 // drawO(clickEvent){
 //   // debugger;
 //   if (clickEvent.target.innerText === ''){
 //     clickEvent.target.innerText="O"
 //   }else{
 //     return;
 //   }
 // */
