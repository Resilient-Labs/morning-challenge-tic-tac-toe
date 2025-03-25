//create two player tic tac toe game

//click to play x or o, print in chosen space

//win - lose, display relevant msg to user

//reset game

//Set index, 0 for X and 1 for 0
let i = 0; 


//Get all cells in grid
const board = document.querySelectorAll('.cell');

//Fill selected cell
board.forEach(cellElement => {
    cellElement.addEventListener('click', function() {
        // Check if the cell is empty
        if (cellElement.innerHTML === "") {
            // If i === 0, it's player X's turn
            if (i === 0) {
                cellElement.innerHTML = 'X'; // Add X to the cell
                i = 1; // Switch to player O
            } else {
                cellElement.innerHTML = 'O'; // Add O to the cell
                i = 0; // Switch to player X
            } 
        
        //Read 'X' 'O' combinations for win-lose
            let result = checkWin();
            if(result){
                alert(result);
            }

        }
    });
});

  //Read 'X' 'O' combinations for win-lose
  let result = checkWin();
  if(result){
      alert(result);
  }

//Convert node into Array
function getBoardArray() {
    return [
        [board[0].innerHTML, board[1].innerHTML, board[2].innerHTML],  // first row
        [board[3].innerHTML, board[4].innerHTML, board[5].innerHTML],  // second row
        [board[6].innerHTML, board[7].innerHTML, board[8].innerHTML],  // third row
    ];
}

//Check for win
function checkWin(board){
    const boardArray = getBoardArray();

    const winConditions = [
        [boardArray[0][0], boardArray[0][1], boardArray[0][2]], // first row
        [boardArray[1][0], boardArray[1][1], boardArray[1][2]], // second row
        [boardArray[2][0], boardArray[2][1], boardArray[2][2]], // third row

        [boardArray[0][0], boardArray[1][0], boardArray[2][0]], // first column
        [boardArray[0][1], boardArray[1][1], boardArray[2][1]], // second column
        [boardArray[0][2], boardArray[1][2], boardArray[2][2]], // third column

        [boardArray[0][0], boardArray[1][1], boardArray[2][2]], // first diagonal
        [boardArray[0][2], boardArray[1][1], boardArray[2][0]]  // Second diagonal
    ];

    //Check winning combination
    for (let combination of winConditions) {
        // If three combinations match, player wins
        if (combination[0] === combination[1] && combination[1] === combination[2] && combination[0] !== '') {
            return `${combination[0]} You won!`; 
        } 
    }

}

//Reset board


