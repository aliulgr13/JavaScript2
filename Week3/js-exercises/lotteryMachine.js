'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  // make array

  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  console.log("All Numbers are: " + numbers.join(', '))

  console.log("Numbers are divisible by three: " + threeCallback(numbers).join(', '));
  console.log("Numbers are divisible by five: " + fiveCallback(numbers).join(', '));
  console.log("Final number: " + threeCallback(fiveCallback(numbers)));
  console.log("Final number: " + fiveCallback(threeCallback(numbers)));

  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
}

function sayThree(array) {
  let filteredByThree = array.filter(number => {
    if (number % 3 === 0) { return true; }
  })
  return filteredByThree;
}

function sayFive(array) {
  let filteredByFive = array.filter(number => {
    if (number % 5 === 0) { return true; }
  })
  return filteredByFive;
}
threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive