//win conditions: either matching indexes, non-matching indexes, or complete array
//class for players objects for wins??

const squares = document.querySelectorAll('.square')
document.querySelector('button').addEventListener('click', gameReset)

let player = 0
let gameOver = false
let turn = 0

const winConditions = [
    [ 0 , 1 , 2 ],
    [ 3 , 4 , 5 ],
    [ 6 , 7 , 8 ],
    [ 0 , 4 , 8 ],
    [ 6 , 4 , 2 ],
    [ 0 , 3 , 6 ],
    [ 1 , 4 , 7 ],
    [ 2 , 5 , 8 ]
]

const xWin = arrayElement => arrayElement === 'X'
const oWin = arrayElement => arrayElement === 'O'

//Read through LivSterling's JS to find out about the relationship between querySelectorAll and forEach [https://github.com/LivSterling/morning-challenge-tic-tac-toe/blob/main/js/main.js]
squares.forEach((square, i) => {
    square.addEventListener('click', () => {
        if ( square.innerHTML === '' && gameOver === false) {
            turnOrder(square , i)
        }
    })
})

function turnOrder(square , i){
    if (turn != 8) {
        if (player === 0) {
            square.innerHTML = 'X'
            player += 1
            updateWin(i,'X')
        } else {
            square.innerHTML = 'O'
            player -= 1
            updateWin(i,'O')
        }
        turn++
    } else {
        draw()
    }
}

function updateWin(i,player) {
    winConditions.forEach((win,index) => {
        if (win.includes(i)) {
            const position = win.indexOf(i)
            win.splice(position, 1, player) //Flex coming in clutch helping me replace the correct element in the array(s)
        }
        if (win.every(xWin)) {
            gameOver = true
            document.querySelector('h2').innerText = 'X wins!'
            document.querySelector('button').style.display = 'block'
        } else if (win.every(oWin)) {
            gameOver = true
            document.querySelector('h2').innerText = 'O wins!'
            document.querySelector('button').style.display = 'block'
        }
    })
    
}

function gameReset() {
    gameOver = false
    player = 0
    squares.forEach(square => {
        square.innerHTML = ''
    })
    turn = 0
    document.querySelector('h2').innerText = ''
    winConditions.splice(0,winConditions.length,[ 0 , 1 , 2 ],
    [ 3 , 4 , 5 ],
    [ 6 , 7 , 8 ],
    [ 0 , 4 , 8 ],
    [ 6 , 4 , 2 ],
    [ 0 , 3 , 6 ],
    [ 1 , 4 , 7 ],
    [ 2 , 5 , 8 ])
    document.querySelector('button').style.display = 'none'
}

function draw() {
    gameOver = true
    document.querySelector('h2').innerText = 'It\'s a draw!'
    document.querySelector('button').style.display = 'block'
}