
// Get all elements with the class "cell"
const cells = document.querySelectorAll('.cell');
let board = Array.from(cells); // turns html elements into array



// Current player
let currentPlayer = "X"

// Add a click event listener to each cell
cells.forEach(cell => {
  cell.addEventListener('click', (e) => {
    const cellId = e.target.id;
    console.log(cellId)
    handleMove(cellId); // Pass the cell's id to your handleMove function
  });
});
  
function handleMove(cellId) { /// Place the current player's symbol in the selected cell
    console.log('handleMoves works')
    const cell = document.getElementById(cellId);

    if (cell.innerText === '') { // Check if the cell is empty
    cell.innerText = currentPlayer;  // Place the current player's symbol in the selected cell
    console.log(currentPlayer + `is at ${cellId}`)

    // Check for a win condition
    if (checkForWin(currentPlayer)) { 
        declareWinner(currentPlayer);
    }else if (isBoardFull()) { // Declare a draw if the board is full
       declareDraw()
    }else { // Switch to the other player for the next turn
        if(currentPlayer=='X'){
            currentPlayer = 'O'
        }else if(currentPlayer == "O"){
            currentPlayer = "X"
        }
        console.log(board)
    }
    }


}  
  
// check if there's a win condition  
function checkForWin(currentPlayer) { 
//       // Check for a win in rows, columns, and diagonals
 if (
    checkRows(currentPlayer) ||
     checkColumns(currentPlayer) ||
     checkDiagonals(currentPlayer)
){
     return true; // The current player has won
  }else{
   return false; // No win yet
  }
}

function checkRows() {
    if (cells[0].innerText == currentPlayer &&
        cells[1].innerText == currentPlayer &&
        cells[2].innerText == currentPlayer || // ROW 1
        cells[3].innerText == currentPlayer &&
        cells[4].innerText == currentPlayer &&
        cells[5].innerText == currentPlayer|| //ROW 2
        cells[6].innerText == currentPlayer &&
        cells[7].innerText == currentPlayer &&
        cells[8].innerText == currentPlayer) { // ROW 3
      return true; // Win in this row
    }else{
        return false; // No win in any row
    }
    
}

function checkColumns() {
  
     if (cells[0].innerText == currentPlayer &&
        cells[3].innerText == currentPlayer &&
        cells[6].innerText == currentPlayer || //C 1
        cells[1].innerText == currentPlayer &&
        cells[4].innerText == currentPlayer &&
        cells[7].innerText == currentPlayer || //C2
        cells[2].innerText == currentPlayer &&
        cells[5].innerText == currentPlayer &&
        cells[8].innerText == currentPlayer) { //C3
      return true; // Win in this column
    }else{
        return false; // No win in any column
    }
}

function checkDiagonals() {
  if (cells[0].innerText == currentPlayer &&
    cells[4].innerText == currentPlayer &&
    cells[8].innerText == currentPlayer|| // Left to Right
    cells[2].innerText == currentPlayer &&
    cells[4].innerText == currentPlayer &&
    cells[6].innerText == currentPlayer) { // Right to Left
    return true; // Win in either diagonal
  }else{
    return false; // No win in diagonals
  }

}

// check if the board is full
function isBoardFull() {
    console.log('isBoardFull works')
    for (const cell of cells) {
        if (cell.innerText === '') {
            return false; // There is an empty cell, so the board is not full
        }
    }
    return true; // All cells are filled
    
}
  
  
// declare a winner
function declareWinner() {  
    console.log('declareWinner works')
    document.querySelector('.announcement').innerText =`The winner is ${currentPlayer}`
}
  
// declare a draw
function declareDraw() { 
    console.log('declareDraw works')
    document.querySelector('.announcement').innerText ="There is a draw"
}
  
  


