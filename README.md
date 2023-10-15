# 📊 Morning Challenge: Tic-Tac-Toe

### Goal: Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.

### How to submit your code for review:

- Fork and clone this repo
- Create a new branch called answer
- Checkout answer branch
- Push to your fork
- Issue a pull request
- Your pull request description should contain the following:
  - (1 to 5 no 3) I completed the challenge
  - (1 to 5 no 3) I feel good about my code
  - Anything specific on which you want feedback!

Example:
```
I completed the challenge: 5
I feel good about my code: 4
I'm not sure if my constructors are setup cleanly...
```
First, let’s break down the user interface:

title
3x3 grid
the grid should be clickable
the grid cells should have the correct player sign displayed an information display
should display a message informing the current player it’s their turn
should show us who won the game
should show us if the game ended in a draw
restart button
will restart the entire game
Next, let’s break down the game flow for a cell click:

needs to track any clicks that happen on our cells
needs to check if a valid move has been made
needs to make sure nothing happens if an already played cell has been clicked
we should update our game state
we should validate the game state
check if a player has won
check if the game ended in a draw
either stop the game or change the active player, depending on the above checks
reflect the updates made on the UI
rinse and repeat