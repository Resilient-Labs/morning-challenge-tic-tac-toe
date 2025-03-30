document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box'); 
    let currentPlayer = 'X'; 
    let board = Array(9).fill(null); 

    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]  // Diagonals
    ];

    function handleClick(event) {
        let index = Array.from(boxes).indexOf(event.target);

        if (board[index] === null) {
            board[index] = currentPlayer; 
            event.target.innerText = currentPlayer;

            // Check if the current player won
            if (checkWinner()) {
                setTimeout(() => {
                    alert(currentPlayer + ' wins!');
                    resetBoard();
                }, 100);
                return;
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    // Check if there is a winner
    function checkWinner() {
        return winningCombos.some(combo => {
            return combo.every(index => board[index] === currentPlayer);
        });
    }

    function resetBoard() {
        board.fill(null); 
        boxes.forEach(box => box.innerText = '');
        currentPlayer = 'X'; 
    }

    boxes.forEach(box => box.addEventListener('click', handleClick));
});
