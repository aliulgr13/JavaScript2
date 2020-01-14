'use strict';

// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
};
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

//For first function it is expected to return value "10" because "x" variable assigned to "9" and val equals to val plus "1" so 9+1 = 10. 
// when we log the console "x" result it will be "9" because it does not reassign.  
//For second function "y"  variable equals the object with "x" key and 9 value and function called with "y" so object.
//In function val.x means oject's x key and it equls plus one  and return val so object so f2(y), returns 10 and also y is 10.