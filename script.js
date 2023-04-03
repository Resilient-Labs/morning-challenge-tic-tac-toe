const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")
const startCells = [ 
    "","","","","","","","","",
]

let go = "circle" 
infoDisplay.textContent = "Circle goes first"

function createBoard() {
    startCells.forEach((cell, index) => {
       const cellElement = document.createElement("div")
       cellElement.classList.add("square")
       cellElement.id = index
       cellElement.addEventListener('click', addGo)
       gameBoard.append(cellElement)
})
}

createBoard()

function addGo(e) {
    const goDisplay = document.createElement('div')
    goDisplay.classList.add('cross')
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    infoDisplay.textContent = "it is now " + go + " 's turn."
    e.target.removeEventListener("click", addGo)
    checkScore()
}

function checkScore(){
    document.querySelectorAll(".square")
    const winningCombos = [
        [0,1,2] [3,4,5] [6,7,8]
        [0,3,6] [1,4,7] [2,5,8]
        [0,4,8] [2,4,6]
    ]
}

console.log(allSquares[4])

      winningCombos.forEach(array => {
           const circleWins = array.every(cell => 
                  allSquares[cell].firstchild?.classlist.contains('circle'))
     

      if (circleWins) {
            infoDisplay.textContent = "Circle Wins!"
            allSquares.forEach(square => square.removeWith(square.cloneNode(true)))
            return 
      }
})

winningCombos.forEach(array => {
      const crossWins = array.every(cell => 
             allSquares[cell].firstchild?.classlist.contains('cross'))


 if (crossWins) {
       infoDisplay.textContent = "Cross Wins!"
       allSquares.forEach(square => square.removeWith(square.cloneNode(true)))
       return 
 }
})
