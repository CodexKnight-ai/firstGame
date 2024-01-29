score=0;
cross=true;
over=false;
dial=new Audio('ElevenLabs_2024-01-29T06_29_57_Harry.mp3');
dial2=new Audio('DIAL2.mp3')
dial3=new Audio('DIAL3.mp3')
dial4=new Audio('dial4.mp3')
dial5=new Audio('dial5.mp3')
audio = new Audio('Portals_8_Bit.mp3');
audioend= new Audio('Alan_Silvestri_Infinity_War_From_Avengers_Infinity_War_a10dXUS3ch0.mp3')
jump=new Audio('Roblox_Jump_Sound_Effect_Free_No_Copyright__JnUEfFYegN0_140.mp3')
audio.play();


document.onkeydown=function(e){
    console.log(e.keyCode);
    if(e.keyCode==38 &&over==false ){
        cap=document.querySelector('.cap');
        cap.classList.add('animateCap');
        jump.play();
        setTimeout(()=>{
            cap.classList.remove('animateCap')}
            ,700);
        }
        if(e.keyCode==97 &&over==false ){
           dial.play();
        }
        if(e.keyCode==98 &&over==false ){
            dial2.play();
         }
         if(e.keyCode==99 &&over==false ){
            dial3.play();
         }
         if(e.keyCode==100 &&over==false ){
            dial4.play();
         }
         if(e.keyCode==101 &&over==false ){
            dial5.play();
         }
    if(e.keyCode==39&&over==false){
        cap=document.querySelector('.cap');
        capX=parseInt(window.getComputedStyle(cap,null).getPropertyValue('left'));
        cap.style.left=capX+115+"px";
    }
    if(e.keyCode==37 && over==false){
        cap=document.querySelector('.cap');
        capX=parseInt(window.getComputedStyle(cap,null).getPropertyValue('left'));
        cap.style.left=capX-100+"px";
    }
}
setInterval(() => {
    cap=document.querySelector('.cap');
    enemy=document.querySelector('.enemy');
    gameover=document.querySelector('.gameover');
    dx=parseInt(window.getComputedStyle(cap,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(cap,null).getPropertyValue('top'));
    ex=parseInt(window.getComputedStyle(enemy,null).getPropertyValue('left'));
    ey=parseInt(window.getComputedStyle(enemy,null).getPropertyValue('top'));

    distX=Math.abs(dx-ex);
    distY=Math.abs(dy-ey);
    if (distX < 73 && distY < 52){
        over=true;
        gameover.innerHTML="Game Over - Reload to restart.";
        enemy.classList.remove('enemyAni');
        cap.classList.remove('animateCap');
        cap.classList.remove('left');
        cap.classList.remove('top');
        setTimeout(()=>{
        audio.pause();
        audioend.play();
        },1000);
    }   
    else if (distX < 145 && cross && over==false) {
            score += 1;
            updateScore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
            setTimeout(() => {
                aniDur = parseFloat(window.getComputedStyle(enemy, null).getPropertyValue('animation-duration'));
                newDur = aniDur - 0.1;
                enemy.style.animationDuration = newDur + 's';
            }, 500);
        }
    },10);
    function updateScore(score) {
        Score.innerHTML = "Your Score: " + score
    }


