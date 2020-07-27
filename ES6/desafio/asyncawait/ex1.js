//funcao delay aciona o .then apos 1s
//const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
/*
function umPorSegundo(){
    delay().then(()=>{
        console.log('1s');

        delay().then(()=>{
            console.log('2s');
            
            delay().then(()=>{
                console.log('3s')
            });
        })
    });
}
umPorSegundo();
*/
//CONVERTENDO O CODIGO ACIMA EM ASYNC AWAIT
let s = 0
const delay = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve(`${s += 1}s`)}, 1000)
})
async function umPorSegundo(){
    console.log(await delay())
    console.log(await delay())
    console.log(await delay())
    
}
umPorSegundo()