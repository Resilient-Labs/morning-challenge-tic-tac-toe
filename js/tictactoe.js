
 document.querySelector('.one').addEventListener('click',playGame) 
 document.querySelector('.two').addEventListener('click',playGame)
 document.querySelector('.three').addEventListener('click',playGame)
 document.querySelector('.four').addEventListener('click',playGame)
 document.querySelector('.five').addEventListener('click',playGame)
 document.querySelector('.six').addEventListener('click',playGame)
 document.querySelector('.seven').addEventListener('click',playGame)
 document.querySelector('.eight').addEventListener('click',playGame)
 document.querySelector('.nine').addEventListener('click',playGame)



  let player = 0
 


// figure out whos turn it is 
// use modulus to determine whos turn it is 

  function playGame(click) {
      //this is listening for an event on the page, this listens for ALL buttons not just one at a time... (click.target)
      let button = click.target

        //giphy API
        //continue working on the gif to pop up as each players turn alternates. the API is working but the site is showing up.
        
      // const x = fetch('https://api.giphy.com/v1/gifs/search?api_key=B4USSGj3Gs8Qvz6Tj9i9N4NTb1EX5Yt2&q=your+turn+michael+rainey&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips')
      //   .then(res => res.json())
      //   .then(data => {
      //     console.log(data)
      //     document.querySelector('.player').src  = data.data[0].images.original.url
      //      })
      //   .catch(err => {
      //     console.log(`error ${err}`)
      //   })
           
          if (player % 2 === 0){
            //allows me to target all buttons and not just one
            button.innerHTML = 'X'
            //cant use this, its only selecting the first button on the page
            // document.querySelector('button').innerHTML  = 'X'
            document.querySelector('.player').innerHTML = 'Xs Turn'
            player++
          }else  {
            button.innerHTML = 'O'
            document.querySelector('.player').innerHTML = 'Os Turn'
           // document.querySelector('button').innerHTML  = 'O'
            player++
          }
        }
          console.log(player)


// announce player 1 or two 
// recieve input from click 
// display result in consult 
// display x or o 

// hide button after it has been played