"use strict";

//4.1 desestruturaçcao simples
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    cidade = empresa.endereco.cidade,
    estado = empresa.endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado); //4.2 desestruturacao em parametros

var usuario = {
  nome: 'diego',
  idade: 24
};

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo(usuario));
