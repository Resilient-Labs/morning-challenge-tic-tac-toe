
//Player class profile
function Player(name, symbol) {
    this.name = name;
    this.symbol = symbol;
}


//used stackoverflow to figure this out lines(10-14): https://stackoverflow.com/questions/66306555/how-to-getelementbyid-for-another-html-page
const url_string = window.location.href;
const url = new URL(url_string);

const player1 = new Player(url.searchParams.get("p1"), 'X');
const player2 = new Player(url.searchParams.get("p2"), 'O');


//class for the game itself
class Game {
    cells = document.querySelectorAll('.cell')
    rematch = document.querySelector('#reset')
    restart = document.querySelector('#reset-all')
    updateStatus = document.querySelector('h2')
    gameResult = document.querySelector('h3')
    currentPlayer = player1;
    gameOver = false;
    clickSound = document.querySelector('#click')
    cheerSound = document.querySelector('#clap')
    gameTrack = document.querySelector('#game-track') //https://stackoverflow.com/questions/9419263/how-to-play-audio
    on = document.querySelector('#Music').addEventListener('click', () => this.playAudio(0.25))
    off = document.querySelector('#Music-1').addEventListener('click', () => this.stopAudio())

    checkwinner() {
        //ryan helped me come up with the win logic
        if ((this.cells[0].innerText !== '') && this.cells[0].innerText === this.cells[1].innerText && this.cells[0].innerText === this.cells[2].innerText) {
            this.gameResult.innerText = `${this.currentPlayer.name} Won!`;
            this.gameOver = true; //used chatGpt to figure out the game over logic to not allow user to click again
            this.backgroundColorWin(0, 1, 2);
            this.playAudio(0.1)
            this.cheerSound.play();
        } else if ((this.cells[3].innerText !== '') && this.cells[3].innerText === this.cells[4].innerText && this.cells[3].innerText === this.cells[5].innerText) {
            this.gameResult.innerText = `${this.currentPlayer.name} Won!`;
            this.gameOver = true;
            this.backgroundColorWin(3, 4, 5);
            this.playAudio(0.1)
            this.cheerSound.play();
        } else if ((this.cells[6].innerText !== '') && this.cells[6].innerText === this.cells[7].innerText && this.cells[6].innerText === this.cells[8].innerText) {
            this.gameResult.innerText = `${this.currentPlayer.name} Won!`;
            this.gameOver = true;
            this.backgroundColorWin(6, 7, 8);
            this.playAudio(0.1)
            this.cheerSound.play();
        } else if ((this.cells[0].innerText !== '') && this.cells[0].innerText === this.cells[3].innerText && this.cells[0].innerText === this.cells[6].innerText) {
            this.gameResult.innerText = `${this.currentPlayer.name} Won!`;
            this.gameOver = true;
            this.backgroundColorWin(0, 3, 6);
            this.playAudio(0.1)
            this.cheerSound.play();
        } else if ((this.cells[1].innerText !== '') && this.cells[1].innerText === this.cells[4].innerText && this.cells[1].innerText === this.cells[7].innerText) {
            this.gameResult.innerText = `${this.currentPlayer.name} Won!`;
            this.gameOver = true;
            this.backgroundColorWin(1, 4, 7);
            this.playAudio(0.1)
            this.cheerSound.play();
        } else if ((this.cells[2].innerText !== '') && this.cells[2].innerText === this.cells[5].innerText && this.cells[2].innerText === this.cells[8].innerText) {
            this.gameResult.innerText = `${this.currentPlayer.name} Won!`;
            this.gameOver = true;
            this.backgroundColorWin(2, 5, 8);
            this.playAudio(0.1)
            this.cheerSound.play();
        } else if ((this.cells[0].innerText !== '') && this.cells[0].innerText === this.cells[4].innerText && this.cells[0].innerText === this.cells[8].innerText) {
            this.gameResult.innerText = `${this.currentPlayer.name} Won!`;
            this.gameOver = true;
            this.backgroundColorWin(0, 4, 8);
            this.playAudio(0.1)
            this.cheerSound.play();
        } else if ((this.cells[2].innerText !== '') && this.cells[2].innerText === this.cells[4].innerText && this.cells[2].innerText === this.cells[6].innerText) {
            this.gameResult.innerText = `${this.currentPlayer.name} Won!`;
            this.gameOver = true;
            this.backgroundColorWin(2, 4, 6);
            this.playAudio(0.1)
            this.cheerSound.play();
        } else {

            let gameEnd = true;
            //loop through each cell to check if its empty
            this.cells.forEach(cell => {
                if (cell.innerText === '') {
                    gameEnd = false;
                }
            });
            //otherwise end the game and declare a draw
            if (gameEnd) {
                this.gameResult.innerText = `The game has ended with a draw. Rematch to play again or Start Over with new players.`
                this.gameOver = true;
            }
        }
    }
    startGame() {
        this.cells.forEach((x, i) => x.addEventListener('click', () => this.updateCell(i))) //ryan helped me with the loop logic especially the () =>
        this.rematch.addEventListener('click', () => this.rematchGame()) //ryan helped me with  the () =>
        this.restart.addEventListener('click', () => this.startOver()) //ryan helped me with  the () =>
        this.updateStatus.innerText = `It's ${this.currentPlayer.name}'s turn`;
    }
    updateCell(i) {
        if (this.gameOver) return;
        this.clickSound.play(); //https://stackoverflow.com/questions/9419263/how-to-play-audio
        this.clickSound.volume = 1.0;
        const cell = this.cells[i]; //parameter
        if (cell.innerText === '') {
            cell.innerText = this.currentPlayer.symbol;
            this.checkwinner();
            this.switchPlayer();
            this.updateStatus.innerText = `It's ${this.currentPlayer.name}'s turn`
        }
    }
    playAudio(vol) {
        this.gameTrack.volume = vol;
        this.gameTrack.play()
    }
    stopAudio() {
        this.gameTrack.volume = 0.25;
        this.gameTrack.pause()
    }
    switchPlayer() {
        if (this.currentPlayer === player1) {
            this.currentPlayer = player2;
        } else {
            this.currentPlayer = player1
        }
    }
    rematchGame() {
        //clear the board
        this.clickSound.play(); //https://stackoverflow.com/questions/9419263/how-to-play-audio
        this.cells.forEach(cell => {
            cell.innerText = ''
            cell.style.backgroundColor = '';
        });
        if (this.currentPlayer.symbol === player2.symbol) {
            this.switchPlayer()
        }
        this.gameOver = false;
        this.updateStatus.innerText = `It's ${this.currentPlayer.name}'s turn`
        this.gameResult.innerText = ''
        this.cheerSound.pause();
        if(!this.playAudio()){
            this.stopAudio()
        }
        this.cheerSound.currentTime = 0; //https://stackoverflow.com/questions/14834520/html5-audio-stop-function
        this.startGame()
    }
    startOver() {
        document.querySelector('#click').play(); //https://stackoverflow.com/questions/9419263/how-to-play-audios
        document.querySelector('p').innerText = ' ';
        window.open(`index.html`, '_self');
        this.cheerSound.pause();
        this.stopAudio()
        this.cheerSound.currentTime = 0;
    }
    backgroundColorWin(a, b, c) {
        this.cells[a].style.backgroundColor = 'rgba(0,253,81,1)';
        this.cells[b].style.backgroundColor = 'rgba(0,253,81,1)';
        this.cells[c].style.backgroundColor = 'rgba(0,253,81,1)';

    }
}
const game = new Game()
game.startGame()
game.playAudio()