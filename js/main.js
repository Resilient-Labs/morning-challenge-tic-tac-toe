 // player clicks on part of grid, it changes to X
 // another player clicks, it changes to O
 // choices get added to an array depending on which row
 // if they get the X or O horizontally, vertically or diagonally 3 times they win. 
 // show in DOM

let currentPlayer = 'x'
let choices = [
              ['', '', ''],             // ['0', '1', '2'], row 0      ['0,0', '0,1', '0,2'], row 0
              ['', '', ''],             // ['3', '4', '5'], row 1      ['1,0', '1,1', '1,2'], row 0
              ['', '', '']]             // ['6', '7', '8']] row 2      ['2,0', '2,1', '2,2'], row 0
                                        //  c0   c1   c2                c0      c1      c2
let count = 0

document.querySelector('.container').addEventListener('click', choose)
 // collect choice and update array
 // then update selection in DOM
function choose(event){
    count++
    console.log(event.target.id)
    event.target.innerHTML = currentPlayer

    let choice = Number(event.target.id) // gets which box in the grid they chose
    let row = Math.floor(choice / 3)
    let column = choice % 3

    choices[row][column] = currentPlayer
    console.log(choices)
    endGame() // checks for win, then draw
    switchPlayer()
}

 function switchPlayer(){
    if (currentPlayer === 'x'){
        currentPlayer = 'o'
    } else {
        currentPlayer = 'x'
    }
 }

function checkIfWon(){
    // check if all the choices in a row are the same and not an empty string
    // check for column
    // check for diagonals
    for(let i=0; i < choices.length; i++){
        //checks each row
        if (choices[i][0] === choices[i][1] && choices[i][1] === choices[i][2] && choices[i][0] != ''){
            return true
        // checks each column
        } else if (choices[0][i] === choices[1][i] && choices[1][i] === choices[2][i] && choices[0][i] != ''){
            return true
        }
    }
    // check diagonal
    if (choices[0][0] === choices[1][1] && choices[2][2] === choices[1][1] && choices[0][0] != ''){
        return true
    } else if (choices[0][2] === choices[1][1] && choices[1][1] === choices[2][0] && choices[0][2] != ''){
        return true
    }

    return false
}
 // result of winning or tying
function endGame(){
    if (checkIfWon()){
        alert(`Player ${currentPlayer} won!`)
        clearGrid()
    } else if (count === 9){
        alert("You both tied")
        clearGrid()
    }
}

function clearGrid(){
    // resets # of tries, player selection and grid
    count = 0
    currentPlayer = 'x'
    choices = [
                  ['', '', ''],
                  ['', '', ''],
                  ['', '', '']]
    // reset grid on website
}

 // update DOM with who won

 