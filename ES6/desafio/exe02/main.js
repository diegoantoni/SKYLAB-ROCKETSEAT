const usuario = [
    {nome:'Diego', idade:23, empresa:'Rocketseat'},
    {nome:'Gabriel', idade:15, empresa:'Rocketseat'},
    {nome:'Lucas', idade:30, empresa:'Facebook'},
];
//2.1 map
const idade = usuario.map(function(item){
    return item.idade
})
console.log(idade)

//2.2 filter
const empR = usuario.filter(function(item){
    return item.idade > 18 && item.empresa === 'Rocketseat';
})
console.log(empR)

//2.3 find
const trabG = usuario.find(function(item){
    return item.empresa === 'Google'
})
console.log(trabG)
//2.4 unindo operacoes
const newuser = usuario.map((item)=>{
     item.idade = item.idade*2
    return item
}).filter((item)=>{
    return item.idade < 50
})
console.log(newuser)
