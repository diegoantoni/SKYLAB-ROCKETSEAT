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
class Matematica {
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));
