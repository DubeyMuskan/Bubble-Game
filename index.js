function makebubble(){
var clutter = "";

for(var i = 1;i<=132;i++){
   var rn =  Math.floor(Math.random()*10)
    clutter +=
    `<div id="bubble">${rn}</div>`;

}

document.querySelector("#pbtn").innerHTML = clutter;
}
var timer = 6;
function runTimer(){
 var timerint = setInterval(function(){
    if (timer>0){
    timer --;
    document.querySelector("#timerval").textContent = timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector("#pbtn").innerHTML = `<h1>GAME OVER
        `
    }
},1000);
}
runTimer();
makebubble();

var hitrn = 0;
function getNewHit(){
 hitrn =  Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
 getNewHit();
 var score = 0;
 function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
 }
 increaseScore();
 /// Event bubbling
 //jisper click karoge wo element per event raise HTMLAllCollection, aur eevent listerner na milne per event element ke parent per listerner khojega ,waha v na milne per event ke parent ke parent per khojega//

 document.querySelector("#pbtn")
 .addEventListener("click",function(dets){
   var clickednum = Number(dets.target.textContent);
   if(clickednum  === hitrn){
    increaseScore();
    makebubble();
    getNewHit()
   }
 });