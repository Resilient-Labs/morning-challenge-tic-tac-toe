// Whose turn it is 
// box will say x or o
// is there a win

let player = "X"





class Box {
    constructor(boxNum){
        this.boxNum = boxNum
        this.owner = ''
    }


        PickOne(){
        console.log(player)
        document.querySelectorAll('.box')[this.boxNum].src = player+'.png'
        this.owner = player
        CheckIfWin()
        togglePlayer()
    }
    



}

function CheckIfWin (){
    // winner winning first row
    if(arr[0].owner === arr[1].owner && arr[0].owner === arr[2].owner && arr[0].owner === player){
        // alert (`Player ${player} has won!!!`)
        document.querySelector('h1').innerText = `Player ${player} has won!!!`
    } else if(arr[0].owner === arr[4].owner && arr[0].owner === arr[8].owner && arr[4].owner === player){
        alert (`Player ${player} has won!!!`)
    }
    
    
    else if (arr[0].owner.length + arr[1].owner.length + arr[2].owner.length +
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
    document.querySelectorAll('.box')[i].addEventListener('click', function(){
    boxes.PickOne()
    })
}






// var boesx = new Box(i);
// document.getElementById('x').addEventListener('click', function () {
//   object.method()
// }


// const baki = {
//     Name : 'bakiTucker' ,
//     favoriteColor: ['Blue','Red','Purple'],
//     age: 26
// }
// const foo = baki


// baki.Name = 'mike'

// console.log(baki.Name)
// console.log(foo.Name)


// class Car {
//     // blueprint
//     constructor(name, make, model, year){
//         this.name = name
//         this.make = make
//         this.model = model
//         this.year = year
//     }

//     drive(){
//         console.log(`my muthafuckin ${this.name}`)
//     }
// }

// const mazda = new Car('Mazda', 'cx3', 'crashed', 2005)
    
// console.log(mazda)
// console.log(mazda.drive())