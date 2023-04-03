let playerONE = "X"; //
document.querySelector('#reset').addEventListener('click' , restart)

let tileDivs = document.querySelectorAll(".tile");
console.log(tileDivs);
// Add to Anki(two diffrent things) pulling from tileDiv
let phillyBaddest = Array.from(tileDivs);

phillyBaddest.forEach((mouna) => {
  mouna.addEventListener("click", () => {
    if (mouna.innerText != "") {
      return;
    }
    mouna.innerText = playerONE
    checkDraw() //- Commented this out- comment in after making function, on every click this function will be called
    checkForWinner() //commented out- comment in after making function

    // Tenarary operater
    playerONE = playerTwo == 'X' ? 'O' : 'X'
});
});

// checks for draw


    


  class ErinsGame{
    constructor() {
        this.active = true
    }

    checkDraw() {
        if(! this.active) {
            return
        }

        let draw = phillyBaddest.every((element, index) => phillyBaddest[index].innerText == 'X' || phillyBaddest[index].innerText == 'O')
        // 
        if (draw) {
            alert ('it is a draw')
            this.active = false
        }
    }

    checkForWinner() {
        if (phillyBaddest[0].innerText === playerONE && phillyBaddest[1].innerText === playerONE && phillyBaddest[2].innerText === playerONE) {
            alert('You Win!');
            this.active = false
        } else if (phillyBaddest[3].innerText === playerONE && phillyBaddest[4].innerText === playerONE && phillyBaddest[5].innerText === playerONE) {
            alert('You Win!');
            this.active = false
        } else if (phillyBaddest[6].innerText === playerONE && phillyBaddest[7].innerText === playerONE && phillyBaddest[8].innerText === playerONE) {
            alert('You Win!');
            this.active = false
        } else if (phillyBaddest[0].innerText === playerONE && phillyBaddest[3].innerText === playerONE && phillyBaddest[6].innerText === playerONE) {
            alert('You Win!');
            this.active = false
        } else if (phillyBaddest[1].innerText === playerONE && phillyBaddest[4].innerText === playerONE && phillyBaddest[7].innerText === playerONE) {
            alert('You Win!');
            this.active = false
        } else if (phillyBaddest[2].innerText === playerONE && phillyBaddest[5].innerText === playerONE && phillyBaddest[8].innerText === playerONE) {
            alert('You Win!');
            this.active = false
        } else if (phillyBaddest[0].innerText === playerONE && phillyBaddest[4].innerText === playerONE && phillyBaddest[8].innerText === playerONE) {
            alert('You Win!');
            this.active = false
        } else if (phillyBaddest[2].innerText === playerONE && phillyBaddest[4].innerText === playerONE && phillyBaddest[6].innerText === playerONE) {
            alert('You Win!');
            this.active = false
        }
    }
    


   
   


   restart() {
       window.location.reload()
       this.active = true
       cell.forEach(element => element.innerText = "")
       // document.querySelector('announcement').innerText = ""
   }
}





//reset function for reset button


const erinsgame = newErinsGame()
restart.addEventListener('click', erinsgame.restart)
   // //reset player 1 back to "x"
   // player1 = "x"


   //remove all innerText from the cells.





