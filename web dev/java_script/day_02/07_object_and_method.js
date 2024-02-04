// primitive object
let obj ={id:23,name:"ishi",salary:1000}

// Empty object 
let emp = new Object()
// now assigning value
emp.id=212
emp.name="harsh"
emp.salary=1000
//let see it 
console.log(obj)
console.log(emp)
//////////////////////////////////////////////////////////////////
// Advance object(cart) 
function Emp(i,n,m){
    this.id=i
    this.name=n
    this.salary=m
}
// filling card
const emp1=new Emp(298,"atul",1000)
// Let see
console.log(emp1)
/////////////////////////////////////////////