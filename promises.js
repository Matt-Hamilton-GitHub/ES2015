//Promises

new Promise(function(resolve, reject){
    if(Math.random() > .5){
        resolve('Yes')
    }else{
        reject('No')
    }
})

Promise.all([]).then(()=>{
    return null
})