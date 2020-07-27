const nome = 'diego';
const idade = 24
//qndo a variavel tem o mesmo nome do parametro do objeto não precisa se 
//ser passada explicitamente dentro do objeto
const usuario = {
    nome,
    idade,
    empresa: 'rocket'
}
console.log(usuario);