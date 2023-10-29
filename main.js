let player = "x" // variable for player1
let cell = document.querySelectorAll('#cells') //grabs cell within game
let restart = document.querySelector('#restart') // reset button




cell = Array.from(cell) //changes cell to a array


//for each on cell array and add event listener
cell.forEach(element => {


   element.addEventListener('click', () => {


       if (element.innerText != "" || ! tictactoe.active) {
           return
       }
      
       element.innerText = player


       tictactoe.winner()//function for winner


       tictactoe.checkDraw() //function for tie


       //ternary operator for player1
       player = player === "x" ? "o" : "x";
   })
})


//returns true if every cell has innerText of "x" or "o"


class TICTACTOE {
   constructor() {
       this.active = true // .active tells if the game is in active or not
   }
  
   checkDraw() {
      if(! this.active){
       return
      }
      let draw = cell.every((element, index) => cell[index].innerText == "x" || cell[index].innerText == "o"); //.every checks to see that each cell matches a condition


      if (draw) {
          alert('draw') //if its true = draw 
          this.active = false
      }
  }


  winner() {
      if (cell[0].innerText === player && cell[1].innerText === player && cell[2].innerText === player) {
          alert('You Win!');
          this.active = false
      } else if (cell[3].innerText === player && cell[4].innerText === player && cell[5].innerText === player) {
          alert('You Win!');
          this.active = false
      } else if (cell[6].innerText === player && cell[7].innerText === player && cell[8].innerText === player) {
          alert('You Win!');
          this.active = false
      } else if (cell[0].innerText === player && cell[3].innerText === player && cell[6].innerText === player) {
          alert('You Win!');
          this.active = false
      } else if (cell[1].innerText === player && cell[4].innerText === player && cell[7].innerText === player) {
          alert('You Win!');
          this.active = false
      } else if (cell[2].innerText === player && cell[5].innerText === player && cell[8].innerText === player) {
          alert('You Win!');
          this.active = false
      } else if (cell[0].innerText === player && cell[4].innerText === player && cell[8].innerText === player) {
          alert('You Win!');
          this.active = false
      } else if (cell[2].innerText === player && cell[4].innerText === player && cell[6].innerText === player) {
          alert('You Win!');

          this.active = false
        }
    }
 
 
    runAgain() {
        window.location.reload()
        this.active = true
        cell.forEach(element => element.innerText = "")
        
    }
 }
 
 
 
 
 //reset function for reset button
 
 
 const tictactoe = new TICTACTOE()
 restart.addEventListener('click', tictactoe.runAgain)
     //reset player 1 back to "x"
    // player1 = "x"
 
 
   
 
 
 
 

 
 
 
