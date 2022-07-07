import React from "react";
import './App.css';

function Cell({ activePlayer, update_game_space, index, run_algorithmn_game_check, shift_to_next_player, gameOn}) {
  const [played, setPlayer] = React.useState('');
  const [move_played, setMovePlayed] = React.useState(false)

  const click = () => {
	  	if(move_played === false && gameOn){
		  	setPlayer(activePlayer)
		  	setMovePlayed(true)
		  	update_game_space(index)
		  	run_algorithmn_game_check()
		  	shift_to_next_player()
	  	}  	
    }

  return (
    <div>
      <div className="cell" onClick={click}><span className="played" >{played !== '' ? played : null}</span></div>
    </div>
  );
}

export default React.memo(Cell);
