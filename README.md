## Tic-Tac-Toe JS
A classic Tic-Tac-Toe game built with vanilla JavaScript, designed to sharpen core programming fundamentals through hands-on DOM manipulation and game logic.

## Live Demo
 https://camerondcrawley.github.io/morning-challenge-tic-tac-toe/

## Features
Interactive Grid: Clickable cells that handle turn-taking seamlessly and prevent overwriting existing moves.

Win & Draw Detection: Evaluates horizontal, vertical, and diagonal winning conditions, as well as draw scenarios using array methods like .every().

State Management: Easily resets the board and resets the starting player back to default.

Class Structure: Features a basic Player class to encapsulate player identities (Cam vs. the Hater).

## How It Works
Player Assignment: Player 1 starts as 'X'.

Move Validation: The script checks if a cell is empty (element.innerText != "") before rendering a move.

Turn Swapping: Uses a ternary operator (playerOne = playerOne == 'X' ? 'O' : 'X') to switch active shapes smoothly after every valid click.

Game Checks: Runs iWon() and checkForDraw() after each turn to evaluate the state of the board.

## Built With
HTML

CSS3

JavaScript


<img width="1317" height="1511" alt="image" src="https://github.com/user-attachments/assets/6a63efcf-3883-40d3-b9c1-c93408ee32f6" />
