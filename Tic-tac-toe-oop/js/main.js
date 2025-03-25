/*              ***This is unnecessary, use forEach***
            every button triggers the playGame function
document.querySelector('.button1').addEventListener('click', playGame)
document.querySelector('.button2').addEventListener('click', playGame)
document.querySelector('.button3').addEventListener('click', playGame)
document.querySelector('.button4').addEventListener('click', playGame)
document.querySelector('.button5').addEventListener('click', playGame)
document.querySelector('.button6').addEventListener('click', playGame)
document.querySelector('.button7').addEventListener('click', playGame)
document.querySelector('.button8').addEventListener('click', playGame)
document.querySelector('.button9').addEventListener('click', playGame

        ***This does not work****
let firstRow = document.querySelector('.button1')
    firstRow = document.querySelector('.button2')
    firstRow = document.querySelector('.button3'

let secondRow = document.querySelector('.button4')
secondRow = document.querySelector('.button5')
secondRow = document.querySelector('.button6')

let thirdRow = document.querySelector('.button7')
thirdRow = document.querySelector('.button8')
thirdRow = document.querySelector('.button9') 
*/

const buttons = document.querySelectorAll('img')  // --> forEach to go through them one by one

buttons.forEach(button => {
    button.addEventListener("click", playGame);
})    

const text = document.querySelector('h2')

let numberOfClicks = 0 // --> playerOneClicks(odd, which is imageX) + playerTwoClicks(even, which is imageO)


class Player{
    constructor(playerName, image){ //(numberOfClicks, image)
        this.playerName = playerName
        this.image = image
    }
}

//create two player objects
const playerOne = new Player('Player1', 'https://clipartcraft.com/images/transparent-x-invisible-background.png');
const playerTwo = new Player('Player2', 'https://www.pngarts.com/files/2/Letter-O-Transparent.png');

 
// *** UNNECESSARY
// const one = document.getElementById('one')
// const two = document.getElementById('two')
// const three = document.getElementById('three')
// const four = document.getElementById('four')
// const five = document.getElementById('five')
// const six = document.getElementById('six')
// const seven = document.getElementById('seven')
// const eight = document.getElementById('eight')
// const nine = document.getElementById('nine')


function playGame(event){
    let clickedButton = event.target
    numberOfClicks++

    if (numberOfClicks % 2 !== 0) {
        clickedButton.src = playerOne.image;
    } else {
        clickedButton.src = playerTwo.image;
    }

    console.log(numberOfClicks)
    checkWhoWon()
}

function checkWhoWon(){
 //if i have 3 matching X or O in a particular row or column, you win!
    if(one.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' 
        && two.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' 
        && three.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png'){
          console.log('you win')
          text.innerText ='You win!'
      }else if(four.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' 
              && five.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' 
              && six.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png'){
           console.log('you win')
           text.innerText ='You win!'
     }else if(seven.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' 
             && eight.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' 
             && nine.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png'){
           console.log('you win')
           text.innerText ='You win!'
     }else if(one.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' 
             && four.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' 
             && seven.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png'){
               console.log('you win')
               text.innerText ='You win!'
     }else if(two.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' 
             && five.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' 
             && eight.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png'){
               console.log('you win')
               text.innerText ='You win!'
     }else if(three.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' 
             && six.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' 
             && nine.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png'){
                   console.log('you win')
                   text.innerText ='You win!'
     }else if(one.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' 
             && five.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' 
             && nine.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png'){
                     console.log('you win')
                     text.innerText ='You win!'  
     }else if(three.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' 
         && five.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' 
         && seven.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png'){
                 console.log('you win')
                 text.innerText ='You win!'                    
     }
 
     if(one.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png' 
         && two.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'
         && three.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'){
           console.log('you win')
           text.innerText ='You win!'
      }else if(four.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png' 
               && five.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png' 
               && six.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'){
            console.log('you win')
            text.innerText ='You win!'
      }else if(seven.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png' 
              && eight.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png' 
              && nine.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'){
            console.log('you win')
            text.innerText ='You win!'
      }else if(one.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png' 
              && four.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png' 
              && seven.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'){
                console.log('you win')
                text.innerText ='You win!'
      }else if(two.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png' 
              && five.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png' 
              && eight.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'){
                console.log('you win')
                text.innerText ='You win!'
      }else if(three.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png' 
              && six.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png' 
              && nine.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'){
                    console.log('you win')
                    text.innerText ='You win!'
      }else if(one.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png' 
              && five.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png' 
              && nine.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'){
                      console.log('you win')
                      text.innerText ='You win!'  
      }else if(three.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png' 
          && five.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png' 
          && seven.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'){
                  console.log('you win')
                  text.innerText ='You win!'                    
      }   

    //DOES NOT WORK  
    // if(firstRow.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' || firstRow.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'){ 
    //     console.log('you win')
    //     text.innerText = 'You win!'   
    // }else if(secondRow.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' || secondRow.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'){
    //     console.log('you win')
    //     text.innerText = 'You win!'   
    // }else if(thirdRow.src === 'https://clipartcraft.com/images/transparent-x-invisible-background.png' || thirdRow.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'){
    //     console.log('you win')
    //     text.innerText = 'You win!'   
    // }

}

    