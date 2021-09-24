



class ticTacToeGame{

    boundplayerChoice = (e) => this.playerChoice(e)
    
    constructor(count, playersTurn){
    this.count = count
    this.playersTurn = playersTurn
    this.boxes = Array.from(document.querySelectorAll('.box'))
    // this.boundplayerChoice = this.playerChoice.bind(this)
    this.boxes.forEach((box) => {
        box.addEventListener('click', this.boundplayerChoice)
    })
    document.querySelector('#restartButton').addEventListener('click', this.resetGame)



    }

    resetGame (){
        console.log('resetGame')
        Array.from(document.querySelectorAll('.box'))
        .forEach(function(box) {
            box.classList.remove('playerone');
            box.classList.remove('playertwo');
        })

        this.count = 0

        document.querySelector('#results').innerText = ''
        document.querySelector('#winner').innerText = ''
    }

    playerChoice(event){
        console.log(this)
        console.log('playerChoice' + this.playersTurn )

        if(this.playersTurn == 'player1'){
            document.querySelector('#player').innerText ='Neo'
            console.log(event.target)
            event.target.classList.add('playerone') 
            this.playersTurn = 'player2'
            ticTacToeGame.count+=1
            
        }

        else if (this.playersTurn == 'player2'){
            document.querySelector('#player').innerText ='Trinity'
            event.target.classList.add('playertwo') 
            this.playersTurn = 'player1'
            ticTacToeGame.count+=1
            
        }
        
        
        if(this.boxes[0].className == 'box playerone' && this.boxes[1].className == 'box playerone' && this.boxes[2].className == 'box playerone'){
            document.querySelector('#results').innerText = 'Winner: '
            document.querySelector('#winner').innerText = ' Trinity'
            
            
            
        } else if(this.boxes[3].className == 'box playerone' && this.boxes[4].className == 'box playerone' && this.boxes[5].className == 'box playerone'){
            document.querySelector('#results').innerText = 'Winner: '
            document.querySelector('#winner').innerText = ' Trinity'
            
            
        } else if(this.boxes[6].className == 'box playerone' && this.boxes[7].className == 'box playerone' && this.boxes[8].className == 'box playerone'){
            document.querySelector('#results').innerText = 'Winner: '
            document.querySelector('#winner').innerText = ' Trinity'
        
            
        } else if(this.boxes[0].className == 'box playerone' && this.boxes[3].className == 'box playerone' && this.boxes[6].className == 'box playerone'){
            document.querySelector('#results').innerText = 'Winner: '
            document.querySelector('#winner').innerText = ' Trinity'
        
            
        } else if(this.boxes[1].className == 'box playerone' && this.boxes[4].className == 'box playerone' && this.boxes[7].className == 'box playerone'){
            document.querySelector('#results').innerText = 'Winner: '
            document.querySelector('#winner').innerText = ' Trinity'
        
            
        } else if(this.boxes[2].className == 'box playerone' && this.boxes[5].className == 'box playerone' && this.boxes[8].className == 'box playerone'){
            document.querySelector('#results').innerText = 'Winner: '
            document.querySelector('#winner').innerText = ' Trinity'
        
            
        } else if(this.boxes[0].className == 'box playerone' && this.boxes[4].className == 'box playerone' && this.boxes[8].className == 'box playerone'){
            document.querySelector('#results').innerText = 'Winner: '
            document.querySelector('#winner').innerText = ' Trinity'
        
            
        } else if(this.boxes[2].className == 'box playerone' && this.boxes[4].className == 'box playerone' && this.boxes[6].className == 'box playerone'){
            document.querySelector('#results').innerText = 'Winner: '
            document.querySelector('#winner').innerText = ' Trinity'
            
            
        } else if(this.boxes[0].className == 'box playertwo' && this.boxes[1].className == 'box playertwo' && this.boxes[2].className == 'box playertwo'){
            document.querySelector('#results').innerText = 'Winner: '
            document.querySelector('#winner').innerText = ' Neo'
        
            
        } else if(this.boxes[3].className == 'box playertwo' && this.boxes[4].className == 'box playertwo' && this.boxes[5].className == 'box playertwo'){
            document.querySelector('#results').innerText = 'Winner: '
            document.querySelector('#winner').innerText = ' Neo'
        
            
        } else if(this.boxes[6].className == 'box playertwo' && this.boxes[7].className == 'box playertwo' && this.boxes[8].className == 'box playertwo'){
            document.querySelector('#results').innerText = 'Winner: '
            document.querySelector('#winner').innerText = ' Neo'
        
            
        } else if(this.boxes[0].className == 'box playertwo' && this.boxes[3].className == 'box playertwo' && this.boxes[6].className == 'box playertwo'){
            document.querySelector('#results').innerText = 'Winner: '
            document.querySelector('#winner').innerText = ' Neo'

            
        } else if(this.boxes[1].className == 'box playertwo' && this.boxes[4].className == 'box playertwo' && this.boxes[7].className == 'box playertwo'){
            document.querySelector('#results').innerText = 'Winner: '
            document.querySelector('#winner').innerText = ' Neo'
        
            
        } else if(this.boxes[2].className == 'box playertwo' && this.boxes[5].className == 'box playertwo' && this.boxes[8].className == 'box playertwo'){
            document.querySelector('#results').innerText = 'Winner: '
            document.querySelector('#winner').innerText = ' Neo'
        
            
        } else if(this.boxes[0].className == 'box playertwo' && this.boxes[4].className == 'box playertwo' && this.boxes[8].className == 'box playertwo'){
            document.querySelector('#results').innerText = 'Winner: '
            document.querySelector('#winner').innerText = ' Neo'
            
            
        } else if(this.boxes[2].className == 'box playertwo' && this.boxes[4].className == 'box playertwo' && this.boxes[6].className == 'box playertwo'){
            document.querySelector('#results').innerText = 'Winner: '
            document.querySelector('#winner').innerText = ' Neo'
            
            
        }  else if (ticTacToeGame.count === 9){
            alert('It is a draw! Reset board!')
        }
    }
    // resetGame()
    // playerChoice()
}


let game = new ticTacToeGame(0, 'player1')



    







