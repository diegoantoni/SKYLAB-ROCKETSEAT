"use strict";

//3.1
var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (item) {
  return item + 10;
});
console.log(newArr); //3.2

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log("Idade ".concat(mostraIdade(usuario))); //3.3

var nome = "diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : teste;
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 31;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); //3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve('teste');
  });
};

console.log(promise());
