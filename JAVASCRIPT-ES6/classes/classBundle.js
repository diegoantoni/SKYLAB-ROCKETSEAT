"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//metodos estaticos
var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",

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
    value: function soma(a, b) {
      return a + b;
    } //metodo estaticos nao precisa de constructor pq so retorna alguma informação e nao 
    //consegue acessar outras propriedades dentro da classe

  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2));
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
