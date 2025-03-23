// Player starts game by entering name and initializing game

// Once games

// Players click on a grid of 3 x 3 tiles to place their icon

// After they place icon, it is the other player's turn to place an icon

// Once there are 3 X or O in a row (vertically, horizontally, diagonally), the game ends and that player is the winner

// When player meets win condition, the DOM will show "Playerx wins!"

// Once the game is over, the board will no longer be able to add symbols to the board

// There will be a start button to reset the board and start game from the beginning

class Player {
    constructor(name, symbol) {
        this.name = name
        this.symbol = symbol
    }
}

const playerOne = 'Manny' // prompt('Enter your name')
const playerTwo = 'Leon' // prompt('Enter your name')

let one = new Player(playerOne, 'X')
let two = new Player(playerTwo, 'O')

// Used to switch symbol from playerOne.symbol to playerTwo.symbol
let playerTurn = false

// Used to end game once winConditon is executed and winCondition is met
let isGameActive = true

const listOne = document.querySelector('.one')
const listTwo = document.querySelector('.two')
const listThree = document.querySelector('.three')
const listFour = document.querySelector('.four')
const listFive = document.querySelector('.five')
const listSix = document.querySelector('.six')
const listSeven = document.querySelector('.seven')
const listEight = document.querySelector('.eight')
const listNine = document.querySelector('.nine')
const declareWinner = document.querySelector('#info')

let grid = [
    [listOne, listTwo, listThree], 
    [listFour, listFive, listSix],
    [listSeven, listEight, listNine]
]

let winCondition = [
    [listOne, listTwo, listThree], 
    [listFour, listFive, listSix],
    [listSeven, listEight, listNine],
    [listOne, listFour, listSeven],
    [listTwo, listFive, listEight],
    [listThree, listSix, listNine],
    [listOne, listFive, listNine],
    [listThree, listFive, listSeven]
]

// pseudocode
// create a function that looks at the board after each turn (once user clicks on empty and symbol populates)
// Once condition is met, the game is over

// Iterate over each array in winCondition using forEach
function checkWinConditions() {
    winCondition.forEach((x) => {
        // create an empty array that we will use later to store symbols used by players
        let result = [];
        
        // use forEach again to access the items inside each of the nested arrays winCondition[x][listItem]
        x.forEach((listItem) => {
            // This took me forever... so basically we are grabbing the result that's inserted once we click on the empty space
            // This conditional checks if every value in one of the nested winCondition arrays is equal to the value inserted by player
            // If the value is not currently in the array, add it to the array
            if (!result.includes(listItem.innerHTML)) {
                result.push(listItem.innerHTML)
            }

            // console.log(listItem)
            // console.log(listItem.innerHTML)
            
        });

        // If there is only one value in the array that is added, then it compares it to the winCondition values and decides whether game ends
        // If there are multiple values in the array ['X', 'O'] then the game continues

        if (result.length === 1) {
            isGameActive = false;
            
            if (playerTurn === false) {
                declareWinner.innerHTML = `${one.name} wins!`
            } else {
                declareWinner.innerHTML = `${two.name} wins!`
            }
        }
    })
}

function playGame() {

    listOne.addEventListener('click', () => {
       if (isGameActive) {
        console.log('You clicked on one!')
        
        if (playerTurn == false) {
            document.querySelector('.one').innerHTML = one.symbol
        } else {
            document.querySelector('.one').innerHTML = two.symbol
        }
        console.log(grid[0][0].innerHTML)
        
        checkWinConditions()
        playerTurn = !playerTurn
        }
    })

    listTwo.addEventListener('click', () => {
        if (isGameActive) {
            console.log('You clicked on two!')
            if (playerTurn === false) {
                document.querySelector('.two').innerHTML = one.symbol
            } else {
                document.querySelector('.two').innerHTML = two.symbol
            }
            console.log(grid[0][1].innerHTML)
            checkWinConditions()
            playerTurn = !playerTurn
        }
    })

    
    listThree.addEventListener('click', () => {
        if (isGameActive) {
            console.log('You clicked on three!')
            if (playerTurn === false) {
                document.querySelector('.three').innerHTML = one.symbol
            } else {
                document.querySelector('.three').innerHTML = two.symbol
            }
            
            console.log(grid[0][2].innerHTML)
            checkWinConditions()
            playerTurn = !playerTurn
        }
    })

    
    listFour.addEventListener('click', () => {
        if (isGameActive) {
            console.log('You clicked on four!')
            if (playerTurn === false) {
                document.querySelector('.four').innerHTML = one.symbol
            } else {
                document.querySelector('.four').innerHTML = two.symbol
            }
            console.log(grid[1][0].innerHTML)
            checkWinConditions()
            playerTurn = !playerTurn
        }
    })

    
    listFive.addEventListener('click', () => {
        if (isGameActive) {
            console.log('You clicked on five!')
            if (playerTurn === false) {
                document.querySelector('.five').innerHTML = one.symbol
            } else {
                document.querySelector('.five').innerHTML = two.symbol
            }
            console.log(grid[1][1].innerHTML)
            checkWinConditions()
            playerTurn = !playerTurn
        }
    })

    
    listSix.addEventListener('click', () => {
        if (isGameActive) {
            console.log('You clicked on six!')
            if (playerTurn === false) {
                document.querySelector('.six').innerHTML = one.symbol
            } else {
                document.querySelector('.six').innerHTML = two.symbol
            }
            console.log(grid[1][2].innerHTML)
            checkWinConditions()
            playerTurn = !playerTurn
        }
    })

    
    listSeven.addEventListener('click', () => {
        if (isGameActive) {
            console.log('You clicked on seven!')
            if (playerTurn === false) {
                document.querySelector('.seven').innerHTML = one.symbol
            } else {
                document.querySelector('.seven').innerHTML = two.symbol
            }
            console.log(grid[2][0].innerHTML)
            checkWinConditions()
            playerTurn = !playerTurn
        }
    })

    
    listEight.addEventListener('click', () => {
        if (isGameActive) {
            console.log('You clicked on eight!')
            if (playerTurn === false) {
                document.querySelector('.eight').innerHTML = one.symbol
            } else {
                document.querySelector('.eight').innerHTML = two.symbol
            }
            console.log(grid[2][1].innerHTML)
            checkWinConditions()
            playerTurn = !playerTurn
        }
    })

    
    listNine.addEventListener('click', () => {
        if (isGameActive) {
            console.log('You clicked on nine!')
            if (playerTurn === false) {
                document.querySelector('.nine').innerHTML = one.symbol
            } else {
                document.querySelector('.nine').innerHTML = two.symbol
            }
            console.log(grid[2][2].innerHTML)
            checkWinConditions()
            playerTurn = !playerTurn
        }
    })
}

playGame()