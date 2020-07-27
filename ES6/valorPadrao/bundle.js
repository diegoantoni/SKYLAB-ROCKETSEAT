"use strict";

//definindo valor padrao para os paramentros
function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a + b;
}

console.log(soma(1));
console.log(soma()); //utilizando arrow function com valores padroes

var sum = function sum() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return a + b;
};

console.log(sum(1));
console.log(sum());
