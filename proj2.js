var timer=10;
var score=0;
var rn=0;
function increasescore() {
    
   score += 10;
    document.querySelector("#scoreval").textContent= score;
}
function getnewhit() {
     rn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=rn;
}


function makeBubble(){
var clutter = "";
for (var i = 0; i <= 168; i++) {
    var newnumber=Math.floor(Math.random()*10)
  clutter += ` <div class="bubble">${newnumber}</div>`;
//   const element = array[i];
}
document.querySelector("#buttom").innerHTML=clutter;
}
function runtimer() {
    var timerinterval=setInterval(function () {
        if (timer>0) {
            timer--;
            document.querySelector("#timerval").textContent=timer;

        } else {
           clearInterval(timerinterval) 
           document.querySelector("#buttom").innerHTML=`<h1>game over<h1>`;
        }
    },1000);
}
document.querySelector("#buttom").addEventListener("click",function (details) {
   var clicknum=Number(details.target.textContent);
   if (clicknum===rn) {
    
       makeBubble();
       getnewhit()
       increasescore();

   }
    // alert("chal");
});


runtimer();
makeBubble();
getnewhit();
// increasescore();
