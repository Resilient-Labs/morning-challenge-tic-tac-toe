// I'm setting up a blueprint for a player here.
function Player(name, symbol) {
	this.name = name; // I give each player a name.
	this.symbol = symbol; // Each player gets a symbol, either "X" or "O".
	this.score = 0; // Starting off, the score is zero for everyone.
}

// Time to create our two players.
let player1 = new Player("Player 1", "X");
let player2 = new Player("Player 2", "O");

// I'll have player 1 go first.
let currentPlayer = player1;

// With this function, I can see if a spot on the board is free.
function isCellEmpty(cell) {
	return !cell.textContent; // If it's empty, this will return "true".
}

// Now, I want to see if someone's managed to win the game.
function checkWinner(cells) {
	// These are the winning combos in the game.
	const winningPatterns = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	// I'm looping through each combo to see if someone's won.
	for (let pattern of winningPatterns) {
		if (
			cells[pattern[0]].textContent === currentPlayer.symbol &&
			cells[pattern[1]].textContent === currentPlayer.symbol &&
			cells[pattern[2]].textContent === currentPlayer.symbol
		) {
			return true; // Yep, someone's won!
		}
	}
	return false; // If I get here, no one's won yet.
}

// This is what happens when someone clicks on a spot on the board.
function handleCellClick(cell) {
	if (isCellEmpty(cell)) {
		// First, I check if the spot's free.
		cell.textContent = currentPlayer.symbol; // If it is, the current player marks it.

		// Now, let's see if that move won the game.
		if (checkWinner(document.querySelectorAll(".cell"))) {
			document.getElementById(
				"status"
			).textContent = `${currentPlayer.name} wins!`;
			currentPlayer.score++; // I add a point to the winner's score. And update the score/
			// I show the new scores.
			document.getElementById(
				"score"
			).textContent = `Score: X: ${player1.score} | O: ${player2.score}`;
			// here I clear the board for a new game.
			document.querySelectorAll(".cell").forEach((c) => (c.textContent = ""));
			currentPlayer = player1; // And player 1 will start again.
		} else {
			// If no one won, I want it to switch to the other player.
			currentPlayer = currentPlayer === player1 ? player2 : player1;
			document.getElementById(
				"turn"
			).textContent = `Turn: ${currentPlayer.symbol}`;
		}
	}
}

// I'm adding a smurf here so that my functions actually do something when players click around.
document.querySelectorAll(".cell").forEach((cell) => {
	cell.onclick = function () {
		handleCellClick(cell);
	};
});

document.getElementById("reset").onclick = function () {
	// This clears the board and resets everything for a new game whe the the reset button is clicked.
	document.querySelectorAll(".cell").forEach((cell) => (cell.textContent = ""));
	currentPlayer = player1;
	document.getElementById("turn").textContent = `Turn: ${currentPlayer.symbol}`;
};
