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

pseudocode: 
what they can do:
- make it so two players can click a space on the dom to place an 'x' or 'o'
- mention if they win (alert if they win)
  - when there are three x's or three o's in a row, the game ends
- add a way to start a new game
  - create a button to clear board

what can the user expect:
- player 1 is 'x' and goes first
  - at the start of a new game:
    - alert player 1 places x on a square
    - alert player 2 places o on a square
  - if there are no x's or o's in a row, alert the game is a draw
- to win, they need three 'x's or 'o's in a row, diagonally, vertically, or horizontally

what they can see:
- 3x3x3 table as the board
- img elements representing each x and o
