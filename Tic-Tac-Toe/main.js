document.getElementById('oneTop').addEventListener('click', win)
document.getElementById('oneCenter').addEventListener('click',win1 )
document.getElementById('oneBottom').addEventListener('click',win2 )
document.getElementById('twoTop').addEventListener('click',win3 )
document.getElementById('twoCenter').addEventListener('click',win4 )
document.getElementById('twoBottom').addEventListener('click',win5 )
document.getElementById('threeTop').addEventListener('click',win6 )
document.getElementById('threeCenter').addEventListener('click',win7 )
document.getElementById('threeBottom').addEventListener('click',win8 )

function win(){
    document.getElementById('oneTop1').innerText = 'X'
}
function win1(){
    document.getElementById('twoTop1').innerText = 'X'
}
function win2(){
    document.getElementById('threeTop1').innerText = 'X'
}
function win3(){
    document.getElementById('oneCenter1').innerText = 'X'
}
function win4(){
    document.getElementById('twoCenter1').innerText = 'X'
}
function win5(){
    document.getElementById('threeCenter1').innerText = 'X'
}
function win6(){
    document.getElementById('oneBottom1').innerText = 'X'
}
function win7(){
    document.getElementById('twoBottom1').innerText = 'X'
}
function win8(){
    document.getElementById('threeBottom1').innerText = 'X'
}
document.getElementById('oneTop2').addEventListener('click', lose)
document.getElementById('oneCenter2').addEventListener('click',lose1 )
document.getElementById('oneBottom2').addEventListener('click',lose2 )
document.getElementById('twoTop2').addEventListener('click',lose3 )
document.getElementById('twoCenter2').addEventListener('click',lose4 )
document.getElementById('twoBottom2').addEventListener('click',lose5 )
document.getElementById('threeTop2').addEventListener('click',lose6 )
document.getElementById('threeCenter2').addEventListener('click',lose7 )
document.getElementById('threeBottom2').addEventListener('click',lose8 )

function lose(){
    document.getElementById('oneTop1').innerText = 'O'
}
function lose1(){
    document.getElementById('twoTop1').innerText = 'O'
}
function lose2(){
    document.getElementById('threeTop1').innerText = 'O'
}
function lose3(){
    document.getElementById('oneCenter1').innerText = 'O'
}
function lose4(){
    document.getElementById('twoCenter1').innerText = 'O'
}
function lose5(){
    document.getElementById('threeCenter1').innerText = 'O'
}
function lose6(){
    document.getElementById('oneBottom1').innerText = 'O'
}
function lose7(){
    document.getElementById('twoBottom1').innerText = 'O'
}
function lose8(){
    document.getElementById('threeBottom1').innerText = 'O'
}
