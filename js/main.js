// tic tac toe
    // make box clickable 
    // take user one and user 2
    // user 1 is o user two is x
    //  need winning conditions 
    // announce winner or loser
    // use mostly OOP 

    //players//
    const player = 'X';
    const player2 = 'O';
    // board??//
    class Board {
        constructor() {
            this.cells = ['', '', '', '', '', '', '', '', ''];
        }
    
        setCell(index, player) {
            this.cells[index] = player;
        }
    }
    // logic//
    const winningCondition = [ // nested array with winn condition
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const cellElements = document.querySelectorAll('[data-cell]');
    const boardElement = document.getElementById('board');
    const winningMessageElement = document.getElementById('winningMessage'); // Corrected ID
    const winningMessageTextElement = document.getElementById('winningMessageText');
    let isPlayerOTurn = false;
    
    // to start game
    startGame();
    const resetButton = document.getElementById('restartButton'); // Moved resetButton here
    resetButton.addEventListener('click', startGame);
    
    function startGame() {
        isPlayerOTurn = false;
        cellElements.forEach(cell => {
            cell.classList.remove(player);
            cell.classList.remove(player2);
            cell.removeEventListener('click', handleCellClick);
            cell.addEventListener('click', handleCellClick, { once: true });
        });
        setBoardHoverClass();
        winningMessageElement.classList.remove('show');
    }
    
    function handleCellClick(e) {
        const cell = e.target;
        const currentClass = isPlayerOTurn ? player2 : player; // Use player and player2
        placeMark(cell, currentClass);
        if (checkWin(currentClass)) {
            endGame(false);
        } else if (isDraw()) {
            endGame(true);
        } else {
            swapTurns();
            setBoardHoverClass();
        }
    }
    
    function checkWin(currentClass) {
        return winningCondition.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(currentClass);
            });
        });
    }
    
    function endGame(draw) {
        if (draw) {
            winningMessageTextElement.innerText = `'It's a draw!'`;
        } else {
            winningMessageTextElement.innerText = `Player ${isPlayerOTurn ? 'O' : 'X'} wins!`;
        }
    }
    
    function placeMark(cell, currentClass) {
        if (currentClass === 'o') {
            cell.textContent = 'X';
        } else {
            cell.textContent = 'O';
        }
    }
    
    
    function swapTurns() {
        isPlayerOTurn = !isPlayerOTurn;
    }
    
    function setBoardHoverClass() {
        boardElement.classList.remove(player);
        boardElement.classList.remove(player2);
        if (isPlayerOTurn) {
            boardElement.classList.add(player);
        } else {
            boardElement.classList.add(player2);
        }
    }
    
    function isDraw() {
        return [...cellElements].every(cell => {
            return cell.classList.contains(player) || cell.classList.contains(player2); // Use player and player2
        });
    }
    