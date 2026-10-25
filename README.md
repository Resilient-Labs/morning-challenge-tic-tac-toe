# Tic-Tac-Toe

A two-player tic-tac-toe game built with HTML, CSS, and vanilla JavaScript. No libraries or frameworks.

<img width="503" height="519" alt="Screenshot 2026-10-15 at 9 51 11 AM" src="https://github.com/user-attachments/assets/49d00d3b-e08c-4fb7-a022-7df32f98434c" />


## How to play

1. Open `index.html` in your browser.
2. Players take turns clicking a box. X goes first.
3. Get three in a row (across, down, or diagonal) to win.
4. If the board fills up with no winner, the game ends in a draw.
5. Click **Reset** to start a new game.

## Features

- Two players taking turns on the same screen
- Win detection for all 8 winning lines
- Draw detection when the board is full
- Board locks after a win so no more moves can be made
- Result message shown on the page (no pop-up alerts)
- Reset button that clears the board and the message
- Layout adjusts for small screens

## Project structure

```
index.html   page structure: the board, message, and reset button
style.css    layout and styling
main.js      game logic
```

## How it works

- Each box is a `div` with the class `boxes`. Clicking one puts the current player's mark in it.
- `winning()` checks the eight winning lines and returns `true` if the current player has one.
- `tie()` runs only when nobody won, and checks whether every box is filled.
- A `gameOver` variable stops further clicks after a win. `resetGame()` turns it back off.

## Possible next steps

- Show whose turn it is
- Highlight the winning boxes
- Add a computer opponent
