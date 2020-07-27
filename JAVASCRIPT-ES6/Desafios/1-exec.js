class Usuario {
    constructor (email, senha){
         this.email = email;
         this.senha = senha;
    }
    isAdmin(){
       
       }
    }

class Admin extends Usuario{
        constructor(){
            super();
        }
}
const User1 = new Usuario('email@teste.com','senha123');
const Adm1 = new Admin('email5@teste.com','senha1234');
console.log(Admin.Adm1);