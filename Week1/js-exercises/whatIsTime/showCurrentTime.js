'use strict';
let para = document.createElement("p");
para.innerText = "Current Local Time in Amsterdam";
para.style.paddingTop = '100px'
document.body.append(para);
let paraDay = document.createElement("p");
document.body.append(paraDay);
paraDay.style.fontSize = '4rem'
paraDay.style.paddingTop = '50px'
let paraTime = document.createElement("p");
document.body.append(paraTime);
paraTime.style.fontSize = '7rem'
paraTime.style.paddingTop = '50px'



let myVar = setInterval(myTimer, 1000);

function myTimer() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  let day = d.toDateString();
  paraTime.innerText = t;
  paraDay.innerText = day;
}

myTimer();
