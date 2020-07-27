"use strict";

/*
//a constante nao pode ter o valor reatribuido
const a = 1;
// isso não pode ser feito, pq aqui eu estaria reatribuindo um valor
//em um constante 
a = 3;
console.log(a);
*/
// uma constante so pode ter seu valor alterado atraves de uma mutação.
//mutação e quando trabalha como o msm formato do objeto ou vetor e alterar valores dentro deles
var usuario = {
  nome: 'Diego'
};
usuario.nome = 'Cleiton';
console.log(usuario); //variaveis de escopo e tudo que esta entre as chaves do inicio e fim de uma função por exemploe.
//ou seja as variaveis definidas com o 'let' so serão enxergadas dentro do escopo onde foram definidas.
//diferente das constantes o valor do 'let' pode ser reatribuido normalmente dentro do escopo.

function teste(x) {
  var y = 2;

  if (x > 5) {
    y = 9;
    console.log(x, y);
  }
}

teste(10);
