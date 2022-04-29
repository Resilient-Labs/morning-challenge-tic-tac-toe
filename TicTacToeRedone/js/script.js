const playerWin = 'Winner';
const players = {
    playerX: 'X',
    playerO: 'O'
};

const bothTie = {
    playerTie: 'Tie'
};

const winnerCombos = [
    [[1,2],[3,6],[4,8]],
    [[0,2],[4,7]],
    [[0,1],[5,8],[4,6]],
    [[0,6],[4,5]],
    [[3,5],[1,7],[0,8]],
    [[3,4],[2,8]],
    [[7,8],[0,3],[2,4]],
    [[6,8],[1,4]],
    [[6,7],[2,5],[0,4]]
];

const gridSpace = document.querySelectorAll('.space');
const victoryBox = document.querySelector('#winBox > span')
const winOverlay = document.querySelector('#overlay')
const restartButton = document.querySelector('#restartButton')

let nextTurn;
let turnsLeft;
let playerWinner;
let combosWin;
let spaceInfo;

const restartGame = () => {
nextTurn = true;
turnsLeft = 9;
playerWinner;
combosWin = [];
spaceInfo = ['', '', '', '', '', '', '', '', ''];

gridSpace.forEach((s, i) => {
    s.innerHTML = spaceInfo[i];
    s.classList.remove(playerWin);
})

winOverlay.style.display = 'none';
}

const findWinner = (currentSlot) => {
    const winnerLeng = winnerCombos[currentSlot];

    for(let i = 0; i < winnerLeng.length; i++ ) {
        const currentTurn = spaceInfo[currentSlot];
        const firstTurn = spaceInfo[winnerLeng[i][0]];
        const secondTurn = spaceInfo[winnerLeng[i][1]];

        if (currentTurn === firstTurn && firstTurn === secondTurn) {
            return {
                user: currentTurn,
                combination: [currentSlot, winnerLeng[i][0], winnerLeng[i][1]]
            };
        }
    }

    if (turnsLeft === 0) {
        return {
            user: bothTie.playerTie,
            combination: undefined
        }
    }
};

const selectedSpaces = (combosWin) => {
    gridSpace[combosWin[0]].classList.add(playerWin);
    gridSpace[combosWin[1]].classList.add(playerWin);
    gridSpace[combosWin[2]].classList.add(playerWin);
}

const showResults = (playerWinner) => {
    if (playerWinner === bothTie.playerTie) {
        victoryBox.innerHtML = "It's a Tie!"
    } else {
        victoryBox.innerHTML = `${playerWinner} won!`
    }

    winOverlay.style.display = `grid`
}

restartButton.addEventListener('click', () => {
    restartGame();
})

gridSpace.forEach((s, i) => {
    s.addEventListener('click', () => {
        if (!spaceInfo[i]) {
            spaceInfo[i] = nextTurn ? players.playerX : players.playerO;
            turnsLeft--;
            nextTurn = !nextTurn;

            const playerWin = findWinner(i);
            playerWinner = playerWin && playerWin.user ? playerWin.user : undefined;
            combosWin = playerWin && playerWin.combination ? playerWin.combination : [];

            if (playerWinner) {
                if  (playerWinner !== bothTie.playerTie) {
                    selectedSpaces(combosWin);
                }

                showResults(playerWinner);
            }

            s.innerHTML = spaceInfo[i];
        }
    })
})

restartGame();