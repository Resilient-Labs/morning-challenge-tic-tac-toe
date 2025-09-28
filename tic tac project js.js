

const board = document.querySelector(".juego");
const display = document.querySelector("#infor");
const grid = [
    "", "", "",
    "", "", "",
    "", "", ""
]

const upperLeft = document.getElementById("upperLeft")
const upperMiddle = document.getElementById("upperMiddle")
const upperRight = document.getElementById("upperRight")
const middleLeft = document.getElementById("middleLeft")
const middleMiddle = document.getElementById("middleMiddle")
const middleRight = document.getElementById("middleRight")
const bottomLeft = document.getElementById("bottomLeft")
const bottomMiddle = document.getElementById("bottomMiddle")
const bottomRight = document.getElementById("bottomRight")
const alerts = document.getElementById("alerts")

// this vaiable is going to hold x or o depending on whos turn is it.

let turn = "X"
let numberOfTurns = 0

// upperLeft.addEventListener("click", takeTurn(upperLeft))
// upperMiddle.addEventListener("click", takeTurn(upperMiddle))
// upperRight.addEventListener("click", takeTurn(upperRight))
// middleLeft.addEventListener("click", takeTurn(middleLeft))
// middleMiddle.addEventListener("click", takeTurn(middleMiddle))
// middleRight.addEventListener("click", takeTurn(middleRight))
// bottomLeft.addEventListener("click", takeTurn(bottomLeft))
// bottomMiddle.addEventListener("click", takeTurn(bottomMiddle))
// bottomRight.addEventListener("click", takeTurn(bottomRight))


function takeTurn(square) {

    //if we have a winner then return
    if (alerts.innerText === "WINNER!") {
        return;
    } else {
        //set to the letter if the square is empty
        if (square.innerText === "") {
            square.innerText = turn

            if (turn === "X") {
                turn = "O"
            } else {
                turn = "X"

            }

            numberOfTurns++
            if (numberOfTurns >= 5) {
                checkForWinner()
            }
        }
    }
}

function checkForWinner() {
    let upperLeftText = upperLeft.innerText
    let upperMiddleText = upperMiddle.innerText
    let upperRightText = upperRight.innerText
    let middleLeftText = middleLeft.innerText
    let middleMiddleText = middleMiddle.innerText
    let middleRightText = middleRight.innerText
    let bottomLeftText = bottomLeft.innerText
    let bottomMiddleText = bottomMiddle.innerText
    let bottomRightText = bottomRight.innerText

    const squaresArray = [upperLeftText,
        upperMiddleText,
        upperRightText,
        middleLeftText,
        middleMiddleText,
        middleRightText,
        bottomLeftText,
        bottomMiddleText,
        bottomRightText]

    //winning combinations
    //each row upperLeft, upperMiddle, upperRight
    //each column upperLeft, middleLeft, bottomLeft
    //2 diagonals upperLeft, middleMiddle, bottomRight and upperRight, middleMiddle, bottomLeft
    if (upperLeftText === upperMiddleText && upperMiddleText === upperRightText) {
        if (upperLeftText !== "" && upperMiddleText !== "" && upperRightText !== "") {
            alerts.innerText = "WINNER!"
            return
        }
    } else if (middleLeftText === middleMiddleText && middleMiddleText === middleRightText) {
        if (middleLeftText !== "" && middleMiddleText !== "" && middleRightText !== "") {
            alerts.innerText = "WINNER!"
            return
        }
    } else if (bottomLeftText === bottomMiddleText && bottomMiddleText === bottomRightText) {
        if (bottomLeftText !== "" && bottomMiddleText !== "" && bottomRightText !== "") {
            alerts.innerText = "WINNER!"
            return
        }
    } else if (upperLeftText === middleLeftText && middleLeftText === bottomLeftText) {
        if (upperLeftText !== "" && middleLeftText !== "" && bottomLeftText !== "") {
            alerts.innerText = "WINNER!"
            return
        }
    } else if (upperMiddleText === middleMiddleText && middleMiddleText === bottomMiddleText) {
        if (upperMiddleText !== "" && middleMiddleText !== "" && bottomMiddleText !== "") {
            alerts.innerText = "WINNER!"
            return
        }
    } else if (upperRightText === middleRightText && middleRightText === bottomRightText) {
        if (upperRightText !== "" && middleRightText !== "" && bottomRightText !== "") {
            alerts.innerText = "WINNER!"
            return
        }
    } else if (upperLeftText === middleMiddleText && middleMiddleText === bottomRightText) {
        if (upperLeftText !== "" && middleMiddleText !== "" && bottomRightText !== "") {
            alerts.innerText = "WINNER!"
            return
        }
    } else if (upperRightText === middleMiddleText && middleMiddleText === bottomLeftText) {
        if (upperRightText !== "" && middleMiddleText !== "" && bottomLeftText !== "") {
            alerts.innerText = "WINNER!"
            return
        }
    }

    if (numberOfTurns === 9) {
        alerts.innerText = "Tie"
    }

}

function resetBoard() {
    upperLeft.innerText = ""
    upperMiddle.innerText = ""
    upperRight.innerText = ""
    middleLeft.innerText = ""
    middleMiddle.innerText = ""
    middleRight.innerText = ""
    bottomLeft.innerText = ""
    bottomMiddle.innerText = ""
    bottomRight.innerText = ""
    turn = "X"
}




// function tictacBoard() {
//     grid.forEach((cell, index) => {
//         const addDiv = document.createElement("div")
//         addDiv.classList.add("sqr")
//         board.append(addDiv)

//     })
// }
// tictacBoard()