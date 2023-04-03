class gameRules{

    checkDraw(){
        let draw = cells.every((element,index) => cells[index].innerText == "X" || cells[index].innerText == "O")
        if(draw){
            // document.querySelector("#message").classList.remove("hidden")
            document.querySelector("#message").innerText = "Draw"
        }
    }
    
    checkWin(){
        if(cells[0].innerText==currentPlayer&&cells[1].innerText==currentPlayer&&cells[2].innerText==currentPlayer){
            // document.querySelector("#message").classList.remove("hidden")
            document.querySelector("#message").innerText = `${currentPlayer} Wins!`
        }else if(cells[3].innerText==currentPlayer&&cells[4].innerText==currentPlayer&&cells[5].innerText==currentPlayer){
            // document.querySelector("#message").classList.remove("hidden")
            document.querySelector("#message").innerText = `${currentPlayer} Wins!`
        }else if(cells[6].innerText==currentPlayer&&cells[7].innerText==currentPlayer&&cells[8].innerText==currentPlayer){
            // document.querySelector("#message").classList.remove("hidden")
            document.querySelector("#message").innerText = `${currentPlayer} Wins!`
        }else if(cells[0].innerText==currentPlayer&&cells[3].innerText==currentPlayer&&cells[6].innerText==currentPlayer){
            // document.querySelector("#message").classList.remove("hidden")
            document.querySelector("#message").innerText = `${currentPlayer} Wins!`
        }else if(cells[1].innerText==currentPlayer&&cells[4].innerText==currentPlayer&&cells[7].innerText==currentPlayer){
            // document.querySelector("#message").classList.remove("hidden")
            document.querySelector("#message").innerText = `${currentPlayer} Wins!`
        }else if(cells[2].innerText==currentPlayer&&cells[5].innerText==currentPlayer&&cells[8].innerText==currentPlayer){
            // document.querySelector("#message").classList.remove("hidden")
            document.querySelector("#message").innerText = `${currentPlayer} Wins!`
        }else if(cells[0].innerText==currentPlayer&&cells[4].innerText==currentPlayer&&cells[8].innerText==currentPlayer){
            // document.querySelector("#message").classList.remove("hidden")
            document.querySelector("#message").innerText = `${currentPlayer} Wins!`
        }else if(cells[2].innerText==currentPlayer&&cells[4].innerText==currentPlayer&&cells[6].innerText==currentPlayer){
            // document.querySelector("#message").classList.remove("hidden")
            document.querySelector("#message").innerText = `${currentPlayer} Wins!`
        }
    }
    // document.querySelector(".hiddenMessage").classList.remove("hidden")
    // document.querySelector("#message").innerText = `${currentPlayer} Wins!`
    // endgame(){
    //     cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)))
    // }
    
}


let currentPlayer = "X"

let cells = document.querySelectorAll("#cells")
cells = Array.from(cells)
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if(cell.innerText != ""){
            return
        }

        cell.innerText = currentPlayer

        let rules = new gameRules()
        rules.checkDraw()
        rules.checkWin()
        // rules.newGame()

        currentPlayer = currentPlayer == "X" ? "O" : "X"
    })
})

// let rules = new gameRules()
document.getElementById("restart").addEventListener("click",newGame)

function newGame(){
    cells.forEach(cell => { cell.innerText = " "})
    document.querySelector("#message").innerText = ""
    currentPlayer = "X"
}