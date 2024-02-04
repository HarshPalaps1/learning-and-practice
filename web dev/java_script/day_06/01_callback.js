//(EG_1)++++++++++++++++++++++++++++++
function h(x,fn){
    // h -> is a hof
    // fn -> callback
    console.log(x*x)
    fn(x)
}

h(20,squ)

function squ(n){
    console.log("this is square of ",n)
}

//(EG_2)+++++++++++++++++++++++++++++++
// setTimeout( call_back_function , time period)

setTimeout(
    function  f(n){
        console.log(n,"mini sec has been passed since this program got excute")
    }
,3000)


//(EG 3)+++++++++++++++++++++++++++++++
//for checking the confilt 


console.log("Started ")
setInterval(
    function fn(){
        console.log("should i be printed here")

    },500);
console.log("ENDED");
for(i=0;i<1000000; i++ ){}

// first one time external function will work 
// then second time it will execute internal function from bottom to top
 