//Trying to make it OOP
//set players and shapes 
//Trying to make it OOP
//set players and shapes 


const players = {
	playerOne: '✖️',
	playerTwo: '⭕',
	whoseTurn: 0


}
console.log(players)
const thePlayers = Object.values(players)
console.log(thePlayers)


function theFirstPlayer() {
	return thePlayers[0]

}
function theSecondPlayer() {
	return thePlayers[1]

}

document.querySelector('#one').addEventListener('click', playGameOne)
function playGameOne() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let one = theFirstPlayer()
		document.querySelector('#one').innerText = (one)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let one =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#one').innerText = (one)
		threeInARowPlayerTwo()
	}

	


}

document.querySelector('#two').addEventListener('click', playGameTwo)
function playGameTwo() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let two = theFirstPlayer()
		document.querySelector('#two').innerText = (two)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let two =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#two').innerText = (two)
		threeInARowPlayerTwo()
	}
	
	

}

document.querySelector('#three').addEventListener('click', playGameThree)
function playGameThree() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let three = theFirstPlayer()
		document.querySelector('#three').innerText = (three)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let three =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#three').innerText = (three)
		threeInARowPlayerTwo()
	}
	
	

}

document.querySelector('#four').addEventListener('click', playGameFour)
function playGameFour() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let four = theFirstPlayer()
		document.querySelector('#four').innerText = (four)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let four =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#four').innerText = (four)
		threeInARowPlayerTwo()
	}
	
	

}

document.querySelector('#five').addEventListener('click', playGameFive)
function playGameFive() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let five = theFirstPlayer()
		document.querySelector('#five').innerText = (five)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let five =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#five').innerText = (five)
		threeInARowPlayerTwo()
	}
	
	
}

document.querySelector('#six').addEventListener('click', playGameSix)
function playGameSix() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let six = theFirstPlayer()
		document.querySelector('#six').innerText = (six)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let six =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#six').innerText = (six)
		threeInARowPlayerTwo()
	}
	
	

}

document.querySelector('#seven').addEventListener('click', playGameSeven)
function playGameSeven() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let seven = theFirstPlayer()
		document.querySelector('#seven').innerText = (seven)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let seven =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#seven').innerText = (seven)
		threeInARowPlayerTwo()
	}
	

}

document.querySelector('#eight').addEventListener('click', playGameEight)
function playGameEight() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let eight = theFirstPlayer()
		document.querySelector('#eight').innerText = (eight)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let eight =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#eight').innerText = (eight)
		threeInARowPlayerTwo()
	}
	
	
}

document.querySelector('#nine').addEventListener('click', playGameNine)
function playGameNine() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let nine = theFirstPlayer()
		document.querySelector('#nine').innerText = (nine)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let nine =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#nine').innerText = (nine)
		threeInARowPlayerTwo()
	}
	
	
}

function threeInARowPlayerOne() {
	let one = document.querySelector('#one').innerText
	let two = document.querySelector('#two').innerText
	let three = document.querySelector('#three').innerText
	let four = document.querySelector('#four').innerText
	let five = document.querySelector('#five').innerText
	let six = document.querySelector('#six').innerText
	let seven = document.querySelector('#seven').innerText
	let eight = document.querySelector('#eight').innerText
	let nine = document.querySelector('#nine').innerText

	if (one === two && two === three && one !== '' || four === five && five === six && four !== '' || seven === eight && eight === nine && seven !== '' || one === four && four === seven && one !== '' || two === five && five === eight && two !== '' || three === six && six === nine && three !== '' || one === five && five === nine && one !== '' || seven === five && five === three && seven !== '') {
		displayWinningResultsOne()

	}
	else {
		//displayLosingResults()
	}

}
function threeInARowPlayerTwo() {
	let one = document.querySelector('#one').innerText
	let two = document.querySelector('#two').innerText
	let three = document.querySelector('#three').innerText
	let four = document.querySelector('#four').innerText
	let five = document.querySelector('#five').innerText
	let six = document.querySelector('#six').innerText
	let seven = document.querySelector('#seven').innerText
	let eight = document.querySelector('#eight').innerText
	let nine = document.querySelector('#nine').innerText

	if (one === two && two === three && one !== '' || four === five && five === six && four !== '' || seven === eight && eight === nine && seven !== '' || one === four && four === seven && one !== '' || two === five && five === eight && two !== '' || three === six && six === nine && three !== '' || one === five && five === nine && one !== '' || seven === five && five === three && seven !== '') {
		displayWinningResultsTwo()

	}
	else {
		//displayLosingResults()
	}

}

//function displayLosingResults() {
//document.querySelector('#results').innerText = ('TRY AGAIN!')
//}
function displayWinningResultsOne() {
	document.querySelector('#results').innerText = ("PLAYER ONE WINS! ✖️ ✖️ ✖️ ")
	
}
function displayWinningResultsTwo() {
	document.querySelector('#results').innerText = ("PLAYER TWO WINS! ⭕ ⭕ ⭕ ")
	
}//only thing I am missing is resetting the board, and blocking a square when a winning happens 

/*--- I wanted to put the player wins, so that was the update above 
const players = {
	playerOne: '✖️',
	playerTwo: '⭕',
	whoseTurn: 0


}
console.log(players)
const thePlayers = Object.values(players)
console.log(thePlayers)


function theFirstPlayer() {
	return thePlayers[0]

}
function theSecondPlayer() {
	return thePlayers[1]

}

document.querySelector('#one').addEventListener('click', playGameOne)
function playGameOne() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let one = theFirstPlayer()
		document.querySelector('#one').innerText = (one)
	}
	else if (players.whoseTurn === 2){
		let one =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#one').innerText = (one)
	}

	threeInARow()


}

document.querySelector('#two').addEventListener('click', playGameTwo)
function playGameTwo() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let two = theFirstPlayer()
		document.querySelector('#two').innerText = (two)
	}
	else if (players.whoseTurn === 2){
		let two =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#two').innerText = (two)
	}
	
	threeInARow()

}

document.querySelector('#three').addEventListener('click', playGameThree)
function playGameThree() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let three = theFirstPlayer()
		document.querySelector('#three').innerText = (three)
	}
	else if (players.whoseTurn === 2){
		let three =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#three').innerText = (three)
	}
	
	threeInARow()

}

document.querySelector('#four').addEventListener('click', playGameFour)
function playGameFour() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let four = theFirstPlayer()
		document.querySelector('#four').innerText = (four)
	}
	else if (players.whoseTurn === 2){
		let four =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#four').innerText = (four)
	}
	
	threeInARow()

}

document.querySelector('#five').addEventListener('click', playGameFive)
function playGameFive() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let five = theFirstPlayer()
		document.querySelector('#five').innerText = (five)
	}
	else if (players.whoseTurn === 2){
		let five =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#five').innerText = (five)
	}
	
	threeInARow()
}

document.querySelector('#six').addEventListener('click', playGameSix)
function playGameSix() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let six = theFirstPlayer()
		document.querySelector('#six').innerText = (six)
	}
	else if (players.whoseTurn === 2){
		let six =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#six').innerText = (six)
	}
	
	threeInARow()

}

document.querySelector('#seven').addEventListener('click', playGameSeven)
function playGameSeven() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let seven = theFirstPlayer()
		document.querySelector('#seven').innerText = (seven)
	}
	else if (players.whoseTurn === 2){
		let seven =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#seven').innerText = (seven)
	}
	
	threeInARow()
}

document.querySelector('#eight').addEventListener('click', playGameEight)
function playGameEight() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let eight = theFirstPlayer()
		document.querySelector('#eight').innerText = (eight)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let eight =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#eight').innerText = (eight)
		threeInARowPlayerTwo()
	}
	
	
}

document.querySelector('#nine').addEventListener('click', playGameNine)
function playGameNine() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let nine = theFirstPlayer()
		document.querySelector('#nine').innerText = (nine)
	}
	else if (players.whoseTurn === 2){
		let nine =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#nine').innerText = (nine)
	}
	
	threeInARow()
}

function threeInARowPlayerOne() {
	let one = document.querySelector('#one').innerText
	let two = document.querySelector('#two').innerText
	let three = document.querySelector('#three').innerText
	let four = document.querySelector('#four').innerText
	let five = document.querySelector('#five').innerText
	let six = document.querySelector('#six').innerText
	let seven = document.querySelector('#seven').innerText
	let eight = document.querySelector('#eight').innerText
	let nine = document.querySelector('#nine').innerText

	if (one === two && two === three && one !== '' || four === five && five === six && four !== '' || seven === eight && eight === nine && seven !== '' || one === four && four === seven && one !== '' || two === five && five === eight && two !== '' || three === six && six === nine && three !== '' || one === five && five === nine && one !== '' || seven === five && five === three && seven !== '') {
		displayWinningResults()

	}
	else {
		//displayLosingResults()
	}

}
function threeInARowPlayerTwo() {
	let one = document.querySelector('#one').innerText
	let two = document.querySelector('#two').innerText
	let three = document.querySelector('#three').innerText
	let four = document.querySelector('#four').innerText
	let five = document.querySelector('#five').innerText
	let six = document.querySelector('#six').innerText
	let seven = document.querySelector('#seven').innerText
	let eight = document.querySelector('#eight').innerText
	let nine = document.querySelector('#nine').innerText

	if (one === two && two === three && one !== '' || four === five && five === six && four !== '' || seven === eight && eight === nine && seven !== '' || one === four && four === seven && one !== '' || two === five && five === eight && two !== '' || three === six && six === nine && three !== '' || one === five && five === nine && one !== '' || seven === five && five === three && seven !== '') {
		displayWinningResults()

	}
	else {
		//displayLosingResults()
	}

}

//function displayLosingResults() {
//document.querySelector('#results').innerText = ('TRY AGAIN!')
//}
function displayWinningResults() {
	document.querySelector('#results').innerText = ("YOU WIN!")//I need to work it saying X or O wins 
	
}



///--- THIS IS FOR THE O section 

/*document.querySelector('#one').addEventListener('dblclick', playGameOne)
function playGameOne() {
	let one = theSecondPlayer()
	document.querySelector('#one').innerText = (one)
	threeInARow()


}

document.querySelector('#two').addEventListener('dblclick', playGameTwo)
function playGameTwo() {
	let two = theSecondPlayer()
	document.querySelector('#two').innerText = (two)
	threeInARow()

}

document.querySelector('#three').addEventListener('dblclick', playGameThree)
function playGameThree() {
	let three = theSecondPlayer()
	document.querySelector('#three').innerText = (three)
	threeInARow()

}

document.querySelector('#four').addEventListener('dblclick', playGameFour)
function playGameFour() {
	let four = theSecondPlayer()
	document.querySelector('#four').innerText = (four)
	threeInARow()

}

document.querySelector('#five').addEventListener('dblclick', playGameFive)
function playGameFive() {
	let five = theSecondPlayer()
	document.querySelector('#five').innerText = (five)
	threeInARow()

}

document.querySelector('#six').addEventListener('dblclick', playGameSix)
function playGameSix() {
	let six = theSecondPlayer()
	document.querySelector('#six').innerText = (six)
	threeInARow()

}

document.querySelector('#seven').addEventListener('dblclick', playGameSeven)
function playGameSeven() {
	let seven = theSecondPlayer()
	document.querySelector('#seven').innerText = (seven)
	threeInARow()
}

document.querySelector('#eight').addEventListener('dblclick', playGameEight)
function playGameEight() {
	let eight = theSecondPlayer()
	document.querySelector('#eight').innerText = (eight)
	threeInARow()
}

document.querySelector('#nine').addEventListener('dblclick', playGameNine)
function playGameNine() {
	let nine = theSecondPlayer()
	document.querySelector('#nine').innerText = (nine)
	threeInARow()
}

function threeInARow() {
	let one = document.querySelector('#one').innerText
	let two = document.querySelector('#two').innerText
	let three = document.querySelector('#three').innerText
	let four = document.querySelector('#four').innerText
	let five = document.querySelector('#five').innerText
	let six = document.querySelector('#six').innerText
	let seven = document.querySelector('#seven').innerText
	let eight = document.querySelector('#eight').innerText
	let nine = document.querySelector('#nine').innerText

	if (one === two && two === three && one !== '' || four === five && five === six && four !== '' || seven === eight && eight === nine && seven !== '' || one === four && four === seven && one !== '' || two === five && five === eight && two !== '' || three === six && six === nine && three !== '' || one === five && five === nine && one !== '' || seven === five && five === three && seven !== '') {
		displayWinningResults()

	}
	else {
		//displayLosingResults()
	}

}

//function displayLosingResults() {
//document.querySelector('#results').innerText = ('TRY AGAIN!')
//}
function displayWinningResults() {
	document.querySelector('#results').innerText = ('WINNER!')
}


/*add click event and display winner 
document.querySelector('#one').addEventListener('click', playGame)
function playGame() {
	let one = theFirstPlayer()
	let two = theFirstPlayer()
	let three = theFirstPlayer()
	let four = theFirstPlayer()
	let five = theFirstPlayer()
	let six = theFirstPlayer()
	let seven = theFirstPlayer()
	let eight = theFirstPlayer()
	let nine = theFirstPlayer()
	document.querySelector('#one').innerText = (one)
	document.querySelector('#two').innerText = (two)
	document.querySelector('#three').innerText = (three)
	document.querySelector('#four').innerText = (four)
	document.querySelector('#five').innerText = (five)
	document.querySelector('#six').innerText = (six)
	document.querySelector('#seven').innerText = (seven)
	document.querySelector('#eight').innerText = (eight)
	document.querySelector('#nine').innerText = (nine)

		if (one === two && two === three || four === five && five === six || seven === eight && eight === nine|| one === four && four === seven ||two === five && five === eight ||three === six && six === nine || one === five && five === nine || seven === five && five === three) {
			 document.querySelector('#results').innerText = 'WINNER!'
	

	}
	else {
		document.querySelector('#results').innerText = 'TRY AGAIN!'
	}
}






/*make players 
class MakePlayers {
	constructor (playerName, playerAssignedShape){
		this.name = playerName
		this.shape = playerAssignedShape
		
	}
}
let playerOne = new MakePlayers ('Player One','✖️' )
let  playerTwo = new MakePlayers ('Player Two', '⭕')

//make board 
class MakeBoard {
constructor (){
	this.square1 = 1
	this.square2 = 2
	this.square3 = 3
	this.square4 = 4
	this.square5 = 5
	this.square6 = 6
	this.square7 = 7
	this.square8 = 8
	this.square9 = 9
}
}
let board = new MakeBoard ()
const theGame = document.querySelector('.theGame')

// make click events, to place x or o in squares ,  this is where I have been struggling 




	


//Below is my thought process: 

/*pseudo code from class : 
// make two players
class  TicTacToePlayers {
	constructor (playerName, assignedShape, playerWins)
	this.name = playerName
	this.shape = assignedShape
	this.wins = playerWins
	
}
score (tracker){
	this.wins +=1
	document.querySelector('h2').innerText = `${this.shape} WON. ${this.name} has ${this.wins} wins of ${numberOfGames} games`;
}
}
let playerOne = new TicTac ('player one', '✖️', 0 )
let playerTwo = new TicTac ('player two', '⭕', 0 )
/


let  playerOne = {
	x: "✖️"
}
let playerTwo = {
	o: "⭕"
}
const board = {
	TR: "1",
	TC: "2",
	TL: "3",
	MR: "4",
	MC: "5",
	ML: "6",
	BR: "7",
	BC: "8",
	BL: "9",
	

}
console.log(playerOne)
console.log(playerTwo)
console.log(board)
const squares = Object.innerTexts(board)
const firstPlayer = Object.innerText(playerOne)
const  secondPlayer = Object.innerText (playerTwo)
document.getElementById('#one').addEventListener('click', theFirstPlayer)

function ticOrticOrTac () {
	if (firstshape ===firstshape){
document.querySelector('div').innerText
	}
	else if ( secondshape === secondshape){
		document.querySelector('div').innerText	
	} 
}



//pseudo code 
//create board using html and css: done
//create an object that includes player, assign shape, and win conditions:  done?
/*class TicTacToe {
	constructor (shape, board, win){
	this.shape = 
	this.board = [
		[ "1", "2", "3", "4", "5","6","7", "8","9",]

	]
	this.win = 
	
	
}
	playerName(){
		document.querySelector('h2').innerText = (`${this.player}`)
	}
	playerShape(){
		document.querySelector('div').innerText = (`${this.shape}`)
	}
	score(){
		this.wins += 1
		document.querySelector('h3').innerText = (`${this.wins}`)
	}	
}
let playerOne = new TicTacToe ('player one', '✖️', 0 )
let playerTwo = new TicTacToe ('player two', '⭕', 0 )



// when you click on the box let the x or the o show 
//Note: I need help!!
/*document.querySelector('div').addEventListener('click', theFirstPlayer)
function theFirstPlayer (playerOne){
	TicTacToe.forEach(element => {
		displayOne = TicTacToe[1]
		
	});
console.log(displayOne);

	


}





/*const board = {
	TR: "1",
	TC: "2",
	TL: "3",
	MR: "4",
	MC: "5",
	ML: "6",
	BR: "7",
	BC: "8",
	BL: "9",
	

}


let  playerOne = {
	x: "✖️"
}
let playerTwo = {
	o: "⭕"
}


console.log(playerOne)
console.log(playerTwo)
console.log(board);
const squares = Object.innerTexts(board)
console.log(squares);
const firstPlayer = Object.innerTexts(playerOne)
console.log(firstPlayer);
const secondPlayer = Object.innerTexts(playerTwo)
console.log(secondPlayer);






function ticOrTacWinner(squares) {
if (1 === 2 === 3 || 4 === 5 === 6 || 7 === 8 === 9|| 1 === 4=== 7 ||2 === 5 === 8 ||3 === 6=== 9 || 1 === 5 === 9 || 7 === 5 === 3) {
		document.querySelector('#results').textContent = 'WINNER!'
	}
	else {
		document.querySelector('#results').textContent = 'NEW GAME'	
	} 
}
/*document.querySelector('firstbutton').addEventListener('click', theFirstPlayer)
function ticOrticOrTac () {
	if (firstshape ===firstshape){
document.querySelector('div').innerText
	}
	else if ( secondshape === secondshape){
		document.querySelector('div').innerText	
	} 
}
document.querySelector('firstbutton').addEventListener('click', theFirstPlayer)
function ticOrticOrTac () {
	if (firstshape ===firstshape){
document.querySelector('div').innerText
	}
	else if ( secondshape === secondshape){
		document.querySelector('div').innerText	
	} 
}
document.querySelector('firstbutton').addEventListener('click', theFirstPlayer)
function ticOrticOrTac () {
	if (firstshape ===firstshape){
document.querySelector('div').innerText
	}
	else if ( secondshape === secondshape){
		document.querySelector('div').innerText	
	} 
}


/*document.querySelector('button').addEventListener('click', playGame)
function playGame() {
	let one = ticOrticOrTac ()
	let two = ticOrticOrTac ()
	let three = ticOrticOrTac ()
	let four = ticOrticOrTac ()
	let five = ticOrticOrTac ()
	let six = ticOrticOrTac ()
	let seven = ticOrticOrTac ()
	let eight = ticOrticOrTac ()
	let nine = ticOrticOrTac ()
	document.querySelector('#one').innerText = (one)
	document.querySelector('#two').innerText = (two)
	document.querySelector('#three').innerText = (three)
	document.querySelector('#four').innerText = (four)
	document.querySelector('#five').innerText = (five)
	document.querySelector('#six').innerText = (six)
	document.querySelector('#seven').innerText = (seven)
	document.querySelector('#eight').innerText = (eight)
	document.querySelector('#nine').innerText = (nine)



	if (one === two === three || four === five === six || seven === eight === nine|| one === four === seven ||two === five === eight ||three === six === nine || one === five === nine || seven === five === three) {
		document.querySelector('#results').innerText = 'WINNER!'

	}
	else {
		document.querySelector('#results').innerText = 'TRY AGAIN!'
	}
}
/*function TicTac (player, shape, wins){
	this.player =player
	this.shape = shape
	this.wins = wins 
	
}
let playerOne = new TicTac ('player one', '✖️', 0 )
let playerTwo = new TicTac ('player two', '⭕', 0 )
document.querySelector('div').addEventListener('click', ticTacToe)
function ticTacToe (){

}


/*const shapes = {
	x: "✖️",
	o: "⭕"
}
console.log(shapes)
document.querySelector('div').innerText = (`$this.shape`)
/*
some puzzle pieces from past activities : 

class MakeCharacter{
	constructor(kick,punch,specialMove,taunt,level){
		this.kick = kick
		this.punch = punch
		this.specialMove = specialMove
		this.taunt = taunt
		this.level = level
	}
	sayTaunt(){
		alert(`${this.taunt}`)
	}
	saySpecialMove(){
		alert(`You can't handle my ${this.specialMove}`)
	}
	levelUp(){
		this.level += 1
		alert(`My new level is ${this.level}`)
	}
}

let ryu = new MakeCharacter('high kick','high punch','HADOUKEEENNNNNN','You smell', 1)

let chunLi = new MakeCharacter('high kick','low punch','Spinning Bird Kick','Scramm Kid',1)


function ticTacToe(players, shapes, wins, board) {
	this.players = players
	this.shapes = shapes
	this.wins = wins
	document.querySelector('div').addEventListener('click', ticTac)
	function ticTac(board) {
		if ( 1===2===3 & )


	}


}




const squares = Object.innerTexts(board)
console.log(squares);

document.querySelector('div').addEventListener('click', ticTac)
function ticticOrTac () {


document.querySelector('#one').addEventListener('click', playGame)
function playGame() {
	let one = theFirstPlayer()
	let two = theFirstPlayer()
	let three = theFirstPlayer()
	let four = theFirstPlayer()
	let five = theFirstPlayer()
	let six = theFirstPlayer()
	let seven = theFirstPlayer()
	let eight = theFirstPlayer()
	let nine = theFirstPlayer()
	document.querySelector('#one').innerText = (one)
	document.querySelector('#two').innerText = (two)
	document.querySelector('#three').innerText = (three)
	document.querySelector('#four').innerText = (four)
	document.querySelector('#five').innerText = (five)
	document.querySelector('#six').innerText = (six)
	document.querySelector('#seven').innerText = (seven)
	document.querySelector('#eight').innerText = (eight)
	document.querySelector('#nine').innerText = (nine)

		if (one === two && two === three || four === five && five === six || seven === eight && eight === nine|| one === four && four === seven ||two === five && five === eight ||three === six && six === nine || one === five && five === nine || seven === five && five === three) {
			 document.querySelector('#results').innerText = 'WINNER!'
	

	}
	else {
		document.querySelector('#results').innerText = 'TRY AGAIN!'
	}
}


}*/


