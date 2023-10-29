console.log('mainjS here')
//varibale for current player
let player1 ='x'

//another varible
let tic = document.querySelectorAll('#tic')

tic = Array.from(tic)

tic.forEach(element => {

  element.addEventListener('click', () => {
  console.log('click', element, element.innerText)

       if (element.innerText != ""){
       return
   }
    const theGameBoard = new TheGameBoard()
    element.innerText= player1

    theGameBoard.checkDraw()

    theGameBoard.checkWinner()
    
    player1 = player1 === 'x' ? 'o' : 'x';

  })

})

class TheGameBoard{

    checkDraw(){
      let draw = tic.every((element, index) => tic[index].innerText == 'x' || tic[index].innerText == 'o')
     if (draw){
     document.querySelector('#displaymsg').innerText = 'its a draw!'
     }

    }

 checkWinner(){
  if (tic[0].innerText == player1 && tic[1].innerText == player1 && tic[2].innerText == player1){
   alert(`${player1} Wins!`)
 }
 else if (tic[3].innerText == player1 && tic[4].innerText == player1 && tic[5].innerText == player1){
   alert(`${player1} Wins!`)
  }
 else if (tic[6].innerText == player1 && tic[7].innerText == player1 && tic[8].innerText == player1){
  alert(`${player1} Wins!`)
}
 else if (tic[0].innerText == player1 && tic[3].innerText == player1 && tic[6].innerText == player1){
  alert(`${player1} Wins!`)
 }
 else if (tic[1].innerText == player1 && tic[4].innerText == player1 && tic[7].innerText == player1){
  alert(`${player1} Wins!`)
 }
  else if(tic[2].innerText == player1 && tic[5].innerText == player1 && tic[8].innerText == player1){
    alert(`${player1} Wins!`)
  }
  else if(tic[6].innerText == player1 && tic[4].innerText == player1 && tic[2].innerText == player1){
    alert(`${player1} Wins!`)
  }
  else if(tic[0].innerText == player1 && tic[4].innerText == player1 && tic[8].innerText == player1){
    alert(`${player1} Wins!`)
  }
  else if (tic[8].innerText == player1 && tic[4].innerText == player1 && tic[0].innerText == player1){
    alert(`${player1} Wins!`)
  }
 }

  restart(){
    window.location.reload()
  }
}

const theGameBoard= new TheGameBoard()
document.querySelector('#fresh').addEventListener('click', theGameBoard.restart)






