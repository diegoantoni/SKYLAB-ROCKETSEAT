//metodos estaticos
class Matematica{
    /*
    //metodos staticos nao conseguem acessar nenhum outra propriedade 
    //dentro da classe so server pra retorna algo, dessa forma ira da erro
    constructor(){
        this.todos =[];
    }
    
    static addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
    */
   //uma das formas correta de criar um metodo statico seria
  static soma(a,b){
       return (a + b);
   }
   //metodo estaticos nao precisa de constructor pq so retorna alguma informação e nao 
   //consegue acessar outras propriedades dentro da classe
}
console.log(Matematica.soma(1,2));

/*
//herança 
class List {
    constructor(){
        this.data = [];
    }

    add(informe){
        this.data.push(informe);
        console.log(this.data)
    }
}
//Todolist herda os metodos da class List
class TodoList extends List{
        //adicioando nova propriedade em uma classe q herda outra
        //e importe chamar a propriedade 'super()' que faz a chamada
        //do constructor da classe pai
        constructor(){
            super();
            this.usuario = 'Diego'
        }
        mostraUsuario(){
            console.log(this.usuario);
        }
}
// eo TodoList e instanciado logo abaixo
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('informacao');
}
MinhaLista.mostraUsuario();

*/

/*
class TodoList{
    //geralmente eo primeiro metodo a ser criado 
    constructor(){
        this.todos = [];
    }
    //criando novo metodo - metodo sao como se fosse funcoes 
    addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

//instanciando uma classe 
const MinhaLista = new TodoList();

//a variavel MinhaLista recebeu a classe todolist e ira executar o metodo addtodo 
//todo vez que o botoao for clicado
document.getElementById('novotodo').onclick = function(){
    MinhaLista.addTodo();
}
*/