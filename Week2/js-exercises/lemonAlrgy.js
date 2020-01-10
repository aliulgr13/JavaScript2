'use strict'

let fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

const fruitFunc = function () {
  let basket = fruitBasket.filter(fruit => (fruit !== 'Lemon'));
  return console.log(`My mom bought me a fruit basket, containing ${basket.join(', ')} !`);
};
fruitFunc();

