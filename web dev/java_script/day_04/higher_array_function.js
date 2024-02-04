// 1)array.forEach((var)=>{function})
let arr=[2,3,55,6]



// easy way to iterate through arr with function key word
console.log('by function')
arr.forEach(function(element,index,arr){
    console.log(index,element,arr)
})

// easy way to iterate thoruh arr with arrow function
console.log('by arrow')


arr.forEach((a,b,c)=>{
    console.log(a,b,c)
})
/////////////////////////////////////////////////////////
// 2)array.map(function(element,index,arr)){}
console.log("by  map arrow")

const Name = ["harsh","ishu","atul","kittu","shanu"]

Name.map((n)=>console.log(n.toUpperCase()))


//////////////////////////////////////////////////
//3) array.filter( (ele)=> {fun} )
console.log("by filter arrow")

const fil_name=Name.filter( (ele)=> {
   return  ele.endsWith('u') 
})

console.log(fil_name)


/////////////////////////////////////////////////
/////4) array.reduce( (var1(prev) , var2(curr) ) => var1+var2(function) ) //// eg)shopping cart 
console.log("by reduce arrow")


const cart_bill=[20,30,50]
const sum_of_cart_bill=cart_bill.reduce((prev,curr)=>prev+curr,0)
console.log(sum_of_cart_bill)


////////////////////////////////////////////////
//////5) array.every( (var)=> typeof v ==== Number)
console.log("checking the data type")

const check= cart_bill.every((v)=> typeof v==="number")
console.log(check)


/////////////////////////////////////////// get first value which satisfy the condition 
////////6) array.find( (var) =>  var with  condition )
console.log("to get the first bill amount which is above 20")

const found=cart_bill.find((v)=> v>20)
console.log(found)