
//////OOP Tic-Tac-Toe////////////

const game = {

    playerOne: 'X',
    playerTwo: 'O',
    currentPlayer: this.playerOne,


    changePlayer() {
        if (this.currentPlayer === this.playerOne) {
            this.currentPlayer = this.playerTwo
        } else {
            this.currentPlayer = this.playerOne
        }
    },

    marker() {
        return this.currentPlayer
    },

    winner() {
        let arr = Array.from(document.querySelectorAll('section')).map(e => e.innerText)
        let board = arr.reduce((e, i, a) => (a % 3 == 0 ? e.push([i]) : e[e.length - 1].push(i)) && e, []);

        if (board[0].every(e => e === this.currentPlayer) || board[1].every(e => e === this.currentPlayer) || board[2].every(e => e === this.currentPlayer) || board.map(e => e[0]).every(e => e === this.currentPlayer) || board.map(e => e[1]).every(e => e === this.currentPlayer) || board.map(e => e[2]).every(e => e === this.currentPlayer) || board.map((e, i) => e[i]).every(e => e === this.currentPlayer) || board.map((e, i) => e[(e.length - 1) - i]).every(e => e === this.currentPlayer)) {

            
           document.querySelector('h1').innerText = `${this.currentPlayer} is the winner`

        } else if (arr.map(e => e).every(e => e !== '')) {
            alert('tie')
        }
    }

}


document.querySelector("div").addEventListener("click", (e) => {
    if (e.target.innerText == '') {
        game.changePlayer()
        e.target.innerText = game.marker()
        game.winner()
    }
})



/////////////Functional Programing Tic-Tac-Toe//////////////////

//  document.getElementById("container").addEventListener("click", playerMove)

// let counter = 0

// place marker function

// function playerMove(event) {

//    if((event.target.innerText === 'X') || (event.target.innerText === '0')){
//        return
//    }else{
//     if(counter % 2 === 0 ){
//         event.target.innerText =  '0'; 
//     }else{
//         event.target.innerText =  'X';
//     }
//     counter ++
//    }

//     winnerCheck()
// }


//check winner function
// function winnerCheck(){
//     let arr =  document.querySelectorAll('section')

//     if(arr[0].innerText === arr[1].innerText && arr[1].innerText === arr[2].innerText && arr[0].innerText !== '' ){
//       winner.innerText = 'You Win!'

//     }else if(arr[3].innerText === arr[4].innerText && arr[4].innerText === arr[5].innerText && arr[3].innerText !== ''){
//          winner.innerText = 'You Win!'

//     }else if(arr[6].innerText === arr[7].innerText && arr[7].innerText === arr[8].innerText && arr[6].innerText !== ''){
//          winner.innerText = 'You Win!'

//     }else if(arr[0].innerText === arr[3].innerText && arr[3].innerText === arr[6].innerText && arr[0].innerText !== ''){
//          winner.innerText = 'You Win!'

//     }else if(arr[1].innerText === arr[4].innerText && arr[4].innerText === arr[7].innerText && arr[1].innerText !== ''){
//          winner.innerText = 'You Win!'

//     }else if(arr[2].innerText === arr[5].innerText && arr[5].innerText === arr[8].innerText && arr[2].innerText !== ''){
//          winner.innerText = 'You Win!'

//     }else if(arr[0].innerText === arr[4].innerText && arr[4].innerText === arr[8].innerText && arr[0].innerText !== ''){
//          winner.innerText = 'You Win!'

//     }else if(arr[2].innerText === arr[4].innerText && arr[4].innerText === arr[6].innerText && arr[2].innerText !== ''){
//         winner.innerText = 'You Win!'
//     }else if(arr[0].innerText !== '' && arr[1].innerText !== '' && arr[2].innerText !== ''  && arr[3].innerText !== ''  && arr[4].innerText !== ''   && arr[5].innerText !== ''   && arr[6].innerText !== ''   && arr[7].innerText !== '' && arr[8].innerText !== ''     ){
//         alert('tie!')
//     }

// }
















