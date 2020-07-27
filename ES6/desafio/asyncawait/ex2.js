import axios from 'axios';
/*
function getUserFromGithub(user){
    axios.get(`https://api.github.com/users/${user}`)
    .then(response =>{
        console.log(response.data)
    })
    .catch(err =>{
        console.log('Usuario não existe');
    })
}
//getUserFromGithub('diegoantoni')
getUserFromGithub('dieetieis')
*/
async function getUserGit(user){
    
    try{
     const response = await axios.get(`https://api.github.com/users/${user}`)
     console.log(response)
    }catch (err){
        console.log('Usuario não existe')
    }
}
getUserGit('diegoantoni')