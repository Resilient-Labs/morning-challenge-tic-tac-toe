const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")
const startCells = [ 
    "","","","","","","","","",
]

function createBoard() {
    startCells.forEach((cell, index) => {
       const cellElement = document.createElement("div")
       cellElement.classList.add("square")
       cellElement.id = index
       gameBoard.append(cellElement)
})
}

createBoard()