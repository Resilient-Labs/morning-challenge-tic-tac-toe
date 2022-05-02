// Tic tac toe consists of two players 

// 9 boxes in total 
// html + css , Arry.from class of boxes

// player markers: x's & o's 
// html + css 

// each player is assigned a specific marker 
// html + css 

// 3 in a row to win 
// conditional - if statements

// wins could include diagonally, horizontally or vertically 
// arrays - marking all possible combinations 


// mark the winning pattern 
// assign a new class that will designate the win 

// player could only specifically use their assigned marker 
// % - modulus to counteract the turns

// alternate turns and allow one chance per player 
// % - modulus to counteract the turns

// only empty boxes can allow a marker to be placed 
// event listener / conditional statements 

// alert for wins and loss 
// function and target the message to appear in an inner text 

// refreshing to a clean grid when someone has won 
// event listener to clear the grid - empty the string when user clicks refresh 

// if time allows we can allow user to play against computer 
let playerTurn = document.getElementById('whichPlayer')
let turn = 'playerX'
let whoWon = document.querySelector('.whoWon')

//targeting click to create x's and o's in each box
// creating an array of html elements with the class box
const boxes = document.querySelectorAll('.box')
//looping through these html elements and adding one event listener to one box that is clicked 
boxes.forEach(box =>{
  box.addEventListener('click', placeValue)
  
})
// e= click and taget = box
function placeValue(e){
  // this if statememt is saying. listen fo the click
  //and inner text if the text is an x return it. or make it visable
  if(e.target.innerText === 'X'){
    
    return 'X'
  }else if (e.target.innerText === 'O') {
    return 'O'
}// player x will always be the value of turn when the game is started
//this statement is going to place an x inside of the target
// then its gonna display the next persons turn 
//and its changing the value of turn
  if(turn === 'playerX'){
    e.target.innerText = 'X'
    playerTurn.innerText='O'
    turn = 'playerO'
    
    // the opposite is done on at this point.
  } else if (turn==='playerO'){
    playerTurn.innerText='X'
    e.target.innerText = 'O'
    turn='playerX'

}
// we are grabbing all of the individual
//but now with the innertext so we can start 
//checking for a win.
// we arlready set the varible for boxes. as an array
//so now we can go target the arrays indexes.
let board=[
[boxes[0].innerText,boxes[1].innerText,boxes[2].innerText],
[boxes[3].innerText,boxes[4].innerText,boxes[5].innerText],
[boxes[6].innerText,boxes[7].innerText,boxes[8].innerText],
]
let winner = checkForWin(board)
whoWon.innerText ='Player' + " " + winner + ' won'
}
function checkForWin(board){
  // we are looping through the board to check  vertically and diagonally to check the 3 arrays inside of the board arrays.
for (let i =0; i<3; i++){
  if (board[0][i]==='O' && board[1][i]==='O' && board[2][i]==='O'){
    lightGame()
    return 'O'
  }
  else if (board[0][i]==='X' && board[1][i]==='X' && board[2][i]==='X'){
    lightGame()
    return 'X'
  }
  if (board[i][0]==='O' && board[i][1]==='O' && board[i][2]==='O'){
    lightGame()
    return 'O'
  }
  if (board[0][i]==='X' && board[1][i]==='X' && board[2][i]==='X'){
    lightGame()
    return 'X'
  }
} // these if statments are all checking for horizontal wins.
  if (board[0][0]==='O'&&board[1][1]==='O'&&board[2][2]==='O'){
    lightGame()
    return 'O'
  }
  if (board[2][0]==='O'&&board[1][1]==='O'&&board[0][2]==='O'){
    lightGame()
    return 'O'
  }
  if (board[0][0]==='X'&&board[1][1]==='X'&&board[2][2]==='X'){
    lightGame()
    return 'X'
  }
  if (board[2][0]==='X'&&board[1][1]==='X'&&board[0][2]==='X'){
    lightGame()
    return 'X'
  }
}
// this targets the css of every sngle box and lights up after the game is won.
function lightGame(){
  boxes.forEach((box)=>{
    box.style.background= '#02172c'
    
   
  
  })
  
}

document.querySelector('#clear').addEventListener('click', newGame)

function newGame(){
 boxes.forEach((box)=>{
   box.innerText=''
   playerTurn.innerText='X'
   box.style.background='transparent'
  whoWon.innerText = " "
 })
}
