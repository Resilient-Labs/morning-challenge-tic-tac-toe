


class Player {
    constructor(type) {
        this.type = type
    }
    assignPlayer1() {
        const player1 = new Player('x')
    }
}
const player1 = new Player('x')
const player2 = new Player('o')

class Box {
    constructor() {
        this.box1 = document.querySelector(`#box1`)
        this.box2 = document.querySelector(`#box2`)
        this.box3 = document.querySelector(`#box3`)
        this.box4 = document.querySelector(`#box4`)
        this.box5 = document.querySelector(`#box5`)
        this.box6 = document.querySelector(`#box6`)
        this.box7 = document.querySelector(`#box7`)
        this.box8 = document.querySelector(`#box8`)
        this.box9 = document.querySelector(`#box9`)
    }
}

class Insert {
    constructor() {
        this.h2 = document.querySelector('h2')
    }
}

class GameLogic {
    constructor() {
        this.turn = true
        this.win = false
    }
}
const logic = new GameLogic()

class Game {
    constructor() {
        this.whoseTurn = document.querySelector('h2').innerText = `It's ${logic.turn}'s Turn!`
    }
    //If true, player1 moves. False, player2 moves
    play(e) {
        const target = e.originalTarget
        //Micheal Kazin helped me simplify this conditional
        if (logic.win) {
            alert('The game is already decided. Please refresh the page!')
        } else {
            if (target.innerText != "") {
                alert('Spot taken!')
            } else {
                if (logic.turn === true) {
                    target.innerText = 'x'
                    logic.turn = false
                } else if (logic.turn === false) {
                    target.innerText = 'o'
                    logic.turn = true
                }
            }
            let boxes = new Box()
            console.log(boxes.box1.innerText, boxes.box2.innerText, boxes.box3.innerText, boxes.box1.innerText === boxes.box2.innerText && boxes.box1.innerText === boxes.box3.innerText)
            if (boxes.box1.innerText === boxes.box2.innerText && boxes.box1.innerText === boxes.box3.innerText) {
                if (boxes.box1.innerText, boxes.box2.innerText, boxes.box3.innerText != "") {
                    alert('win!')
                    logic.win = true
                    const insert = new Insert()
                    insert.h2.innerText = 'win!'
                }
            } else if (boxes.box4.innerText === boxes.box5.innerText && boxes.box4.innerText === boxes.box6.innerText) {
                if (boxes.box4.innerText, boxes.box5.innerText, boxes.box6.innerText != "") {
                    alert('win!')
                    logic.win = true
                    const insert = new Insert()
                    insert.h2.innerText = 'win!'
                }
            } else if (boxes.box7.innerText === boxes.box8.innerText && boxes.box7.innerText === boxes.box9.innerText) {
                if (boxes.box7.innerText, boxes.box8.innerText, boxes.box9.innerText != "") {
                    alert('win!')
                    logic.win = true
                    const insert = new Insert()
                    insert.h2.innerText = 'win!'
                }
            } else if (boxes.box1.innerText === boxes.box5.innerText && boxes.box5.innerText === boxes.box9.innerText) {
                if (boxes.box1.innerText, boxes.box5.innerText, boxes.box9.innerText != "") {
                    alert('win!')
                    logic.win = true
                    const insert = new Insert()
                    insert.h2.innerText = 'win!'
                }
            } else if (boxes.box3.innerText === boxes.box5.innerText && boxes.box5.innerText === boxes.box7.innerText) {
                if (boxes.box3.innerText, boxes.box5.innerText, boxes.box7.innerText != "") {
                    alert('win!')
                    logic.win = true
                    const insert = new Insert()
                    insert.h2.innerText = 'win!'
                }
            } else if (boxes.box2.innerText === boxes.box5.innerText && boxes.box5.innerText === boxes.box8.innerText) {
                if (boxes.box2.innerText, boxes.box5.innerText, boxes.box8.innerText != "") {
                    alert('win!')
                    logic.win = true
                    const insert = new Insert()
                    insert.h2.innerText = 'win!'
                }
            } else if (boxes.box1.innerText === boxes.box4.innerText && boxes.box4.innerText === boxes.box7.innerText) {
                if (boxes.box1.innerText, boxes.box4.innerText, boxes.box7.innerText != "") {
                    alert('win!')
                    logic.win = true
                    const insert = new Insert()
                    insert.h2.innerText = 'win!'
                }

            }else if (boxes.box3.innerText === boxes.box6.innerText && boxes.box6.innerText === boxes.box9.innerText) {
                if (boxes.box3.innerText, boxes.box6.innerText, boxes.box9.innerText != "") {
                    alert('win!')
                    logic.win = true
                    const insert = new Insert()
                    insert.h2.innerText = 'win!'
                }

            }
        }
    }
}
let game = new Game()

document.querySelector('.boxcont').addEventListener('click', game.play)












//i created the play() function myself, however i went to community hours to find a way to put the function inside of an object. Thanks to watching Michael Kazin help Angel Bel, i noticed i could put my functionality within my constructor funciton, and just call the object method on click event. I also realized i could define properties inside of my constructor that do not require the use of any parameters, so i then moved my document.queryselector's inside the Game class


//i briefly looked at the code from Marie C for 2 minutes, but am not referencing it. I'm trying to design my own game as i would myself