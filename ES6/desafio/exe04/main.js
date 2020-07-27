//4.1 desestruturaçcao simples
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do sul',
        estado: 'SC',
    }
};

const {nome, endereco:{cidade}, endereco:{estado}} = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

//4.2 desestruturacao em parametros
const usuario = {
    nome: 'diego',
    idade: 24
}
function mostraInfo({nome, idade}){
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo(usuario))




