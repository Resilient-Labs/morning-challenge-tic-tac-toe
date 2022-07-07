import React from "react";
import './App.css';
import Cell from './cell'

// Array describing states that make a player a winner
const winnerStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let game_space = ['', '', '', '', '', '', '', '', ''];

function TicTacToe() {

  const [gameOn, setGameStatus] = React.useState(true);
  const [activePlayer, setActivePlayer] = React.useState('X');
  const [result, setResult] = React.useState(null);

  // Functions
  const update_game_space =  React.useCallback((index) => {
      game_space[index] = activePlayer;
  }, [activePlayer])

  const run_algorithmn_game_check = React.useCallback(() => {
    for (let i = 0; i <= 7; i++) {

        // Indexing the values at the winning positions and try to 
        // compare if they are all moves by the same player
        const currentState = winnerStates[i];
        const a = game_space[currentState[0]];
        const b = game_space[currentState[1]];
        const c = game_space[currentState[2]];

        // as long as one is empty game still on, 
        if (a === '' || b === '' || c === '') {
            // console.log("Continue playing...")
            continue;
        }
        if (a === b && b === c) {
            setGameStatus(false)
            // console.log("Game Over")
            setResult(`Player ${activePlayer} wins!`)
            // console.log("Winner : " + activePlayer)
            break;
        }
    }    
  },[activePlayer])

  const shift_to_next_player = React.useCallback(() => {
        activePlayer === 'X' ? setActivePlayer('O') : setActivePlayer('X');
  }, [activePlayer])

  React.useEffect(() => {
    console.log("activePlayer: " + activePlayer)
  }, [activePlayer])
  
  return (
    <div class="background">
      <div class="title">
          <h1>Tic Tac Toe</h1>
      </div>
      <div class="display">
          Turn : <span class="display-player playerX">Player {activePlayer}</span>
      </div>
      <div class="container">
          <Cell 
              activePlayer={activePlayer}
              update_game_space={update_game_space}
              run_algorithmn_game_check={run_algorithmn_game_check}
              index={0} 
              shift_to_next_player={shift_to_next_player}
              gameOn={gameOn}
            />
          <Cell 
              activePlayer={activePlayer}
              update_game_space={update_game_space}
              run_algorithmn_game_check={run_algorithmn_game_check}
              index={1} 
              shift_to_next_player={shift_to_next_player}
              gameOn={gameOn}
            />
          <Cell 
              activePlayer={activePlayer}
              update_game_space={update_game_space}
              run_algorithmn_game_check={run_algorithmn_game_check}
              index={2} 
              shift_to_next_player={shift_to_next_player}
              gameOn={gameOn}
            />
          <Cell 
              activePlayer={activePlayer}
              update_game_space={update_game_space}
              run_algorithmn_game_check={run_algorithmn_game_check}
              index={3} 
              shift_to_next_player={shift_to_next_player}
              gameOn={gameOn}
            />
          <Cell 
              activePlayer={activePlayer}
              update_game_space={update_game_space}
              run_algorithmn_game_check={run_algorithmn_game_check}
              index={4} 
              shift_to_next_player={shift_to_next_player}
              gameOn={gameOn}
            />
          <Cell 
              activePlayer={activePlayer}
              update_game_space={update_game_space}
              run_algorithmn_game_check={run_algorithmn_game_check}
              index={5} 
              shift_to_next_player={shift_to_next_player}
              gameOn={gameOn}
            />
          <Cell 
              activePlayer={activePlayer}
              update_game_space={update_game_space}
              run_algorithmn_game_check={run_algorithmn_game_check}
              index={6} 
              shift_to_next_player={shift_to_next_player}
              gameOn={gameOn}
            />
          <Cell 
              activePlayer={activePlayer}
              update_game_space={update_game_space}
              run_algorithmn_game_check={run_algorithmn_game_check}
              index={7} 
              shift_to_next_player={shift_to_next_player}
              gameOn={gameOn}
            />
          <Cell 
              activePlayer={activePlayer}
              update_game_space={update_game_space}
              run_algorithmn_game_check={run_algorithmn_game_check}
              index={8} 
              shift_to_next_player={shift_to_next_player}
              gameOn={gameOn}
            />
      </div>
      <div class="display winner">{result !== null ? result : null }</div>
      <div class="button_div">
          <button id="restart" onClick={() => window.location.reload()} >Restart</button>
      </div>

    </div>
  );
}

export default TicTacToe;
