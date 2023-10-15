# Pandic Pandac Pandoe

I created a cute Panda Tic Tac Toe game that allows two player to play against each other and notifies the players who won or if they tied. 

Link to project: 

![Pandic Pandac Pandoe Gif](<assets/img/pandic pandac pandoe.gif>)

## How It's Made:
Tech used: HTML, CSS, JavaScript

I used HTML to create the tic tac toe board outline. I used divs as the boxes are purely for styling and don't really have any semantic value. I used the divs to create a 3 by 3 gameboard with flexblox in css. For the styling, I decided on a Panda theme, so I found a bamboo stick font, a panda img, and a greenery background.

With JS, I tried to psuedo code how Tic Tac Toe works logically. Then I created a few variables to use in my code. I created a currentPlayer and set its value to X because the first player should always start with X. Then I assigned where I wanted my notifications to for the user to appear on the DOM. Next I created a nodeList of the divs from my HTML and turned that nodeList into an array. With that array, I created a loop with forEach to loop through each element. First I want the loop add a smurf (eventListener) to each of the elements so that when the player click on an element of the array it checks a few things. First I have it check if the element that the currentPlayer clicks on is already filled with a value and if so the currentPlayer can't override that space. If the space is not taken, then the current player can place their mark. 
Then I have the loop check if the currentPlayer was equal to X and if so to reassign the currentPlayer's value to O and vice versa each time the loop is ran. 

Then I create a smurf(eventListener) for the reset buttons that on click, ran an anonymous function where I ran another forEach loop to clear all the elements of the array to restart the game. I also had the reset button reset the player back to X so that the game always starts with currentPlayer as X no matter who won the previous game. 

Next I created a class for the Gameboard which held two methods. The first method was the check for win method and the second method was the check for a draw method. In the CheckForWin(), I created and if else if statement to check for the 8 different win conditions avaliable in Tic Tac Toe using the indexs of the elements of the cells array. For the checkForDraw(), I used the array method every() to check every element for whether its an X or an O. If the condition of the every() method is true then the players would be notified of a draw and the game would end. 

Lastly, I needed to initalized my GameBoard method within the forEach loop of the array from the beginning and run both methods during each loop of the element in order to continuosly check for a win or check for a draw.


## Optimizations

After completing this project, I noticed that whenever a player would win, the user could continue to click on empty elements and place their marks. In order to stop this behavior, I updated the conditonal statement within the forEach loop to check if the player has been notified of a win, reassign the currentPlayer value to empty, else reassign the currentPlayer to the next mark to be played next. I also included notifications to let the players know who's turn it is. 




## Lessons Learned:

I learned a couple of things while building this project, it was definitely more difficult than I thought as this was my first time using classes in JS in a practical manner. I learned that classes can have constructors that don't need to take in any parameters or create properites if they are not needed. I learned about the every() method for arrays and how to turn elements into a nodeList and then into an array. I learned a little more about how to psuedo code my code and break down the logic of a task such as tic tac toe. I gained a better understanding of loops, specifically forEach and how it can be used to loop through arrays. I also learned how to use arrow functions propery in order to reduce the lines of code I create. I learned about the drawbacks of using annoymous functions. When I attempted to fix the issue of the player being able to continue playing after the game has finished, I first tried to use removeEventListener but could not get the code to work the way I wanted. I learned that this is because removeEventListener requires the name of the function you are trying to stop as the second argument. I was able to find a work around without creating a separate function for my forEach loop!