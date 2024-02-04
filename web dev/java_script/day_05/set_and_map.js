//lets declare set
let emptyset = new Set()

// making Set of array
let myarr=[1,2,45,5]
let new_set = new Set(myarr)
console.log(new_set)

// to add new values by methods
new_set.add(9)
console.log(new_set)

// to check the presence of perticular value
console.log(new_set.has(1))

// set difference

function set_difference(x,y){
       return new Set( [...x].filter(el => !y.has(el)))
}

//( MAP )+++++++++++++++++++++++++++++++++++++++++++
let map = new Map()

console.log(map)

let arr =[
    [1,"ATUL"],
    [2,"HARSH"],
    [3,"kittu"],
    [4,"shanu"],
    [5,'ishu']
]

const look = arr.map((arr_el) => map.set(arr_el[0],arr_el[1]))
console.log(look)