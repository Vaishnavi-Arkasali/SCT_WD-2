var x = 0;
var y = 0;
var z = 0;
var interval;

function start(){
interval=setInterval(T, 10);
  let sbtn = document.getElementById("start");
  let spbtn = document.getElementById("stop");
  let rbtn = document.getElementById("reset");
  let lbtn = document.getElementById("lap");
  sbtn.style.display = "none";
  spbtn.style.display = 'inline-block';
  rbtn.style.display = "inline-block";
  lbtn.style.display = "inline-block";
}
function stop() {
  interval = clearInterval(interval);
  let sbtn = document.getElementById("start");
  let spbtn = document.getElementById("stop");
  let lbtn = document.getElementById("lap");
  
  spbtn.style.display = "none";
  sbtn.style.display = "inline-block";
  lbtn.style.display = "none";
  
}
function reset() {
  interval = clearInterval(interval);
  let sbtn = document.getElementById("start");
  let spbtn = document.getElementById("stop");
  let rbtn = document.getElementById("reset");
  let lbtn = document.getElementById("lap");
  let Mi = document.getElementById("minutes");
  let se = document.getElementById("seconds");
  let ms =document.getElementById("mseconds");
  let ul= document.getElementById("myul");
  let li= document.getElementsByTagName("li");
  let i;
  
  sbtn.style.display = "inline-block";
  spbtn.style.display = 'none';
  rbtn.style.display = "none";
  lbtn.style.display = "none";
  x = 0;
  y = 0;
  z = 0
  ms.innerHTML = "00";
  se.innerHTML = "00";
  Mi.innerHTML = "00";
  
  for (i=0; i<li.length; i++){
    li[i].style.display = "none";
  }
}

function T() {
  var M = document.getElementById("minutes");
  var s = document.getElementById("seconds");
  var m = document.getElementById("mseconds");
  z++;
   if (z<=9) {
  m.innerHTML="0"+ z;
}
   if(z>=10) {
  m.innerHTML=z;
}
   if (z==100) {
    m.innerHTML="00"
    z=0;
    y++;
}
   if (y<=9) {
  s.innerHTML="0" + y;
}
   if (y>=10) {
  s.innerHTML=y;
}
   if (y==60) {
  s.innerHTML="00"
  x++;
  y=0;
}
   if (x<=9) {
  M.innerHTML="0"+x;
}
   if(x>=10) {
  M.innerHTML=x;
}
}

function lap() {
  var myul = document.getElementById("myul");
  var li = document.createElement("li");
  var lap = document.createTextNode(x+"m : "+y+"s : " +z);
  li.appendChild(lap);
  myul.appendChild(li);
}