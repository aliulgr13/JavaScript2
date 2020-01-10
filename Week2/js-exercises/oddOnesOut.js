'use strict'

// function doubleEvenNumbers(numbers) {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers.push(numbers[i] * 2);
//     }
//   }
//   return newNumbers;
// }

//const myNumbers = [1, 2, 3, 4];
// console.log(doubleEvenNumbers(myNumbers));

// easy way to iterate
function doubleEvenNumbers(numbers) {
  let newNumbers = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 2);
  return newNumbers;
}
const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers));