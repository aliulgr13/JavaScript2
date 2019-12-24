'use strict';
// I have made my own book list
const books = [
  {
    title: 'Improbable',
    author: 'Adam Fawer',
    alreadyRead: true,
  },
  {
    title: '1984',
    author: 'George Orwell',
    alreadyRead: true,
  },
  {
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    alreadyRead: false,
  },
];
//Adding h1 heading
let headingName = document.createElement('h1');
headingName.innerText = 'My Three Favorite Books';
document.body.appendChild(headingName);
//Adding ul
let list = document.createElement('ul');
document.body.appendChild(list);
document.body.style.textAlign = "center";
//style text
list.style.listStyle = "none";
list.style.fontSize = '3em';
list.style.color = "white";
list.style.fontWeight = 'bold';
// I use for to iterate


for (let book of books) {
  let el = document.createElement('li');
  let para = document.createElement('p');
  list.appendChild(el);
  para.innerText = `${book.title} by ${book.author}`;
  el.appendChild(para);
  // To understand whether I read the book or not I used background.
  if (book.alreadyRead) {
    el.style.backgroundColor = 'green';
  } else {
    el.style.backgroundColor = 'red';
  }
}
// creating img tags to add images.
let img1 = document.createElement('img');
let img2 = document.createElement('img');
let img3 = document.createElement('img');

img1.src = "https://qph.fs.quoracdn.net/main-qimg-c553eaac5692cd8dd2c5c70c1773f4f8.webp";
img2.src = "https://i.dr.com.tr/cache/500x400-0/originals/0000000064038-1.jpg";
img3.src = "https://cdn.ako.nl/pub/media/catalog/product/cache/339babcd3200d309f233d27396c014bd/9/7/9780062641540_fcovr.jpg";

let allLi = document.querySelectorAll("li");
allLi[0].appendChild(img1).style.width = '200px';
allLi[1].appendChild(img2).style.width = '200px';
allLi[2].appendChild(img3).style.width = '200px';
