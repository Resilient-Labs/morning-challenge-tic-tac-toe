
let player = 'x'

let gameOver = false

document.querySelector('button').addEventListener('click', resetGame)





//
let checkboxes =  document.querySelectorAll('.boxes')

let winMessage = document.querySelector('.message')


// 
checkboxes = Array.from(checkboxes)

checkboxes.forEach(box => {box.addEventListener('click', () => {

    if(gameOver === true){
        return
    }




    if(box.innerText != ''){
        return 
    } 
    // innertext of the box is going to be taken up by the player
    box.innerText = player
   
    // every click checks for a tie
   if( winning() === true){
         gameOver = true

   }else{

    tie()
   }

   
   
   

    // if player has the value of x then change value to o if not then x 
    player = player == 'x' ? 'o': 'x'


})})

function tie(){
    // check if every element of an array matches the callback function 
    let check  = checkboxes.every((element, index)=> checkboxes[index].innerText == 'x' || checkboxes[index].innerText == 'o')

    if(check){
       winMessage.innerText = "It's a draw!"
    }


}



function winning(){
    if(checkboxes[0].innerText == player && checkboxes[1].innerText == player && checkboxes[2].innerText == player){
        winMessage.innerText = `${player} wins`
        return true
    }
    
    else if(checkboxes[3].innerText == player && checkboxes[4].innerText == player && checkboxes[5].innerText == player){
        winMessage.innerText = `${player} wins`
         return true

    }

    else if(checkboxes[6].innerText == player && checkboxes[7].innerText == player && checkboxes[8].innerText == player){
       winMessage.innerText = `${player} wins`
         return true
    }


    else if(checkboxes[0].innerText == player && checkboxes[4].innerText == player && checkboxes[8].innerText == player){
       winMessage.innerText = `${player} wins`
        return true

    }else if(checkboxes[2].innerText == player && checkboxes[4].innerText == player && checkboxes[6].innerText == player){
       winMessage.innerText = `${player} wins`
        return true
    }
    else if(checkboxes[0].innerText == player && checkboxes[3].innerText == player && checkboxes[6].innerText == player){
       winMessage.innerText = `${player} wins`
        return true
    }
    else if(checkboxes[1].innerText == player && checkboxes[4].innerText == player && checkboxes[7].innerText == player){
       winMessage.innerText = `${player} wins`
        return true
    }
    else if(checkboxes[2].innerText == player && checkboxes[5].innerText == player && checkboxes[8].innerText == player){
       winMessage.innerText = `${player} wins`
        return true

    }

     return false

}


function resetGame(){
    player = 'x' 
    gameOver = false
    checkboxes.forEach(box => box.innerText = '')
     winMessage.innerText = ''
}