const gameBoard = document.querySelector( '#gameboard')
const infoDisplay = document.querySelector('#info')
const startCells= [
   "","","","","","","","","",
]
let go = "circle"
infoDisplay.textContent = " Cirle Goes First"

function createBoard() {
      startCells.forEach((_cell, index) => {
            const cellElement = document.createElement('div')
            cellElement.classList.add('square')
            cellElement.id = index
            cellElement.addEventListener('click', addGo)
     gameBoard.append(cellElement)

      })
}
createBoard()

function addGo(e) {
   const goDisplay = document.createElement('div')
      goDisplay.classList.add(go)
      e.target.append(goDisplay)
      go = go === "circle" ? "cross" : "circle"
      infoDisplay.textContent = "its now " + go + "'s go."
      e.target.removeEventListener("click", addGo)
      checkScore()
} 

function checkScore() {
      const allSquares = document.querySelectorAll('.square')
      const winningCombos = [
            [0,1,2],[3,4,5],[6,7,8]
            [0,3,6],[1,4,7],[2,5,8]
            [0,4,8],[2,4,6]
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