//We need a player to play
let player = 'x'

document.querySelector('button').addEventListener('click',reset)

let call = document.querySelectorAll('.box')

call = Array.from(call)

call.forEach(square => {
    square.addEventListener('click', () => {
        if (square.innerText != '') {
            return
        }
        square.innerText = player
        win()
        tieGame()
        player = player == 'x' ? 'o' : 'x'
    })
});

function tieGame() {
    let tie = call.every((element, index) => call[index].innerText == 'x' || call[index].innerText == 'o')
    if (tie) {
        alert('Tie game!')
    }
}

function win(){ 
if ((call[0].innerText == player && call[1].innerText == player && call[2].innerText == player) || 
    (call[3].innerText == player && call[4].innerText == player && call[5].innerText == player) || 
    (call[6].innerText == player && call[7].innerText == player && call[8].innerText == player) || 
    (call[0].innerText == player && call[3].innerText == player && call[6].innerText == player) || 
    (call[1].innerText == player && call[4].innerText == player && call[7].innerText == player) ||
    (call[2].innerText == player && call[5].innerText == player && call[8].innerText == player) ||
    (call[0].innerText == player && call[4].innerText == player && call[8].innerText == player) ||
    (call[2].innerText == player && call[4].innerText == player && call[8].innerText == player)){
        alert('Winner!')
    } 
}

function reset(){
    player = 'x'
    call.forEach(square => square.innerText = '')
    alert('The game has reset.')
}