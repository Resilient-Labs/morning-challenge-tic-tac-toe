// what they can do:
// - make it so two players can click a space on the dom to place an 'x' or 'o'
//         document.querySelector('.space').addEventListener('click', )
// - mention if they win (alert if they win)
//         alert("Player " + "has won!")
// - when there are three x's or three o's in a row, the game ends // - to win, they need three 'x's or 'o's in a row, diagonally, vertically, or horizontally
//         (if one.value === two.value === three.value) (one.value === four.value === seven.value) (one.value === five.value === nine.value)
//         (two.value === five.value === eight.value) (three.value === six.value === nine.value) (three.value === five.value === seven.value)

// - add a way to start a new game 
//   - create a button to clear board

// what can the user expect:
// - player 1 is 'x' and goes first
//      buttons
//
//   - if there are no x's or o's in a row, alert the game is a draw


// what they can see:
// - 3x3x3 table as the board
// - img elements representing each x and o

const tic = "X"
const tac = "O"


// document.querySelector('#two').addEventListener('click', placeTicOrTac)
document.querySelector('#p1').addEventListener('click', placeTic)
document.querySelector('#p2').addEventListener('click', placeTac)

let boardSpaces = document.querySelectorAll('.space')

function placeTic() {
    boardSpaces.forEach(boardSpace => {
        boardSpace.addEventListener('click', (event) => {
            event.currentTarget.textContent = tic
        })
    });
    checkWin()
}

function placeTac() {
    boardSpaces.forEach(boardSpace => {
        boardSpace.addEventListener('click', (event) => {
            event.currentTarget.textContent = tac
        })
    });
    checkWin()
}

function checkWin() {
    if (document.querySelector('#zero').innerHTML === '' || document.querySelector('#one').innerHTML === '' || document.querySelector('#two').innerHTML === '' || document.querySelector('#three').innerHTML === '' || document.querySelector('#four').innerHTML === '' ||
    document.querySelector('#five').innerHTML === '' || document.querySelector('#six').innerHTML === '' || document.querySelector('#seven').innerHTML === '' ||document.querySelector('#eight').innerHTML === '') {
        return false
    }

    else if (document.querySelector('#zero').innerHTML === document.querySelector('#one').innerHTML && document.querySelector('#one').innerHTML === document.querySelector('#two').innerHTML) {
        alert('Winner!')
    }

    else if (document.querySelector('#three').innerHTML === document.querySelector('#four').innerHTML && document.querySelector('#four').innerHTML === document.querySelector('#five').innerHTML) {
        alert('Winner!')
    }

    else if (document.querySelector('#six').innerHTML === document.querySelector('#seven').innerHTML && document.querySelector('#six').innerHTML === document.querySelector('#eight').innerHTML) {
        alert('Winner!')
    }

    else if (document.querySelector('#zero').innerHTML === document.querySelector('#three').innerHTML && document.querySelector('#three').innerHTML === document.querySelector('#six').innerHTML) {
        alert('Winner!')
    }

    else if (document.querySelector('#one').innerHTML === document.querySelector('#four').innerHTML && document.querySelector('#four').innerHTML === document.querySelector('#seven').innerHTML) {
        alert('Winner!')
    }

    else if (document.querySelector('#three').innerHTML === document.querySelector('#six').innerHTML && document.querySelector('#six').innerHTML === document.querySelector('#eight').innerHTML) {
        alert('Winner!')
    }

    else if (document.querySelector('#zero').innerHTML === document.querySelector('#four').innerHTML && document.querySelector('#four').innerHTML === document.querySelector('#eight').innerHTML) {
        alert('Winner!')
    }

    else if (document.querySelector('#two').innerHTML === document.querySelector('#four').innerHTML && document.querySelector('#four').innerHTML === document.querySelector('#six').innerHTML) {
        alert('Winner!')
    }

    else if (document.querySelector('#two').innerHTML === document.querySelector('#five').innerHTML && document.querySelector('#five').innerHTML === document.querySelector('#eight').innerHTML) {
        alert('Winner!')
    }
}
