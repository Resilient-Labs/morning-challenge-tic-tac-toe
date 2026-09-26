

// NodeList (querySelectorAll)
const gridBox = document.querySelectorAll(".box")

 document.querySelector("button").addEventListener("click",reset)

// score container for each player 
let scoreContainerX = document.querySelector("#scoreX")
let scoreContainerO = document.querySelector("#scoreO")

let playerCurrent = "X"

// score state 
let scoreX = 0 
let scoreO = 0

// COnvert to Array 
const XO = Array.from(gridBox)


// iterate over the XO to add event listener 
XO.forEach(element=>{
    element.addEventListener("click",game)  
})



// Players Change turn 
function game(e){
  
    // event to target what the user clicked 
    const currentClickedBox = e.target

        // prevents one player overwriting the others spot/box
    if(currentClickedBox.textContent===""){
    currentClickedBox.textContent = playerCurrent  
    

    if(currentClickedBox.textContent=== "X" ){
        currentClickedBox.classList.add("Xstyle")
    }
    else if (currentClickedBox.textContent=== "O" ){
        currentClickedBox.classList.add("Ostyle")
    }     
    }

        // holds snapshot which is unchanged value
      const currentState = playerCurrent 

           winCheck(currentState)
       
 
    // switch player turns
    playerCurrent = playerCurrent === "X" ? "O" : "X"
    
}

// winner logic 
// [ 0 1 2 ]
// [ 3 4 5 ]
// [ 6 7 8 ] 
// [ 1 4 7 ]
// [ 2 5 8 ]
// [ 0 4 8 ]
// [ 2 4 6 ]
// [ 0 3 6 ]

const winningMatches = [ 
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6 ,7 ,8 ] ,
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ],
    [ 0 , 3,  6 ]
]


function winCheck(mark){
   

    // if there is atleast one match that satisfies thw winning condition
    const winner = winningMatches.some((iWin)=>{
        return iWin.every((winConbination)=>XO[winConbination].innerHTML===mark)
    })

    // CHECk if the box is not empty useful for tie (box must be filled with X and O)
    const tieCheck = XO.every((board)=> board.innerHTML!== "")

   
    if(winner || tieCheck){
        
        if(winner){

            mark==="X" ? scoreContainerX.textContent = scoreX+=1 : scoreContainerO.textContent = scoreO+=1 
        }

        else{
        alert("TOUGH GAME ! TIE ")
        }
    } 
}


// reset the game by empty the box

function reset(){
    XO.forEach((elm)=>{
        elm.innerHTML=""
    })
}
