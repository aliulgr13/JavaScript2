'use strict';
document.body.style.fontFamily = "Arial, sans-serif";
let nickName = document.getElementById("nickname");
nickName.innerText = "White";
let favFood = document.getElementById("fav-food");
favFood.innerText = "Hamburger";
let homeTown = document.getElementById("hometown");
homeTown.innerText = "Istanbul";

let allLi = document.querySelectorAll("li");
for (let el of allLi) {
  el.className = 'list-item'
}

let imgOfMe = document.createElement("img");
imgOfMe.src = ("img/ben.jpg");
imgOfMe.style.width = '250px';
document.body.appendChild(imgOfMe);