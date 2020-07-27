const arr = [1, 3, 4, 5, 6];

//arrow function e utilizado qndo tiver uma funçao anonima
const newArr = arr.map(function(item){
    return item * 1;
})

console.log(newArr);
//primeira forma de utilizar
const newArr1 = arr.map((item) => {
    return item * 2;
})

console.log(newArr1);
//segunda forma de utilizar, qndo a funçao recebe apenas 1 parametro os parenteses pode ser removido
const newArr2 = arr.map(item =>{
    return item * 3;
})

console.log(newArr2);
// terceira forma de utilizar, qndo o resulta e apenas uma linha nao um corpo de informa podera ficar assim
const newArr3 = arr.map(item => item * 4);

console.log(newArr3);

