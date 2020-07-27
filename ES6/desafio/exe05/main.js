//5.1 REST
const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr
console.log(x)
console.log(y)

function soma(...params){
    return params.reduce((total, nex)=> total + nex)
}
console.log(soma(1,2,3,4,5,6))

//5.2 SPREAD
const usuario ={
    nome:'Diego',
    idade: 23,
    endereco:{
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil'
    }
};

const usuario2 = {...usuario, nome:'gabriel'}
console.log(usuario2)
const usuario3 = {...usuario, endereco:{cidade:'Lontras'}}
console.log(usuario3)