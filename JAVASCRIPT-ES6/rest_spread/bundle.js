"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//REST 
//server pra pegar o resto das propriedades

/*
const usuario ={
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};
//o nome pegara o nome, e o resto assumirar todos outros paramentros do objeto
const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);
*/
//aplicando rest em vetores
var arr = [1, 2, 3, 4]; //nesse caso o a recebe 1 o b recebe 2 eo c recebe todo o resto

var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c); //utilizando o rest operator para paramentros de função
//retorna um array dessa forma e adicionando a funçao reduce consegue somar todos os parametros

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2, 4)); /////////////////////////////////////////////////////////////////////
// SPREAD 
// faz o papel de repassar a estrutura de um objeto ou de um array para outros 

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3); // qndo precisa criar um novo objeto com as msm propriedades de objeto ja criado, trocando apenas as
//informações

var usuario1 = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
};

var usuario2 = _objectSpread(_objectSpread({}, usuario1), {}, {
  nome: 'Joao'
});

console.log(usuario2);
