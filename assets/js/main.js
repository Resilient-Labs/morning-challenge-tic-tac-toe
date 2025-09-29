//first page js

//listener for the continue button
document.querySelector('#start').addEventListener('click', nextPage)
document.querySelector('#Music').addEventListener('click', tunesOn)
document.querySelector('#Music-1').addEventListener('click', tunesOff)
document.querySelector('#player-1').addEventListener('click', hide)
document.querySelector('#player-2').addEventListener('click', hide)
const load = document.querySelector('#container')
const gameStart = document.querySelector('#game-start')
const theme = document.querySelector('#welcome')
let result = document.querySelector('h4')
function tunesOn() {
    theme.play()
}
function tunesOff() {
    theme.pause()
}
function hide() {
    result.innerText = ''
}

function nextPage() {
    let player1 = document.querySelector('#player-1').value
    let player2 = document.querySelector('#player-2').value
    tunesOff()
    if (player1 && player2) {
        setTimeout(() => startGame(player1, player2), 3000)
        setTimeout(() => playAudio(), 2000)
        load.classList.remove('hidden') //toggle didn't work so I searched for another alternative https://stackoverflow.com/questions/2155737/remove-css-class-from-element-with-javascript-no-jquery
    } else {
        result.innerText = 'Cannt begin until both players have inserted their names.'
    }
}
function startGame(p1, p2) {
    window.open(`game.html?p1=${p1}&p2=${p2}`, '_self');
    //got this from stack overflow: https://stackoverflow.com/questions/50925607/link-to-a-html-page-inside-a-javascript-function
    //mau and stack overflow helped with the p1 & p2: https://stackoverflow.com/questions/66306555/how-to-getelementbyid-for-another-html-page
}
function playAudio() {
    gameStart.play()
}
