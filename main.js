let firstPlayer = 'x'// allows plyer to mark x
let replayBttn = document.querySelector('#startOver')
let cellSection = document.querySelectorAll('#block')//shortcut var for the cell section with an id of block in html
console.log(cellSection)
cellSection = Array.from(cellSection) // changes the cellSec from string to an array b/c we can only do forEach on array

cellSection.forEach(box => {
    box.addEventListener('click', () => {
      if(box.innerText !== '') {   //boxs '' needs to be empty for new value 
        return
      }
      const gameBoard = new GameBoard()
      box.innerText = firstPlayer

      gameBoard.checkWinner() // this checks to see who wins
      gameBoard.checkDraw() // this checks to see if there is a tie  

      firstPlayer = firstPlayer === 'x' ? 'o' : 'x';
    })
})

class GameBoard{
  
  checkDraw(){
    let draw = cellSection.every(box => box.innerText === 'x' || box.innerText === 'o');
    if(draw){
      alert('draw')
    }
  }


  checkWinner() {
    if(cellSection[0].innerText == firstPlayer && cellSection[1].innerText == firstPlayer && cellSection[2].innerText == firstPlayer){
      alert(`${firstPlayer} Wins!`)
    }else if (cellSection[3].innerText == firstPlayer && cellSection[4].innerText == firstPlayer && cellSection[5].innerText == firstPlayer){
      alert(`${firstPlayer} Wins!`)
    }else if (cellSection[6].innerText == firstPlayer && cellSection[7].innerText == firstPlayer && cellSection[8].innerText == firstPlayer){
      alert(`${firstPlayer} Wins!`)
    }else if (cellSection[0].innerText == firstPlayer && cellSection[3].innerText == firstPlayer && cellSection[6].innerText == firstPlayer){
      alert(`${firstPlayer} Wins!`)
    }else if (cellSection[1].innerText == firstPlayer && cellSection[4].innerText == firstPlayer && cellSection[7].innerText == firstPlayer){
      alert(`${firstPlayer} Wins!`)
    }else if (cellSection[2].innerText == firstPlayer && cellSection[5].innerText == firstPlayer && cellSection[8].innerText == firstPlayer){
      alert(`${firstPlayer} Wins!`)
    }else if (cellSection[0].innerText == firstPlayer && cellSection[4].innerText == firstPlayer && cellSection[8].innerText == firstPlayer){
      alert(`${firstPlayer} Wins!`)
    }else if (cellSection[6].innerText == firstPlayer && cellSection[4].innerText == firstPlayer && cellSection[2].innerText == firstPlayer){
      alert(`${firstPlayer} Wins!`)
    }
  }


  playAgain(){
    window.location.reload()
  }

}

const gameBoard = new GameBoard()
replayBttn.addEventListener('click', gameBoard.playAgain)
