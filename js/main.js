// create a player
// inform the box if its player X or O
// whose turn it is
// see who won
// alert a tie

let player = "X"

class Box {
    constructor(boxNumber){
        this.boxNumber = boxNumber
        this.space = ""
    }

    selectBox(){
        this.space = player
        console.log(this.boxNumber)
        console.log(player)
        document.querySelectorAll(".box")[this.boxNumber].innerText = player
        checkWhoWon()
        changePlayer()
    }
}

function changePlayer(){
    if(player === "O"){
        player = "X"
    } else{
        player = "O"
    }
}

let arr = []
for (let i = 0; i <= 8; i++){
    let nextBox = new Box(i) 
    arr.push(nextBox)
    console.log(nextBox)

    document.querySelectorAll(".box")[i].addEventListener("click", function(){
        nextBox.selectBox()
    })
}

function checkWhoWon(){
    if(arr[0].space === arr[1].space && arr[0].space === arr[2].space && arr[0].space === player){
        document.querySelector("h1").innerText = (` Player ${player} has won!`)
    } else if(arr[3].space === arr[4].space && arr[3].space === arr[5].space && arr[3].space === player){
        document.querySelector("h1").innerText = (` Player ${player} has won!`)
    } else if(arr[6].space === arr[7].space && arr[6].space === arr[8].space && arr[6].space === player){
        document.querySelector("h1").innerText = (` Player ${player} has won!`)
    } else if(arr[0].space === arr[3].space && arr[0].space === arr[6].space && arr[0].space === player){
        document.querySelector("h1").innerText = (` Player ${player} has won!`)
    } else if(arr[1].space === arr[4].space && arr[1].space === arr[7].space && arr[1].space === player){
        document.querySelector("h1").innerText = (` Player ${player} has won!`)
    } else if(arr[2].space === arr[5].space && arr[2].space === arr[8].space && arr[2].space === player){
        document.querySelector("h1").innerText = (` Player ${player} has won!`)
    } else if(arr[0].space === arr[4].space && arr[0].space === arr[8].space && arr[0].space === player){
        document.querySelector("h1").innerText = (` Player ${player} has won!`)
    } else if(arr[2].space === arr[4].space && arr[2].space === arr[6].space && arr[2].space === player){
        document.querySelector("h1").innerText = (` Player ${player} has won!`)
    } else if(arr[0].space.length + 
        arr[1].space.length + 
        arr[2].space.length + 
        arr[3].space.length + 
        arr[4].space.length + 
        arr[5].space.length + 
        arr[6].space.length + 
        arr[7].space.length + 
        arr[8].space.length === 9){
        document.querySelector("h1").innerText = (`There has been a tie!`)
        }

}
