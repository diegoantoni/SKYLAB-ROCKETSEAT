//constante - exemplo de multação
const usuario = {nome: 'diego'}

usuario.nome = 'cleito'

console.log(usuario);

//variavel de escopo
function teste(x){
    let y = 2;

    if(x > 5){
        console.log(x, y);
    }
}

teste(10);