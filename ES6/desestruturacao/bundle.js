"use strict";

var usuario = {
  nome: 'diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade); //desestruturação nos parametros da funçao

function mostraNome(_ref) {
  var nome = _ref.nome,
      cidade = _ref.endereco.cidade;
  console.log(nome, cidade);
}

mostraNome(usuario);
