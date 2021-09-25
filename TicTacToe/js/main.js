// const boxes = Array.from(document.getElementsByClassName('box'));
// console.log(boxes);

// const drawboard = () =>{
//     boxes.forEach((box, index) =>{
//         let styleString = '';
//         if (index < 3) {
//             styleString += 'border-bottom: 3px solid var(--purple);';
//         }
//         if(index % 3 === 0){
//             styleString += 'border-right: 3px solid var(--purple);';
//         }
//         if(index % 3 === 2){
//             styleString += 'border-left: 3px solid var(--purple);';
//         }
//         if ( index > 5){
//             styleString += 'border-top: 3px solid var(--purple);';
//         }
//         box.style = styleString;
//         box.addEventListener('click' , boxClicked)
                
//     });
// let boxClicked = (e) => {
//     console.log('box')
// }


// }
let clicks = 0;
let player1 = {
    points: 0,
    symbol:"X"
}
let player2 ={
    points: 0,
    symbol:"O"
}


document.querySelectorAll(".box").addEventListener('click', turn)
console.log()

document.querySelector("#five").addEventListener("click" , playFive)

function turn(){
    if(clicks % 2 == 0){
        turn = 1;

    }
}
