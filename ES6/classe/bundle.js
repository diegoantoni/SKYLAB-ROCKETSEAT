"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
//criar um nova classe
class TodoList{

    //definindo o metodo constructor
    constructor(){
        this.todos = []
    }
    //criando um novo metodo
    addTodo(){
        this.todos.push('New todo')
        console.log(this.todos)
    }
}
//estanciando a classe
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.addTodo();
}
*/

/*
//HERANÇA
class List{
    constructor(){
        this.data = []
    }
    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}
//todolist esta herdando os metodos de list
class TodoList extends List {
    constructor(){
        //faz uma chamada no metodo constructor da classe pai
        super()

        this.usuario = 'Diego'
    }
    mostraUsuario(){
        console.log(this.usuario)
    }

}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('new todo');
}

MinhaLista.mostraUsuario();
*/
//METODOS ESTATICOS
var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2));