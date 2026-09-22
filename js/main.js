const cells = document.querySelectorAll('.cell');
const messageEl = document.getElementById('message');
const resetBtn = document.getElementById('reset-btn');

// every possible line of 3 that wins the game, as indexes into the board array
// (3 rows, 3 columns, 2 diagonals) - written as an array of arrays so
// checkWinner can just loop over it instead of writing out every case by hand
const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

// just holds who's playing and which mark is theirs
class Player {
	constructor(name, mark) {
		this.name = name;
		this.mark = mark;
	}
}

// owns the board, whose turn it is, and whether the game has ended
class Game {
	constructor(player1, player2) {
		this.players = [player1, player2];
		this.currentPlayerIndex = 0;
		// 9 spots, null = empty - the index in this array maps straight to a cell on the page
		this.board = Array(9).fill(null);
		this.gameOver = false;
	}

	getCurrentPlayer() {
		return this.players[this.currentPlayerIndex];
	}

	// returns true/false so the click handler knows whether a mark actually got placed
	placeMark(index) {
		if (this.gameOver || this.board[index] !== null) {
			return false;
		}
		this.board[index] = this.getCurrentPlayer().mark;
		return true;
	}

	switchTurn() {
		this.currentPlayerIndex = this.currentPlayerIndex === 0 ? 1 : 0;
	}

	// find() hands back the first winning combo where all 3 spots match and
	// aren't empty - undefined if nobody's won yet
	checkWinner() {
		return WINNING_COMBINATIONS.find(combo => {
			const [a, b, c] = combo;
			return this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c];
		});
	}

	isBoardFull() {
		return this.board.every(cell => cell !== null);
	}
}

const player1 = new Player('Player 1', 'X');
const player2 = new Player('Player 2', 'O');

// letting resetGame reassign this instead of mutating the old one keeps a
// fresh board/turn/gameOver every time, no leftover state to reset by hand
let game = new Game(player1, player2);

cells.forEach(cell => {
	cell.addEventListener('click', handleCellClick);
});
resetBtn.addEventListener('click', resetGame);

function handleCellClick(event) {
	const index = Number(event.target.dataset.index);
	const wasPlaced = game.placeMark(index);

	// placeMark already refuses taken spots and a finished game - nothing to draw
	if (!wasPlaced) return;

	event.target.textContent = game.board[index];
	event.target.classList.add('taken');

	const winningCombo = game.checkWinner();
	if (winningCombo) {
		game.gameOver = true;
		messageEl.textContent = `${game.getCurrentPlayer().name} wins!`;
		highlightWinningCells(winningCombo);
		return;
	}

	if (game.isBoardFull()) {
		game.gameOver = true;
		messageEl.textContent = "It's a tie!";
		return;
	}

	game.switchTurn();
	messageEl.textContent = `${game.getCurrentPlayer().name}'s turn (${game.getCurrentPlayer().mark})`;
}

function highlightWinningCells(combo) {
	combo.forEach(index => {
		cells[index].style.backgroundColor = '#a5d6a7';
	});
}

function resetGame() {
	game = new Game(player1, player2);

	cells.forEach(cell => {
		cell.textContent = '';
		cell.classList.remove('taken');
		cell.style.backgroundColor = '';
	});

	messageEl.textContent = `${player1.name}'s turn (${player1.mark})`;
}
