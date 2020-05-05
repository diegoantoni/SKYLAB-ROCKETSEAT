var inputElement = document.querySelector('#app input');
var ulElement = document.querySelector('#app ul');
var divPreload = document.querySelector('#preload');

function buscarDados(){
    startPreloader();
    
    var user = inputElement.value;
    axios.get('https://api.github.com/users/'+user+'/repos' )
        .then(function(response){
            //buscar dados de um objeto especificando a posiçao
            // info = response.data;
             //   for (var i=0; i < info.length; i++){
                    
              //  }   
                // acessar somente chave especifica de um objeto utilizando o map
                var resposta = response.data;
                var info = resposta.map(resposta => `${resposta.name}`);
                todoLi(info);
                inputElement.value='';
        })
        .catch(function(error){
            if(error.message === 'Request failed with status code 404'){
                alert('Usuario não encontrado');
                inputElement.value = '';
            }
        })
        .finally(() => endPreloader());
}
//funcao para montar o html com as informaçoes que vem da api pois nao pode ser montado direto dentro da função
//junto com a requisiçao do axios
function todoLi(retornoapi){
    for (repo of retornoapi){
        var todoElement = document.createElement('li');
        var textElemento = document.createTextNode(repo);

        todoElement.appendChild(textElemento)
        ulElement.appendChild(todoElement);
    }
}
//funcão pra aparecer mensagem de carregando q esta em uma div ocuta na pagina html
function startPreloader(){
    divPreload.style.display ='block';
    ulElement.innerHTML='';
}
//funçao para desaparecer a mensagem de carregamento apos termina de carregar os dados da api
function endPreloader(){
    divPreload.style.display='none';
}