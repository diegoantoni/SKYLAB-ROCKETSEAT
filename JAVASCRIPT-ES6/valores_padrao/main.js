//definindo valores padrao em uma funcao
function soma(a = 1, b = 2){
    return a + b;
}
console.log(soma(2));
console.log(soma());

//definindo valores padrao em uma arrow function
const soma2 = (a=3, b=6) => a + b;
console.log(soma2(1));
console.log(soma2());