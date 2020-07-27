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
const arr = [1,2,3,4];
//nesse caso o a recebe 1 o b recebe 2 eo c recebe todo o resto
const [a, b, ...c]= arr;
console.log(a);
console.log(b);
console.log(c);

//utilizando o rest operator para paramentros de função
//retorna um array dessa forma e adicionando a funçao reduce consegue somar todos os parametros
function soma(...params){
    return params.reduce((total, next)=> total + next);
}
console.log(soma(1, 2, 4));
/////////////////////////////////////////////////////////////////////

// SPREAD 
// faz o papel de repassar a estrutura de um objeto ou de um array para outros 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

// qndo precisa criar um novo objeto com as msm propriedades de objeto ja criado, trocando apenas as
//informações

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa:'Rocketseat',
};
const usuario2 = {...usuario1, nome:'Joao'};
console.log(usuario2);