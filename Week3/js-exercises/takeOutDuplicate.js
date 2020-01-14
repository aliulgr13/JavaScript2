'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates() {
  //first way
  // let newArray = letters.filter((letter, index) =>
  //   return letters.indexOf(letter) === index
  // )

  //second way it pust unique elements in object than I put it inside of array by using spread operator "..." or Array.form
  let newList = new Set(letters);
  let newArray = [...newList];

  //third way
  // let newArray = letters.reduce((unique, item) => {
  //   return unique.includes(item) ? unique : [...unique, item];
  // }, []);

  return console.log(newArray);
}

removeDuplicates();