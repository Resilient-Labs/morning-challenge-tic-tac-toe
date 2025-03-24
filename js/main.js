document.querySelector('div').addEventListener('click', onUserSelectBox)

const board = ["1-1", "1-2", "1-3","2-1", "2-2", "2-3","3-1", "3-2", "3-3"]
const isBoxEmpty = target => target.innerText === ""
let moves = 0

function computerMove() {
    console.log("computer has moved")
    let hasNotMoved = true
    while (hasNotMoved) {
        const index = Math.floor(Math.random() * 9)
        const selectedBox = document.getElementById(board[index])
        
        if (isBoxEmpty(selectedBox)){
            selectedBox.innerText = "O"
            if (didWin("O")) {
                alert("Computer wins!")
                return;
            }
            moves += 2
            hasNotMoved = false
        }
    }
}

function onUserSelectBox(e) {
    const { target } = e

    if (isBoxEmpty(target)){
        target.innerText = "X"

        if (didWin("X")) {
            alert("Congrats! You won!")
            return;
        }

        if (moves !== board.length - 1){
            console.log(moves)
            setTimeout(computerMove, 200)
        }
    } 
}

function didWin(symbol) {
    const boxes = document.querySelectorAll(".boardBox")
    if        (boxes[0].innerText === symbol && boxes[1].innerText === symbol && boxes[2].innerText === symbol) {
        return true
    } else if (boxes[3].innerText === symbol && boxes[4].innerText === symbol && boxes[5].innerText === symbol) {
        return true
    } else if (boxes[6].innerText === symbol && boxes[7].innerText === symbol && boxes[8].innerText === symbol) {
        return true
    } else if (boxes[0].innerText === symbol && boxes[3].innerText === symbol && boxes[6].innerText === symbol) {
        return true
    } else if (boxes[1].innerText === symbol && boxes[4].innerText === symbol && boxes[7].innerText === symbol) {
        return true
    } else if (boxes[2].innerText === symbol && boxes[5].innerText === symbol && boxes[8].innerText === symbol) {
        return true
    } else if (boxes[0].innerText === symbol && boxes[4].innerText === symbol && boxes[8].innerText === symbol) {
        return true
    } else if (boxes[6].innerText === symbol && boxes[4].innerText === symbol && boxes[4].innerText === symbol) {
        return true
    }
}


