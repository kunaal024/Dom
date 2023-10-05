let school = {
    firstName : "kunaal",
    Lastname : "kanoje",
    age : 23,
    displayName:function(){
        console.log(this.firstName + this.Lastname)
    }
}

// console.log(school)


function schools(fn,ln,age){
    this.firstName = fn
    this.Lastname =ln
    this.age = age
}

let kk =new schools('kunaal','kanoje',24)
console.log(kk)


//object__proto__ === parent(schools).protype

console.log(kk.__proto__ === schools.prototype)

schools.prototype.displayName = function(){
    console.log(this.age + this.firstName)
}

schools.prototype.city = "Nagpur"
console.log(kk.city)

