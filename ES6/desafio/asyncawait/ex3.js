import axios from 'axios';
/*
class Github {
    static getRepositories(user){
        axios.get(`https://api.github.com/users/${user}/repos`)
        .then(response =>{
            console.log(response.data);
        })
        .catch(err => {
            console.log('Repositorio nao existe');
        })
    }
}
Github.getRepositories('diegoantoni');
*/
class Github{
    static async getRepositories(user){
        try{
            const response = await axios.get(`https://api.github.com/users/${user}/repos`)
            console.log(response.data)
        }catch (err){
            console.log('Usuario não encontrado')
        }
    }
}

Github.getRepositories('diegoantoni')