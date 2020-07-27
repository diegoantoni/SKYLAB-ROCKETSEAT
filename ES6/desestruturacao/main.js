const usuario = {
    nome: 'diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

const {nome, idade, endereco:{cidade}} = usuario
console.log(nome, idade, cidade)

//desestruturação nos parametros da funçao
function mostraNome({nome, endereco:{cidade}}){
    console.log(nome, cidade)
}
mostraNome(usuario)