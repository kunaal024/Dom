let mapO = new Map([
    [1," kunaal"],
    [2,"kanoje"],
    [3,"golu"]

])
console.log(mapO)

//checkout length of array
//SIZE
console.log("-------------")
let a = mapO.size
console.log(a)

// Adding the value in array
//SET


console.log("-------------")


let a1 = mapO.set(4,"kanoje")
console.log(a1)

console.log("-------------")
//checkout value present in the array or not
//HAS

let a2 = mapO.has(4)
console.log(a2)

console.log("-------------")
for (let key of mapO.values()){
    console.log(key)
}

for(let key1 of mapO.values()){
    console.log(key1)
}
console.log("-------------")
//delete value from in array 
//delete

let a4 = mapO.clear()
console.log(a4)