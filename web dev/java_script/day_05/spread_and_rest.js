const arr_1=[1,2,3]
const arr_2=[4,5,6]

//new way two define array 
let newarray = new Array(6,7,8)
console.log(newarray)

const arr_3= arr_1.concat(arr_2) 


console.log(arr_3)

//+++++++++++(prerequ)++++++++++++++++++++++++++++
function testone(){
    console.log(arguments)
    console.log(typeof arguments)
}
testone(1,2,3)
console.log(testone(1,2,3))

//++++++++( SPREAD )++++(arr to one or many value )
const arr_4=[...arr_1,...arr_2]
console.log(arr_4)


//constructe array from object
function makeit(){
    let args = Array.from(arguments)
    console.log(args)
    let findarr = args.map((e)=> e.toUpperCase())
    console.log(findarr)
}
makeit('a','b','c')





//++++++(REST)+++++( ( many or one )value to  arr)
function restarr(...args){
    let finalarr= args.map(e=>e*2)
    console.log(finalarr)
}
restarr(11,22,44)



// (eg of spread and rest) ++++++++++++

//SPREAD
const Name=["Superman","Flash"]
const newname=["Batman",...Name,"Aquaman"]
console.log(newname)


//REST
const sitename="harshpal"
console.log([...sitename])