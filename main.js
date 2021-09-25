//Credit to the entire house of Gardner - we worked as a group//

const squares = document.getElementsByClassName('box');

const squareArray = Array.from(squares);
squareArray.forEach(square => square.addEventListener('click', playerTurn));

class Game {
	constructor() {
		this.currentPlayer = 'x';
		this.gameOn = true;
		this.gameWon = false;
		this.player = document.getElementById('player');
		this.message = document.getElementById('message');
		this.tieMessage = document.getElementById('tieMessage');
		this.winner = document.getElementById('winner');
		this.playInfo = document.querySelector('.playInfo');
		this.lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
	}

	showWinner(x, y, z) {
		squares[x].classList.add('win');
		squares[y].classList.add('win');
		squares[z].classList.add('win');
		this.playInfo.classList.add('hidden');
		this.winner.innerHTML = this.currentPlayer == 'x' ? 'O' : 'X';
		this.message.classList.remove('hidden');
		this.gameOn = false;
		this.gameWon = true;
		console.log(this.gameOn, 'game');
		console.log('show');
	}

	checkWin() {
		console.log('check');
		for (let i = 0; i < this.lines.length; i++) {
			const [a, b, c] = this.lines[i];
			if (
				squares[a].innerHTML !== '' &&
				squares[a].innerHTML === squares[b].innerHTML &&
				squares[a].innerHTML === squares[c].innerHTML
			) {
				this.showWinner(a, b, c);
			}
		}
	}

	resetGame() {
		squareArray.forEach(square => {
			square.innerHTML = '';
			square.classList.remove('win');
		});
		this.currentPlayer = 'x';
		this.message.classList.add('hidden');
		this.tieMessage.classList.add('hidden');
		this.playInfo.classList.remove('hidden');
		this.player.innerHTML = 'X';
		this.gameOn = true;
	}
}

// NEW GAME //
const game = new Game();

function playerTurn(clickedEl) {
	let square = clickedEl.target;
	if (square.innerHTML.trim() == '' && game.gameOn == true) {
		square.innerHTML = game.currentPlayer;
		game.currentPlayer = game.currentPlayer == 'x' ? 'o' : 'x';
		document.getElementById('player').innerHTML =
			game.currentPlayer.toUpperCase();
		game.checkWin();
	}
}

const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', () =>
	/*game.resetGame()*/ location.reload()
);