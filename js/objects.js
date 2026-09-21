let player1 = 'X'
const jugador1 = {
    symbol:'X',
    name:'',
    score:0,
}
const jugador2 = {
    symbol:'O',
    name:'',
    score:0,
}
let currentPlayer=jugador1;
//bototn in html with the ID of restart
document.querySelector('#btn-play').addEventListener('click',playGame);
document.querySelector('#btn-reset').addEventListener('click',restartGame);
//select all the cells
let cells=document.querySelectorAll('.celda');
cells=Array.from(cells); //this converts nodelist into in array
console.log(cells)
cells.forEach( celda => { celda.addEventListener('click', () => {
            if(celda.innerText != '')
            {
                return 
            }
            //playGame();
            celda.innerText=currentPlayer.symbol;
            winner();
            checkForDraw();
            currentPlayer=currentPlayer==jugador1 ? jugador2 : jugador1
})})


function checkForDraw(){
    let draw=cells.every((element,index)=>cells[index].innerText=='X' ||cells[index].innerText=='O' )
    if(draw){
        alert("It's a Draw")
    }
}
function winner(){
    if((cells[0].innerText == currentPlayer.symbol && cells[1].innerText==currentPlayer.symbol && cells[2].innerText==currentPlayer.symbol)
        || (cells[0].innerText == currentPlayer.symbol && cells[4].innerText==currentPlayer.symbol && cells[8].innerText==currentPlayer.symbol)
        || (cells[0].innerText == currentPlayer.symbol && cells[3].innerText==currentPlayer.symbol && cells[6].innerText==currentPlayer.symbol)
        || (cells[0].innerText == currentPlayer.symbol && cells[1].innerText==currentPlayer.symbol && cells[2].innerText==currentPlayer.symbol)
        || (cells[6].innerText == currentPlayer.symbol && cells[7].innerText==currentPlayer.symbol && cells[8].innerText==currentPlayer.symbol)
        || (cells[3].innerText == currentPlayer.symbol && cells[4].innerText==currentPlayer.symbol && cells[5].innerText==currentPlayer.symbol)
        || (cells[1].innerText == currentPlayer.symbol && cells[4].innerText==currentPlayer.symbol && cells[7].innerText==currentPlayer.symbol)
        || (cells[2].innerText == currentPlayer.symbol && cells[5].innerText==currentPlayer.symbol && cells[8].innerText==currentPlayer.symbol)
        || (cells[2].innerText == currentPlayer.symbol && cells[4].innerText==currentPlayer.symbol && cells[6].innerText==currentPlayer.symbol)
    ){  
            alert(`${currentPlayer.name} WON!!`)
            currentPlayer = jugador1
            cells.forEach(cell=>cell.innerText='');
            if(currentPlayer.symbol=='X')
            {
                jugador1.score++;
            }else{
                jugador2.score++;
            }
            
            
            updateScore();
            console.log(currentPlayer.score)
    }
}
function playGame(){
    const namePlayer1=prompt('Player 1: What is your name')
    jugador1.name=namePlayer1;
    document.querySelector(".p1").innerText+=jugador1.name
    console.log(namePlayer1)
    const namePlayer2=prompt('Player 2: What is your name')
    jugador2.name=namePlayer2;
    document.querySelector(".p2").innerText+=jugador2.name
    console.log(jugador1)
    console.log(jugador2)
}
function updateScore(){
    document.querySelector('.score1').innerText = jugador1.score;
    document.querySelector('.score2').innerText = jugador2.score;
}
function restartGame(){
    currentPlayer = jugador1
    cells.forEach(cell=>cell.innerText='');
    alert('Game over')
}