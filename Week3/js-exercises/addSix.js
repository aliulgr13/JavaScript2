'use strict';
function createBase(x) {
  // Put here your logic..
  let total;
  function plus(a) {
    total = a + x;
    return total;
  }
  return plus;

}

const addSix = createBase(6);
// Put here your function calls...
console.log(addSix(9));
console.log(addSix(18));
console.log(addSix(30));