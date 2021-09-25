//create a class just for the board
//create objects for the board, including an array, the decision, and a response

class Response {
  constructor(msg) {
    this.msg = msg;
  }
}

class Board {
  constructor() {
    this.board = new Array(9);
    this.decision = "x";
    this.board = this.board.map(box => '')
    this.winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [2, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ],
    this.winner = false

  }

  fillBox(e) {
    const index = [...boxes].indexOf(e.target);
    // if (!gameBoard.fillBox(index)) {
    //   return;
    // }
    
    // if (this.board[index]) {
    // //   return false;
    // }

    console.log(this.board[index]);
    console.log(index);
    console.log(e.target)
    if (e.target.innerText === ''){
        console.log('there\'s no space here')
        if (this.decision === "x") {
        this.decision = "o";
        } else {
        this.decision = "x";
        }
    }else{
        alert('this spot is not empty')
        return 
    }
    this.board[index] = this.decision;
    // e.target.innerText = this.decision;
    this.updateBoxes()
    // this.checkwinner();
    // return true;
  }

  updateBoxes(){
      document.querySelectorAll('section').forEach((box, index)=> {
            box.innerText = this.board[index] || ''
        })
  }

  //   winningCond = {
  //     winner1: [this.board[0].decision, this.board[1].decision, this.board[2].decision],
  //   }
    //check for x and os 
    //checking to horizontal/vert/diag/
    //use win condition to check indexes of gameboard if index is a match then we use wins
  
  checkwinner() {
    
    let response = new Response("you won");
    // if(this.board[0] === '' && this.board[1] === '' && this.board[2] === '' && this.board[3] === '' && this.board[4] === '' && this.board[5] === '' && this.board[6] === '' && this.board[7] === '' && this.board[8] === '')
    //     if () {
    //       
    //       console.log('yup');

    //     } else if (this.board[3] === this.board[4] && this.board[4] === this.board[5] && this.board[3] !== ''){
    //         results.innerText = response.msg;
    //         console.log('whatever')
    //     }else {
    //         console.log('fucking annoying')
    //     }
    //   }

        this.winConditions.some( (subarray) => {
            if (this.board[subarray[0]] === this.board[subarray[1]] && this.board[subarray[1]] === this.board[subarray[2]] && this.board[subarray[0]]){
                if (this.winner){
                    return
                }else{
                    results.innerText = response.msg;
                    console.log('whatever')
                    this.winner = true
                }
                
            }
        })
    }

    //if this.decision equals x or o, then go through the array, and replace every element with an empty string. 

    clear(){
        let response = new Response("new game");
        let boxes = document.querySelectorAll('section')
        Array.from(boxes).map((box, index)=> {
            box.innerText = ''
        })
        this.board = new Array(9)
        this.winner = false
    }
 
}

//change between x and o
//safeguard against filling box already filled
