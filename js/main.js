let player1 = 'X'
//bototn in html with the ID of restart
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
            celda.innerText=player1;
            winner();
            checkForDraw();
           
            player1=player1=='X' ? 'O':'X'
})})


function checkForDraw(){
    let draw=cells.every((element,index)=>cells[index].innerText=='X' ||cells[index].innerText=='O' )
    if(draw){
        alert("It's a Draw")
    }
}
function winner(){
    if((cells[0].innerText == player1 && cells[1].innerText==player1 && cells[2].innerText==player1)
        || (cells[0].innerText == player1 && cells[4].innerText==player1 && cells[8].innerText==player1)
        || (cells[0].innerText == player1 && cells[3].innerText==player1 && cells[6].innerText==player1)
        || (cells[0].innerText == player1 && cells[1].innerText==player1 && cells[2].innerText==player1)
        || (cells[6].innerText == player1 && cells[7].innerText==player1 && cells[8].innerText==player1)
        || (cells[3].innerText == player1 && cells[4].innerText==player1 && cells[5].innerText==player1)
        || (cells[1].innerText == player1 && cells[4].innerText==player1 && cells[7].innerText==player1)
        || (cells[2].innerText == player1 && cells[5].innerText==player1 && cells[8].innerText==player1)
        || (cells[2].innerText == player1 && cells[4].innerText==player1 && cells[6].innerText==player1)
    ){  
            alert('you Won!')
    }
}
function restartGame(){
    player1 = 'X'
    cells.forEach(cell=>cell.innerText='');
    alert('Game over')
}