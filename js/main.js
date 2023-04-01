function Square(x, y) {
    this.x = x;
    this.y = y;
    this.value = '';
    this.element = document.createElement('div');
    this.element.classList.add('square');
    this.element.addEventListener('click', () => {
      if (this.value === '') {
        game.play(this);
      }
    });
  }
  
  Square.prototype.render = function() {
    this.element.innerText = this.value;
  };
  
  // Define the TicTacToe object
  function TicTacToe() {
    this.board = [
      [new Square(0, 0), new Square(0, 1), new Square(0, 2)],
      [new Square(1, 0), new Square(1, 1), new Square(1, 2)],
      [new Square(2, 0), new Square(2, 1), new Square(2, 2)]
    ];
    this.currentPlayer = 'X';
  }
  
  TicTacToe.prototype.render = function() {
    const boardEl = document.querySelector('.board');
    boardEl.innerHTML = '';
    for (let i = 0; i < this.board.length; i++) {
      const row = this.board[i];
      for (let j = 0; j < row.length; j++) {
        const square = row[j];
        square.render();
        boardEl.appendChild(square.element);
      }
    }
  };
  
  TicTacToe.prototype.play = function(square) {
    square.value = this.currentPlayer;
    this.render();
    const winner = this.checkWinner();
    if (winner) {
      alert(`${winner} wins!`);
      this.reset();
    } else {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  };
  
  TicTacToe.prototype.checkWinner = function() {
    for (let i = 0; i < this.board.length; i++) {
      const row = this.board[i];
      if (row[0].value === row[1].value && row[1].value === row[2].value && row[0].value !== '') {
        return row[0].value;
      }
    }
    for (let i = 0; i < this.board[0].length)