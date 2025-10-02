// For this project I received help from mentor Charles De Farias on the structure of the project and laying out steps.
// Zaria Hallager looked over it to make sure my logic made sense.
// Justin Joshi gave me extensive help in figuring out where my issues were.
// Shawn and Justin Joshi helped me do a final debugging to get it working.


// **********
// EVERYTHING BELOW IS MY PSEUDO-CODE
// **********


let turn = 'x'
let winner = false

//justin joshi

// class GameLogic{
//     constructor(){

//     }

// }

//const g = new GameLogic()

class Boxes {
    constructor() {
        this.box1 = document.getElementById('boxone')
        this.box2 = document.getElementById('boxtwo')
        this.box3 = document.getElementById('boxthree')
        this.box4 = document.getElementById('boxfour')
        this.box5 = document.getElementById('boxfive')
        this.box6 = document.getElementById('boxsix')
        this.box7 = document.getElementById('boxseven')
        this.box8 = document.getElementById('boxeight')
        this.box9 = document.getElementById('boxnine')
    }
    clickBox1() {
        if (winner) {
            return
            console.log('bojangles')
        } else if (turn === 'x' && b.box1.innerText === '') {
            document.querySelector("#boxone").innerHTML = "x"
            turn = 'o'
            console.log('hello')
        } else if (turn === 'o' && b.box1.innerText === '') {
            document.querySelector("#boxone").innerHTML = "o"
            turn = 'x'
        } else if (b.box1.innerText !== '') {
            return
        }
    }

    clickBox2() {
        // OPTIONAL: Have a reset button that clears the board

        if (winner) {
            return
        } else if (turn === 'x' && b.box2.innerText === '') {
            document.querySelector("#boxtwo").innerHTML = "x"
            turn = 'o'
            console.log('yello')
        } else if (turn === 'o' && b.box2.innerText === '') {
            document.querySelector("#boxtwo").innerHTML = "o"
            turn = 'x'
        } else if (b.box2.innerText !== '') {
            return
        }
    }

    clickBox3() {
        // OPTIONAL: Have a reset button that clears the board

        if (winner) {
            return
        } else if (turn === 'x' && b.box3.innerText === '') {
            document.querySelector("#boxthree").innerHTML = "x"
            turn = 'o'
            console.log('zello')
        } else if (turn === 'o' && b.box3.innerText === '') {
            document.querySelector("#boxthree").innerHTML = "o"
            turn = 'x'
        } else if (b.box3.innerText !== '') {
            return
        }
    }

    clickBox4() {
        // OPTIONAL: Have a reset button that clears the board

        if (winner) {
            return
        } else if (turn === 'x' && b.box4.innerText === '') {
            document.querySelector("#boxfour").innerHTML = "x"
            turn = 'o'
            console.log('trello')
        } else if (turn === 'o' && b.box4.innerText === '') {
            document.querySelector("#boxfour").innerHTML = "o"
            turn = 'x'
        } else if (b.box4.innerText !== '') {
            return
        }
    }

    clickBox5() {
        // OPTIONAL: Have a reset button that clears the board
        if (winner) {
            return
        } else if (turn === 'x' && b.box5.innerText === '') {
            document.querySelector("#boxfive").innerHTML = "x"
            turn = 'o'
            console.log('othello')
        } else if (turn === 'o' && b.box5.innerText === '') {
            document.querySelector("#boxfive").innerHTML = "o"
            turn = 'x'
        } else if (b.box5.innerText !== '') {
            return
        }
    }


    clickBox6() {
        // OPTIONAL: Have a reset button that clears the board
        if (winner) {
            return
        } else if (turn === 'x' && b.box6.innerText === '') {
            document.querySelector("#boxsix").innerHTML = "x"
            turn = 'o'
            console.log('cello')
        } else if (turn === 'o' && b.box6.innerText === '') {
            document.querySelector("#boxsix").innerHTML = "o"
            turn = 'x'
        } else if (b.box6.innerText !== '') {
            return
        }
    }

    clickBox7() {
        // OPTIONAL: Have a reset button that clears the board
        if (winner) {
            return
        } else if (turn === 'x' && b.box7.innerText === '') {
            document.querySelector("#boxseven").innerHTML = "x"
            turn = 'o'
            console.log('prello')
        } else if (turn === 'o' && b.box7.innerText === '') {
            document.querySelector("#boxseven").innerHTML = "o"
            turn = 'x'
        } else if (b.box7.innerText !== '') {
            return
        }
    }

    clickBox8() {
        // OPTIONAL: Have a reset button that clears the board
        if (winner) {
            return
        } else if (turn === 'x' && b.box8.innerText === '') {
            document.querySelector("#boxeight").innerHTML = "x"
            turn = 'o'
        } else if (turn === 'o' && b.box8.innerText === '') {
            document.querySelector("#boxeight").innerHTML = "o"
            turn = 'x'
            console.log('mello')
        } else if (b.box8.innerText !== '') {
            return
        }
    }

    clickBox9() {
        // OPTIONAL: Have a reset button that clears the board
        if (winner) {
            return
        } else if (turn === 'x' && b.box9.innerText === '') {
            document.querySelector("#boxnine").innerHTML = "x"
            turn = 'o'
            console.log('jello')
        } else if (turn === 'o' && b.box9.innerText === '') {
            document.querySelector("#boxnine").innerHTML = "o"
            turn = 'x'
        } else if (b.box9.innerText !== '') {
            return
        }
    }

}

const b = new Boxes()


document.getElementById('boxone').addEventListener('click', b.clickBox1)
document.getElementById('boxtwo').addEventListener('click', b.clickBox2)
document.getElementById('boxthree').addEventListener('click', b.clickBox3)
document.getElementById('boxfour').addEventListener('click', b.clickBox4)
document.getElementById('boxfive').addEventListener('click', b.clickBox5)
document.getElementById('boxsix').addEventListener('click', b.clickBox6)
document.getElementById('boxseven').addEventListener('click', b.clickBox7)
document.getElementById('boxeight').addEventListener('click', b.clickBox8)
document.getElementById('boxnine').addEventListener('click', b.clickBox9)

document.querySelector('.boxes').addEventListener('click', checkWinner)

// OPTIONAL: 9.30 5:19 PM - Maybe I can create an object/car factory for these clicks

function clickBox1() {
    // OPTIONAL: Have a reset button that clears the board

    if (winner) {
        return
    } else if (turn === 'x' && b.box1.innerText === '') {
        document.querySelector("#boxone").innerHTML = "x"
        turn = 'o'
        console.log('hello')
    } else if (turn === 'o' && b.box1.innerText === '') {
        document.querySelector("#boxone").innerHTML = "o"
        turn = 'x'
    } else if (b.box1.innerText !== '') {
        return
    }
}

// LATER: How many combinations does each box need to recognize?

function clickBox2() {
    // OPTIONAL: Have a reset button that clears the board

    if (winner) {
        return
    } else if (turn === 'x' && b.box2.innerText === '') {
        document.querySelector("#boxtwo").innerHTML = "x"
        turn = 'o'
        console.log('yello')
    } else if (turn === 'o' && b.box2.innerText === '') {
        document.querySelector("#boxtwo").innerHTML = "o"
        turn = 'x'
    } else if (b.box2.innerText !== '') {
        return
    }
}


function clickBox3() {
    // OPTIONAL: Have a reset button that clears the board

    if (winner) {
        return
    } else if (turn === 'x' && b.box3.innerText === '') {
        document.querySelector("#boxthree").innerHTML = "x"
        turn = 'o'
        console.log('zello')
    } else if (turn === 'o' && b.box3.innerText === '') {
        document.querySelector("#boxthree").innerHTML = "o"
        turn = 'x'
    } else if (b.box3.innerText !== '') {
        return
    }
}

function clickBox4() {
    // OPTIONAL: Have a reset button that clears the board

    if (winner) {
        return
    } else if (turn === 'x' && b.box4.innerText === '') {
        document.querySelector("#boxfour").innerHTML = "x"
        turn = 'o'
        console.log('trello')
    } else if (turn === 'o' && b.box4.innerText === '') {
        document.querySelector("#boxfour").innerHTML = "o"
        turn = 'x'
    } else if (b.box4.innerText !== '') {
        return
    }
}

function clickBox5() {
    // OPTIONAL: Have a reset button that clears the board
    if (winner) {
        return
    } else if (turn === 'x' && b.box5.innerText === '') {
        document.querySelector("#boxfive").innerHTML = "x"
        turn = 'o'
        console.log('othello')
    } else if (turn === 'o' && b.box5.innerText === '') {
        document.querySelector("#boxfive").innerHTML = "o"
        turn = 'x'
    } else if (b.box5.innerText !== '') {
        return
    }
}


function clickBox6() {
    // OPTIONAL: Have a reset button that clears the board
    if (winner) {
        return
    } else if (turn === 'x' && b.box6.innerText === '') {
        document.querySelector("#boxsix").innerHTML = "x"
        turn = 'o'
        console.log('cello')
    } else if (turn === 'o' && b.box6.innerText === '') {
        document.querySelector("#boxsix").innerHTML = "o"
        turn = 'x'
    } else if (b.box6.innerText !== '') {
        return
    }
}

function clickBox7() {
    // OPTIONAL: Have a reset button that clears the board
    if (winner) {
        return
    } else if (turn === 'x' && b.box7.innerText === '') {
        document.querySelector("#boxseven").innerHTML = "x"
        turn = 'o'
        console.log('prello')
    } else if (turn === 'o' && b.box7.innerText === '') {
        document.querySelector("#boxseven").innerHTML = "o"
        turn = 'x'
    } else if (b.box7.innerText !== '') {
        return
    }
}

function clickBox8() {
    // OPTIONAL: Have a reset button that clears the board
    if (winner) {
        return
    } else if (turn === 'x' && b.box8.innerText === '') {
        document.querySelector("#boxeight").innerHTML = "x"
        turn = 'o'
    } else if (turn === 'o' && b.box8.innerText === '') {
        document.querySelector("#boxeight").innerHTML = "o"
        turn = 'x'
        console.log('mello')
    } else if (b.box8.innerText !== '') {
        return
    }
}

function clickBox9() {
    // OPTIONAL: Have a reset button that clears the board
    if (winner) {
        return
    } else if (turn === 'x' && b.box9.innerText === '') {
        document.querySelector("#boxnine").innerHTML = "x"
        turn = 'o'
        console.log('jello')
    } else if (turn === 'o' && b.box9.innerText === '') {
        document.querySelector("#boxnine").innerHTML = "o"
        turn = 'x'
    } else if (b.box9.innerText !== '') {
        return
    }
}

//Justin Joshi and Shawn helped me debug this function.

// 6:47 PM --- I think these can be OOP here -- basically it's like if each one is a different call for a different winning combination
function checkWinner() {
    if (b.box1.innerText === b.box2.innerText && b.box2.innerText === b.box3.innerText) {
        if (b.box1.innerText, b.box2.innerText, b.box3.innerText !== '') {
            document.getElementById("windin").innerText = "You\'ve got TACt!"
            alert("win win chicken din");
            console.log('kinello')
            winner = true
        }
    } else if(b.box4.innerText === b.box5.innerText && b.box5.innerText === b.box6.innerText){
        if (b.box4.innerText, b.box5.innerText, b.box6.innerText !== '') {
            document.getElementById("windin").innerText = "You\'re TOEin the Line!"
            alert("win win chicken din");
            console.log('nintendo')
            winner = true
        }
    } else if(b.box7.innerText === b.box8.innerText && b.box8.innerText === b.box9.innerText){
        if (b.box7.innerText, b.box8.innerText, b.box9.innerText !== '') {
            document.getElementById("windin").innerText = "You\'re TICin Me Off!"
            alert("win win chicken din");
            console.log('wintendo')
            winner = true
        }
    } else if(b.box1.innerText === b.box5.innerText && b.box5.innerText === b.box9.innerText){
        if (b.box1.innerText, b.box5.innerText, b.box9.innerText !== '') {
            document.getElementById("windin").innerText = "You\'ve got TACt!"
            alert("win win chicken din");
            console.log('sintendo')
            winner = true
        }
    } else if(b.box2.innerText === b.box5.innerText && b.box5.innerText === b.box8.innerText){
        if (b.box2.innerText, b.box5.innerText, b.box8.innerText !== '') {
            document.getElementById("windin").innerText = "You\'re TOEin the Line!"
            alert("win win chicken din");
            console.log('dintendo')
            winner = true
        }
    } else if(b.box3.innerText === b.box6.innerText && b.box6.innerText === b.box9.innerText){
        if (b.box3.innerText, b.box6.innerText, b.box9.innerText !== '') {
            document.getElementById("windin").innerText = "You\'re TICin Me Off!"
            alert("win win chicken din");
            console.log('chintendo')
            winner = true
        }
    } else if(b.box7.innerText === b.box5.innerText && b.box5.innerText === b.box3.innerText){
        if (b.box7.innerText, b.box5.innerText, b.box3.innerText !== '') {
            document.getElementById("windin").innerText = "You\'ve got TACt!"
            alert("win win chicken din");
            console.log('pintendo')
            winner = true
        }
    }else if(b.box1.innerText === b.box4.innerText && b.box4.innerText === b.box7.innerText){
        if (b.box1.innerText, b.box4.innerText, b.box7.innerText !== '') {
            document.getElementById("windin").innerText = "You\'re TOEin the Line!"
            alert("win win chicken din");
            console.log('himtendo')
            winner = true
        }
        }
    }

    
    // } let winner = false
    // if (winner = true) {
    //     // Change the header
    //     const h2 = document.getElementById("windin");
    //     h2.innerHTML = "You\'ve got TACt!"
    // }


// // 07:12 PM -- Maybe this needs to be moved to the top
// // this is where the winning combinations are like across, diagonals, and verts - These are the IDs of the boxes that have to be the same
// let winningCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 5, 8], [3, 6, 9], [1, 5, 9], [7, 5, 3]]
// // How do I get the current board into JS? Including the blank boxes?
// // How can we convert the box number class into an array?
// // The contents of the board as arrays with three elements
// let boxesArray = querySelectorAll('.playbox')
// // boxes array will give you an array that you can loop through
// for (i = 0; i <= actualCombos.length; i++) {
//     // How can we have the loop get the id as well?
//     let winCombo = actualCombos[i];
//     let actualCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]
//     let boxesArray = querySelectorAll('.playbox')
//     if (boxesArray[0] == boxesArray[1] == boxesArray[2]) {
//         alert("win win chicken din")
//     }
//     // If you just copy what's inside of each box that's not good enough because you need the value and the id as well
//     // Once you have those two things, you can compare winning combos and know if there's a winner
//     // At the end of each loop you're going to be checking if there's yet a winner
//     // If there is, the winner variable will be changed to true
// }


// let actualCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]


// When I feel overwhelmed break it down to as little code as possible to build up from there.
// Make it more modular to make it come together};