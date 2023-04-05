// Variables
const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")

// Create Board
const startCells = [ 
    "","","","","","","","","",
]

// Who starts
let go = "white" 

// Display of who goes first. 
infoDisplay.textContent = "White goes first"

// Create function that creates the board.
function createBoard() {

    // grab the squaes array for each element gab the quare and th eindex and create an element.
    startCells.forEach((cell, index) => {
       const cellElement = document.createElement("div")
    //    add class for each square
       cellElement.classList.add("square")
    //    assign an ID to the square, numbering them individially. 
       cellElement.id = index
    // listen for the click .
       cellElement.addEventListener('click', addGo)
    //    put the squares on the board.
       gameBoard.append(cellElement)
})
}

createBoard()

// this the function that adds the circles.
function addGo(e){ 
    // creates the circle element 
    const goDisplay = document.createElement('div')
    // create a class for the div to display a cicrle. 
    goDisplay.classList.add(go)
    // ttargets the event & adds the circle. 
    e.target.append(goDisplay)
    // if go = the string white then change to pink, otherswise white.
    go = go === "white" ? "pink" : "white" 
    infoDisplay.textContent = `it is now ${go}'s turn.`
    // removes event listener after the one click, so that the same box cannot be chosen again.
    e.target.removeEventListener("click", addGo)
    checkScore()
}

// function to check the score. 
function checkScore(){
    
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
    // checking all squares for winningCombos
const allSquares = document.querySelectorAll(".square")

      winningCombos.forEach(array => {
           const whiteWins = array.every(cell => 
                  allSquares[cell].firstChild?.classList.contains('white'))
    // condition if white wins
      if (whiteWins) {
            infoDisplay.textContent = "WHITE WINS!"
            allSquares.forEach(square => square.removeWith(square.cloneNode(true)))
            return 
      }
})
// doing the same for pink
winningCombos.forEach(array => {
      const pinksWins = array.every(cell => 
             allSquares[cell].firstChild?.classList.contains('pink'))


 if (pinkWins) {
       infoDisplay.textContent = "PINK WINS!"
       allSquares.forEach(square => square.removeWith(square.cloneNode(true)))
       return 
 }
})
}
