/*
+how do users interact with it
-i know user clicking a square will make it go from blank to X or to O
-I know user can't click a square that's already been clicked
-i know the game has 2 players, 1 is the user and 1 is the second user
+what's the ending result like?
-when 3 x's or 3 o's line up in any direction, that player wins
-winner is announced (user1 or user2)
-no more squares can be clicked
-reset button has to be hit to refresh the game */


///for OOP make board a constuctor

let stopClickFunction = false
let boxes = Array.from(document.querySelectorAll('.box'))
    boxes.forEach (function (box){
    box.addEventListener('click', playerClicks)
})
 document.querySelector('#reset').addEventListener('click', clearGame)


function playerClicks (event) {

    //check if the box has a value
    if (event.target.innerText === 'X') {
        return 'X'
    }
    else if (event.target.innerText === 'O') {
        return 'O'
    }

    //set box content and update player turn. setting a value on the box based off of who's playing
    if (playersTurn == 'player1'){
        document.querySelector('#player').innerText = '1'
        if(stopClickFunction == false){
            event.target.innerText = 'X'
        }
        playersTurn = 'player2'
    }
    else if (playersTurn == 'player2'){
        document.querySelector('#player').innerText = '2'
        if(stopClickFunction == false){
            event.target.innerText = 'O'
        }
        playersTurn = 'player1'
    }
    let gameBoard = 
    [[boxes[0].innerHTML,boxes[1].innerHTML,boxes[2].innerHTML],
    [boxes[3].innerHTML, boxes[4].innerHTML, boxes[5].innerHTML],
    [boxes[6].innerHTML,boxes[7].innerHTML, boxes[8].innerHTML]]
    console.log(gameBoard) 

    //check for win
    let winner = checkForWin(gameBoard)
    console.log(winner)
    document.querySelector('#winner').innerText = winner
    //prevent anything but resetting the game
}

function checkForWin (gameBoard) {
    

    for (let i = 0; i < 3; i++){
        if(gameBoard[0][i]=== 'O' && gameBoard[1][i] === 'O' && gameBoard[2][i] === 'O'){
            turnEverythingGold()
            return ('2 ')
        }
        if(gameBoard[0][i]=== 'X' && gameBoard[1][i] === 'X' && gameBoard[2][i] === 'X'){
            turnEverythingGold()
            return ('1 ')
        }
    }
    for (let i = 0; i < 3; i++){
        if(gameBoard[i][0]=== 'O' && gameBoard[i][1] === 'O' && gameBoard[i][2] === 'O'){
            turnEverythingGold()
            return ('2 ')
        }
        if(gameBoard[i][0]=== 'X' && gameBoard[i][1] === 'X' && gameBoard[i][2] === 'X'){
            turnEverythingGold()
            return ('1 ')
        }
    }
        if(gameBoard[0][0]=== 'O' && gameBoard[1][1] === 'O' && gameBoard[2][2] === 'O'){
            turnEverythingGold()
            return ('2 ')
        }
        if(gameBoard[2][0]=== 'O' && gameBoard[1][1] === 'O' && gameBoard[0][2] === 'O'){
            turnEverythingGold()
            return ('2 ')
        }
        if(gameBoard[0][0]=== 'X' && gameBoard[1][1] === 'X' && gameBoard[2][2] === 'X'){
            turnEverythingGold()
            return ('1 ')
        }
        if(gameBoard[2][0]=== 'X' && gameBoard[1][1] === 'X' && gameBoard[0][2] === 'X'){
            turnEverythingGold()
            return ('1 ')
        }
    return ('')
    
}

function turnEverythingGold(){
    boxes[0].style.background = 'gold'
    boxes[1].style.background = 'gold'
    boxes[2].style.background = 'gold'
    boxes[3].style.background = 'gold'
    boxes[4].style.background = 'gold'
    boxes[5].style.background = 'gold'
    boxes[6].style.background = 'gold'
    boxes[7].style.background = 'gold'
    boxes[8].style.background = 'gold'
    stopClickFunction = true
}


//fill in boxes background when there is a win

//reset function


function clearGame(){
    document.querySelectorAll('.box').forEach 
    (function (box){
        box.innerText = ""
        document.querySelector('#winner').innerText =" "
        document.querySelector('#player').innerText ="X"
    })
    alert('Thanks for playing!')
    stopClickFunction = false
    boxes[0].style.background = 'red'
    boxes[1].style.background = 'red'
    boxes[2].style.background = 'red'
    boxes[3].style.background = 'red'
    boxes[4].style.background = 'red'
    boxes[5].style.background = 'red'
    boxes[6].style.background = 'red'
    boxes[7].style.background = 'red'
    boxes[8].style.background = 'red'
}

let playersTurn = 'player1' 


