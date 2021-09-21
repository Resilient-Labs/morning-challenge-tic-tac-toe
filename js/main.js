//Event listeners
const clear = document.querySelector('.reset')
const cellArea = document.querySelectorAll('.cell')
const display = document.querySelector('.displayArea')

let counter = 0
let xArray = []
let oArray = []

// Win conditions
const winCondition = [
["1","2","3"],
["4","5","6"],
["1","4","7"],
["2","5","8"],
["3","6","9"],
["1","5","9"],
["3","5","7"],
["7","8","9"]
]

// Game constructor
class GameTable {
  constructor(playerX, playerO){
    this.playerX = playerX
    this.playerO = playerO
    //For each cell, add an event listener where on click you get to click it once and that area wont fire again
    cellArea.forEach(cell => {
      cell.addEventListener('click', this.clickOnCell, {once:true})
    })
  }
 
  // main function
  clickOnCell(e){ 
    // selects target individually
    const cell = e.target
    counter++
    // console.log(counter)
    if(~counter % 2 == 0){
      this.playerX = 'X'
      cell.innerHTML = this.playerX
      cell.style.color = "lightgreen"
      // pushes into array the id the selected
      xArray.push(e.target.id)
      xWins(xArray)
    }
    if(counter % 2 == 0) {
      this.playerO = 'O'
      cell.innerHTML = this.playerO
      cell.style.color = 'red'
      oArray.push(e.target.id)
      oWins(oArray)
    }
  }
}

function xWins(xArray){
  for(let i = 0; i < winCondition.length; i++){
    let winner = winCondition.some(condition => condition.every(conditionNumber => xArray.includes(conditionNumber)))
    if(winner){
      display.innerText = 'X Wins!'
      oArray = []
    }
    if(!winner && counter === 9){
      display.innerText = 'Draw'
    }
  }
}

function oWins(oArray){
  for(let i = 0; i < winCondition.length; i++){
    let winner = winCondition.some(condition => condition.every(conditionNumber => oArray.includes(conditionNumber)))
    if (winner){
      display.innerText = 'O Wins!'
      xArray = []
    }
    if(!winner && counter === 9){
      display.innerText = 'Draw'
    }
  }
}

clear.addEventListener('click',_ => {
  window.location.reload()
})

const cellsArea = new GameTable(cellArea) 
