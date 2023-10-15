//Create a two player Tic-Tac-Toe game. 
    //The users should be able to click to place their X or O
    //If they win the program should mention their win in the DOM. 
    //Please make the game as OOP as possible.

//create a variable for the current player
let currentPlayer = '🫐'

//select all squares 
let squares = document.querySelectorAll('.squares')
// console.log(squares) // returns node list

//convert node list to array
squares = Array.from(squares)
// console.log(squares) // returns array

//Now that you can manipulate the array, which represents each square, add an event listener to each square
squares.forEach(square => {
    square.addEventListener('click', () => {
        if(square.innerText === '🫐' || square.innerText === '🧅') {
            alert('Pick an empty space!')
        }
    })
})






