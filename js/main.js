// container is pulling the class of all the boxes; grabbed them all and put them all under one variable
const container = document.getElementsByClassName('box')

// declare variable for the gameStatus
let gameStatus = 'Active'

// Player variables (Where we let javaScript know what players are eventually)
let playerOne = ""
let playerTwo = ""

// define currentPlayer
let currentPlayer = playerOne

// we have an array of boxes so we want to loop over that arrray of box and tell each box that the boxHandler needs to be defined below
for (let i = 0; i < container.length; i++){
    // event listener 
    container[i].addEventListener("click", boxHandler)
}


// create a fiunction that stores the input for each player's name 
function setPlayerOneName(event) {
    playerOne = event.target.value
}
document.getElementById("playerOne").addEventListener('change', setPlayerOneName)

function setPlayerTwoName(event) {
    playerTwo = event.target.value
}
document.getElementById("playerTwo").addEventListener('change', setPlayerTwoName)

// start game button disapearing
document.getElementById('startGame').addEventListener('click', function(){
    document.getElementById('turnMessage').style.display = "block"
    document.getElementById("yourTurn").innerHTML = playerOne.toUpperCase();
    document.getElementById('nameInput').style.display = 'none'
}
)

// create a fucntion that will run when they click on the box
// event,target 
function boxHandler(event) {
    console.log ('click', event.target)
    if (event.target.innerHTML.trim() == "" && gameStatus == "Active") {
        console.log(currentPlayer)
        // set the inner html to the current player
        event.target.innerHTML = currentPlayer == playerOne ? "x" : "o"
        // change who the current player is 
        currentPlayer = currentPlayer == playerOne ? playerTwo : playerOne;
        // we want the computer to say which players turns it is 
        document.getElementById("yourTurn").innerHTML = currentPlayer.toUpperCase();
        // check winner
        checkWinner();
    }
}

// checking the winner function and it is calling the showWinner function that is going to be defined
function checkWinner(){
    if (
        container[0].innerHTML == container[1].innerHTML &&
        container[1].innerHTML == container[2].innerHTML &&
        container[0].innerHTML.trim() != ""
        ) {
        return showWinner(0, 1, 2);
        } else if (
        container[3].innerHTML == container[4].innerHTML &&
        container[4].innerHTML == container[5].innerHTML &&
        container[3].innerHTML.trim() != ""
        ) {
        return showWinner(3, 4, 5);
        } else if (
        container[6].innerHTML == container[7].innerHTML &&
        container[7].innerHTML == container[8].innerHTML &&
        container[6].innerHTML.trim() != ""
        ) {
        return showWinner(6, 7, 8);
        } else if (
        container[0].innerHTML == container[3].innerHTML &&
        container[3].innerHTML == container[6].innerHTML &&
        container[0].innerHTML.trim() != ""
        ) {
        return showWinner(0, 3, 6);
        } else if (
        container[1].innerHTML == container[4].innerHTML &&
        container[4].innerHTML == container[7].innerHTML &&
        container[1].innerHTML.trim() != ""
        ) {
        return showWinner(1, 4, 7);
        } else if (
        container[2].innerHTML == container[5].innerHTML &&
        container[5].innerHTML == container[8].innerHTML &&
        container[2].innerHTML.trim() != ""
        ) {
        return showWinner(2, 5, 8);
        } else if (
        container[0].innerHTML == container[4].innerHTML &&
        container[4].innerHTML == container[8].innerHTML &&
        container[0].innerHTML.trim() != ""
        ) {
        return showWinner(0, 4, 8);
        } else if (
        container[2].innerHTML == container[4].innerHTML &&
        container[4].innerHTML == container[6].innerHTML &&
        container[2].innerHTML.trim() != ""
        ) {
        return showWinner(2, 4, 6);
        } else if (
            // go through each container and return the ones theat are empty and then check if there are no empty "no matches"
            checkDraw()
        ) {
            document.getElementById("message").style.display = "block";
            document.getElementById('message').innerHTML = 'DRAW'
        }
    }

// create function for checking for a draw
function checkDraw() {
    let emptyBoxes = []
    for (let i = 0; i < container.length; i++) {
        if (container[i].innerHTML == '') {
            emptyBoxes.push (container[i])
        }
    }console.log(emptyBoxes)
    return emptyBoxes.length == 0
}

// where we define the showWinner function 
function showWinner(x, y, z) {
    container[x].style.background = "green";
    container[x].style.color = "white";
    container[y].style.background = "green";
    container[y].style.color = "white";
    container[z].style.background = "green";
    container[z].style.color = "white";
    document.getElementById("message").style.display = "block";
    document.getElementById("message").innerHTML = currentPlayer + " " + "wins"
    document.getElementById("message").style.display = "block";
    gameStatus = "Inactive";
}

// define a restart game function and that is going to go through each of the container and that is going to set the innerHtml into a string for each item and set the beginner item back to purple then go into index.html and find the button that I want to target and give it an id of reset game and then do the event listener and reset the game status to active...
document.getElementById("reset").addEventListener("click", function() {
    for (let i = 0; i < container.length; i++) {
        container[i].innerHTML = "";
        container[i].style.backgroundColor = "#dee9ec";
        container[i].style.color = "black";
    }
    currentPlayer = playerOne;
    document.getElementById("message").style.display = "none";
    // document.getElementById("message").innerHTML = ''
    document.getElementById("nameInput").style.display = "block"
    document.getElementById("yourTurn").innerHTML = playerOne;
    gameStatus = "Active";
    });