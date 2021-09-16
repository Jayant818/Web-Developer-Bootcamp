let score=0;
let cross=true;
audio = new Audio('music.mp3')
audiogo = new Audio('gameover.mp3')

setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown=function(e) {
    console.log("Key Code is :", e.keyCode);

    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
            
        }, 700);
    }

    if(e.keyCode==39){
        dino=document.querySelector('.dino');

        dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dx+122)+'px';

    }
    if(e.keyCode==37){
        dino=document.querySelector('.dino');

        dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dx-122)+'px';


    }


}

setInterval(() => {
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    dragon=document.querySelector('.dragon');

    dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy= parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));


    ox= parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'));
    oy= parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'));

    offSetX= Math.abs(ox-dx);
    offSetY= Math.abs(oy-dy);

    if(offSetX<52 && offSetY<52){
        gameOver.style.visibility="hiddden";

        gameOver.style.innerHTML="Game Over";
        dragon.classList.remove('animateddragon');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if(offSetX<100 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
          cross=true  
        }, 1000);


        setTimeout(() => {
            ani=parseFloat(window.getComputedStyle(dragon,null).getPropertyValue('animation-duration'));
            newAni=ani+0.1;
            dragon.style.animationDuration=newAni+'s';
        }, 300);

    }
    
}, 10);

function updateScore(score){
    let scorekeeper=document.querySelector('.scorekeeper');
    scorekeeper.innerHTML="score is : "+score;
}