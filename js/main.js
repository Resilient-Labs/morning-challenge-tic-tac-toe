class player {
  constructor(name, marker, active, tracker) {
    this.name = name
    this.marker = marker
    this.active = false //makes turn switching easier
    this.winner = false
    this.wins = 0
    this.scoreTracker = tracker
  }
  turn() {
    this.active = true
    return `It is ${this.name}'s turn you are: ${this.marker}`
  }
  win(){ //counts score and alerts of wins
    this.wins += 1
    this.scoreTracker.innerText = `${this.name}: ${this.wins}`
    return `${this.name} Wins!`
  }
}

let player1
let player2
let loser //used in checkwin to determine who goes first
let gameInfo = document.querySelector('.info')

//These arrays are used for checking win conditions and setting event listeners
let boxHorizontal = ['#one', '#two', '#three', '#four', '#five', '#six', '#seven', '#eight', '#nine']
let boxVertical = ['#one', '#four', '#seven', '#two', '#five', '#eight', '#three', '#six', '#nine']
let cross = [
  ['#one', '#five', '#nine'],
  ['#three', '#five', '#seven']
]

boxHorizontal.forEach( (id) => { document.querySelector(id).addEventListener('click', _ => play(id))
})
document.querySelector('.submit').addEventListener('click', start)
document.querySelector('.resetButton').addEventListener('click', reset)

function reset(){ //Clears agameboard and restars player turn switching
  if (window.confirm('Game will reset and keep same players. Reload for new players.')){
    boxHorizontal.forEach( (id) => {
      document.querySelector(id).innerText = ''
      document.querySelector(id).style.backgroundColor = '#1F5673'
    })
    gameInfo.innerText = loser.turn()
  }
}

function start(){ //Removes inputs then creates players classes and starts turn switching
  let player1name = document.querySelector('.player1').value
  let player2name = document.querySelector('.player2').value

  if ((player1name === '') || (player2name === '')){
    alert('Please put in player names')
  }
  else{
  document.querySelector('.disposable').style.display = 'none'
  document.querySelector('.player1Score').innerText = `${player1name}: 0`
  document.querySelector('.player2Score').innerText = `${player2name}: 0`

  player1 = new player(player1name, 'X', false, document.querySelector('.player1Score'))
  player2 = new player(player2name, 'O', false, document.querySelector('.player2Score'))
  gameInfo.innerText = player1.turn()
 }
}

function play(box){ //checks whos turn it is and runs through if box is not already in use
  if (document.querySelector(box).innerText != ''){
     alert('Box Occupied')
  }
  else if (player1 === undefined){
    alert('Game has not been started. Please input players names and click Start')
  }
  else if(player1.active){
    document.querySelector(box).innerText = player1.marker
    gameInfo.innerText = checkWin(player1, player2)
    player1.active = false
  }
  else if (player2.active){
    document.querySelector(box).innerText = player2.marker
    gameInfo.innerText = checkWin(player2, player1)
    player2.active = false
  }
  else{
    alert('Game has not been started. Please input players names and click Start')
  }


}
function checkWin(active, off){ // Runs through boxes and checks for win conditions
  let lastbox = 0
  let count = 0
  let win = false
  let empty = false
  for (box = 0; box < boxHorizontal.length; box ++){//counts top left to bottom right
    if (((box + 1) % 3) === 0){ //Checks every three values if they are the same
      let box1h = document.querySelector(boxHorizontal[box])
      let box2h = document.querySelector(boxHorizontal[box - 1])
      let box3h = document.querySelector(boxHorizontal[box - 2])

      let box1v = document.querySelector(boxVertical[box])
      let box2v = document.querySelector(boxVertical[box - 1])
      let box3v = document.querySelector(boxVertical[box - 2])

      if ( ( (box1h.innerText === box2h.innerText) && (box2h.innerText === box3h.innerText )) && (box1h.innerText != '')){

        box1h.style.backgroundColor = 'lightgreen'
        box2h.style.backgroundColor = 'lightgreen'
        box3h.style.backgroundColor = 'lightgreen'
        win = true
      }
      else if (((box1v.innerText === box2v.innerText) && (box2v.innerText === box3v.innerText)) && (box1v.innerText != '')){

        box1v.style.backgroundColor = 'lightgreen'
        box2v.style.backgroundColor = 'lightgreen'
        box3v.style.backgroundColor = 'lightgreen'
        win = true
      }

    }
  }

  cross.forEach( index => { //Checks each cross to see if win condition is met
    let boxA = document.querySelector(index[0])
    let boxB = document.querySelector(index[1])
    let boxC = document.querySelector(index[2])
    if ( ( (boxA.innerText === boxB.innerText) && (boxB.innerText === boxC.innerText )) && (boxA.innerText != '')){
      boxA.style.backgroundColor = 'lightgreen'
      boxB.style.backgroundColor = 'lightgreen'
      boxC.style.backgroundColor = 'lightgreen'
      win = true
    }
  });


  if (win){
    win = false
    loser = off //loser goes first next game
    return active.win()
  }

  let buffer=[] //used to hold booleans based on if gameboard is empty
  boxHorizontal.forEach( (index) => {
    if(document.querySelector(index).innerText !==''){
      buffer.push(true)
    }
    else{
     buffer.push(false)
    }
 });

 if(buffer.includes(false)){
   empty=true //sets to true if there are empty boxes remaining
 }

 if(empty===false){
   loser = off
   return "It's a tie! Reset to play again"
 }
 else{
   return off.turn()
 }

}
