//💔❤️💓

//give players an option to be '💔' or '💓'
const player1 = '💓'
const player2 = '💔'

//keeping score
let player1Score = 0;
let player2Score = 0;
let score1 = document.querySelector('.playerScore1Text')
let score2 = document.querySelector('.playerScore2Text')
let gameEnd = false

//turns table in HTML into an array for JavaScript
let cell = document.querySelectorAll('.square')
let count = 0;
cell = Array.from(cell)
console.log(cell)

//clicking between player 1 and player 2
cell.forEach(element => {element.addEventListener('click', (e) => { 
    
    if (element.innerText != '' || gameEnd === true)
    {
        return
    }
    if (e.target.tagName==='TD')
    {
        count++
        console.log(count)
    }
    if (count % 2 === 0)
    {
        element.innerText =  player1
    }
    else if (count % 2 != 0)
    {
        element.innerText = player2
    }
    const tableBox = new GameBoard()
    tableBox.checkDraw()
    tableBox.checkWinner()
})
})

class GameBoard
{
    //checking for a draw
    checkDraw()
{
    let draw = cell.every((element, index) => cell[index].innerText == player1 || cell[index].innerText == player2)
    if (draw)
    {
        document.querySelector('.message').innerText = 'A draw?  We love mixed signals! 😆'
    } 
}

//checking who won
checkWinner()
{
    //PLAYER ONE WINS
    if (cell[0].innerText === player1  && cell[1].innerText === player1 && cell[2].innerText === player1)
    {
        player1Score++
        document.querySelector('.message').innerText = 'What\'s that? Growing love 💓?  Looks like a match made in heaven! 😍'
        score1.innerText = 'Score: ' + player1Score
        gameEnd = true
    } 
    else if (cell[0].innerText === player1  &&  cell[3].innerText === player1 && cell[6].innerText === player1)
    {
        player1Score++
        document.querySelector('.message').innerText = 'What\'s that? Growing love 💓?  Looks like a match made in heaven! 😍'
        score1.innerText = 'Score: ' + player1Score
        gameEnd = true
    }
    else if (cell[0].innerText === player1  &&  cell[4].innerText === player1 && cell[8].innerText === player1)
    {
        player1Score++
        document.querySelector('.message').innerText = 'What\'s that? Growing love 💓?  Looks like a match made in heaven! 😍'
        score1.innerText = 'Score: ' + player1Score
        gameEnd = true
    } 
    else if (cell[1].innerText === player1  &&  cell[4].innerText === player1 && cell[7].innerText === player1)
    {
        player1Score++
        document.querySelector('.message').innerText = 'What\'s that? Growing love 💓?  Looks like a match made in heaven! 😍'
        score1.innerText = 'Score: ' + player1Score
        gameEnd = true
    }
    else if (cell[2].innerText === player1  &&  cell[5].innerText === player1 && cell[8].innerText === player1)
    {
        player1Score++
        document.querySelector('.message').innerText = 'What\'s that? Growing love 💓?  Looks like a match made in heaven! 😍'
        score1.innerText = 'Score: ' + player1Score
        gameEnd = true
    }
    else if (cell[2].innerText === player1  &&  cell[4].innerText === player1 && cell[6].innerText === player1)
    {
        player1Score++
        document.querySelector('.message').innerText = 'What\'s that? Growing love 💓?  Looks like a match made in heaven! 😍'
        score1.innerText = 'Score: ' + player1Score
        gameEnd = true
    } 
    else if (cell[3].innerText === player1  &&  cell[4].innerText === player1 && cell[5].innerText === player1)
    {
        player1Score++
        document.querySelector('.message').innerText = 'What\'s that? Growing love 💓?  Looks like a match made in heaven! 😍'
        score1.innerText = 'Score: ' + player1Score
        gameEnd = true
    }
    else if (cell[6].innerText === player1  &&  cell[7].innerText === player1 && cell[8].innerText === player1)
    {
        player2Score++
        document.querySelector('.message').innerText = 'What\'s that? Growing love 💓?  Looks like a match made in heaven! 😍'
        score1.innerText = 'Score: ' + player1Score
        gameEnd = true
    }

    //PLAYER TWO WINS
    else if (cell[0].innerText === player2  && cell[1].innerText === player2 && cell[2].innerText === player2)
    {
        player2Score++
        document.querySelector('.message').innerText = 'Heartbreak 💔? Looks like to time to hit up your hand. 🤪'
        score2.innerText = 'Score: ' + player2Score
        gameEnd = true
    } 
    else if (cell[0].innerText === player2  &&  cell[3].innerText === player2 && cell[6].innerText === player2)
    {
        player2Score++
        document.querySelector('.message').innerText = 'Heartbreak 💔? Looks like to time to hit up your hand. 🤪'
        score2.innerText = 'Score: ' + player2Score
        gameEnd = true
    }
    else if (cell[0].innerText === player2  &&  cell[4].innerText === player2 && cell[8].innerText === player2)
    {
        player2Score++
        document.querySelector('.message').innerText = 'Heartbreak 💔? Looks like to time to hit up your hand. 🤪'
        score2.innerText = 'Score: ' + player2Score
        gameEnd = true
    } 
    else if (cell[1].innerText === player2  &&  cell[4].innerText === player2 && cell[7].innerText === player2)
    {
        player2Score++
        document.querySelector('.message').innerText = 'Heartbreak 💔? Looks like to time to hit up your hand. 🤪'
        score2.innerText = 'Score: ' + player2Score
        gameEnd = true
    } 
    else if (cell[2].innerText === player2  &&  cell[5].innerText === player2 && cell[8].innerText === player2)
    {
        player2Score++
        document.querySelector('.message').innerText = 'Heartbreak 💔? Looks like to time to hit up your hand. 🤪'
        score2.innerText = 'Score: ' + player2Score
        gameEnd = true
    } 
    else if (cell[2].innerText === player2  &&  cell[4].innerText === player2 && cell[6].innerText === player2)
    {
        player2Score++
        document.querySelector('.message').innerText = 'Heartbreak 💔? Looks like to time to hit up your hand. 🤪'
        score2.innerText = 'Score: ' + player2Score
        gameEnd = true
    } 
    else if (cell[3].innerText === player2  &&  cell[4].innerText === player2 && cell[5].innerText === player2)
    {
        player2Score++
        document.querySelector('.message').innerText = 'Heartbreak 💔? Looks like to time to hit up your hand. 🤪'
        score2.innerText = 'Score: ' + player2Score
        gameEnd = true
    }
    else if (cell[6].innerText === player2  &&  cell[7].innerText === player2 && cell[8].innerText === player2)
    {
        player2Score++
        document.querySelector('.message').innerText = 'Heartbreak 💔? Looks like to time to hit up your hand. 🤪'
        score2.innerText = 'Score: ' + player2Score
        gameEnd = true 
    }
}
}

const tableBox = new GameBoard()

//clear the table
let bttnReset = document.querySelector('#reset')

bttnReset.addEventListener('click', clearReset)

function clearReset()
{
    cell.map(element => element.innerText = '')
    document.querySelector('.message').innerText = '💕'
    gameEnd = false
}

//clear the page
let bttnResetAll = document.querySelector('#resetAll')

bttnResetAll.addEventListener('click', clearResetAll)

function clearResetAll()
{
    cell.map(element => element.innerText = '')
    document.querySelector('.message').innerText = '💕'
    player1Score = 0
    player2Score = 0
    score1.innerText = 'Score: ' + 0
    score2.innerText = 'Score: ' + 0
    gameEnd = false
}

//OLDER ATTEMPTS
// cell.forEach(element => {element.addEventListener('dblclick', (e) => { 
//     if (e.target.tagName==='TD')
//     {
//         element.classList.toggle('visible')
//         console.log('dblClick')
//     }})
// }) 

// //click function
// squareCheck.addEventListener('click', checkBoxHrt)
// // squareCheck.addEventListener('dblclick', checkBoxBrk)

// function checkBoxHrt()
// {
//     squareCheck.forEach(function(value) { console.log(value); });
//     {
//         if (squareCheck[i].innerHTML != '')
//         {
//             return
//         }
//         else
//         {
//             squareCheck[i].innerHTML = '💓' 
//         }
//     }
// }
    
// function checkBoxBrk()
// {
//     if (squareCheck != '')
//     {
//         return
//     }
//     else
//     {
//         squareCheck.innerHTML = "💔"
//     }
// }

//keep score

//click '💔'

//click '💓'

// document.addEventListener('keypress', function(event) {
//     if (event.key === 'x' ) {
//       {
//         span.innerHTML = '💓'
//       }
//       console.log(event.key)
//     }
//   });

//   document.addEventListener('keypress', function(event) {
//     if (event.key === 'o') {
//       {
//         span.innerHTML = '💔'
//       }
//       console.log(event.key)
//     }
//   });