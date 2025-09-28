//activate listener for boxes
//create array
let i = 0;

const boxes = document.querySelectorAll('.box')
boxes.forEach(x => {
    x.addEventListener('click', xoToggle)
});

function xoToggle() {
    i++;
    if (i % 2 === 0) {
        this.innerText = 'O';
    } else {
        this.innerText = 'X';
    }
    winMechanics();
}

//Win Mechanics
//Activate gameStatus
const gameStatus = document.getElementById('gameStatus');

function winMechanics() {
    // create a switch case that takes in the value of 
    // box[i].innerText text and evaluate to the other boxes
    // make rule to ignore empty boxes 

    switch (true) {
        //Row Logic

        case (boxes[0].innerText !== '' && boxes[0].innerText === boxes[1].innerText && boxes[1].innerText === boxes[2].innerText):
            gameStatus.innerText = `${boxes[0].innerText} Wins! Top Row`;

            break
        case (boxes[3].innerText !== '' && boxes[3].innerText === boxes[4].innerText && boxes[4].innerText === boxes[5].innerText):
            gameStatus.innerText = `${boxes[3].innerText} Wins! Middle Row`
            break
        case (boxes[6].innerText !== '' && boxes[6].innerText === boxes[7].innerText && boxes[7].innerText === boxes[8].innerText):
            gameStatus.innerText = `${boxes[6].innerText} Wins! Bottom Row`
            break

        //Column Logic

        case (boxes[0].innerText !== '' && boxes[0].innerText === boxes[3].innerText && boxes[3].innerText === boxes[6].innerText):
            gameStatus.innerText = `${boxes[0].innerText} Wins! Column 1`
            break
        case (boxes[1].innerText !== '' && boxes[1].innerText === boxes[4].innerText && boxes[4].innerText === boxes[7].innerText):
            gameStatus.innerText = `${boxes[1].innerText} Wins! Column 2`
            break
        case (boxes[2].innerText !== '' && boxes[2].innerText === boxes[5].innerText && boxes[5].innerText === boxes[8].innerText):
            gameStatus.innerText = `${boxes[2].innerText} Wins! Column 3`
            break

        //Diagnal logic

        case (boxes[0].innerText !== '' && boxes[0].innerText === boxes[4].innerText && boxes[4].innerText === boxes[8].innerText):
            gameStatus.innerText = `${boxes[0].innerText} Wins! Diagnal`
            break
        case (boxes[2].innerText !== '' && boxes[2].innerText === boxes[4].innerText && boxes[4].innerText === boxes[6].innerText):
            gameStatus.innerText = `${boxes[2].innerText} Wins! Diagnal`
            break

        case (boxes[0].innerText !== '' && boxes[1].innerText !== '' && boxes[2].innerText !== '' &&
            boxes[3].innerText !== '' && boxes[4].innerText !== '' && boxes[5].innerText !== '' &&
            boxes[6].innerText !== '' && boxes[7].innerText !== '' && boxes[8].innerText !== ''):
            gameStatus.innerText = 'Draw, Please Reset The Game!'
        default:
            break;
    }
}


//Activate Reset Button
document.querySelector('#resetBtn').addEventListener('click', reset)
//Reset All Boxes To undefined
function reset() {

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = '';
    }
    gameStatus.innerText = 'Status: '; //reset game status
    i = 0;
}
