"use strict";

var arr = [1, 3, 4, 5, 6]; //arrow function e utilizado qndo tiver uma funçao anonima

var newArr = arr.map(function (item) {
  return item * 1;
});
console.log(newArr); //primeira forma de utilizar

var newArr1 = arr.map(function (item) {
  return item * 2;
});
console.log(newArr1); //segunda forma de utilizar, qndo a funçao recebe apenas 1 parametro os parenteses pode ser removido

var newArr2 = arr.map(function (item) {
  return item * 3;
});
console.log(newArr2); // terceira forma de utilizar, qndo o resulta e apenas uma linha nao um corpo de informa podera ficar assim

var newArr3 = arr.map(function (item) {
  return item * 4;
});
console.log(newArr3);
