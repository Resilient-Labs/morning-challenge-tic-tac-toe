//I need couple listeners in my life
//listeners inspired by Elvin, Zain, Suf, Gang
// document.querySelector(".box-one").addEventListener("click", playerThrowsXO);
// document.querySelector(".box-two").addEventListener("click", playerThrowsXO);
// document.querySelector(".box-three").addEventListener("click", playerThrowsXO);
// document.querySelector(".box-four").addEventListener("click", playerThrowsXO);
// document.querySelector(".box-five").addEventListener("click", playerThrowsXO);
// document.querySelector(".box-six").addEventListener("click", playerThrowsXO);
// document.querySelector(".box-seven").addEventListener("click", playerThrowsXO);
// document.querySelector(".box-eight").addEventListener("click", playerThrowsXO);


//initial values because we gotta start somewhere
const scores = ["n/a", "n/a", "n/a", "n/a", "n/a", "n/a","n/a", "n/a", "n/a"]
//make it easier to select boxes later in functions
const boxOne = document.querySelector(".box-one")
const boxTwo = document.querySelector(".box-two")
const boxThree = document.querySelector(".box-three")
const boxFour = document.querySelector(".box-four")
const boxFive = document.querySelector(".box-five")
const boxSix = document.querySelector(".box-six")
const boxSeven = document.querySelector(".box-seven")
const boxEight = document.querySelector(".box-eight")
const boxNine = document.querySelector(".box-nine")

//learn from 
//this. https://bobbyhadz.com/blog/javascript-check-if-element-was-clicked#:~:text=To%20check%20if%20an%20element,time%20the%20element%20is%20clicked.
boxOne.addEventListener("click", function playerThrowsXO(event) {
    let playerSelected = document.querySelector('input[name="players"]:checked').value;
    event.preventDefault();
    console.log('element click')
    console.log(playerSelected)
    if (playerSelected === "player-one") {
        boxOne.innerHTML = "x"
        scores[0] = "x"
        console.log(scores)

        document.querySelector('#p2').checked = "true"
    }
    else if (playerSelected === "player-two") {
        boxOne.innerHTML = "o"
        scores[0] = "o"
        console.log(scores)
        document.querySelector('#p1').checked = "true"
  
    }
    
});
boxTwo.addEventListener("click", function playerThrowsXO(event) {
    let playerSelected = document.querySelector('input[name="players"]:checked').value;
    event.preventDefault();
    console.log('element click')
    console.log(playerSelected)
    if (playerSelected === "player-one") {
        boxTwo.innerHTML = "x"
        scores[1] = "x"
        console.log(scores)
        document.querySelector('#p2').checked = "true"
    }
    else if (playerSelected === "player-two") {
        boxTwo.innerHTML = "o"
        scores[1] = "o"
        console.log(scores)
        document.querySelector('#p1').checked = "true"
    }
    
});
boxThree.addEventListener("click", function playerThrowsXO(event) {
    let playerSelected = document.querySelector('input[name="players"]:checked').value;
    event.preventDefault();
    console.log('element click')
    console.log(playerSelected)
    if (playerSelected === "player-one") {
        boxThree.innerHTML = "x"
        scores[2] = "x"
        console.log(scores)
        document.querySelector('#p2').checked = "true"
    }
    else if (playerSelected === "player-two") {
        boxThree.innerHTML = "o"
        scores[2] = "o"
        console.log(scores)
        document.querySelector('#p1').checked = "true"
    }
    
});
boxFour.addEventListener("click", function playerThrowsXO(event) {
    let playerSelected = document.querySelector('input[name="players"]:checked').value;
    event.preventDefault();
    console.log('element click')
    console.log(playerSelected)
    if (playerSelected === "player-one") {
        boxFour.innerHTML = "x"
        scores[3] = "x"
        console.log(scores)
        document.querySelector('#p2').checked = "true"
    }
    else if (playerSelected === "player-two") {
        boxFour.innerHTML = "o"
        scores[3] = "o"
        console.log(scores)
        document.querySelector('#p1').checked = "true"
    }
    
});
boxFive.addEventListener("click", function playerThrowsXO(event) {
    let playerSelected = document.querySelector('input[name="players"]:checked').value;
    event.preventDefault();
    console.log('element click')
    console.log(playerSelected)
    if (playerSelected === "player-one") {
        boxFive.innerHTML = "x"
        scores[4] = "x"
        console.log(scores)
        document.querySelector('#p2').checked = "true"
    }
    else if (playerSelected === "player-two") {
        boxFive.innerHTML = "o"
        scores[4] = "o"
        console.log(scores)
        document.querySelector('#p1').checked = "true"
    }
    
});
boxSix.addEventListener("click", function playerThrowsXO(event) {
    let playerSelected = document.querySelector('input[name="players"]:checked').value;
    event.preventDefault();
    console.log('element click')
    console.log(playerSelected)
    if (playerSelected === "player-one") {
        boxSix.innerHTML = "x"
        scores[5] = "x"
        console.log(scores)
        document.querySelector('#p2').checked = "true"
    }
    else if (playerSelected === "player-two") {
        boxSix.innerHTML = "o"
        scores[5] = "o"
        console.log(scores)
        document.querySelector('#p1').checked = "true"
    }
    
});
boxSeven.addEventListener("click", function playerThrowsXO(event) {
    let playerSelected = document.querySelector('input[name="players"]:checked').value;
    event.preventDefault();
    console.log('element click')
    console.log(playerSelected)
    if (playerSelected === "player-one") {
        boxSeven.innerHTML = "x"
        scores[6] = "x"
        console.log(scores)
        document.querySelector('#p2').checked = "true"
    }
    else if (playerSelected === "player-two") {
        boxSeven.innerHTML = "o"
        scores[6] = "o"
        console.log(scores)
        document.querySelector('#p1').checked = "true"
    }
    
});
boxEight.addEventListener("click", function playerThrowsXO(event) {
    let playerSelected = document.querySelector('input[name="players"]:checked').value;
    event.preventDefault();
    console.log('element click')
    console.log(playerSelected)
    if (playerSelected === "player-one") {
        boxEight.innerHTML = "x"
        scores[7] = "x"
        console.log(scores)
        document.querySelector('#p2').checked = "true"
    }
    else if (playerSelected === "player-two") {
        boxEight.innerHTML = "o"
        scores[7] = "o"
        console.log(scores)
        document.querySelector('#p1').checked = "true"
    }
    
});
boxNine.addEventListener("click", function playerThrowsXO(event) {
    let playerSelected = document.querySelector('input[name="players"]:checked').value;
    event.preventDefault();
    console.log('element click')
    console.log(playerSelected)
    if (playerSelected === "player-one") {
        boxNine.innerHTML = "x"
        scores[8] = "x"
        console.log(scores)
        document.querySelector('#p2').checked = "true"
    }
    else if (playerSelected === "player-two") {
        boxNine.innerHTML = "o"
        scores[8] = "o"
        console.log(scores)
        document.querySelector('#p1').checked = "true"
    }
    
});

//a listener in the wild
document.querySelector(".board-area").addEventListener("click", checkScore)


//checkScore checks who wins based on all combinations



function checkScore(event) {
    event.preventDefault();
    console.log("aye")
    console.log(scores)
    
    //3 x's horizontally
    if (scores[0] === "x" & scores[1] === "x" & scores[2] === "x") {
        alert("Player One wins")
        window.location.reload();
    }
    //3 o's horizontally
    else if (scores[0] === "o" & scores[1] === "o" & scores[2] === "o") {
        alert("Player Two wins")
        window.location.reload();
    }
    //3 x's middle horizontal
    else if (scores[3] === "x" & scores[4] === "x" & scores[5] === "x") {
        alert("Player One wins")
        window.location.reload();
    }
    //3 o's middle horizontal
    else if (scores[3] === "o" & scores[4] === "o" & scores[5] === "o") {
        alert("Player Two wins")
        window.location.reload();
    }
     //3 x's last horizontal
     else if (scores[6] === "x" & scores[7] === "x" & scores[8] === "x") {
        alert("Player One wins")
        window.location.reload();
    }
    //3 o's last horizontal
    else if (scores[6] === "o" & scores[7] === "o" & scores[8] === "o") {
        alert("Player Two wins")
        window.location.reload();
    }
       //3 x's first vertical
       else if (scores[0] === "x" & scores[3] === "x" & scores[6] === "x") {
        alert("Player One wins")
        window.location.reload();
    }
       //3 o's first vertical
       else if (scores[0] === "o" & scores[3] === "o" & scores[6] === "o") {
        alert("Player Two wins")
        window.location.reload();
    }
       //3 x's second vertical
       else if (scores[1] === "x" & scores[4] === "x" & scores[7] === "x") {
        alert("Player One wins")
        window.location.reload();
    }
     //3 o's second vertical
     else if (scores[1] === "o" & scores[4] === "o" & scores[7] === "o") {
        alert("Player Two wins")
        window.location.reload();
    }
     //3 x's three vertical
     else if (scores[2] === "x" & scores[5] === "x" & scores[8] === "x") {
        alert("Player One wins")
        window.location.reload();
    }
    //3 o's three vertical
    else if (scores[2] === "o" & scores[5] === "o" & scores[8] === "o") {
        alert("Player Two wins")
        window.location.reload();
    }
     //3 x's left diagonal
     else if (scores[0] === "x" & scores[4] === "x" & scores[8] === "x") {
        alert("Player One wins")
        window.location.reload();
    }
     //3 x's left diagonal
     else if (scores[0] === "o" & scores[4] === "o" & scores[8] === "o") {
        alert("Player Two wins")
        window.location.reload();
    }
      //3 x's right diagonal
      else if (scores[2] === "x" & scores[4] === "x" & scores[6] === "x") {
        alert("Player One wins")
        window.location.reload();
    }
     //3 x's right diagonal
     else if (scores[2] === "o" & scores[4] === "o" & scores[6] === "o") {
        alert("Player Two wins")
        window.location.reload();
    }
    else if (scores[0] != "n/a" & scores[1] != "n/a" & scores[2] != "n/a" & scores[3] != "n/a" & scores[4] != "n/a" & scores[5] != "n/a" & scores[6] != "n/a" & scores[7] != "n/a" & scores[8] != "n/a") {
        alert("It's a draw...")
        window.location.reload();
    }
}
