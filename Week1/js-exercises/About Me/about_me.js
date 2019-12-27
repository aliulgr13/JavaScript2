'use strict';
document.body.style.fontFamily = "Arial, sans-serif";
const nickName = document.getElementById("nickname");
nickName.innerText = "White";
const favFood = document.getElementById("fav-food");
favFood.innerText = "Hamburger";
const homeTown = document.getElementById("hometown");
homeTown.innerText = "Istanbul";

const allLi = document.querySelectorAll("li");
for (const el of allLi) {
  el.className = 'list-item'
}

const imgOfMe = document.createElement("img");
imgOfMe.src = ("img/ben.jpg");
imgOfMe.style.width = '250px';
document.body.appendChild(imgOfMe);