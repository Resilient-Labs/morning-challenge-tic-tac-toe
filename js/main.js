//initial set up ideas from stackoverflow.com
const tictactoe = (() => {
    const gameBoard = (() => {
        let currentBoard;

        const updateResults = ((winMessage) => {
            const element = document.getElementById("results");
            element.innerHTML = winMessage;
        })
        //This creates a clear board with a value of "null" in each array location
        const createBoard = (() => {
            let newBoard = {
            row1: [null, null, null],
            row2: [null, null, null],
            row3: [null, null, null],
            }
            currentBoard = newBoard;
        });
        //This is pulling the board and allowing the user to enter information
        const changePopUp = (() => {
            const element = document.getElementById("popUpBackground").style;
            const state = element.display;
            if(state === "" || state === "flex"){
                element.display = "none";
            } else if(state === "none"){
                element.display = "flex";
            }
        })

        const create = (() => {
            //This is the creation of the entire gameboard
            const boardContainer = document.querySelector("#gameBoard");
            document.getElementById("namesButton").addEventListener("click", gameMagic.inputNames);
            document.getElementById("resetButton").addEventListener("click", gameMagic.newGame);
            document.getElementById("playAgainButton").addEventListener("click", clearBoard);
            
            //creates the squares that were styled in CSS into the gameboard
            for(let i = 0; i < 9; i++){
                const gameSquare = document.createElement("div");
                gameSquare.id = `${i}`;
                gameSquare.classList.add("square");
                boardContainer.appendChild(gameSquare);
                gameSquare.addEventListener("click", updateBoard);
                gameSquare.classList.add(`square${i}`);
            }
            createBoard();
        })
        //clears the board back to defautled settings
        const clearBoard = (() => {
            const allSquares = [...document.querySelectorAll(".square")];
            for(let i = 0; i < allSquares.length; i++){
                allSquares[i].innerHTML = "";
            }
            createBoard();
            gameOver = false;
        });
        //this updates the board with the location of what was clicked and checks to make sure it can be filled
        const updateBoard = ((e) => {
            const square = document.getElementById(e.currentTarget.id);
            if(isSqaureAvailable(square) == true){
                let value = player.turnTaken();
                square.innerText = value;
                gameBoardState(parseInt(square.id), value);
            }
        })
        //confirms where a value can be placed either "x" or "o" as it checks each row then runs function checkWin
        const gameBoardState = ((square, value) => {
            if(square === 0 || square === 1 || square === 2){
                currentBoard.row1[square] = value;
            } else if(square === 3 || square === 4 || square === 5){
                square = square - 3;
                currentBoard.row2[square] = value;
            } else if(square === 6 || square === 7 || square === 8){
                square = square - 6;
                currentBoard.row3[square] = value;
            }

            gameMagic.checkWin(currentBoard);
        });

        const isSqaureAvailable = ((square) => {
            if(square.innerText == "" && gameOver == false){
                return true;
            } else {
                return false;
            }
        });

        return {
            create,
            gameBoardState,
            clearBoard,
            changePopUp,
            updateResults,
        };
    })();


    const player = (() => {
        let turns = 1;

        const playerFactory = (name, symbol) => {
            let wins = 0;
            return { name, symbol, wins };
          };

        const turnTaken = (() => {
            turns++;
            return playersTurn();
        });
        const playersTurn =(() => {
            if(turns % 2 == 0){
                return firstPlayer.symbol;
            } else if (turns % 2 != 0){
                return secondPlayer.symbol;
            }
        });

        const reset = (() => {
            turns = 1;
            players = [];
        });
        
        
        return {
            turnTaken,
            reset,
            playerFactory,
        };
    })();


    const gameMagic = (() => {
        const checkWin = ((currentBoard) => {
            let allRows = Object.keys(currentBoard);
            let topLeft = currentBoard[allRows[0]][0];
            let topRight = currentBoard[allRows[0]][2];
            let middle = currentBoard[allRows[1]][1];
            let botRight = currentBoard[allRows[2]][2];
            let botLeft = currentBoard[allRows[2]][0];
            let nullValue = false;
            for(let i = 0; i < 3; i++){
                let thisRow = allRows[i];
                let thisRowEle = currentBoard[thisRow];
                //Check Win state in rows, columns and Diag
                if(winLogic(currentBoard[allRows[i]][0], currentBoard[allRows[i]][1], currentBoard[allRows[i]][2]) == true){
                    won(thisRowEle[0]);
                    return "game won";
                } else if (winLogic(currentBoard[allRows[0]][i], currentBoard[allRows[1]][i], currentBoard[allRows[2]][i]) == true){
                    won(currentBoard[allRows[0]][i]);
                    return "game won";
                } else if ((winLogic(topLeft, middle, botRight) == true) || (winLogic(topRight, middle, botLeft) == true)){
                    won(middle);
                    return "game won";
                } else {
                        for(let n=0; n < thisRowEle.length; n++){
                            if(thisRowEle[n] === null){
                                nullValue = true;
                                break;
                            }
                        }
                    }        
            }
            if(nullValue == false){
                won("tie");
            }
        });

        const winLogic = ((ele0, ele1, ele2) => {
            if(ele0 === ele1 && ele1 === ele2 && ele0 === ele2 && ele1 !== null){
                return true;
            } else {
                return false;
            }
        });
        const won = ((symbol) => {
            alertWin(symbol);
            player.reset();
            gameOver = true;
            
        });

        const alertWin = ((symbol) => {
            let winMessage = "Error";
            if(symbol == "X" || symbol == "O"){
                if (symbol === firstPlayer.symbol){
                    firstPlayer.wins++;
                    winMessage =  `${firstPlayer.name} has won ${firstPlayer.wins} time(s)`;
                } else if (symbol === secondPlayer.symbol){
                    secondPlayer.wins++;
                    winMessage = `${secondPlayer.name} has won ${secondPlayer.wins} time(s)`;
                }
            } else {
                winMessage = "It was a tie!";
            }
            gameBoard.updateResults(winMessage);
        })

        const inputNames = (() => {
            const temp1 = (document.getElementById("player1").value);
            const temp2 = (document.getElementById("player2").value);
            firstPlayer = player.playerFactory(temp1, "X");
            secondPlayer = player.playerFactory(temp2, "O");
            gameBoard.changePopUp();


        });

        const newGame = (()=>{
            player.reset();
            firstPlayer = "";
            secondPlayer = "";
            gameBoard.clearBoard();
            gameOver = false;
            gameBoard.changePopUp();
            gameBoard.updateResults("");
        })
        
        return {
            checkWin,
            inputNames,
            newGame,
        };
    })();

    return {
        gameBoard,
        player,
        gameMagic,
    };
})();

let gameOver = false;
let firstPlayer = "";
let secondPlayer = "";
tictactoe.gameBoard.create();