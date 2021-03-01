class player {
  constructor(name, marker, active, score) {
    this.name = name
    this.marker = marker
    this.active = false
    this.wins = 0
    this.winner= false
    this.scoreT=score
  }
  checkTurn() {
    this.active = true
    return `It is ${this.name}'s turn you are: ${this.marker}`
    // method that tracks whos turn it is and printed to the DOM
  }
  checkActive(){
    return this.active
    // checking whos current turn it it
  }
  updateWin(){
    this.wins += 1
    this.scoreT.innerText = `${this.name}: ${this.wins}`
    return `${this.name} Wins!`
    // updating the number of wins a player has will returning the winner of each game
  }
}
// factory for players but for this case will only be 2 players
let player1
let player2
let loser
let playersTurn = document.querySelector('.text')
let firstArr=["#zero", "#one","#two","#three","#four","#five","#six","#seven","#eight"];
let verticalArr=["#zero","#three","#six","#one","#four","#seven","#two","#five","#eight"];
let diagonalArr=[["#zero","#four","#eight"],["#two","#four","#six"]]
// first array in diagonal is = 0 and second array is = 1
firstArr.forEach( (id) => {
  document.querySelector(id).addEventListener('click', _ => play(id))
})
// event listener to start play()
document.querySelector('.submit').addEventListener('click', startGame)
document.querySelector('.reset').addEventListener('click', reset)
// let joe=document.querySelector('.square')
function reset(){
  firstArr.forEach( (id) => {
    document.querySelector(id).innerText = ''
    // emptys the inner text of the squares
  })
  if (window.confirm("Wanna keep playing? Just press okay to continue playing, press cancel for a new game")){
    loser.checkTurn()
    for (i=0;i<firstArr.length;i++){
    document.querySelector(firstArr[i]).style.backgroundColor = 'rgb(255,255,153)';
    document.querySelector(firstArr[i]).style.color = 'black';
    }
  }
  // replacing inner text of squares to empty and resetting the background of each square
}
function startGame(){

  // document.querySelector('.disposable').style.display = 'none'
  let player1name = document.querySelector('.player1').value
  let player2name = document.querySelector('.player2').value

  if ((player1name === '') || (player2name === '')){
    alert('Please put in player names')
  }
  else{
  // document.querySelector('.text').style.display = 'none'
  document.querySelector('.player1Score').innerText = `${player1name}: 0`
  document.querySelector('.player2Score').innerText = `${player2name}: 0`
  player1 = new player(player1name, 'X', false, document.querySelector('.player1Score'))
  player2 = new player(player2name, 'O', false,document.querySelector('.player2Score'))
  // when player 1 and 2 had a .value in the name perameter for the new player it was undefined , the .value was already delcared above with "player1name and player2name"
  playersTurn.innerText = player1.checkTurn()

  }
}
function play(box){
  if (document.querySelector(box).innerText != ''){
     alert('Choose another Box')
     // if player clicks on a box that is not empty it will tell to pick another box
  }
  else if(player1.checkActive()){

    document.querySelector(box).innerText = player1.marker
    // innertext x or o
    playersTurn.innerText = checkWin(player1, player2)
    // check if winning conditions are met
    player1.active = false
    // end current turn
  }
  else if (player2.checkActive()){
    document.querySelector(box).innerText = player2.marker
    playersTurn.innerText = checkWin(player2, player1)
    player2.active = false
  }
  else{
    alert('There is no active game yet. Please add player names and press play!')
  }
}
function checkWin(active, off){
  let lastbox = 0
  let count = 0
  let win = false
  let empty = false
  for (box = 0; box < firstArr.length; box ++){
    if (((box + 1) % 3) === 0){
      let box1h = document.querySelector(firstArr[box])
      let box2h = document.querySelector(firstArr[box - 1])
      let box3h = document.querySelector(firstArr[box - 2])
      let box1v = document.querySelector(verticalArr[box])
      let box2v = document.querySelector(verticalArr[box - 1])
      let box3v = document.querySelector(verticalArr[box - 2])
      // creating variables to check if it gets to 3 in a row
      // console.log(box1v,box2v,box3v)
      if ( ( (box1h.innerText === box2h.innerText) && (box2h.innerText === box3h.innerText )) && (box1h.innerText != '')){
        // if you find 3 in a row and if its not empty horizopntally
        // console.log(`${active.name} win`);
        box1h.style.backgroundColor = 'rgb(204, 204, 255)'
        box1h.style.color='#ff6961'
        box2h.style.backgroundColor = 'rgb(204, 204, 255)'
        box2h.style.color='#ff6961'
        box3h.style.backgroundColor = 'rgb(204, 204, 255)'
        box3h.style.color='#ff6961'
        win = true
      }
      else if (((box1v.innerText === box2v.innerText) && (box2v.innerText === box3v.innerText)) && (box1v.innerText != '') ) {
        // console.log(`${active.name} win`);
        // looking for 3 in a row vertically
        box1v.style.backgroundColor = 'rgb(204, 204, 255)'
        box1v.style.color='#ff6961'
        box2v.style.backgroundColor = 'rgb(204, 204, 255)'
        box2v.style.color='#ff6961'
        box3v.style.backgroundColor = 'rgb(204, 204, 255)'
        box3v.style.color='#ff6961'
        win = true
      }
      }

    }


  diagonalArr.forEach( index => {
    let boxA = document.querySelector(index[0])
    let boxB = document.querySelector(index[1])
    let boxC = document.querySelector(index[2])
    if ( ( (boxA.innerText === boxB.innerText) && (boxB.innerText === boxC.innerText )) && (boxA.innerText != '')){
      boxA.style.backgroundColor = 'rgb(204, 204, 255)'
      boxA.style.color='#ff6961'
      boxB.style.backgroundColor = 'rgb(204, 204, 255)'
      boxB.style.color='#ff6961'
      boxC.style.backgroundColor = 'rgb(204, 204, 255)'
      boxC.style.color='#ff6961'
      win = true
      // checking if 3 in a row diagonally based on the 2 arrys in diagonal arr
    }
  });
  let testArr=[]
  firstArr.forEach((item, i) => {

      if(document.querySelector(item).innerText !==''){
        testArr.push(true)
      }else{
        testArr.push(false)
      }
      // checking if each item in the horizontal arr is not empty and if its not then push true to testarr
  });
  if(testArr.includes(false)){
    empty=true
  }

  if(empty===false){
    alert('It was a tie!! Press restart to play again')
    // if all boxed are not empty and not match this will alert the player it was a tie
  }
  if (win){

    win = false
    loser = off
    return active.updateWin()
  }
  return off.checkTurn()

}
