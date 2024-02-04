// Its solve the problem of call back 
//1) inversion of control
//2) hard to readable

/* function createpromise(){
    return new promise{ function exec(resolve,reject)
    //your code should be here
    }
} */

function createPromise(){
    return new Promise( function exec(resolve,reject){
        
        setTimeout(function f(){
            console.log("timer done")
           // resolve("done")
           reject("rejected")
        },3000)
    
    })
}

console.log("start")

let x = createPromise();

console.log("got a new promise")

x.then(function f(value){ // multiple then can be executed
    console.log('Promise ', value)
}).catch(function f(value){
    console.log("function",value)
}).finally(function f(){
    console.log("Executed in the case of both reject and resolve")
})

console.log("end")

for(let i =0;i<1000;i++){
   //code 
}