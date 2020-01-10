'use strict'

// https://github.com/HackYourHomework/JavaScript2/pull/2#discussion_r361137020

let books = [
    {
        title: 'The Design of Everyday Things',
        author: 'Don Norman',
        alreadyRead: false,
        price: 15,
        imageSrc: 'data:image/jpeg;base64,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'
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true,
        price: 9,
        imageSrc: 'data:image/jpeg;base64,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'
    },
    {
        title: "The Pragmatic programer",
        author: 'Dawn Thomas',
        alreadyRead: true,
        price: 20,
        imageSrc: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhis7OF8oiFvG54iVi_9uvP6jaWu57v4OZVWLwlo-9SZ0MaagOH0NZMoBuIgeWH2HxUkuLS4288szuCE9ph2uQ0qSLIROUcgvBPw66awPq&usqp=CAc"
    },
    {
        title: "Clean Coder",
        author: 'Robert Martin',
        alreadyRead: true,
        price: 15,
        imageSrc: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSs2gaNT_y9_TWDcBfDlI57xH31MlqTRpDYGumAKwykVYDgoEvpSEJfaq9B85DggMp9fRdxz96qQQ_KBUuZ1nSF1Aemg9H6-wF0qSKCDXV_GtpXiJ2fO9lS&usqp=CAc"
    },
    {
        title: "The Node Beginer Book",
        author: 'Manuel Kimling',
        alreadyRead: false,
        price: 25,
        imageSrc: "https://images-na.ssl-images-amazon.com/images/I/517cMS8UTpL._SY445_QL70_ML2_.jpg"
    }
];

let ul = document.createElement('ul');


function addBookToList(book) {
    //create button for condition 4
    let button = document.createElement('button');
    button.innerText = 'I read this book already';
    button.classList.add("change");
    // create title, author and price
    let titleTxt = document.createElement('h3');
    titleTxt.innerText = book.title;
    let authorTxt = document.createElement('h5');
    authorTxt.innerText = ' - ' + book.author;
    let priceTxt = document.createElement('h4');
    priceTxt.innerText = ' $ ' + book.price;
    //create imaga and set set source
    let bookImg = document.createElement('img');
    bookImg.setAttribute('src', book.imageSrc)
    // add all elements to the book list
    let bookLi = document.createElement('li');
    bookLi.style.backgroundColor = book.alreadyRead ? 'green' : 'red';
    bookLi.appendChild(titleTxt);
    bookLi.appendChild(authorTxt);
    bookLi.appendChild(priceTxt);
    bookLi.appendChild(bookImg);
    //adding to button for only unread books
    if (!book.alreadyRead) {
        bookLi.appendChild(button);
    }
    ul.appendChild(bookLi);
}

for (let i = 0; i < books.length; ++i) {
    addBookToList(books[i]);
}

//condition 3 ordering
let lblSelect = document.createElement('label');
lblSelect.innerText = "Ordering :  ";
let sel = document.createElement("select");
let opt1 = document.createElement("option");
let opt2 = document.createElement("option");
let opt3 = document.createElement("option");
let opt4 = document.createElement("option");
let opt5 = document.createElement("option");

//opt1 is default it shows select something
opt1.value = "";
opt1.text = "Select something..";
opt2.value = "1";
opt2.text = "By price(lowest to highest)";
opt3.value = "2";
opt3.text = "By price(highest to lowest)";
opt4.value = "3";
opt4.text = "By author (alphabetically)";
opt5.value = "4";
opt5.text = "By title (alphabetically)";
//adding options to the select 
sel.add(opt1, null);
sel.add(opt2, null);
sel.add(opt3, null);
sel.add(opt4, null);
sel.add(opt5, null);

//adding eventlistener to be able to make new ordering
let newBooks = [];
sel.addEventListener('change', (e) => {
    // for each option I clean the ul and change it by iterating with new array(newBooks).
    if (e.target.value == 1) {
        ul.innerHTML = '';
        newBooks = books
            .sort((a, b) => a.price - b.price)
        for (let i = 0; i < books.length; ++i) {
            addBookToList(newBooks[i]);
        }
    } else if (e.target.value == 2) {
        ul.innerHTML = '';
        newBooks = books
            .sort((a, b) => b.price - a.price)
        for (let i = 0; i < books.length; ++i) {
            addBookToList(newBooks[i]);
        }
    } else if (e.target.value == 3) {
        ul.innerHTML = '';
        newBooks = books
            .sort((a, b) => {
                if (a.author < b.author)
                    return -1;
                else if (a.author > b.author)
                    return 1;
                return 0;
            })
        for (let i = 0; i < books.length; ++i) {
            addBookToList(newBooks[i]);
        }
        // for option 4 I have to combine two array with concat method.
    } else if (e.target.value == 4) {
        ul.innerHTML = '';
        let unreadBooks = books.filter((book) => !book.alreadyRead)
        newBooks = books
            .filter((book) => book.alreadyRead)
            .sort((a, b) => {
                if (a.title < b.title)
                    return -1;
                else if (a.title > b.title)
                    return 1;
                return 0;
            })
        newBooks = newBooks.concat(unreadBooks);
        for (let i = 0; i < books.length; ++i) {
            addBookToList(newBooks[i]);
        }
    }
});

//question 4 adding button I add event listener to the ul but if it contains class "class" because button has this class.

ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('change')) {
        let li = e.target.parentElement;
        if (li.style.backgroundColor === 'red') {
            li.style.backgroundColor = 'green'
        } else {
            li.style.backgroundColor = 'red';
        };
    }
})

//chexbox input
let onlyReadBooks = document.createElement('input');
onlyReadBooks.type = "checkbox";
let lbl = document.createElement('label');
lbl.innerText = "Only read books";

//question 2 total book price
let bookPriceText = document.createElement('h4');
//allbooks
let allBookPrice = books
    .map(book => book.price)
    .reduce((accumulator, price) => accumulator + price, 0);

//alreadyreadbooks
let alreadyReadBooksPrice = books
    .filter((book) => book.alreadyRead)
    .map(book => book.price)
    .reduce((accumulator, price) => accumulator + price, 0);

//adding event listener to alreadyboooks chexbox and adding total price
onlyReadBooks.addEventListener('click', function () {
    // if checked show only the books where already read is true
    const allli = document.querySelectorAll('li');

    if (onlyReadBooks.checked) {
        bookPriceText.innerText = `Total Price : $ ${alreadyReadBooksPrice}`;
        Array.from(allli)
            .filter((li) => (li.style.backgroundColor === 'red'))
            .forEach((li) => li.style.display = 'none');
    } else {
        bookPriceText.innerText = `Total Price : $ ${allBookPrice}`;
        Array.from(allli)
            //no need to filter cause we need to show every books
            //.filter((li) => (li.style.backgroundColor === 'red'))  
            .forEach((li) => li.style.display = 'block');
    }
})

// to show default total price I write this coding in global scope.
bookPriceText.innerText = `Total Price : $ ${allBookPrice}`;

document.body.appendChild(lblSelect);
document.body.appendChild(sel);
document.body.appendChild(bookPriceText);
document.body.appendChild(onlyReadBooks);
document.body.appendChild(lbl);

document.body.appendChild(ul);
