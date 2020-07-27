//definindo valor padrao para os paramentros
function soma (a = 1,b = 1){
    return a + b;
}
console.log(soma(1));
console.log(soma());

//utilizando arrow function com valores padroes
const sum = (a=2, b=4) => a + b;
console.log(sum(1));
console.log(sum());