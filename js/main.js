let currentPlayer = 'x';
let gameOn = true;

const squares = document.getElementsByClassName('box');
const squareArray = Array.from(squares);
squareArray.forEach(square => square.addEventListener('click', playerTurn));

function playerTurn(clickedEl) {
	let square = clickedEl.target;

	if (square.innerHTML.trim() == '' && gameOn == true) {
		square.innerHTML = currentPlayer;
		currentPlayer = currentPlayer == 'x' ? 'o' : 'x';
		document.getElementById('player').innerHTML = currentPlayer.toUpperCase();
		checkWin();
	}
}

function checkWin() {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (
			squares[a].innerHTML !== '' &&
			squares[a].innerHTML === squares[b].innerHTML &&
			squares[a].innerHTML === squares[c].innerHTML
		) {
			showWinner(a, b, c);
		}
	}
}

const playInfo = document.querySelector('.playInfo');
const winner = document.getElementById('winner');
const message = document.getElementById('message');
const player = document.getElementById('player');

//this displays who won the game
function showWinner(x, y, z) {
	squares[x].classList.add('win');
	squares[y].classList.add('win');
	squares[z].classList.add('win');
	playInfo.classList.add('hidden');
	winner.innerHTML = currentPlayer == 'x' ? 'O' : 'X';
	message.classList.toggle('hidden');
	gameOn = false;
}

//select resetBtn
const resetBtn = document.getElementById('reset');
// add event listener of click to the btn then run a function
resetBtn.addEventListener('click', resetGame);

function resetGame() {
	squareArray.forEach(square => {
		square.innerHTML = '';
		square.classList.remove('win');
	});
	currentPlayer = 'x';
	message.classList.toggle('hidden');
	playInfo.classList.remove('hidden');
	player.innerHTML = 'X';
	gameOn = true;
}
