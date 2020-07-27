const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco:{
        cidade:'Rio do Sul',
        estado:'SC',
    },
};

//outras formas de utilizar a desestruturacao
function monstraNome(usuario){
    console.log(usuario.nome);
}
monstraNome(usuario);

//definindo um objeto dentro do paramentro da funçao 
function monstraNome2({nome, idade}){
    console.log(nome, idade);
}
//passa o objeto, a funcão fara a desestruturação do objeto recebido
monstraNome2(usuario);


/*
//utilizando ES6
const {nome, idade, endereco:{cidade}}=usuario;

console.log(nome);
console.log(idade);
console.log(cidade);
*/

//formas de busca informações de um objeto antigo
/*
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);
*/