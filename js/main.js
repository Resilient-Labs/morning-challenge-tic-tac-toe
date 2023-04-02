
const userName = prompt("player 1 name:");
document.querySelector('#playerOne').innerText = `Hello ${userName} you are 🐸 `;
const userNameTwo = prompt("player 2 name:");
document.querySelector('#playerTwo').innerText = `Hello ${userNameTwo} you are 🦄 `;

let currentPlayer = "🐸"

// Select all the squares
let squareDivs = document.querySelectorAll("#square") // Will return a nodeList
squareDivs = Array.from(squareDivs) // Convert NodeList into an array

// Add event Listener to all the squares
squareDivs.forEach(element => {

  element.addEventListener('click', () => {

    // Check if the cell already has innertext. If it does it means element has already been selected
    if (element.innerText != "") {
      return
    }
    const gameBoard = new GameBoard()
    element.innerText = currentPlayer

    // Place the X or O into the DOM/Cell
   

    //check for a draw
  gameBoard.checkDraw()
    //check for wiiner
   gameBoard.checkForWin()

    //once a player selected, change the players turn
  currentPlayer = currentPlayer == "🐸" ? "🦄" : "🐸" //this changes the players turn 


  })

})
// make a function that cheks if there is a draw
class GameBoard{

checkDraw() {
  let draw = squareDivs.every((element, index) => squareDivs[index].innerText == "🐸" || squareDivs[index].innerText == "🦄")

  if(draw){
    document.querySelector(".winnerMessage").innerText = `It is a tie!` // Insert text to show who won
  }
}   

checkForWin() {
  if (squareDivs[0].innerText == currentPlayer && squareDivs[1].innerText == currentPlayer && squareDivs[2].innerText == currentPlayer) {
    
    document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins YAAY!` // Insert text to show who won
}else if (squareDivs[3].innerText == currentPlayer && squareDivs[4].innerText == currentPlayer && squareDivs[5].innerText == currentPlayer) {
    
    document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins YAAY!` // Insert text to show who won
}else if (squareDivs[6].innerText == currentPlayer && squareDivs[7].innerText == currentPlayer && squareDivs[8].innerText == currentPlayer ) {
    
    document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins YAAY!` // Insert text to show who won
}else if (squareDivs[0].innerText == currentPlayer && squareDivs[3].innerText == currentPlayer && squareDivs[6].innerText == currentPlayer) {
    
    document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins YAAY!` // Insert text to show who won
}else if (squareDivs[1].innerText == currentPlayer && squareDivs[4].innerText == currentPlayer && squareDivs[7].innerText == currentPlayer ) {
    
    document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins YAAY!` // Insert text to show who won
}else if (squareDivs[2].innerText == currentPlayer && squareDivs[5].innerText == currentPlayer && squareDivs[8].innerText == currentPlayer ) {
    
    document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins YAAY!` // Insert text to show who won
}else if (squareDivs[0].innerText == currentPlayer && squareDivs[4].innerText == currentPlayer && squareDivs[8].innerText == currentPlayer ) {
    
    document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins YAAY!` // Insert text to show who won
}else if (squareDivs[2].innerText == currentPlayer && squareDivs[4].innerText == currentPlayer && squareDivs[6].innerText == currentPlayer ) {
    
    document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins YAAY!` 
}
}
 restart(){
  window.location.reload()
 }

}
const gameBoard = new GameBoard()
document.querySelector('#reset').addEventListener('click', gameBoard.restart)