'use strict';

let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();


//I defined and returned the following two functions and I took the same results from these functions. What I learnt from here is,
// we can get result from function by calling them with adding "()" at the end of it, but it only works when we assign the function in variable
//or when we return the function. In our example the outer function is assigned in x variable and when we call "X" function in the last line,
//it  also calls the return of X function with paranteses that are added next to it. The return of x function is also a function and it alerts a variable.
//In global scope, "a" is defined first but after that it also  reassigned inside "x" function and althought the return of "x" function does not have 
//"a" variable but it gets  "a" with javascript closure feature. As a result function pops up "a" as a 12.

// const example = function () {
//   let a = 5;
//   console.log(a);
// }();

// return function () {
//   let a = 5;
//   console.log(a);
// }();