const arr = [1,3,4,5,8,9,7];

// funcao map sever pra percorrer o vetor e retorna uma nova informação
// de acordo com o q for passado para ser feito
//pode tmbm pegar o indice da posição do vetor passando mais um paramento dentro da função
//map(function(item, indice))
const newArr = arr.map(function(item){
    return item * 2;
})

console.log(newArr);

//funcao reduce e uma forma de consumir todo vetor e transforma em uma unica informação geralmente uma
//variavel numero

const sum = arr.reduce(function(total, next){
    return total + next;
})
console.log(sum);
/*
total - 0
next - 1
depois ele ira somar os dois valores e jogar no total
ficando
total - 1 eo 
next recebendo o proximo valor do array que e 3
soma novamente eo 
total agora vale 4 e next o proximo valor do array 4
e assim ate acabar todo array
*/

//função filter retorna valores para uma condição verdade ou falsa nessa caso
//se o numero do array for par (verdadeiro) ele mostra, se nao excluira os numeros q forem falsos
const filter = arr.filter(function(item){
    return item % 2 === 0;
})
console.log(filter);

//função find verifica se existe alguma informação dentro do array ou encontrar essa informação
//dentro do array
const find = arr.find(function(item){
    return item === 4;
});
console.log(find);