//initial object of the entire game
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
        const newPopUp = (() => {
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
        //clears the board back to defaut settings or "emptying" the squares
        const clearBoard = (() => {
            const allSquares = [...document.querySelectorAll(".square")];
            for(let i = 0; i < allSquares.length; i++){
                allSquares[i].innerHTML = "";
            }
            createBoard();
            gameStatus = false;
        });
        //this updates the board with the location of what was clicked and checks to make sure it can be filled
        const updateBoard = ((e) => {
            const square = document.getElementById(e.currentTarget.id);
            if(isSqaureAvailable(square) == true){
                let value = player.turnTaken();
                square.innerText = value;
                gameBoardStatus(parseInt(square.id), value);
            }
        })
        //confirms where a value can be placed either "x" or "o" as it checks each row then runs function checkWin
        const gameBoardStatus = ((square, value) => {
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
        //created to make sure the "square" space is actually empty to utilize filling it in other objects
        const isSqaureAvailable = ((square) => {
            if(square.innerText == "" && gameStatus == false){
                return true;
            } else {
                return false;
            }
        });
        //returns all values of all the objects so they can be utilized within each other
        return {
            create,
            gameBoardStatus,
            clearBoard,
            newPopUp,
            updateResults,
        };
    })();

    //object for creating the players and other conditions that all effect player functionality 
    const player = (() => {
        let turns = 1;

        const createPlayers = (name, symbol) => {
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
            createPlayers,
        };
    })();

    //the gameMagic object that runs every win function and displays a counter of the number of wins per player or a draw
    const gameMagic = (() => {
        //this was a experimental piece of code I found and utilized which helped me making a better win declaration object
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
                let otherRow = currentBoard[thisRow];
                //Check Win state in rows, columns and Diag
                if(winLogic(currentBoard[allRows[i]][0], currentBoard[allRows[i]][1], currentBoard[allRows[i]][2]) == true){
                    won(otherRow[0]);
                    return "game won";
                } else if (winLogic(currentBoard[allRows[0]][i], currentBoard[allRows[1]][i], currentBoard[allRows[2]][i]) == true){
                    won(currentBoard[allRows[0]][i]);
                    return "game won";
                } else if ((winLogic(topLeft, middle, botRight) == true) || (winLogic(topRight, middle, botLeft) == true)){
                    won(middle);
                    return "game won";
                } else {
                        for(let n=0; n < otherRow.length; n++){
                            if(otherRow[n] === null){
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

        const won = ((symbol) => {
            alertWin(symbol);
            player.reset();
            gameStatus = true;
            
        });
        //the winLogic here determines or makes sure that everything is equal in value and type for a declared official winner
        const winLogic = ((ele0, ele1, ele2) => {
            if(ele0 === ele1 && ele1 === ele2 && ele0 === ele2 && ele1 !== null){
                return true;
            } else {
                return false;
            }
        });
        //alerts the win messages or draw feature
        const alertWin = ((symbol) => {
            let winMessage = "";
            if(symbol == "X" || symbol == "O"){
                if (symbol === firstPlayer.symbol){
                    firstPlayer.wins++;
                    winMessage =  `${firstPlayer.name} has won ${firstPlayer.wins} time(s)`;
                } else if (symbol === secondPlayer.symbol){
                    secondPlayer.wins++;
                    winMessage = `${secondPlayer.name} has won ${secondPlayer.wins} time(s)`;
                }
            } else {
                winMessage = "DRAW!";
            }
            gameBoard.updateResults(winMessage);
        })
        //this object is allowing the value of the 
        const inputNames = (() => {
            const name1 = (document.getElementById("player1").value);
            const name2 = (document.getElementById("player2").value);
            firstPlayer = player.createPlayers(name1, "X");
            secondPlayer = player.createPlayers(name2, "O");
            gameBoard.newPopUp();


        });
        //this resets the game back to default
        const newGame = (()=>{
            player.reset();
            firstPlayer = "";
            secondPlayer = "";
            gameBoard.clearBoard();
            gameStatus = false;
            gameBoard.newPopUp();
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
//initial issue I was having when making the objects but these must be run outside of it or they don't run properly "learned from RC alumni"
let gameStatus = false;
let firstPlayer = "";
let secondPlayer = "";
tictactoe.gameBoard.create();