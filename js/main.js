// Whose turn it is 
// box will say x or o
// is there a win


// mike told me to fix this bug(player is allowed to click on a box thats already been selected)
let player = "X"
class Box {
    constructor(boxNum){
        this.boxNum = boxNum
        this.owner = ''
        
    }

        
        pickOne(){
            if(this.owner != ''){
                return
            }
        document.querySelectorAll('.box')[this.boxNum].src = player+'.png'
        this.owner = player
        CheckIfWin()
        // e.target.removeEventListener('click', pickOne() )
        togglePlayer()
        
    
    } 

}



function CheckIfWin (){
    // winner winning first row
    if(arr[0].owner === arr[1].owner && arr[0].owner === arr[2].owner && arr[0].owner === player){
        // alert (`Player ${player} has won!!!`)
        document.querySelector('h1').innerText = `Player ${player} has won!!!`
    } else if(arr[0].owner === arr[4].owner && arr[0].owner === arr[8].owner && arr[4].owner === player){
        document.querySelector('h1').innerText = `Player ${player} has won!!!`
    } else if(arr[3].owner === arr[4].owner && arr[3].owner === arr[5].owner && arr[4].owner === player){
        document.querySelector('h1').innerText = `Player ${player} has won!!!`
    } else if(arr[6].owner === arr[7].owner && arr[6].owner === arr[8].owner && arr[6].owner === player){
        document.querySelector('h1').innerText = `Player ${player} has won!!!`
    } else if(arr[0].owner === arr[3].owner && arr[0].owner === arr[6].owner && arr[0].owner === player){
        document.querySelector('h1').innerText = `Player ${player} has won!!!`
    } else if(arr[1].owner === arr[4].owner && arr[1].owner === arr[7].owner && arr[4].owner === player){
        document.querySelector('h1').innerText = `Player ${player} has won!!!`
    } else if(arr[2].owner === arr[5].owner && arr[2].owner === arr[8].owner && arr[2].owner === player){
        document.querySelector('h1').innerText = `Player ${player} has won!!!`
    } else if(arr[2].owner === arr[4].owner && arr[2].owner === arr[6].owner && arr[2].owner === player){
        document.querySelector('h1').innerText = `Player ${player} has won!!!`
    } else if (arr[0].owner.length + arr[1].owner.length + arr[2].owner.length +
        arr[3].owner.length + arr[4].owner.length + arr[5].owner.length +
        arr[6].owner.length + arr[7].owner.length + arr[8].owner.length === 9){
            alert ('tie')
        }
}

function togglePlayer(){
   if( player === "O" ){
    player = "X"
   } else {
    player = "O"
   }
}

let arr = []
for(let i = 0; i<=8; i++){
    let boxes = new Box(i)
    arr.push(boxes)
    console.log(boxes)
    document.querySelectorAll('.box')[i].addEventListener('click', function(){
    boxes.pickOne()
    })
   

}



