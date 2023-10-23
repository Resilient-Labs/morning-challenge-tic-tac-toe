# Tic-Tac-Toe: Sweet or savory pancakes?
<img width="1466" alt="Screenshot 2023-10-22 at 11 19 16 PM" src="https://github.com/codedbycass/Tic-Tac-Toe/assets/122684139/0897a1b8-a02a-4fee-84d7-1113cd9e7dc5">
<img width="1466" alt="Screenshot 2023-10-22 at 11 19 01 PM" src="https://github.com/codedbycass/Tic-Tac-Toe/assets/122684139/0bb84f7a-a8a6-441c-81e5-7a7f44fb144a">

## How it's made
I used HTML, CSS, and OO JS.

I've built this game with a strong emphasis on Object-Oriented Programming (OOP), ensuring a smooth and dynamic gaming experience. Let's take a closer look at how this game works.

User-Friendly Interface:
Players can easily make their moves by clicking on the grid, placing either their X (also known as the blueberry emoji) or O (also known as the onion emoji). 

Victory Announcements:
The game is designed to recognize when a player has achieved a winning combination of marks. Upon victory, the program updates the DOM to declare the winner. 

Current Player Tracking:
To ensure a fair and engaging game, we keep track of the current player's turn using a variable. This variable is essential for switching between the two players, Blueberry (X) and Onion (O), allowing each player a fair chance to make their moves.

Game Logic and Object-Oriented Structure:
The core of this game is built on solid OOP principles. I've created a GameBoard object using a constructor class. This object contains the logic for winning combinations, ensuring that there are eight different ways for a player to win the game. By incorporating the current player variable, the game remains flexible and doesn't hard-code the winner, making it an exciting and ever-evolving experience.

Game Restart Option:
To start a new game at any point, I've included an event listener with a restart function. This allows players to refresh the game and embark on a new challenge.

## Lessons learned
A simple game and coding project can easily become very complex and sophisticated. In my next attempt at this project, I would love to learn how to make it more object oriented by including the players themselves as objects, and creating properties for each player.
