"use strict";

//constante - exemplo de multação
var usuario = {
  nome: 'diego'
};
usuario.nome = 'cleito';
console.log(usuario); //variavel de escopo

function teste(x) {
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10);
