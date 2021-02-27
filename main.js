board = {
    gameOver: false,
    cells: document.querySelectorAll('.box'),
  
    box1: document.getElementById('box1'),
    box2: document.getElementById('box2'),
    box3: document.getElementById('box3'),
    box4: document.getElementById('box4'),
    box5: document.getElementById('box5'),
    box6: document.getElementById('box6'),
    box7: document.getElementById('box7'),
    box8: document.getElementById('box8'),
    box9: document.getElementById('box9'),
  
    Button: document.getElementById("restart")
  }
  
  let player1 = {
    marker: "X"
  };
  
  let player2 = {
    marker: "O"
  };
  
  let playerTurn = player1
  let counter = 0

  board.cells.forEach((box) => {
    box.addEventListener('click', onClick)
  })
    
  function onClick(click) {
   
    if (board.gameOver === true) {
      alert("Game is over")
    } else {
      let box = click.target
      if (box.innerText === "") {
        playersMove(box)
      }
    }
  }

  function playersMove(box) {
    box.innerText = playerTurn.marker;
    if (playerTurn === player1) {
      playerTurn = player2
    } else {
      playerTurn = player1
    }
    setTimeout(checkForWin, 10)
  }
  
  function checkForWin() {
    winConditions.forEach((row) => {
      if (row[0].innerText === 'X' &&
      row[1].innerText === 'X' &&
      row[2].innerText === 'X'){
        alert('Player 1 Wins!')
        board.gameOver = true
      }

      else if (row[0].innerText === 'O' &&
      row[1].innerText === 'O' &&
      row[2].innerText === 'O') {
        alert('Player 2 Wins!')
        board.gameOver = true
      }
      // else if(row[0].innerText === 'X' &&
      // row[1].innerText === 'O' &&
      // row[2].innerText === 'X'
      // ){
      //     alert ('Draw')
      // }
       else {
        counter += 1
        console.log(counter)
      if(counter === 71 && board.gameOver === false){
         board.gameOver = true
         alert('draw')
      }
      }
  
}
)}
    let winConditions = [
    [board.box1, board.box2, board.box3],
    [board.box4, board.box5, board.box6],
    [board.box7, board.box8, board.box9],
    [board.box1, board.box4, board.box7],
    [board.box2, board.box5, board.box8],
    [board.box3, board.box6, board.box9],
    [board.box1, board.box5, board.box9],
    [board.box3, board.box5, board.box7],
  ]
  function restart() {
    board.cells.forEach((box) => {
      box.innerText = ""
      counter = 0
    })
    board.gameOver = false
  }
  
  board.Button.addEventListener('click', restart)