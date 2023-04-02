# 📊 Morning Challenge: Tic-Tac-Toe

### Goal: Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.

### Process:

<ol>
  <li>The HTML and CSS was simple enough; classic &lt;table&gt; inputs to allow Javascript to add the user input. &lt;button&gt; for resetting the board and clearing the entire page as a whole (must be reset after a winner is declared).</li>
  <li>The CSS was given a simple layout, my classic dashed lines with soft fonts.</li>
  <li>The JavaScript behavior was made using class constructors--this is a concept I do not fully understand.  I really had to be walked through this one by a fellow cohort, Danny.</li>  
  <li>My conditionals are set up simply: is there an element in the space?  If so, do not add anything to that space.</li>
  <li>Using targetClass == 'TD,' it was able to target the cells of the table to be click</li>
  <li>The alternating player clicks was done based on a click count.  I added one to my count variable, and based on whether the count was divisble by 2 (even or add) the click input with give either a '💗' or a '💔' for player 1 or player 2, respectively.</li>
  <li>Winner is found through a <em>long</em> conditional that check if the cells have the same value inside of them, taking into a count all 8 ways to win.</li>
  <li>Variables called 'player1Score' and 'player2Score' are incremented based on who is declared winner.
  <li>Lastly, I added a gameEnd = true/false method to prevent the user from clicking on the box after a winner is declared.</li>
</ol>

<p>Overall, I am proud of this project because of how it runs.  It's a classic game of tic-tac-toe, but themed in the style of romance.  I still have to go over JavaScript and objects, but at least it looks pretty!</p>

<ul>
  <li>I completed the challenge: | 5 <em>It's pretty and it's done 💕</em></li>
  <li>I feel good about my code: | 3 <em>I still do not understand constructors!</em></li>
</ul>

