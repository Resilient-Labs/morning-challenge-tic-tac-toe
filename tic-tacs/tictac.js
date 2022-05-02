//this is the boolean set to change the X's and O's
let gameState = true

//this counter will increment the value up to the total amount of boxes
let counter = 0

//create a constructor for player names 
let promptForm1 = prompt("What is your name Player 1?")
let promptForm2= prompt("What is your name Player 2?")
document.getElementById('playerName').innerText= `Your turn ${promptForm1}!`


//this function basically changes the letters each time!!
function gameStart(){
    
    if (gameState === true){
    
    document.getElementById('playerName').innerText= `Your turn ${promptForm2}!`
    document.activeElement.innerText="X"
    document.activeElement.removeAttribute("onclick")
    
    //the counter will add 1 everytime it goes through this if statement up until
    //all boxes are filled.
    counter++;
    //this changes the variable of gameState so that we can run through the next else if statement 
    gameState = false

    //this function will pop up for the end of the game
    let ender = endofGame()
    if (ender == "stopnow"){
        document.getElementById('box1').removeAttribute("onclick")
        document.getElementById('box2').removeAttribute("onclick")
        document.getElementById('box3').removeAttribute("onclick")
        document.getElementById('box4').removeAttribute("onclick")
        document.getElementById('box5').removeAttribute("onclick")
        document.getElementById('box6').removeAttribute("onclick")
        document.getElementById('box7').removeAttribute("onclick")
        document.getElementById('box8').removeAttribute("onclick")
        document.getElementById('box9').removeAttribute("onclick")
    }
    else if(counter == 9 ){
        document.getElementById('endResult').innerText = "MATCH DRAWWW"
        document.getElementById('playerName').innerText= ""
    }  
}

else if (gameState === false){
document.getElementById('playerName').innerText= `Your turn ${promptForm1}!`
document.activeElement.innerText="O"
document.activeElement.removeAttribute("onclick")
counter++
gameState = true
endofGame()
    }
}

//create a fucntion that would determine the winner/tie
function endofGame(){


if((document.getElementById("box1").innerText==document.getElementById("box2").innerText && document.getElementById("box1").innerHTML==document.getElementById("box3").innerText) && 
((document.getElementById("box1").innerText=="X"))){
    alert(`${promptForm1} wins! Please reset!!`)
    document.getElementById('playerName').innerText= ''
    document.getElementById('endResult').innerText=`Looks like ${promptForm1} wins!!`
    let stopIt = "stopnow"
    return stopIt
    }
    
else if((document.getElementById("box1").innerText==document.getElementById("box2").innerText && document.getElementById("box1").innerHTML==document.getElementById("box3").innerText) && 
((document.getElementById("box1").innerText=="O"))){ 
    alert(`${promptForm2} wins! Please reset!!`)
    document.getElementById('playerName').innerText= ''
    document.getElementById('endResult').innerText=`Looks like ${promptForm2} wins!!`
    let stopIt = "stopnow"
    return stopIt  
    }
     
else if((document.getElementById("box4").innerText==document.getElementById("box5").innerText && document.getElementById("box4").innerHTML==document.getElementById("box6").innerText) && 
((document.getElementById("box4").innerText=="X"))){ 
    alert(`${promptForm1} wins! Please reset!!`)
    document.getElementById('playerName').innerText= ''
    document.getElementById('endResult').innerText=`Looks like ${promptForm1} wins!!`
    let stopIt = "stopnow"
    return stopIt  
}
else if((document.getElementById("box4").innerText==document.getElementById("box5").innerText && document.getElementById("box4").innerHTML==document.getElementById("box6").innerText) && 
((document.getElementById("box4").innerText=="O"))){ 
    alert(`${promptForm2} wins! Please reset!!`)
    document.getElementById('playerName').innerText= ''
    document.getElementById('endResult').innerText=`Looks like ${promptForm2} wins!!`
    let stopIt = "stopnow"
    return stopIt 
}

else if((document.getElementById("box7").innerText==document.getElementById("box8").innerText && document.getElementById("box7").innerHTML==document.getElementById("box9").innerText) && 
((document.querySelector(".row3").innerText=="X"))){ 
    alert(`${promptForm1} wins! Please reset!!`)
    document.getElementById('playerName').innerText= ''
    document.getElementById('endResult').innerText=`Looks like ${promptForm1} wins!!`
    let stopIt = "stopnow"
    return stopIt 
}

else if((document.getElementById("box7").innerText==document.getElementById("box8").innerText && document.getElementById("box7").innerHTML==document.getElementById("box9").innerText) && 
((document.getElementById("box7").innerText=="O"))){ 
    alert(`${promptForm2} wins! Please reset!!`)
    document.getElementById('playerName').innerText= ''
    document.getElementById('endResult').innerText=`Looks like ${promptForm2} wins!!`
    let stopIt = "stopnow"
    return stopIt 
 
}
                            //CODE FOR THE HORIZONTALS//

else if((document.getElementById("box1").innerText==document.getElementById("box4").innerText && document.getElementById("box1").innerHTML==document.getElementById("box7").innerText) && 
((document.getElementById("box1").innerText=="X"))){ 
    alert(`${promptForm1} wins! Please reset!!`)
    document.getElementById('playerName').innerText= ''
    document.getElementById('endResult').innerText=`Looks like ${promptForm1} wins!!`
    let stopIt = "stopnow"
    return stopIt 
}
else if((document.getElementById("box1").innerText==document.getElementById("box4").innerText && document.getElementById("box1").innerHTML==document.getElementById("box7").innerText) && 
((document.getElementById("box1").innerText=="O"))){ 
    alert(`${promptForm2} wins! Please reset!!`)
    document.getElementById('playerName').innerText= ''
    document.getElementById('endResult').innerText=`Looks like ${promptForm2} wins!!`
    let stopIt = "stopnow"
    return stopIt 
}

else if((document.getElementById("box2").innerText==document.getElementById("box5").innerText && document.getElementById("box2").innerHTML==document.getElementById("box8").innerText) && 
((document.getElementById("box2").innerText=="X"))){ 
    alert(`${promptForm1} wins! Please reset!!`)
    document.getElementById('playerName').innerText= ''
    document.getElementById('endResult').innerText=`Looks like ${promptForm1} wins!!`
    let stopIt = "stopnow"
    return stopIt 
}
else if((document.getElementById("box2").innerText==document.getElementById("box5").innerText && document.getElementById("box2").innerHTML==document.getElementById("box8").innerText) && 
((document.getElementById("box2").innerText=="O"))){ 
    alert(`${promptForm2} wins! Please reset!!`)
    document.getElementById('playerName').innerText= ''
    document.getElementById('endResult').innerText=`Looks like ${promptForm2} wins!!`
    let stopIt = "stopnow"
    return stopIt 
}

else if((document.getElementById("box3").innerText==document.getElementById("box6").innerText && document.getElementById("box3").innerHTML==document.getElementById("box9").innerText) && 
((document.getElementById("box3").innerText=="X"))){ 
    alert(`${promptForm1} wins! Please reset!!`)
    document.getElementById('playerName').innerText= ''
    document.getElementById('endResult').innerText=`Looks like ${promptForm1} wins!!`
    let stopIt = "stopnow"
    return stopIt 
}
else if((document.getElementById("box2").innerText==document.getElementById("box5").innerText && document.getElementById("box2").innerHTML==document.getElementById("box8").innerText) && 
((document.getElementById("box2").innerText=="O"))){ 
    alert(`${promptForm2} wins! Please reset!!`)
    document.getElementById('playerName').innerText= ''
    document.getElementById('endResult').innerText=`Looks like ${promptForm2} wins!!`
    let stopIt = "stopnow"
    return stopIt 
}
                    //CODE FOR DIAGONALS//
else if((document.getElementById("box1").innerText==document.getElementById("box5").innerText && document.getElementById("box1").innerHTML==document.getElementById("box9").innerText) && 
((document.getElementById("box1").innerText=="X"))){ 
    alert(`${promptForm1} wins! Please reset!!`)
    document.getElementById('playerName').innerText= ''
    document.getElementById('endResult').innerText=`Looks like ${promptForm1} wins!!`
    let stopIt = "stopnow"
    return stopIt 
}
else if((document.getElementById("box1").innerText==document.getElementById("box5").innerText && document.getElementById("box1").innerHTML==document.getElementById("box9").innerText) && 
((document.getElementById("box1").innerText=="O"))){ 
    alert(`${promptForm2} wins! Please reset!!`)
    document.getElementById('playerName').innerText= ''
    document.getElementById('endResult').innerText=`Looks like ${promptForm2} wins!!`
    let stopIt = "stopnow"
    return stopIt 
}
else if((document.getElementById("box3").innerText==document.getElementById("box5").innerText && document.getElementById("box3").innerHTML==document.getElementById("box7").innerText) && 
((document.getElementById("box3").innerText=="X"))){ 
    alert(`${promptForm1} wins! Please reset!!`)
    document.getElementById('playerName').innerText= ''
    document.getElementById('endResult').innerText=`Looks like ${promptForm1} wins!!`
    let stopIt = "stopnow"
    return stopIt 
}
else if((document.getElementById("box3").innerText==document.getElementById("box5").innerText && document.getElementById("box3").innerHTML==document.getElementById("box7").innerText) && 
((document.getElementById("box3").innerText=="O"))){ 
    alert(`${promptForm1} wins! Please reset!!`)
    document.getElementById('playerName').innerText= ''
    document.getElementById('endResult').innerText=`Looks like ${promptForm1} wins!!`
    let stopIt = "stopnow"
    return stopIt 
}
}

function resetButton(){
    window.location.reload();
   
}






