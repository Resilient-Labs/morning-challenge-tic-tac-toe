// create two players
// create 9 inputs and each has its own click event
// click to place there X or O
//restart??? or just refresh
//
// if they win = "You Won" = IN THE DOM change cell blocks if winn ??? 


//okay the gane works now and i want to make it more OOP

/////ORIGINAL THIS ONE WORKS TRYING TO MAKE THE ABOVE WORK TOO LETS SEE !!!!!


let currentPlayer = 'X'

// make html button id of restart
document.querySelector('#restart').addEventListener('click', restartGame);
//Select all the 'cells/box' to clear game
// this vvv graps the nine gameboxes we created
let boxDivs = document.querySelectorAll('.gameBox');
console.log(boxDivs)
boxDivs = Array.from(boxDivs)
// ^^ this converts the Node.list into an Array
//()=> anonymous function
boxDivs.forEach(box => {
    box.addEventListener('click', () => {
        if (box.innerText != '') {
            return // <--STOP here and go back to the start
        }

        console.log()
        box.innerText = currentPlayer;
        //Switch currentPlayer to be 'X' and 'O'
        checkForDraw();
        winnerChickenDinner();
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
        //^^^ re-asssign currentPlayer and allow it to alternate between x and o
        //Ternaray (?) acts as a short hand to an if conditional
        // Ternanary (:) expressions
    })
})

function checkForDraw() {
    let draw = boxDivs.every((element, index) => boxDivs[index].innerText == 'X' || boxDivs[index].innerText == 'O')
    if (draw) {
        alert("I's a DRAW")
    }
}
//There are 8 ways to win in ticTacToe
function winnerChickenDinner() {
    if (boxDivs[0].innerText == currentPlayer && boxDivs[1].innerText == currentPlayer && boxDivs[2].innerText == currentPlayer) {
        alert('You have WON!!!')
        boxDivs[0].classList.add('winnerBox');
        boxDivs[1].classList.add('winnerBox');
        boxDivs[2].classList.add('winnerBox');
    } else if (boxDivs[0].innerText == currentPlayer && boxDivs[3].innerText == currentPlayer && boxDivs[6].innerText == currentPlayer) {
        alert('You have WON!!!')
        boxDivs[0].classList.add('winnerBox');
        boxDivs[3].classList.add('winnerBox');
        boxDivs[6].classList.add('winnerBox');
    } else if (boxDivs[2].innerText == currentPlayer && boxDivs[4].innerText == currentPlayer && boxDivs[6].innerText == currentPlayer) {
        alert('You have WON!!!')
        boxDivs[2].classList.add('winnerBox');
        boxDivs[4].classList.add('winnerBox');
        boxDivs[6].classList.add('winnerBox');
    } else if (boxDivs[1].innerText == currentPlayer && boxDivs[4].innerText == currentPlayer && boxDivs[7].innerText == currentPlayer) {
        alert('You have WON!!!')
        boxDivs[1].classList.add('winnerBox');
        boxDivs[4].classList.add('winnerBox');
        boxDivs[7].classList.add('winnerBox');
    } else if (boxDivs[3].innerText == currentPlayer && boxDivs[4].innerText == currentPlayer && boxDivs[5].innerText == currentPlayer) {
        alert('You have WON!!!')
        boxDivs[3].classList.add('winnerBox');
        boxDivs[4].classList.add('winnerBox');
        boxDivs[5].classList.add('winnerBox');
    } else if (boxDivs[2].innerText == currentPlayer && boxDivs[5].innerText == currentPlayer && boxDivs[8].innerText == currentPlayer) {
        alert('You have WON!!!')
        boxDivs[2].classList.add('winnerBox');
        boxDivs[5].classList.add('winnerBox');
        boxDivs[8].classList.add('winnerBox');
    } else if (boxDivs[6].innerText == currentPlayer && boxDivs[7].innerText == currentPlayer && boxDivs[8].innerText == currentPlayer) {
        alert('You have WON!!!')
        boxDivs[6].classList.add('winnerBox');
        boxDivs[7].classList.add('winnerBox');
        boxDivs[8].classList.add('winnerBox');
    } else if (boxDivs[0].innerText == currentPlayer && boxDivs[4].innerText == currentPlayer && boxDivs[8].innerText == currentPlayer) {
        alert('You have WON!!!')
        boxDivs[0].classList.add('winnerBox');
        boxDivs[4].classList.add('winnerBox');
        boxDivs[8].classList.add('winnerBox');
    } else {

    }

}

function restartGame() {
    currentPlayer = 'X'
    boxDivs.forEach(box => box.innerText = '')
    alert('Restart')
}
//we declared a variable nad went to cell dives which is turned into an array ta the top and every is a higher or function which is only going to do true or false and what are the conditions you are looking for and every is a boolean, go through the index
