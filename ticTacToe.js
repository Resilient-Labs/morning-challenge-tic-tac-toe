
let globalClickCounter = 0;
// const drawMessage = () => `Game ended in a draw`
let box1 = new Box('#square-1')
let box2 = new Box('#square-2')
let box3 = new Box('#square-3')
let box4 = new Box('#square-4')
let box5 = new Box('#square-5')
let box6 = new Box('#square-6')
let box7 = new Box('#square-7')
let box8 = new Box('#square-8')
let box9 = new Box('#square-9')

let isGameOver = false



function Box(squareName){
  this.element = document.querySelector(squareName)
  this.shape = 'none'

  this.setShape = () => {
    if (isGameOver === false){
      if (this.shape === 'none'){
        if (globalClickCounter % 2) {
           this.shape = 'x'
         } else {
          this.shape = 'o'
        }
        globalClickCounter++
        this.element.innerText = this.shape
        if ((box1.shape === box2.shape && box1.shape === box3.shape)  && (box1.shape !== 'none') ) {
          console.log('winner')
          document.querySelector('.gameStatus').innerText = 'We have a Winner!'
          isGameOver = true
        } else if ((box1.shape === box4.shape && box1.shape === box7.shape) && (box1.shape !== 'none')){
            console.log('winner')
            document.querySelector('.gameStatus').innerText = 'We have a Winner!'
            isGameOver = true
        } else if ((box2.shape === box5.shape && box2.shape === box8.shape) && (box2.shape !== 'none')){
            console.log('winner')
            document.querySelector('.gameStatus').innerText = 'We have a Winner!'
            isGameOver = true
        } else if ((box3.shape === box6.shape && box3.shape === box9.shape) && (box3.shape !== 'none')){
            console.log('winner')
            document.querySelector('.gameStatus').innerText = 'We have a Winner!'
            isGameOver = true
        } else if ((box4.shape === box5.shape && box4.shape === box6.shape) && (box4.shape !== 'none')){
            console.log('winner')
            document.querySelector('.gameStatus').innerText = 'We have a Winner!'
            isGameOver = true
        } else if ((box7.shape === box8.shape && box7.shape === box9.shape) && (box7.shape !== 'none')){
            console.log('winner')
            document.querySelector('.gameStatus').innerText = 'We have a Winner!'
            isGameOver = true
        } else if ((box3.shape === box5.shape && box3.shape === box7.shape) && (box3.shape !== 'none')){
            console.log('winner')
            document.querySelector('.gameStatus').innerText = 'We have a Winner!'
            isGameOver = true
        } else if ((box1.shape === box5.shape && box1.shape === box9.shape) && (box1.shape !== 'none')){
            console.log('winner')
            document.querySelector('.gameStatus').innerText = 'We have a Winner!'
            isGameOver = true
        }
      }
    }
  }

  this.element.addEventListener("click", this.setShape)
}

document.querySelector('.game-restart').addEventListener('click', this.restartGame)
