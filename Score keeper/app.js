const p1button = document.querySelector('#p1button')
const p2button = document.querySelector('#p2button')
const resetButton = document.querySelector('#reset')
const winningScoreSet = document.querySelector('#playto')
let p1display = document.querySelector('#p1display')
let p2display = document.querySelector('#p2display')

let winningScore = 3;
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

p1button.addEventListener('click',function(){
    if(!isGameOver){
        p1Score+=1;
        if(p1Score===winningScore){
            isGameOver=true;
            p1display.classList.add('has-text-success')
            p2display.classList.add('has-text-danger');
        }
        p1display.textContent=p1Score
        

    }


})


p2button.addEventListener('click',function(){
    if(!isGameOver){
        p2Score+=1;
        if(p2Score===winningScore){
            isGameOver=true;
            p2display.classList.add('has-text-success')
            p1display.classList.add('has-text-danger');
        }
        p2display.textContent=p2Score
        

    }


})

reset.addEventListener('click',remove)

winningScoreSet.addEventListener('change',function(){
    // alert(winningScoreSet.value);
    winningScore = parseInt(winningScoreSet.value);
    remove();
})

function remove(){
    isGameOver=false;
    p1Score=0;
    p2Score=0;
    p1display.textContent=0;
    p2display.textContent=0;
    p1display.classList.remove('has-text-success','has-text-danger')
    p2display.classList.remove('has-text-success','has-text-danger')

}



