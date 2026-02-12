// Citation
//  https://medium.com/@canankorkut1 how-to-create-a-tic-tac-toe-with-html-css-and-javascript-10a25fddd356
// https://www.geeksforgeeks.org/javascript/simple-tic-tac-toe-game-using-javascript/
//https://www.youtube.com/watch?v=dtaZl_Uxzbo
//https://www.youtube.com/watch?v=AnmwHjpEhtA
//https://www.youtube.com/watch?v=knkWr93kClY

let boxes = [...document.querySelectorAll('.box')];
let resetBtn = document.querySelector('#reset');
let turnSoulReaper = true; // Soul Reaper (Ichigo) starts
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', function () {
        if (turnSoulReaper) {
            // Ichigo's representation
            box.innerText = ' o ';
            box.style.color = '#ff9900'; // Ichigo's orange
            turnSoulReaper = false;
            box.disabled = true;
            checkWinner();
        } else {
            // Hollow's representation 
            box.innerText = 'x ';
            box.style.color = '#ffffff'; // White for the hollow mask
            turnSoulReaper = true;
            box.disabled = true;
            checkWinner();
        }
    });
});

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
};

const checkWinner = () => {
    let hasWin = false;
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText.trim();
        let pos2Val = boxes[pattern[1]].innerText.trim();
        let pos3Val = boxes[pattern[2]].innerText.trim();

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "" &&
            pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            hasWin = true;
            return;
        }
    }

    if (!hasWin) {
        const allBoxesFilled = [...boxes].every((box) => box.innerText !== "");
        if (allBoxesFilled) {
            msgContainer.classList.remove('hide');
            msg.innerText = 'The fight is a Draw!';
        }
    }
};

const resetGame = () => {
    turnSoulReaper = true;
    enableBoxes();
    msgContainer.classList.add('hide');
};

newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);
