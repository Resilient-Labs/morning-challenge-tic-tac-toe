const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 8]
]

class Board {
    constructor() {
        this.cells = ['', '', '', '', '', '', '', '', '']
    }

    place(index, mark) {
        if (index < 0 || index > 8 || this.cells[index] !== '') {
            return false
        }
        this.cells[index] = mark
        return true
    }
    winnerDinner() {
        for (const [a, b, c] of winner) {
            const mark = this.cells[a]
            if (mark && mark === this.cells[b] && mark === this.cells[c]) {
                return mark
            }
        }
        return null
    }
    isFull() {
        return this.cells.every((cell) => cell === 'x' || cell == 'o')
    }
    reset() {
        this.cells = ['', '', '', '', '', '', '', '', '']
    }
}

class Game {
    constructor() {
        this.board = new Board()
        this.currentPlayer = 'x'
        this.isOver = false
    }
    play(index) {
        if (this.isOver) {
            return { placed: false }
        } if (!this.board.place(index, this.currentPlayer)) {
            return { placed: true }
        }
        const winnerDinner = this.board.winnerDinner()
        if (winnerDinner) {
            this.isOver = true
            return { placed: true, winnerDinner }
        }
        if (this.board.isFull()) {
            this.isOver = true
            return { placed: true, draw: true }
        }
        this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x'
        return { placed: true }
    }
    restart() {
        this.board.reset()
        this.currentPlayer = 'x'
    }
}

class Display {
    constructor(game) {
        this.game = game
        this.cells = Array.from(document.querySelectorAll('.box'))
        this.message = document.querySelector('h2')
        this.restartBtn = document.querySelector('button')
    }
    bind() { //this is to attach click event listeners
        this.cells.forEach((cell) => {
            cell.addEventListener('click', () => {
                const index = Number(cell.dataset.index)
                const result = this.game.play(index)
                //the move was rejected, occupied square if the game was over
                if (!result.placed) {
                    return
                }
                //this syncs the visible board with the board array
                this.render(this.game.board)
                if (result.winnerDinner) {
                    this.showResults(`${result.winnerDinner} wins! Let's gooooo.`)
                } else if (result.draw) {
                    this.showResults(`It's a draw.`)
                }
            })
        })
        this.restartBtn.addEventListener('click', () => {
            this.game.restart()
            this.render(this.game.board)
            this.hideResult()
        })
    }
    render(board) {
        this.cells.forEach((cell, index) => {
            cell.innerText = board.cells[index]
        })
    }
    showResults(message) {
        this.message.innerText = message
    }
    hideResult() {
        this.message.innerText = ''
    }
}

const game = new Game()
const display = new Display(game)
display.bind()