//Declare var winner array
const winner = [
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [0,1,8]
]

//game board 
class GameBoard {
    constructor(){
        this.cells = ['','','','','','','','','']
    }
    //methods
    place(index,mark){
        //make sure it is empty if we start the new game 
        if ( index < 0 || index > 8 || this.cells[index] !== '' ) {
            return false
        }
        this.cells[index] = mark
        return true    
    }
    //winner method - for loop 
    winnerDinner(){
        for ( const [a, b, c] of winner ){
            const mark = this.cells[a]
            if (mark && mark === this.cells[b] && mark === this.cells[c]){
                //return the winner name
                return mark
            }
        }
        //given condition for loop to stop
        return null
    }
    //check if all 9 cells mark
    isFull(){
        return this.cells.every( (cell) => cell === 'X' || cell === 'O' )
    } 
    //reset method
    reset(){
        this.cells = ['','','','','','','','','']
    }

}

class Game {
    constructor(){
        this.board = new GameBoard()
        this.player = 'X'
        //since it is started, we set the default as false
        this.isGameOver = false 
        
    }
    //game methods
    play(index){
        if (this.isGameOver){
            return {placed:false} //for preventing cell can be marked even that winning result out
        }if ( !this.board.place(index, this.player)){
            return { placed: false }
        }
        const winnerDinner = this.board.winnerDinner()
        if ( winnerDinner ){
            this.isGameOver = true
            return { placed:true, winnerDinner  }
        }
        if ( this.board.isFull()){
            this.isGameOver = true
            return { placed:true, draw: true  }
        } 
        this.player = this.player === 'X'?'O':'X'
        return {placed: true}
    }
    
    resetBoard(){
        this.board.reset()
        this.player = 'X'
        this.isGameOver = false
    }

}

class Display{
    constructor(Game){
        this.game = Game
        this.cells = Array.from(document.querySelectorAll('.box'))
        this.display = document.querySelector('h2')
        this.resetBtn = document.querySelector('button')
    }
    //method
    //connecting the click event listener
    bind(){
        this.cells.forEach((cell) => {
            cell.addEventListener('click',()=>{
                const index = Number(cell.dataset.index)
                const result = this.game.play(index)
                if( !result.placed ){
                    return 
                }
                this.render(this.game.board)
                if ( result.winnerDinner ){
                    this.showResult(`${result.winnerDinner} wins`)
                }else if ( result.draw ){
                    this.showResult(`it is a draw!!`)
                }
            })
        })
        this.resetBtn.addEventListener('click',( )=>{
            this.game.resetBoard()
            this.render(this.game.board)
            this.hideResult()
        })
    }
    render(board){
        this.cells.forEach((cell,index) => {
            cell.innerText = board.cells[index]
        } )
    }
    showResult( display ){
        this.display.innerText = display
    }
    hideResult(){
        this.display.innerText = ''
    }
}

const game = new Game()
const display = new Display(game)
display.bind()