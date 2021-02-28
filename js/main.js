
// choose a player
// player1 or player 2
//
// Game
// 9 boxes
// box = x || O
//
//
// if player 1 clicks on a box1, box1 = x in the same box
//
//
// if player 2 clicks on box1, box1 = O    in the same box
//
//
// WINNER
// if 3 in a row
//
// let row =

//creating a grid with an array//


//
// [1,2,3]
//
//
//
// 1=2=3
// 4=5=6
// 7=8=9
//
// 1=4=7
// 2=5=8
// 3=6=9
//
// 1=5=9
// 3=5=7
// if 3 in a column
// if 3 diagonal
//
// else tie
//
// announce winner
//
// keep scoreboard with scoreboard
//
//
// another round button  but keep score
//
// reset everything button but not keep score
/////////////////////////////////////////////////////////////////////
/*                   ATTEMPT                          */
////////////////////////////////////////////////////////////////////////////
// let turn = 0
// let box1 = document.querySelector('#box1')
// document.querySelector("#box1").addEventListener('click',marker1)
//
// function marker1(){
//   if(turn % 2 === 0){
//      box1.innerText = "O"
//   }else{
//      box1.innerText = "X"
//   }
// turn += 1 //reassigning once click is done, which why its part of function//
// //otherwise the player2 would not start at 0 without this line//
// }
//
// let box2 = document.querySelector('#box2')
// document.querySelector("#box2").addEventListener('click',marker2)
//
// function marker2(){
//   if(turn % 2 === 0){
//      box2.innerText = "O"
//   }else{
//      box2.innerText = "X"
//   }
// turn += 1
// //reassigning once click is done, which why its part of function//
// //otherwise the player2 would not start at 0 without this line//
// }



//mentor Hoang helped me

function Player(playerName){
  this.playerName = playerName
  this.points = 0
  this.choices = []
}

let playerOne = new Player("Player One")
let playerTwo = new Player("Player Two")



let turn = 0

//class in js = blueprint to make object  //

function Box(boxId){
  this.boxId = boxId
  this.stopPlease = false


  let boxElement = document.querySelector(boxId)

  let functionMarker = function marker(){
    if (this.stopPlease === true){
      return //to stop doing the function//
    }
    if(turn % 2 === 0){
       boxElement.innerText = "O"
       playerTwo.choices.push(boxId)
       isWinner(playerTwo)
    }else{
       boxElement.innerText = "X"
       playerOne.choices.push(boxId)
       isWinner(playerOne)
    }
    turn += 1 //increasing turn#//
    isTie()//check if the game ends or not//
    this.stopPlease = true
  }
  boxElement.addEventListener('click',functionMarker)
}

//creating the box object from the Box class//
let box1 = new Box("#box1")
let box2 = new Box("#box2")
let box3 = new Box("#box3")
let box4 = new Box("#box4")
let box5 = new Box("#box5")
let box6 = new Box("#box6")
let box7 = new Box("#box7")
let box8 = new Box("#box8")
let box9 = new Box("#box9")


//Winner//
//Accessing the string property boxId, from inside the object box1//

let row1 = [box1.boxId,box2.boxId,box3.boxId]
let row2 = [box4.boxId,box5.boxId,box6.boxId]
let row3 = [box7.boxId,box8.boxId,box9.boxId]

let column1 = [box1.boxId,box4.boxId,box7.boxId]
let column2 = [box2.boxId,box5.boxId,box8.boxId]
let column3 = [box3.boxId,box6.boxId,box9.boxId]

let diagonal1 = [box1.boxId,box5.boxId,box9.boxId]
let diagonal2 = [box3.boxId,box5.boxId,box7.boxId]

let winningCombos = [row1,row2,row3,column1,column2,column3,diagonal1,diagonal2]

//danstan + Guthemberg helped//
function isWinner(player){
  console.log(player.choices)
  for (i = 0; i < winningCombos.length; i++){  //the winningCombos.length for this situation is 8, since there are 8 items in that array//
    let winningArray = []
    for (j = 0; j < player.choices.length; j++){//from the propety choices(which may not be empty anymore cuz pushes from playing game) in the player constructor //
      // (1,5,9)
      if (winningCombos[i].includes(player.choices[j])){
        winningArray.push(player.choices[j])
      }

    }
    if(winningArray.length == 3){ //this means it is the 3 out of the choices, match//
      document.querySelector('.announcement').innerText= (player.playerName +' You win!') //player is an object, also  from the parameter on line 156, and the playerName is the property of the object player//
      score(player)//the parameter is player since player is the object (which has value); since winner is not defined yet //
    }
  }
}

function isTie(){
  console.log("function for tie gets called here " +turn )
  if (turn === 9){
    document.querySelector('.announcement').innerText= "TIE!"
  }
}

function score(winner){
  let newPoint = winner.points + 1
  winner.points = winner.points + 1
  document.querySelector('#' + winner.playerName + 'Points').innerText = newPoint  //match this to the DOM and make sure the string lower/uppercase matches//
}


  document.querySelector('#reset').addEventListener("click",clear)

function clear(){
  document.querySelector('#playerOnePoints').innerText = ""
  document.querySelector('#playerTwoPoints').innerText = ""
  document.querySelector('.announcement').innerText= ""
  let smallBoxes = document.querySelectorAll('td') //this gives you an array because querySelectorAll is a function that gives you an array of HTML elements//
  for (i=0 ; i < smallBoxes.length ; i++){
    smallBoxes[i].innerText = ""
  }
  let allBoxes  = document.querySelectorAll('td') //this gives you an array because querySelectorAll is a function that gives you an array of HTML elements//
  for (i=0 ; i < smallBoxes.length ; i++){
    smallBoxes[i].stopPlease = false
  }
  playerOne.points = 0
  playerTwo.points = 0

  playerOne.choices = []
  playerTwo.choices = []

  turn = 0
}
