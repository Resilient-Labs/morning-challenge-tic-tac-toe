//Create a two player Tic-Tac-Toe game. 
    //The users should be able to click to place their X or O
    //If they win the program should mention their win in the DOM. 
    //Please make the game as OOP as possible.

//create a variable for the current player
let currentPlayer = '🫐'

//create variable for result area
let result= document.querySelector('h1')

//select all squares 
let squares = document.querySelectorAll('.square')
// console.log(squares) // returns node list

//convert node list to array
squares = Array.from(squares)
console.log(squares) // returns array

//Now that you can manipulate the array, which represents each square add an event listener to each square that will execute the following functions:
        //conditional that only allows users to click on empty space 
        //give ability to alternate players blueberry (x) and onion (o)
        //create variable for object (note object will be made in constructor later)
squares.forEach(square => {
    square.addEventListener('click', () => {
        if(square.innerText != '') {
            result.innerText = 'Pick an empty square!'
            return
        }
        //initialize first player move 
        square.innerText = currentPlayer
        currentPlayer === '🫐' ? currentPlayer = '🧅' : currentPlayer = '🫐'
        const gameBoard = new GameBoard()
        gameBoard.checkWinner()
        gameBoard.checkTie()
    })
})

//create constructor class for GameBoard object
    //Make conditionals for GB logic's winning combinations (8 combos below)
        // if 3[i] are in a row (&&), print winner to DOM. Using current player allows either blueberry or onion to win and doesn't hard code the winner.

/*
3 in a row: 
H: 0, 1, 2
H: 3, 4, 5
H: 6, 7, 8
V: 0, 3, 6
V: 1, 4, 7
V: 2, 5, 8
D: 0, 4, 8
D: 2, 4, 6
*/
class GameBoard{
    checkWinner(){
        if (squares[0].innerText == currentPlayer && squares[1].innerText == currentPlayer && squares[2].innerText == currentPlayer) {
            result.innerText = 'Winner!'
            // if (squares[0].innerText ==  '🫐' && squares[1].innerText ==  '🫐' && squares[2].innerText == '🫐') {
            //     alert('You are having sweet pancakes!')
            // } else if (squares[0].innerText ==  '🧅' && squares[1].innerText ==  '🧅' && squares[2].innerText == '🧅') {
            //     alert('You are having savory pancakes!')
            // }
        } else if (squares[3].innerText == currentPlayer && squares[4].innerText == currentPlayer && squares[5].innerText == currentPlayer) {
            result.innerText = 'Winner!'
        } else if (squares[6].innerText == currentPlayer && squares[7].innerText == currentPlayer && squares[8].innerText == currentPlayer) {
            result.innerText = 'Winner!'
        } else if (squares[0].innerText == currentPlayer && squares[3].innerText == currentPlayer && squares[6].innerText == currentPlayer) {
            result.innerText = 'Winner!'
        } else if (squares[1].innerText == currentPlayer && squares[4].innerText == currentPlayer && squares[7].innerText == currentPlayer) {
            result.innerText = 'Winner!'
        } else if (squares[2].innerText == currentPlayer && squares[5].innerText == currentPlayer && squares[8].innerText == currentPlayer) {
            result.innerText = 'Winner!'
        } else if (squares[0].innerText == currentPlayer && squares[4].innerText == currentPlayer && squares[8].innerText == currentPlayer) {
            result.innerText = 'Winner!'
        } else if (squares[2].innerText == currentPlayer && squares[4].innerText == currentPlayer && squares[6].innerText == currentPlayer) {
            result.innerText = 'Winner!'
        }
    }
    checkTie() {
        if (squares.innerText != checkWinner()) {
            alert(`It's a tie. Try again!`)
        } restart()
    }
    }

//Be able to restart game anytime create event listener with restart function
document.querySelector('#restart').addEventListener('click', restart)
//Use map to replace current array elements with empty strings
function restart() {
    squares.map(square => square.innerText = '')
}


/*
Questions:
1. How to make restart() func more oo? Currently looks more like procedural programming...

2. If I had more time, nest another if element: if specifically a winning blueberry or onion combo, print "You're having sweet pancakes" or "savory" pancakes respectively. See if you can turn players into objects and add properties (blueberry, sweet) (onion, savory)
    ex. checkWinner(){
        if (squares[0].innerText == currentPlayer && squares[1].innerText == currentPlayer && squares[2].innerText == currentPlayer) {
            result.innerText = 'Winner!'
            if (squares[0].innerText ==  '🫐' && squares[1].innerText ==  '🫐' && squares[2].innerText == '🫐') {
            alert('You are having sweet pancakes!')
            } else if (squares[0].innerText ==  '🧅' && squares[1].innerText ==  '🧅' && squares[2].innerText == '🧅') {
            alert('You are having savory pancakes!')
            }
            Or
            // class Players{
            constructor(mainIngredient, flavorProfile){
            this.mainIngredient = mainIngredient
            this.flavorProfile = flavorProfile
            }
            winningIngredient(){
                if (squares[0].innerText ==  '🫐' && squares[1].innerText ==  '🫐' && squares[2].innerText == '🫐') {
                    alert('You are having sweet pancakes!')
                    } else if (squares[0].innerText ==  '🧅' && squares[1].innerText ==  '🧅' && squares[2].innerText == '🧅') {
                    alert('You are having savory pancakes!')
            }
        }
        }

3. To check for a tie, why can't I do:
    checkTie() {
        if (squares.innerText != checkWinner()) {
            alert(`It's a tie. Try again!`)
        } restart()
    }
    Where, if the any of the elements in the GB do not equal any of the check winner functions, players will be alerted about the tie, and the restart func will automatically run.
*/
