# Tic Tac Toe!

### What I did to build this app:
![image](https://github.com/fjh321/Tic-Tac-Toe-FJH/assets/64885403/087197f7-663e-4a7f-8435-34a2d6c3719d)

I used HTML, CSS, and JavaScript to code this project.

I set up a class and constructor to set up a gameboard to base my code off of and set the gameboard as an empty array to be filled in. I then implemented conditionals within that class with my function CheckForWin to define whether a player had won or not. Instead of writing another function to check for a tie, I decided to input it as an else statement within the conditionals found in CheckForWin(). After the conditionals, I added a forEach method to sift through my array since I had set up the 9-boxed board as an array with each box having it's own index. This forEach method went through the array using the function addSymbol to check if a box had already been clicked and if it was already clicked then a text would appear stating that the box was already clicked and asked the user to choose another box. If the box had not been already clicked then the function would input the symbol of the current player. The current player I set up as 'O' be default but then had it alternate using a ternary operator within my addSymbol function. When a player had accrued three symobls in a row I made sure my array conditionals showed winning combinations and thus a "Player ____ Wins!" message would appear based on the player who first got a winning combo.

I also made sure I created an instance of the class Gameboard to initialize all my code and run it each game. I also made sure to display who the current player was during each turn so as to clarify which symbol would be input next on the gameboard. Lastly, I made sure that if no winning combos were present, and the gameboard array was full, then a "Tie game" message would appear. 


### Lessons Learned :

- I learned to psuedo code more although I definitely want to work on it much more to organize my code and thinking much better
- I got more familiar with using the this keyword as a binding regarding classes and constructors
- I became more comfortable with ternary operators and how their syntax works.
- Overall, this project helped me understand OOP a little better. 


