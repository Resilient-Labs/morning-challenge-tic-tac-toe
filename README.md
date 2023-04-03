Jojo's Bizzare Tic-Tac-Toe

https://jojosbizzarettt.netlify.app/
![jojo readme image](https://user-images.githubusercontent.com/126501848/229387651-7c7724c5-fe1b-4c0a-bc77-d7bb2a168c07.png)

How It's Made:
Tech used: HTML, CSS, JavaScript, OOP

This project is a'JOJO's bizzare adventure' themed game of tic-tac-toe in which there are two players, X always goes first. When a winner is found each box will fill with an announcement saying who won! 

Optimizations

the GaneLogic class was created to host the whoWon() method. orginally there was also a method for checking draw games but it was creating a bug in which if the last click would have  won when all of the other boxes were full, it would still consider it a draw. to remedy this I removed the method entirely and added the draw functionality to the 'else' of the whoWon() method. 

Lessons Learned:
Using Object Oriented Programming can really clean up and organize your code. I've also realized that creating comments not only lets me increase my understanding of my own code but allows me to explain my code better to other engineers.
