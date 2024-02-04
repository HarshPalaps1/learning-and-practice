function sum_of_all(){
    let sum=0;
    for (var i =0;i<arguments.length;i++)
        sum +=arguments[i]
    return sum;
}
let result=sum_of_all(1,3,4,5)
console.log(result)