const power_two=(n)=>{
    return n**2
}

//call back
function power_three(n){
    return power_two(n)*n
}

console.log(power_three(3))


// second order higher order fucntion
function say_hello(){
    return() =>{
        console.log("Hello Histesh")
    }
}

let guessValue = say_hello()
console.log(guessValue);
guessValue()

//thrid level high order function
const higher_order=n=>{
    const one_fun = m =>{
        const two_fun = p =>{
            return m + n + p
        }
        return two_fun
    }
    return one_fun
}

console.log(higher_order(4)(4)(3))

////fourth higher order function
const num = [2,3,4,5]

const sumarr = arr =>{
    let total=0
    arr.forEach(function(element){
        total+=element
    });
    return total
}
console.log(sumarr(num));
