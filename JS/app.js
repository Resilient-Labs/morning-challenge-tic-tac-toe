//sat with my house with a mentor, Cory, and worked through this code a bit

//the player will be playing an animal emoji tictactoe
//these are the animal emoji's that will be used 🐯&🦁

//both players will start with a score of zero
let score1 = 0
let score2 = 0
const playScore1 = document.querySelector('.playScore1')
const playScore2 = document.querySelector('.playScore2')
const rstBtn = document.querySelector('.btnReset')
const clrBtn =document.querySelector('.btnClear')

//players have the option between the emoji's
const player1 = '🐯'   //X
const player2 = '🦁'   //O


//turn the table to an array
let cells = document.querySelectorAll('.square')
console.log(cells) //tester
cells = Array.from(cells)


//toggling between between each player
//defining the game class
class Game{
    
    constructor(){
        //property
        this.player = '🐯'
        //property for cells
        this.cells = Array.from(cells)

        //this add eventlistener's to each of the cells
        for(let cell of this.cells){
            cell.addEventListener('click', (e) => this.switchTurns(e))
            // console.log(cell, 'emoji')
        }
    }
    //actually toggles between each player
    switchTurns(e){
        //checks to see if a player selected the square
        if(e.target.innerText != '🐯' && e.target.innerText != '🦁'){
            //when checked it then switches the players
            this.player === '🐯' ? this.player = '🦁' : this.player = '🐯'
            // the e. target will then update the square with the emoji of whoever's turn it is
            e.target.innerText = `${this.player}`
            //next you have to check for a winner or tie
            const winner = this.checkWin() //winner
            const cellsFilled = this.cells.every(cell => cell.innerText !== '') //tied
            if (winner) {
            // disable cells so game can't continue
                for (let cell of this.cells) {
                 cell.removeEventListener('click', this.switchTurns)
                }
                // update scores and alerts the winner
                if (winner === '🐯') {
                    score1++
                    playScore1.textContent = score1
                    alert('🐯 wins!')
                    
                }else{
                    score2++
                    playScore2.textContent = score2
                    alert('🦁 wins!')  
                }   
            }
            //shows an alert of a tie if no one wins
            //made the else if statement outside of the if conditional, before it was inside but once I put it outside VSC liked it again, which was weird. I have no idea why this works.
            else if(cellsFilled){
                alert('No one wins!')
                // this.reset()
            }
        //goes to the next player after the other players turn
        return this.player
        }
    }
    //check to see who wins between the players
    checkWin = function(){
        //Possible winning combo's, I did look these combo's up because I could only figure out 5 of them.
        const winningCells = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ]
        //the winner variable is set to null because there is no winner yet 
        let winner = null
        //loop through each of the cells to find winning combo
        for (let i = 0; i < winningCells.length; i++) {
            //wanted to know what this was called specifically and it's called destructuring assignment statement
            const [a, b, c] = winningCells[i] //compares the winning indexs to what is on my board
            //
            const cellA = cells[a].innerText //retrieves input in cell and assigns it to the variable (ex:🐯 = cellA )
            const cellB = cells[b].innerText
            const cellC = cells[c].innerText
            //tells the program to skip the cells that are empty ang go to next combo
             if (cellA === '' || cellB === '' || cellC === '') {
                //continue keeps going through the combos until it finds cells that hold the same value; learned about this through watching a youtube video and reading MDN
                 continue
             }
             //tells the computer that if all cells have the same value, then it's a winner
             if (cellA === cellB && cellB === cellC) {
                winner = cellA
                //add break to get out of the loop, just learned about this through watching a youtube video and reading MDN
                break
             }
         }
        return winner
    }
    //it resets the game when commented out the reset didn't work
    reset(){
        //loop through the cells and clears them
        for (let cell of this .cells){
            cell.innerText = ''
        }
        //player one then has there turn first every new game
        //*** this needs to get fixed to whoever won the last game
        this.player = player1
    }
}

//this inistiates the Game class and actually starts a new game
let game = new Game()


//add an eventlistener for the reset btn
rstBtn.addEventListener('click', () => {
    game.reset()
    //resets the scores
    score1 = 0
    score2 = 0
    //updates the score display
    playScore1.innerText = score1
    playScore2.innerText = score2
})

// add an event listener to the clear button
clrBtn.addEventListener('click', () =>{
    // loops through the cells and clears the emoji's from them
    for (let cell of cells){
        //clears the emoji's from the current cells
        cell.innerText =''
    }
})




