'use strict'

const hackYourFutureMembers = [
  { name: 'Wouter', age: 33 },
  { name: 'Federico', age: 32 },
  { name: 'Noer', age: 27 },
  { name: 'Tjebbe', age: 22 },
];

//combine function
const combine = (array) => {
  let comb = array.reduce((a, b) => a + b);
  return comb;
};

//main function
const calc = (combine) => {

  let ages = hackYourFutureMembers.map(member => member.age);
  console.log(`The collective age of the HYF team is: ${combine(ages)}`);
  return combine(ages);

};

calc(combine);