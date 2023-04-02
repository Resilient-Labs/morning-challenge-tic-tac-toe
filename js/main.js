//marks x
let player1= 'x'
//below: grabs reset button
//added event listener for restart function

//grabbing each cell of game
let cells = document.querySelectorAll('#cells')
//Changing the cells to array format
//to enter Node List mode. Put this in yo Anki
cells = Array.from(cells)
// console.log(cells)

//forEach on cell array and add event listener 
//click will run another funtion
//function to check if tie
//function to check if winner
//ternary operator for player 1
cells.forEach(element => {

    element.addEventListener('click', () => {
        //cell needs to be empty for new value
        if(element.innerText != "" ){
            return 
        }
        const gameBoard = new GameBoard()
        element.innerText= player1;  

        gameBoard.checkDraw()
       
        gameBoard.checkWinner()
        

        player1 = player1 == 'x' ? 'o' : 'x';
    })

})
//function that looks for tie
class GameBoard{
    
    checkDraw(){
        let draw = cells.every((element, index)=> cells[index].innerText== 'x' || cells[index].innerText== 'o');
        if(draw){
            alert('draw')
        }
    }
    //function that looks for winner
    checkWinner(){
    //cells are the array created on line 10-- (cells.forEach)
        if(cells[0].innerText== player1 && cells[1].innerText == player1 &&cells[2].innerText== player1){
            alert(`${player1} Wins!`)
        }else if(cells[3].innerText== player1 && cells[4].innerText == player1 &&cells[5].innerText== player1){
            alert(`${player1} Wins!`)
        }else if(cells[6].innerText== player1 && cells[7].innerText == player1 &&cells[8].innerText== player1){
            alert(`${player1} Wins!`)
        }else if(cells[0].innerText== player1 && cells[3].innerText == player1 &&cells[6].innerText== player1){
            alert(`${player1} Wins!`)
        }else if(cells[1].innerText== player1 && cells[4].innerText == player1 &&cells[7].innerText== player1){
            alert(`${player1} Wins!`)
        }else if(cells[2].innerText== player1 && cells[5].innerText == player1 &&cells[8].innerText== player1){
            alert(`${player1} Wins!`)
        }else if(cells[0].innerText== player1 && cells[4].innerText== player1 &&cells[8].innerText== player1){
            alert(`${player1} Wins!`)
        }else if(cells[2].innerText== player1 && cells[4].innerText== player1 &&cells[6].innerText== player1){
            alert(`${player1} Wins!`)
        }
    }
// //restart function for button
    restart(){
        window.location.reload()
    }
}
const gameBoard = new GameBoard()
document.querySelector('#restartMotherFucker').addEventListener('click', gameBoard.restart)


