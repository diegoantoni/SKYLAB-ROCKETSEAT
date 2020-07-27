"use strict";

var arr = [1, 3, 4, 5, 6]; //exemplo de arrow function

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); //retornando vetor com arrow function

var teste = function teste() {
  return {
    nome: 'Diego'
  };
};

console.log(teste());
