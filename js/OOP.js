

class Board {
    constructor(){
        this.cell = new Array(9).fill("")
        this.player = "X"
        this.isOver = false 

        // holds the selector for playing around with the score
        this.scoreContainerX = document.querySelector("#scoreX")
        this.scoreContainerO = document.querySelector("#scoreO")

        // handles score
        this.scoreX = 0 
        this.scoreO = 0

        this.winningMatches = [ 
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6 ,7 ,8 ] ,
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ],
    [ 0 , 3,  6 ]
        ] 
        this.squares = document.querySelectorAll(".box")
        this.newGameBtn = document.querySelector("button")


        this.bind()
    } 

    bind() {
        this.squares.forEach((sqaure)=>{
            sqaure.addEventListener("click", () => {
                // we need to read the cell as its being targeted with the click 
                this.rules(Number(sqaure.dataset.index)) 
            })
        })

            // reset the game 
            this.newGameBtn.addEventListener("click", ()=>{
                this.newGame()
            })
        
    }
    
    rules(index){
        if(this.isOver || this.cell[index]!==""){
            return
        } 

        // player assignment
        this.cell[index] = this.player // whats stored in the cell
        this.squares[index].textContent = this.player // 

        // use some -> to check atleast there is one matche that satisfy the wiining logic 
        // use every -> to check whether those cell are excatly the same player type ["x","x","x"]
        const winner = this.winningMatches.some((iWin)=>{
            return iWin.every((combination)=>this.cell[combination]===this.player)
        })
        
        //tie check
        const tie = this.cell.every((checkCell)=>checkCell!=="")

         // check winner and tie logic
        if(winner || tie){
        this.isOver = true // now the game is end b/c its either win or draw

        // when we get winner update the player score 
        if(winner){
            this.player==="X" ? this.scoreContainerX.textContent = this.scoreX+=1 : this.scoreContainerO.textContent = this.scoreO+=1
        }

        // tie 
        else{
        alert("TOUGH GAME ! TIE ")
        }

    } else{
        this.player= this.player==="X" ? "O" : "X"  // player turn rotation
    }
    }

   

    newGame(){
        this.cell = new Array(9).fill("")
        this.player = "X"
        this.isOver = false 

       this.squares.forEach((squ)=>{
        squ.innerHTML = ""
       })


    }
}


const TicTacToe = new Board()