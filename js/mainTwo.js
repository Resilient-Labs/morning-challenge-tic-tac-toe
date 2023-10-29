class Board{
    constructor(){
        this.cells = ['','','','','','','','','']
    }

    setCell(index, player){
        this.cells[index] = player
    }

    checkForWin(){
        let win = false
        const winningCombos = [
            [0,1,2] , [3,4,5] , [6,7,8] ,
            [0,3,6] , [1,4,7] , [2,5,8] ,
            [0,4,8] , [2,4,6] 
        ]
    
        winningCombos.forEach(array => {
            if (array.every(x => this.cells[x] === "X")){
                win = true
            }
    
            else if (array.every(x => this.cells[x] === "O")){
                win = true
            }
        })
        return win
    }

    checkForDraw(){
        return this.cells.every(cell => cell)
        // cell.length (if it is 1, then it is a true statrement , if it is 0 it is false) 
        // an emtpy string is false hence why we can just set it to cell
    }

    clear(){
        this.cells = ['','','','','','','','','']
    }
}

let b = new Board()


let player = "X"
let cells = document.querySelectorAll(".cells")
allCells = Array.from(cells)

let info = document.querySelector("p")

allCells.forEach((cell,index) => {
    cell.addEventListener("click", () => {
        if (cell.innerText != "" || b.checkForWin()){
            return
        }
        cell.innerText = player

        b.setCell(index,player)

        player = player == "X" ? "O" : "X"
        info.textContent = `It is now ${player}'s turn`

        checkScore()
    })
})


function checkScore(){
    if(b.checkForWin()){
        info.textContent = `~ ${player == "X" ? "O" : "X"} WINS ~ Hit restart to play again`
    }

    else if (b.checkForDraw()){
        info.textContent = "It's a draw! Hit restart to play again"

    }
}


document.querySelector("button").addEventListener("click", restart)

function restart(){
    allCells.forEach(cell => cell.innerText = "")
    info.textContent = "Player 1: Begin selecting a cell. Player 2: You're next ~"
    b.clear()
}

