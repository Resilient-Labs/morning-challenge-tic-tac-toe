// make it so you can press x and o on key board to make 

class Tictac {
  constructor (userI){
  this.userInput = userInput
}
}

const p1 = new Tictac("x")
const p2 = new Tictac("o")
let count = 0
let board = document.querySelectorAll(".board")
const reset = document.querySelector("button").addEventListener('click', restart)
function restart(){

}
board = Array.from(board)
board.forEach(k =>{
  k.addEventListener('click', ()=>{
    count+=1
    if(k.innerText!=""){

      return
    }
    if(count%2 === 0){
    k.innerText=p1.userInput 
    }else{
      k.innerText=p2.userInput
    }
console.log(count)
  }) 
}); 

function checkDraw(){
  let draw = cells.every((element, index) => cells[index].innerText == 'X' || cells[index].innerText == 'O') //for the index in total; so every one cell has to equal 'X', otherwise it's a draw (.every((element, index))
  if(draw){
    // alert('draw')
    decision.innerHTML = "Its a draw"
  }
}
