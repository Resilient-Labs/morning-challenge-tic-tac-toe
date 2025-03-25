//receive input from a button
//display result from input in console along with api image
//display result in the dom
//make space unclickable
//check who won at the end through a conditional


//declare a player as X
// if player X just went, display an O next
//while player X has taken taken these many spaces or went this many times, go with player O
//counter
//i need something that counts how many times x goes, if < player O then, player O takes its turn, else, player X goes 
//USE A COUNTER FOR EACH CLICK, IF EVEN, IF ODD USING MODULOUS


//every button triggers the playGame function
document.querySelector('.button1').addEventListener('click', playGame)
document.querySelector('.button2').addEventListener('click', playGame)
document.querySelector('.button3').addEventListener('click', playGame)
document.querySelector('.button4').addEventListener('click', playGame)
document.querySelector('.button5').addEventListener('click', playGame)
document.querySelector('.button6').addEventListener('click', playGame)
document.querySelector('.button7').addEventListener('click', playGame)
document.querySelector('.button8').addEventListener('click', playGame)
document.querySelector('.button9').addEventListener('click', playGame)


/* let playerOneClicks = 0
   let playerTwoClicks = 0
*/

/* playerOneClicks = document.querySelector('button').addEventListener('click', playGame)
   playerTwoClicks = document.querySelector('button').addEventListener('click', playGame)
*/

let numberOfClicks = 0 // --> playerOneClicks + playerTwoClicks

const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')

// let firstRow = document.querySelector('.button1')
//     firstRow = document.querySelector('.button2')
//     firstRow = document.querySelector('.button3')

// const buttons = document.querySelectorAll('button') --> forEach to go through them one by one

let text = document.querySelector('h2')


function playGame(event){
    numberOfClicks++
    console.log(event.target.id); // This will show the ID of the clicked button

    //switch turns by checking num of clicks *** IF NUMOFCLICKS IS ODD THEN IT IS X, IF EVEN THEN IT IS O
    //let first click start as X 
    if(numberOfClicks % 2 !== 0){
        //wherever they click, the first image to be displayed in that space will be the X
        //if a button has been selected just show that one
        if(event.target.id === 'one'){
            //display the the X if 'one' is clicked (the event is 'one')
            one.src = 'https://clipartcraft.com/images/transparent-x-invisible-background.png'
        }else if(event.target.id === 'two'){
            two.src = 'https://clipartcraft.com/images/transparent-x-invisible-background.png'
        }else if(event.target.id === 'three'){
            three.src = 'https://clipartcraft.com/images/transparent-x-invisible-background.png'
        }else if(event.target.id === 'four'){
            four.src = 'https://clipartcraft.com/images/transparent-x-invisible-background.png'
        }else if(event.target.id === 'five'){
            five.src = 'https://clipartcraft.com/images/transparent-x-invisible-background.png'
        }else if(event.target.id === 'six'){    
            six.src = 'https://clipartcraft.com/images/transparent-x-invisible-background.png'
        }else if(event.target.id === 'seven'){
            seven.src = 'https://clipartcraft.com/images/transparent-x-invisible-background.png'
        }else if(event.target.id === 'eight'){
            eight.src = 'https://clipartcraft.com/images/transparent-x-invisible-background.png'    
        }else if(event.target.id === 'nine'){
            nine.src = 'https://clipartcraft.com/images/transparent-x-invisible-background.png'    
        }     
    }else if(numberOfClicks % 2 === 0){
    //display O image
        if(event.target.id === 'one'){ 
            one.src = 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'
        }else if(event.target.id === 'two'){
            two.src = 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'
        }else if(event.target.id === 'three'){
        three.src = 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'
        }else if(event.target.id === 'four'){
        four.src = 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'
        }else if(event.target.id === 'five'){
        five.src = 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'
        }else if(event.target.id === 'six'){    
        six.src = 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'
        }else if(event.target.id === 'seven'){
        seven.src = 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'
        }else if(event.target.id === 'eight'){
        eight.src = 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'    
        }else if(event.target.id === 'nine'){
        nine.src = 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'    
        } 
    }

console.log(numberOfClicks)

//if i have 3 matching X or O in a particular row or column, you win!
    
    /* if(firstRow.src === 'https://www.pngarts.com/files/2/Letter-O-Transparent.png'){
        console.log('you win!')
        } */
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
}



// function checkWhoWon(){if( one.src === two.src && two.src === three.src){
//     console.log('you win!')
//     }
