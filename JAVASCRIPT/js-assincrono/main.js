
//començando uma requisicao ajax
var xhr = new XMLHttpRequest()

//buscando dados da api
xhr.open('GET', 'https://api.github.com/users/diegoantoni');
xhr.send(null);

//verificando e retornou algo e pegando os dados
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}


/*
//PROMISSES - sao codigos q nao influencia na linah do tempo de javascript o javascript continua rodando 
//sem interrupçoes independe das promisses

var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.gitthub.com/users/diegoantoni');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('ERRO NA REQUISIÇAÕ');
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.warn(error);
    });       
        
*/

//BIBLIOTECA AXIOS
/*
axios.get('https://api.github.com/users/diegoantoni')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });
    */