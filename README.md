# ❌⭕ Tic-Tac-Toe

A two-player Tic-Tac-Toe game built as a Resilient Coders morning challenge, with the goal of making it as object-oriented as possible. Players take turns clicking the board to place an X or an O, and the game announces whose turn it is, who won, or that it's a tie. A Restart button clears the board for a new round.

[![Screenshot-2026-10-20-at-8-48-25-PM.png](https://i.postimg.cc/pdLzZBy0/Screenshot-2026-10-20-at-8-48-25-PM.png)](https://postimg.cc/87x7kMRW)

## How It's Made:

**Tech used:**

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

The board is nine `.cell` divs laid out with CSS Grid (`grid-template-columns: repeat(3, 100px)`), so the browser wraps them into a 3×3 board automatically.

The JavaScript is built around two classes, which keeps the game logic separate from the page:

- **`Player`** stores a player's name and symbol (`"Player 1"` / `"X"` and `"Player 2"` / `"O"`).
- **`Game`** holds the game state: a 9-item `cells` array, the current player, a `gameOver` flag, and the status message. Its methods handle the rules:
  - `restart()` resets the board, sets Player 1 as first, and clears the game-over state.
  - `play(index)` ignores clicks on filled cells or after the game ends, places the current player's symbol, then checks for a win, a tie (no empty cells left, using `includes("")`), or switches turns.
  - `checkWin()` loops through all 8 winning lines (3 rows, 3 columns, 2 diagonals), stored as an array of index arrays, and returns `true` if any line has three matching symbols.

A single `showGame()` function copies the `Game` object's state onto the page. Each cell's click listener calls `game.play(i)` and then `showGame()`, so the class never touches the DOM directly and the display always reflects the data.

## Optimizations

- Highlight the three winning cells so players can see how the game was won.
- Keep a running scoreboard across rounds, stored in the `Game` class or `localStorage`.
- Let players enter their own names, since `Player` already supports custom names.
- Add a single-player mode with a simple computer opponent.
- Use `<button>` elements for the cells instead of divs so the board works with a keyboard and screen readers.

## Lessons Learned:

This challenge was my introduction to object-oriented programming in JavaScript. Using classes and constructors made me think about which data belongs to which object, and splitting the logic (`Game`) from the display (`showGame`) made the code easier to follow and debug. I also learned how to represent a game board as a simple array and to check every winning combination by storing them in an array of arrays and looping through them, instead of writing eight separate `if` statements.
