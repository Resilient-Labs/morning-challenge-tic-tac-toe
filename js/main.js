//worked with julie, kiany and eden

//things to do 
//create object for board --object has to be globally consistent 
//create objects for player1(X) and player2(O)--object has to be globally consistent 
//each player has click event of x or o on board object
//click event has to iterate turns between p1 and p2
//create function to check who wins 
//have logic for system to determine how to win-- has to be constistent throughout the whole game system -->use array
//have system keep tracks who wins and loses -->if/else statement
//resetting the game after its over
//know difference between for loop(know when it stops) and while loop(dont know when it stops) and know how to use them 

//grab each grid 
let board = document.querySelectorAll('.one9Box')


//creating a class will allow to reuse BoardGame worked with seth 
//class="object factory"
//creating logic for system to determine how to win--use arrays 

class BoardGame {
    //when creating class, constructor runs automatically to pass the boardGame -- gathers all the ingredient (ie recipe) //encapsulation 
    //global prototype on contructor  
    //'this.' refers to variable for that variable 
    constructor(board, player1, player2, numberOfMoves, howToWin) {
        this.board = board
        this.player1 = player1
        this.player2 = player2
        this.numberOfMoves = numberOfMoves
        this.howToWin = howToWin
    }
    
    checkWinner = (array) => {
        let winner = false
        //to check whether player won, player has to have at least 3 boxes checked 
        if (array.length > 2) {
            //system is going to look at howToWin array and see if it matches with player checked boxes
            this.howToWin.forEach(element => {
                let win = element.sort()
                //filtering players array to check of it has the winning combo
                //array.filter=checks whether fx returns true if it does store into filteredPlayerArray
                let filteredPlayerArray = array.filter(element => win.includes(element))
                filteredPlayerArray.sort()
                //".toString" converts into a string since arrays cant be compared 
                const equals = (a, b) => (a.toString()) === (b.toString());
                //if the filteredPlayer array is equal to the win element then winner boolean would be turn to true 
                if (equals(filteredPlayerArray, win)) {
                    winner = true
                }
            })
        }
        return winner
    }

    newGame =() =>{
        document.querySelector('.newGame').addEventListener('click',()=>{
            this.board.forEach((element)=>{
                element.innerText=""
            })
            this.numberOfMoves = 9
            this.turn()
            })
    }

    turn = () => {
        let boxesAlreadyClicked = []
        let player1Array = []
        let player2Array = []
        this.board.forEach((element, index) => {
            element.addEventListener('click', () => {
                // if index of the box that was chosen wasnt previously chosen AND its p1 turn AND number of move greater than 0
                if (!boxesAlreadyClicked.includes(index) && this.numberOfMoves % 2 !== 0 && this.numberOfMoves > 0) {
                    //box that was clicked is kept track and added to boxesAlreadyClicked
                    boxesAlreadyClicked.push(index)
                    player1Array.push(index)
                    //if checkWinner returns true then alert player 1 win
                    if (this.checkWinner(player1Array)) {
                        alert('Player 1 Wins')
                    }
                    element.innerText = player1.symbolXOrO
                    //reduce numberOfMoves by 1
                    this.numberOfMoves--
                    if(this.numberOfMoves===0 && !this.checkWinner(player1Array) && !this.checkWinner(player2Array)){
                        alert('Draw')}
                } else if (!boxesAlreadyClicked.includes(index) && this.numberOfMoves % 2 == 0 && this.numberOfMoves > 0) {
                    boxesAlreadyClicked.push(index)
                    player2Array.push(index)
                    if (this.checkWinner(player2Array)) {
                        alert('Player 2 Wins')
                    }
                    element.innerText = player2.symbolXOrO
                    this.numberOfMoves--
                }

            })
        })
    } //this is function of the prototype -- this is what we can do with it

}

const howToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
]
//when stating 'new' next word is class
// let test1=new BoardGame(board,'stringy1') //inheritance 
// test1.test()
// console.log(test1.name)
// let test2=new BoardGame(board,'stringy2')//these two booard game are example of polymorphism 
// console.log(test2.name)

//creating class for players
class Player {
    constructor(symbolXOrO) {
        //this.numberOfMoves = count //making this available for the scope 
        this.symbolXOrO = symbolXOrO
    }
    // test = () => {
    //     console.log(this.numberOfMoves)
    // }
}
let player1 = new Player("X")
let player2 = new Player("O")
let newGame = new BoardGame(board, player1, player2, 9, howToWin)
newGame.turn()
newGame.newGame()
// newGame.checkWinner([0, 1, 2])
console.log('hi')




// test1=new Player("X",5)
// test1.test()
// console.log(test1.symbolXOrO)
// test2=new Player("O",8)
// test2.test()
// console.log(test2.symbolXOrO)

//Important content to understant/learn

//know difference between for loop(knows when it stops, use when you know what youre trying to get) and while loop(dont know when it stops) 
//class creates a 'factory' the name of that factory ALWWAYS starts with an uppercase letter
//constructor instantiate (creates real instance of class of an object)
//class and constructor works together--> for class to work it has to call constructor to instantiate new instance stuff inside ()
