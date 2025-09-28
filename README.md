# Tic-Tac-Toe (OOP Project)

This is my version of Tic-Tac-Toe built with JavaScript. It uses one class (`TicTacToe`) to handle the game logic. Players take turns, the game checks for a winner or a draw, and there’s a reset button to start over.

[Click here to view](https://tic-tac-toe-liart-tau-76.vercel.app/)  

![screenshot](/img/tictactoe.png)

---

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

This project was a big challenge for me. Learning OOP and the `this` keyword was confusing, and it took me about 3 days of trying things, reading, and watching videos before it finally clicked. Once I understood how to set it up, I broke the game into smaller steps:  

- set up the board  
- switch turns between X and O  
- check for a winner or a draw  
- update the status message  
- reset the board to play again  

Putting everything inside one class with methods made the code much easier to manage.

---

## Optimizations

My first version of the code was messy and hard to follow. After getting a better understanding of the `this` keyword, I refactored it into a single class with methods like `makeMove`, `checkWin`, and `resetGame`. This made the code shorter, clearer, and easier to maintain.  

Improvement Ideas:
- Make the win check faster by stopping early when no match is possible  
- Add score tracking between games  
- Smooth out the reset experience  
- Experiment with a CPU opponent  

---

## Lessons Learned:

This project taught me:
- How the `this` keyword works inside a class  
- How one class with methods can keep code organized  
- The difference between game data (logic) and the UI (DOM updates) 