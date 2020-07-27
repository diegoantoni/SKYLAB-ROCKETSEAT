"use strict";

var usuario = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //2.1 map

var idade = usuario.map(function (item) {
  return item.idade;
});
console.log(idade); //2.2 filter

var empR = usuario.filter(function (item) {
  return item.idade > 18 && item.empresa === 'Rocketseat';
});
console.log(empR); //2.3 find

var trabG = usuario.find(function (item) {
  return item.empresa === 'Google';
});
console.log(trabG); //2.4 unindo operacoes

var newuser = usuario.map(function (item) {
  item.idade = item.idade * 2;
  return item;
}).filter(function (item) {
  return item.idade < 50;
});
console.log(newuser);
