/*Pseudo
1. There will be two players
2.There will be win condition based on squares selected.
3. Player1 will be able to click on any square and start the game, becoming X.
4.Once that happens, it'll be player 2's turn and player2 will be O. At the same time, player2 cannot select player ones block. 
5.Player1 and player2 will have empty arrays that will log which number the player puts on their turn.
6.There will be a click counter while < 9 to check whose clicked based on even and odd. And will log 'X' or 'O
7.if player1 or player2 array === win condition then player1 or player2 wins
else it is a tie
*/

// Beginning of the Game - Will have the properties to run the game and check for win/loss

// cellArea.forEach(cell => {
//   cell.addEventListener('click', clickOnCell, {once:true})
// })

// function clickOnCell(clickEvent){
//   console.log('click')
// }


//Event listeners
const cellArea = document.querySelectorAll('.square')

// Game constructor
 class GameTable {
   constructor(playerOne, playerTwo){
     this.playerOne = playerOne
     this.playerTwo = playerTwo
     //For each cell, add an event listener where on click you get to click it once and that area wont fire again
     cellArea.forEach(cell => {
     cell.addEventListener('click', this.clickOnCell, {once:true})
    })
   }

   clickOnCell(e){
    console.log('(click)')
   }



 }


 new GameTable(cellArea)


//Will check whose turn and check the increase the turn count
  class Boxes {
  constructor(choice = ''){
    this.choice = choice
    this.turn = 1
    this.playerChange = () => {
      let moves = 0
      let playerChoice = ''
      while(moves < 9){
        if(this.turn % 2 === 0){
          playerChoice = 'X'
          turn++
          this.moves++
          console.log(yes)
        }   
        else {
          playerChoice = 'O'
          turn++
          this.moves++
          console.log(yes)
        }
        return playerChoice
      }
    }
  }
}

const box = new Boxes('X')
box.choice
let xArray = []
let
//Input Player Choice

function checkWin(array){
  console.log(array)
  let answer = false;
  //forEach loop for winCondition
  winCondition.forEach(arr => {
    arr.forEach(element => {
      if(!array.includes(element)){
        answer = false
      }
      else {
        answer = true
        // console.log('win')
      }
    })
    if(answer === true){
      console.log('winner')
    }
  })
  return answer
}


  // function checkWinner(array){
  //   // console.log('im activated')
  //   for(let condition of winCondition){
  //     if(!xArray){
  //         for(let i = 0; i < condition.length; i++){
  //           winCondition.some(condition => condition.every(conditionNumber => array.includes(conditionNumber))) ? display.innerText = 'X Wins!' : false
  //           break
  //         }
          
  //       }
  //       else if(array === oArray && array !== xArray){
  //         winCondition.some(condition => condition.every(conditionNumber => array.includes(conditionNumber))) ? display.innerText = 'O Wins!' : false
  //         break
  //       }
  //       return
  //   }

  // } 
// function to check to see if array is one of the win conditions
// function xWinArray(xArray){
//   
//   if(!winner ) {
//     console.log('nop')
//   }
//   if(winner){
//     alert('winnerX!')
//   }
// }
// function oWinArray(oArray){
//   let winner = winCondition.some(condition => condition.every(conditionNumber => oArray.includes(conditionNumber)))
//   if(winner){
//     alert('winnerO!')
//   }
// }







// function xWins(){
//   console.log('i win!')
// }

// console.log(~array.includes(element) ? "win" : 'lose')


