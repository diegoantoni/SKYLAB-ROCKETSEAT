//REST 
//utilizado em objeto
const usuario = {
    nome:'Diego',
    idade: 23,
    empresa: 'rocketseat'
};

const {nome, ...resto} = usuario;
console.log(nome)
console.log(resto)
//utilizado em array
const arr = [1, 2, 3, 4] 
const [a, b, ...c] = arr 
console.log(a)
console.log(b)
console.log(c)

//utilizado em função
function soma(...params){
    return params.reduce((total,next)=> total + next);
}
console.log(soma(1,2,4,3,2))

function soma2(a,b,...resto){
    return resto;
}
console.log(soma2(1,2,4,5,6,7))

//SPREAD
//utilizando em objeto
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1, ...arr2]
console.log(arr3)
//utilizando em objeto
const usuario3 = {
    nome: 'teste',
    idade: 24,
    empresa: 'testeemp'
};

const usuario4 = {...usuario3, nome:'testespread',idade:33}
console.log(usuario4)