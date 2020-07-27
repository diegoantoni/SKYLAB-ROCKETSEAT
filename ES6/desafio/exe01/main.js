class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }
    isAdmin(){
       if(this.admin){
           return true
       }else{
           return false
       }
    }
}

class Admin extends Usuario{
    constructor(a, b){
        super()
        this.email = a;
        this.senha = b;
        this.admin = true;
    }
    
}

const User1 = new Usuario('teste@teste.com','senha123');
const Adm1 = new Admin('teste@teste.com','senha1234');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());