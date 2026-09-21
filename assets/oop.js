const theWinner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

class gameBoard {
    constructor(){
        this.blocks = ['','','','','','','','','']
    }
    place(index, mark){
        if (index < 0 || index > 8 || this.blocks[index] !== ''){

        }
        this.blocks[index] = mark
        return true
    }
    winnerDinner(){
        for (const [a,b,c] of theWinner){
            const mark = this.blocks[a]
            if (mark && mark === this.blocks[b] && mark === this.blocks[c]){
                return mark
            }
        }
        return null
    }
    isFull(){
        return this.blocks.every((block) => block === 'X' || block === 'O')
    }
    reset(){
        this.blocks = ['','','','','','','','','']
    }
}

class Game{
    constructor(){
        this.gameBoard = new gameBoard()
        this.tacPlayer = 'X' // The first player always starts with 'X'
        this.gameOver = false // true if there is a Win or Tie
    }
    play(index){
        if (this.gameOver){
            return {placed: false} // This is a flag, Ignores clicks after the match is over.
        } if (!this.gameBoard.place(index, this.tacPlayer)){

        }
        const winnerDinner = this.gameBoard.winnerDinner()
        if (winnerDinner) {
            this.gameOver = true
            return {placed: true, winnerDinner} // This runs before a tie is declared
        }
        if (this.gameBoard.isFull()){
            this.gameOver = true
            return {placed: true, draw: true}
        }
        this.tacPlayer = this.tacPlayer === 'X' ? 'O' : 'X'
        return {placed: true}
    }
    resetBoard(){
        this.gameBoard.reset()
        this.tacPlayer = 'X'
        this.gameOver = false
    }
}

class GrabDisplay{
    constructor(Game){
        this.game = Game
        this.blocks = Array.from(document.querySelectorAll('#cell'))
        this.overlay = document.querySelector('h2')
        this.resetBtn = document.querySelector('button')
    }
    bind(){             // This is to wire click eventListeners
        this.blocks.forEach((block) => {
            block.addEventListener('click', () => {
                const index = Number(block.dataset.index)
                const result = this.game.play(index)
                // Move was rejected, occupied square, or game was over
                if (!result.placed) {
                    return
                }
                this.render(this.game.gameBoard) //This syncs the visable board with the board array
                if (result.winnerDinner){
                    this.showResults(`${result.winnerDinner} Wins!`)
                } else if (result.draw){
                    this.showResults(`It's a draw`)
                }
            })
        })
        this.resetBtn.addEventListener('click', () => {
            this.game.resetBoard()
            this.render(this.game.gameBoard)
            this.hideResult()
        })
    }
    render(gameBoard) {
        this.blocks.forEach((block, index) => {
            block.innerText = gameBoard.blocks[index]
        })
    }
    showResults(overlay) {
        this.overlay.innerText = overlay
    }
    hideResult() {
        this.overlay.innerText = ''
    }
}

const game = new Game()
const display = new GrabDisplay(game)
display.bind()