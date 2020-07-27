"use strict";

var user = {
  nome: 'Diego',
  idade: 24
}; //uso do template literals que no caso são as acrase em vez de aspas simples ou dupla

console.log("o nome do usuario e ".concat(user.nome, " e tem ").concat(user.idade, " anos"));
