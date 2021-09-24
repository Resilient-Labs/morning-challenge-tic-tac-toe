//lets create the user X and O
const user = {
    x: 'X',
    o: 'O',
}

const winnerTie = {
    tie: 'tie'
}

//we need an emtpy array to hold what users click on
//empty variable for the winner user
//a variable that counts how many empty boxes are left
let cellValues = ['', '', '', '', '', '', '', '', '']
let xNext = true
let winnerUser;
let emptyBoxesLeft = 9
let winningCombination = []

//lets create the winning results
const winningResult = {
    0: [[1,2],[3,6],[4,8]],
    1: [[0,2],[4,7]],
    2: [[0,1],[5,8],[4,6]],
    3: [[0,6],[4,5]],
    4: [[3,5],[1,7],[0,8]],
    5: [[3,4],[2,8]],
    6: [[7,8],[0,3],[2,4]],
    7: [[6,8],[1,4]],
    8: [[6,7],[2,5],[0,4]]
}


const cell = document.querySelectorAll('.cell')
const showResult = document.querySelector('#winnerResult')
const newGame = document.querySelector('h2')
const winner = document.querySelector('h1')


//create a winning function based on what the user click and the winning result
const calculateWinner = (chosenIndex) => {
    //create a variable that takes in what index user has clicked
    const winningRanges = winningResult[chosenIndex]
    //create a for loop with the winning result and cellvalues
    //firstOption will kick back the number of winningRanges[i] that grabs from winningResult[0]
    //secondOption will kick back the number of winningRanges[i] that grabs from winningResult[1]
    for(let i = 0; i < winningRanges.length;i++){
        const currentEntry = cellValues[chosenIndex]
        const firstOption = cellValues[winningRanges[i][0]]
        const secondOption = cellValues[winningRanges[i][1]]
        // if all entries from previous loop match the winningResult then is returned true
        if(currentEntry === firstOption && firstOption === secondOption){
            winnerUser = currentEntry
            winningCombination = [chosenIndex,winningRanges[i][0],winningRanges[i] [1]]
            return true
        }
    }
    if(emptyBoxesLeft === 0){
        winnerUser = winnerTie.tie
        winningCombination =[]
        return true
    }
    return false
}


//adding class to winning cells
const highlightWinningCell = () => {
    cell[winningCombination[0]].classList.add('winnerPattern')
    cell[winningCombination[1]].classList.add('winnerPattern')
    cell[winningCombination[2]].classList.add('winnerPattern')
}

//function that will display the winner
const showWinner = () => {
    if(winnerUser === winnerTie.tie){
        winner.innerHTML = `It's a Tie!`
        showResult.style.display = 'flex'
    }else{
        winner.innerHTML = `Winner is ${winnerUser}`
        showResult.style.display = 'flex'
    }
}


//click event for each cell
cell.forEach((c,i) => {
    c.addEventListener('click', () =>{
        //if the cell value does not == to X or O then run this
        if(!cellValues[i]){
            //during the current index if xNext is true on click then run user.x then make xNext the opposite boolean which make user.o run on next click and it repeats
            cellValues[i] = xNext ? user.x : user.o;
            xNext = !xNext
            emptyBoxesLeft--

            if(calculateWinner(i)){
                if(winnerUser !== winnerTie.tie){
                    highlightWinningCell()
                }
                showWinner()
            }

            const cellContent = c.querySelector(`.cellContent`)
            cellContent.innerHTML = cellValues[i];
            cellContent.classList.add('populated')
        }
    })
})


//new game function. reset everything
newGame.addEventListener('click', () => {
    cellValues = ['', '', '', '', '', '', '', '', '']
    xNext = true
    winnerUser = undefined
    emptyBoxesLeft = 9
    winningCombination = []
    showResult.style.display = 'none'

    cell.forEach((c,i) => {
        const cellContent = c.querySelector('.cellContent')
        cellContent.innerHTML = cellValues[i]
        cellContent.classList.remove('populated')
        c.classList.remove('winnerPattern')
    })
})