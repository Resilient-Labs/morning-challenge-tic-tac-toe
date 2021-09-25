

/*Set up event target
-event target focuses on a specific element*/

/*Add event listener 'click' to each target and assign accordingly
-.addEventListener tool*/

/*run function for either a 'O' or 'X' per player to take turn
-using if else statement*/

//add in the marker for each player (replace .innertext 'O' or 'X')

//set up a conditional for when 

//Automatically switch player per turn or manually choose 'Player 1' or 'Player 2'?

//function to prevent users from clicking after game has been won

//any visual assets? X, O, header image?

//variables
// let winner = document.getElementById('winner')
//functions

//event listeners and functions
//  document.getElementById("container").addEventListener("click", playerMove)

// let counter = 0

// place marker function

// function playerMove(event) {
 
//    if((event.target.innerText === 'x') || (event.target.innerText === 'o')){
//        return
//    }else{
//     if(counter % 2 === 0 ){
//         event.target.innerText =  'o'; 
//     }else{
//         event.target.innerText =  'x';
//     }
//     counter ++
//    }
  
//     console.log("Hi I am  click #: " + counter)
    
//     winnerCheck()
// }


//check winner function
// function winnerCheck(){
//     let arr =  document.querySelectorAll('section')

//     console.log(arr)

//     if(arr[0].innerText === arr[1].innerText && arr[1].innerText === arr[2].innerText && arr[0].innerText !== '' ){
//       winner.innerText = 'You Win!'

//     }else if(arr[3].innerText === arr[4].innerText && arr[4].innerText === arr[5].innerText && arr[3].innerText !== ''){
//          winner.innerText = 'You Win!'

//     }else if(arr[6].innerText === arr[7].innerText && arr[7].innerText === arr[8].innerText && arr[6].innerText !== ''){
//          winner.innerText = 'You Win!'

//     }else if(arr[0].innerText === arr[3].innerText && arr[3].innerText === arr[6].innerText && arr[0].innerText !== ''){
//          winner.innerText = 'You Win!'

//     }else if(arr[1].innerText === arr[4].innerText && arr[4].innerText === arr[7].innerText && arr[1].innerText !== ''){
//          winner.innerText = 'You Win!'

//     }else if(arr[2].innerText === arr[5].innerText && arr[5].innerText === arr[8].innerText && arr[2].innerText !== ''){
//          winner.innerText = 'You Win!'

//     }else if(arr[0].innerText === arr[4].innerText && arr[4].innerText === arr[8].innerText && arr[0].innerText !== ''){
//          winner.innerText = 'You Win!'

//     }else if(arr[2].innerText === arr[4].innerText && arr[4].innerText === arr[6].innerText && arr[2].innerText !== ''){
//         winner.innerText = 'You Win!'
//     }else if(arr[0].innerText !== '' && arr[1].innerText !== '' && arr[2].innerText !== ''  && arr[3].innerText !== ''  && arr[4].innerText !== ''   && arr[5].innerText !== ''   && arr[6].innerText !== ''   && arr[7].innerText !== '' && arr[8].innerText !== ''     ){
//         alert('tie!')
//     }
   
// }

// still need: reset game function 

document.getElementById("container").addEventListener("click", play)

class Game{
    constructor(marker,playerOne,playerTwo) {
        this.marker = marker
        this.playerOne = playerOne
        this.playerTwo = playerTwo
        this.player = this.playerOne
}
    playerMove(){
       
        if(this.player === this.playerOne){
        console.log('Now '+ this.player + ' is Playing')
        this.player = this.playerTwo           // changing from player 1 to player 2
            
        } else if(this.player === this.playerTwo){
            console.log('Now '+ this.player + ' is Playing')
         this.player = this.playerOne
        }
        
        //if player one plays then do something and switch player = playerTwo
        //else if playerTwo is playing do something and switch to player = playerOne
        
}
    placeMarker(){
        //if playerOne, then O
        if(this.player === this.playerOne) {
        return 'O';
        } else if(this.player === this.playerTwo) {
        return 'X';
        }
    }
        winnerCheck(){
                 let arr =  document.querySelectorAll('section')
            
                //  console.log(arr)
            
                 if(arr[0].innerText === arr[1].innerText && arr[1].innerText === arr[2].innerText && arr[0].innerText !== '' ){
                   winner.innerText = 'You Win!'
            
                 }else if(arr[3].innerText === arr[4].innerText && arr[4].innerText === arr[5].innerText && arr[3].innerText !== ''){
                      winner.innerText = 'You Win!'
            
                 }else if(arr[6].innerText === arr[7].innerText && arr[7].innerText === arr[8].innerText && arr[6].innerText !== ''){
                      winner.innerText = 'You Win!'
            
                 }else if(arr[0].innerText === arr[3].innerText && arr[3].innerText === arr[6].innerText && arr[0].innerText !== ''){
                      winner.innerText = 'You Win!'
            
                 }else if(arr[1].innerText === arr[4].innerText && arr[4].innerText === arr[7].innerText && arr[1].innerText !== ''){
                      winner.innerText = 'You Win!'
            
                 }else if(arr[2].innerText === arr[5].innerText && arr[5].innerText === arr[8].innerText && arr[2].innerText !== ''){
                      winner.innerText = 'You Win!'
            
                 }else if(arr[0].innerText === arr[4].innerText && arr[4].innerText === arr[8].innerText && arr[0].innerText !== ''){
                      winner.innerText = 'You Win!'
            
                 }else if(arr[2].innerText === arr[4].innerText && arr[4].innerText === arr[6].innerText && arr[2].innerText !== ''){
                     winner.innerText = 'You Win!'
                 }else if(arr[0].innerText !== '' && arr[1].innerText !== '' && arr[2].innerText !== ''  && arr[3].innerText !== ''  && arr[4].innerText !== ''   && arr[5].innerText !== ''   && arr[6].innerText !== ''   && arr[7].innerText !== '' && arr[8].innerText !== ''     ){
                     alert('tie!')
                 }
               
             }
        //if playerTwo, then X
    

    //add event listener
    //run placeMarker to place either O or X on grid
    //replace text/value in eventTarget
    //make sure value cannot be changed after marker has been placed (that the marker value can
    //not be reassigned)

    //run method checkWinner

    //end game if win/lose/tie?

    //reset game - manually????
}

let newGame = new Game('x','Alexa','Shannon')  // x and 0? 
console.log(newGame);


function play(e){
   
    if(e.target.innerText === ''){
        newGame.playerMove()
        e.target.innerText = newGame.placeMarker() 
    }
    newGame.winnerCheck()
}