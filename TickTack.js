//Tic tack Toe
class Player{
  constructor(name,shape){
    this.name = name;
    this.shape = shape;
  }
}

const me = new Player('Cam','X')
const opp = new Player('Hater','O')
//we need a player to start

let playerOne = 'X';
//let playerTwo = 'O'
//make a button that restarts the game on click
document.querySelector('#reset').addEventListener('click',resetGame)


//Select all the 'cells' to clear game
let cells = document.querySelectorAll('.cell');
cells = Array.from(cells) // this converts nodelist into an array

cells.forEach( element => { //easy way to loop
  element.addEventListener('click',()=> {
    if (element.innerText != ""){
      return 
    }
      console.log()

     element.innerText = playerOne;
     //switch playerOne between 'X and 'O'
     iWon()
     checkForDraw()
     playerOne = playerOne == 'X' ? 'O':'X'

  })
})

function checkForDraw(){
  let draw = cells.every((element,index)=> cells[index].innerText == 'X'|| cells[index].innerText == 'O')
if (draw){
  alert('boo draw')
}
}

function iWon(){
  let shape = playerOne.shape;
  if(cells[0].innerText == playerOne && cells[1].innerText == playerOne && cells[2].innerText ==playerOne
     || cells[3].innerText ==playerOne && cells[4].innerText ==playerOne  && cells[5].innerText ==playerOne || cells[6].innerText ==playerOne && cells[7].innerText ==playerOne  && cells[8].innerText ==playerOne||cells[0].innerText ==playerOne && cells[4].innerText ==playerOne  && cells[8].innerText ==playerOne|| cells[2].innerText ==playerOne && cells[4].innerText ==playerOne  && cells[6].innerText ==playerOne||cells[2].innerText ==playerOne && cells[5].innerText ==playerOne  && cells[8].innerText ==playerOne||cells[0].innerText ==playerOne && cells[3].innerText ==playerOne  && cells[6].innerText ==playerOne||cells[1].innerText ==playerOne && cells[4].innerText ==playerOne  && cells[7].innerText ==playerOne)
  {
    alert(`Winner:${playerOne.name} Did you expect another result`)
  }
}

function resetGame(){
  playerOne = me
  cells.forEach(element => element.innerText=" ");
  alert('Back to square one')
}


 
