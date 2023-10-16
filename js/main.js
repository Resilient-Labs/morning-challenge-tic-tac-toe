// We're starting with a class for our players. Each player in our game (either X or O) will be an instance of this class.
class Player {
	// Each player gets a symbol (either "X" or "O") when they're created.
	constructor(symbol) {
		this.symbol = symbol; // Saving the player's symbol.
		this.score = 0; // Everyone starts with a score of zero.
	}

	// This method adds one point to the player's score.
	increaseScore() {
		this.score++; // Just adding one to the score.
	}

	// When a player takes a turn, we'll place their symbol on the board using this method.
	placeSymbol(cell) {
		cell.textContent = this.symbol; // Put the player's symbol in the chosen cell.
	}
}

// Next, we have a class for our game board. This will handle all the board-related stuff!
class Board {
	// Setting up the game board when it's created.
	constructor() {
		this.cells = document.querySelectorAll(".cell"); // Finding all the cells on our webpage.

		// Using bind() to make sure our function works properly when a cell is clicked.
		// It makes sure that "this" inside our function points to the whole game board and not just the clicked cell.
		this.boundHandleCellClick = this.handleCellClick.bind(this);
		// We're making sure our click function knows which board it belongs to.
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

		for (let i = 0; i < this.cells.length; i++) {
			// Looping through each cell...
			this.cells[i].addEventListener("click", this.boundHandleCellClick); // And waiting for it to be clicked!
		}
	}

	// Here's what happens when a cell is clicked.
	handleCellClick(event) {
		const clickedCell = event.target; // The cell that got clicked.
		if (!clickedCell.textContent) {
			// If the cell is empty (no X or O)...
			game.currentPlayer.placeSymbol(clickedCell); // The current player puts their symbol in it.
			if (this.hasWinner()) {
				// Did that move win the game?
				game.declareWinner(); // If so, announce the winner!
				this.removeCellClickEvents(); // No more moves allowed once there's a winner.
			} else {
				game.switchToNextPlayer(); // Otherwise, next player's turn!
			}
		}
	}

	// This method checks if someone's moves have won the game.
	hasWinner() {
		const winningCombinations = [
			// All the different ways to win.
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let combination of winningCombinations) {
			// Checking each winning combo...
			if (
				this.cells[combination[0]].textContent && // If the first cell isn't empty...
				this.cells[combination[0]].textContent ===
					this.cells[combination[1]].textContent && // And all three cells are the same...
				this.cells[combination[1]].textContent ===
					this.cells[combination[2]].textContent
			) {
				return true; // We have a winner!
			}
		}
		return false; // No winner yet.
	}

	// This method stops the game by removing the ability to click on cells.
	removeCellClickEvents() {
		for (let i = 0; i < this.cells.length; i++) {
			this.cells[i].removeEventListener("click", this.boundHandleCellClick); // Stop waiting for clicks on each cell.
		}
	}
}

// This class manages the whole game, like who's turn it is and who won.
class Game {
	constructor() {
		this.playerX = new Player("X"); // Creating our X player.
		this.playerO = new Player("O"); // Creating our O player.
		this.currentPlayer = this.playerX; // X gets to start!
		this.board = new Board(); // Setting up our game board.
		this.setupResetButton(); // Making the reset button work.
		this.updateScore(); // Displaying the players' scores.
		this.updateTurn(); // Showing whose turn it is.
	}

	// Switching to the other player after a move.
	switchToNextPlayer() {
		this.currentPlayer =
			this.currentPlayer === this.playerX ? this.playerO : this.playerX; // If X just went, now it's O's turn, and vice versa.
		this.updateTurn(); // Displaying the new current player.
	}

	// Making the reset button start a new game.
	setupResetButton() {
		document.getElementById("reset").addEventListener("click", () => {
			// When the reset button is clicked...
			this.board.cells.forEach((cell) => (cell.textContent = "")); // Clearing all the cells.
			this.currentPlayer = this.playerX; // X gets to start again.
			this.updateTurn(); // Displaying that it's X's turn.
			document.getElementById("status").textContent = ""; // Clearing any win message.
			for (let i = 0; i < this.board.cells.length; i++) {
				// Looping through each cell...
				this.board.cells[i].addEventListener(
					"click",
					this.board.boundHandleCellClick
				); // ...and waiting for it to be clicked.
			}
		});
	}

	// Displaying the players' scores on the screen.
	updateScore() {
		document.getElementById(
			"score"
		).textContent = `Score: X: ${this.playerX.score} | O: ${this.playerO.score}`; // Showing scores for X and O.
	}

	// Displaying whose turn it is.
	updateTurn() {
		document.getElementById(
			"turn"
		).textContent = `Turn: ${this.currentPlayer.symbol}`; // Showing the symbol of the current player.
	}

	// Announcing the winner and updating the score.
	declareWinner() {
		document.getElementById(
			"status"
		).textContent = `${this.currentPlayer.symbol} wins!`; // Displaying the winner's symbol.
		this.currentPlayer.increaseScore(); // Adding one to the winner's score.
		this.updateScore(); // Updating the score display.
	}
}

// Time to play! Starting a new game.
const game = new Game();
