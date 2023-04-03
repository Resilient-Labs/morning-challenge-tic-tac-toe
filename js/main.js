
let player = 'X' // the inital value for our players
let playArea = document.querySelectorAll('.playArea') // this targets all of the sections with the class of 'play area' and turns them into a  node list
playArea = Array.from(playArea)//this turns the node list of  the 'play area' classes into an actual array to be manipulated



//this for each loop goes into each box and adds an eventlistener for when each box is clicked. upon the click event , if a box already contains an 'X' or an 'O' no other actions will be preformed on click of the box.  The player variable which contains 'x' is set as the inner text of the box upon click and the ternary operator alternates between 'x' and 'o' depending  on which was clicked last. The whoWon method of the gameLogic object has been called within this foreach loop to check for our win conditions
playArea.forEach(box => {

  box.addEventListener('click', () => {
    if(box.innerText != '') {
      return
    }
    box.innerText = player
    player = player == playerX.icon ? playerO.icon : playerX.icon;
    gameLogic.whoWon()
  });
});


//worked on the creation of this player class with Amaury
class Player{
  constructor(icon){
    this.icon = icon;
  }
}

// this class was created to host the whoWon() method. orginally there was also a method for checking draw games but it was creating a bug in which if the last person won when all of the boxes were full it would still consider it a draw. to remedy this I removed the method entirely and added the draw functionality to the 'else' of the whoWon() method. 
class GameLogic{


 whoWon() {
  //checking for row wins
if(playArea[0].innerText == player && playArea[1].innerText == player && playArea[2].innerText == player){
  playArea.map(x => x.innerText =`${player} wins!`)

}else if(playArea[3].innerText == player && playArea[4].innerText == player && playArea[5].innerText == player){
  playArea.map(x => x.innerText =`${player} wins!`)

}else if(playArea[6].innerText == player && playArea[7].innerText == player && playArea[8].innerText == player){
  playArea.map(x => x.innerText =`${player} wins!`)
//chekcing for column wins
}else if(playArea[0].innerText == player && playArea[3].innerText == player && playArea[6].innerText == player){
  playArea.map(x => x.innerText =`${player} wins!`)

}else if(playArea[1].innerText == player && playArea[4].innerText == player && playArea[7].innerText == player){
  playArea.map(x => x.innerText =`${player} wins!`)

}else if(playArea[3].innerText == player && playArea[5].innerText == player && playArea[8].innerText == player){
 playArea.map(x => x.innerText =`${player} wins!`)  
 //checking for Diagonal wins

}else if(playArea[0].innerText == player && playArea[4].innerText == player && playArea[8].innerText == player){
  playArea.map(x => x.innerText =`${player} wins!`)

 }else if(playArea[2].innerText == player && playArea[4].innerText == player && playArea[6].innerText == player){
  playArea.map(x => x.innerText =`${player} wins!`)
}else{
  //conditional to check if there is a draw state, if the draw is true, all boxes will be filled with the'Draw Game!' text
  let draw = playArea.every((element,index) => playArea[index].innerText == 'X' || playArea[index].innerText == 'O')
  if(draw){
    playArea.map(element => element.innerText =`DRAW GAME!`)
  }
}
 }

}

document.querySelector('button').addEventListener('click', restart);// the eventlistener for the reset button

// this function clears the board on the press of the restart button, it sets all of the inner text to empty strings
function restart() {
  playArea.map(x => x.innerText ='')
}
//the confitionals in the eventListener do the following,
//1. to prevent squares from being clicked on the play area if already selected
//2.




//instantiation of the GameLogic() object & Player objects
const gameLogic = new GameLogic()
const playerX = new Player('X')
const playerO = new Player('O')
//worked on in community with Victor,Tenzin,Alina,Julia,Amaury,Joyce,Akeem;