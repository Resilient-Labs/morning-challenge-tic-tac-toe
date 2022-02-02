//variables
const gameboardSquares = document.querySelectorAll('.gameboardsquare');
const gameboard = document.querySelector('#gameboard');
const gamestatus = document.querySelector('#winnerOrTie')
gamestatus.innerHTML = ""


//OOP

const TicTacToegameboard = {
    clickNum: 0,
    newGame: function (){
        //array to hold the squares
        this.squares = []
        //for loop to create the squares needed for the board and put them into the array
        for(let i = 0; i < 9; i++){
            //s = new square
            const s = new Square()
            this.squares.push(s)
            // this.squares[i].setID(i) <--- these two (line below) lines do the same thing 
            //tells s to set it's ID to i
            s.setID(i)
        }
        //bind is saying whenever the clickhandler is run "this" refers to ticTacToegameboard instead of the event.target 
        this.clickHandler = this.clickHandler.bind(this)
        gameboard.addEventListener('click', this.clickHandler)
        this.restartGame = this.restartGame.bind(this)
        document.querySelector('.restartGame').addEventListener('click', this.restartGame)
    },

    clickHandler: function(event) {
        if(!event.target.innerHTML){
                        
            this.clickNum += 1
        
            if (this.clickNum % 2 === 0) {
                // event.target.innerHTML = "O"
                this.squares[event.target.id].setPlayer("O")
            }else{
                this.squares[event.target.id].setPlayer("X");
            }
        
            let win = TicTacToegameboard.checkWinner()

            if(win === "tie"){
                gamestatus.innerHTML = "There's a tie!"
            }else if(win){
                gamestatus.innerHTML = `Player ${win} is winner!!!`
            }    
        }
    },

    checkWinner: function() {
        let win = this.checkEqualSquares(0,1,2)
        
        if(win){
            return win
        }
    
        win = this.checkEqualSquares(3,4,5)
        if(win){
            return win
        }
    
        win = this.checkEqualSquares(6,7,8)
        if(win){
            return win
        }
    
        win = this.checkEqualSquares(0,3,6)
        if(win){
            return win
        }
    
        win = this.checkEqualSquares(1,4,7)
        if(win){
            return win
        }
    
        win = this.checkEqualSquares(2,5,8)
        if(win){
            return win
        }
    
        win = this.checkEqualSquares(0,4,8)
        if(win){
            return win
        }
        win = this.checkEqualSquares(2,4,6)
        if(win){
            return win
        }
        
        if(this.clickNum === 9){
            return 'tie'
        }
    
        return null
    },

    checkEqualSquares: function(square1, square2, square3){
        if (this.squares[square1].getPlayer() === this.squares[square2].getPlayer() 
            && this.squares[square2].getPlayer()  === this.squares[square3].getPlayer() 
            && this.squares[square1].getPlayer() !== ''){
            return this.squares[square1].getPlayer() 
        }else{
            return null
        }
    },

    restartGame: function(){
        this.newGame()
        // for(let i = 0; i < gameboardSquares.length; i++){
        //     gameboardSquares[i].innerHTML = ""
        // }  
        // gamestatus.innerHTML = ""
    },

}

//class for squares 
class Square {
    //find out what's inside square
    getPlayer(){
        return this.htmlElement.innerHTML
    }
    
    //which id the square has so it can find itself 
    setID(id){
        this.id = id
        this.htmlElement = document.getElementById(id)
        console.log(this.id, this.htmlElement)
        this.setPlayer('')
    }
    //telling the square what player it is
    setPlayer(player){
        this.htmlElement.innerHTML = player 

    }
}


//a call when page loads to set intialize the gameboard
TicTacToegameboard.newGame()





// document.querySelector('.restartGame').addEventListener('click', ticTacToegameboard.restartGame)



//Pseudo Code from House Cass
//a function that has an event listener for a click and produce an x, then immediately an event listener for a click that will produce o
//a function that declares the game over and shows the winner
//a function that declares when there is a tie
//a function to count the number of wins for each player and reset the game
//a function to clear to game and start over


//drafts of older code before making it OOP

// //a function for when the gameboard is clicked
// function clickHandler(event) {
//     // event.target.innerHTML = "O"
//     if(!event.target.innerHTML){
//         clickNum += 1

//         if (clickNum % 2 === 0) {
//             event.target.innerHTML = "O"
//         }else{
//             event.target.innerHTML = "X"
//         }
    
//         let win = checkWinner()
//         if(win === "tie"){
//             gamestatus.innerHTML = "There's a tie!"
//         }else if(win){
//             gamestatus.innerHTML = `Player ${win} is winner!!!`
//         }    
//     } 
// }

// function checkWinner() {
//     let win = checkEqualSquares(0,1,2)
    
//     if(win){
//         return win
//     }

//     win = checkEqualSquares(3,4,5)
//     if(win){
//         return win
//     }

//     win = checkEqualSquares(6,7,8)
//     if(win){
//         return win
//     }

//     win = checkEqualSquares(0,3,6)
//     if(win){
//         return win
//     }

//     win = checkEqualSquares(1,4,7)
//     if(win){
//         return win
//     }

//     win = checkEqualSquares(2,5,8)
//     if(win){
//         return win
//     }

//     win = checkEqualSquares(0,4,8)
//     if(win){
//         return win
//     }
//     win = checkEqualSquares(2,4,6)
//     if(win){
//         return win
//     }
    
//     if(clickNum === 9){
//         return 'tie'
//     }

//     return null
// }

// function checkEqualSquares(square1, square2, square3){
//     if (gameboardSquares[square1].innerHTML === gameboardSquares[square2].innerHTML
//         && gameboardSquares[square2].innerHTML === gameboardSquares[square3].innerHTML
//         && gameboardSquares[square1].innerHTML !== ''){
//         return gameboardSquares[square1].innerHTML
//     }else{
//         return null
//     }
// }

// function restartGame(){
//     for(let i = 0; i < gameboardSquares.length; i++){
//         gameboardSquares[i].innerHTML = ""
//     }  
//     gamestatus.innerHTML = ""
// }




//older code

    // //top row
    // if (gameboardSquares[0].innerHTML === gameboardSquares[1].innerHTML
    //     && gameboardSquares[1].innerHTML === gameboardSquares[2].innerHTML
    //     && gameboardSquares[0].innerHTML !== '') {
    //     return gameboardSquares[0].innerHTML
    //     //middle row
    // } else if (gameboardSquares[3].innerHTML === gameboardSquares[4].innerHTML
    //     && gameboardSquares[4].innerHTML === gameboardSquares[5].innerHTML
    //     && gameboardSquares[3].innerHTML !== '') {
    //     return gameboardSquares[3].innerHTML
    //     //bottom row
    // } else if (gameboardSquares[6].innerHTML === gameboardSquares[7].innerHTML
    //     && gameboardSquares[7].innerHTML === gameboardSquares[8].innerHTML
    //     && gameboardSquares[6].innerHTML !== '') {
    //     return gameboardSquares[6].innerHTML
    //     //left column
    // } else if (gameboardSquares[0].innerHTML === gameboardSquares[3].innerHTML
    //     && gameboardSquares[3].innerHTML === gameboardSquares[6].innerHTML
    //     && gameboardSquares[0].innerHTML !== '') {
    //     return gameboardSquares[0].innerHTML
    //     //middle column
    // } else if (gameboardSquares[1].innerHTML === gameboardSquares[4].innerHTML
    //     && gameboardSquares[4].innerHTML === gameboardSquares[7].innerHTML
    //     && gameboardSquares[1].innerHTML !== '') {
    //     return gameboardSquares[1].innerHTML
    //     //right column
    // } else if (gameboardSquares[2].innerHTML === gameboardSquares[5].innerHTML
    //     && gameboardSquares[5].innerHTML === gameboardSquares[8].innerHTML
    //     && gameboardSquares[2].innerHTML !== '') {
    //     return gameboardSquares[2].innerHTML
    // //diagonals
    // } else if (gameboardSquares[0].innerHTML === gameboardSquares[4].innerHTML
    //     && gameboardSquares[4].innerHTML === gameboardSquares[8].innerHTML
    //     && gameboardSquares[0].innerHTML !== '') {
    //     return gameboardSquares[0].innerHTML
    // } else if (gameboardSquares[2].innerHTML === gameboardSquares[4].innerHTML
    //     && gameboardSquares[4].innerHTML === gameboardSquares[6].innerHTML
    //     && gameboardSquares[2].innerHTML !== '') {
    //     return gameboardSquares[2].innerHTML
    // }else{
    //     return null
    // }

//function checkEqualSquares 
//checkEqualSquares(0,1,2)
//
