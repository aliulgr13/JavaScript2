'use strict';

const array = [
  {
    quote: 'Planning is everything, the plan is nothing.',
    author: 'Dwight Eisenhower',
  },
  {
    quote:
      'There was truth and there was untruth, and if you clung to the truth even against the whole world, you were not mad.',
    author: 'George Orwell',
  },
  {
    quote:
      'Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.',
    author: 'Rumi',
  },
  {
    quote:
      'War is delightful to those who have had no experience of it.',
    author: 'Desiderius Erasmus Roterodamus',
  },
  {
    quote: 'Peace at Home, Peace in the World.',
    author: 'Kemal ATATURK',
  },
  {
    quote: 'You are the average of the five people you spend the most time with.',
    author: 'Jim Rohn',
  },
];
let quote = document.querySelector('.quotePara');
let author = document.querySelector('.authorPara');
let button = document.getElementById('btn');
let blockquote = document.querySelector('.blockquote');

const randomQuote = function () {
  blockquote.style.display = 'inline-block';

  let x = Math.floor(Math.random() * (array.length - 1));
  //I have made this statement to avoid getting the same quote in a row.
  if (quote.innerText !== array[x].quote) {
    quote.innerText = array[x].quote;
    author.innerText = '- ' + array[x].author;
  } else {
    quote.innerText = array[array.length - 1].quote;
    author.innerText = '- ' + array[array.length - 1].author;
  }
};

button.addEventListener('click', randomQuote);
