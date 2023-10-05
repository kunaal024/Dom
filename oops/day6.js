let class1 = {
    firstname: "kunak",
    lastname: "kanoje",
    age: 22,
    city: "nagpur",
    displayName: function () {
        console.log(this.lastname + this.firstname)
    }
}

class1.displayName()
console.log("-------------------")
console.log(class1)

console.log("---------------------------")


function classroom(fn, ln, ag, rn) {
    this.firstname = fn
    this.lastname = ln
    this.age = ag
    this.rollno = rn
    // this.displayName = function(){
    //     console.log(this.firstname + this.lastname)
    // }
}

let kanak = new classroom("kunak", "kanoje", 23, 44)
console.log(kanak)
//kanak.displayName()


classroom.prototype.displayName = function () {
    console.log(this.firstname + this.lastname)
}


classroom.prototype.city = "Nagpur"
console.log(kanak)

console.log(kanak.__proto__ === classroom.prototype)


console.log(kanak instanceof classroom)
//console.log(kanak.hasOwnProperty())
console.log(kanak.hasOwnProperty("city"))


console.log("---------------------")
//es6

class classroom1 {
    constructor(fn, ln, age, cy) {
        this.firstname = fn
        this.lastname = ln
        this.age = age
        this.city = cy
    }
    displayName() {
        console.log(this.firstname + this.lastname)
    }
}

let kanak1 = new classroom1("kanak", "kanoje", 24, "NAgpur")
console.log(kanak1)

console.log("---------------------")


//object craete

// let kank = Object.create({})
// console.log(kank)

// kank.firstname = "kunaal"
// kank.lastname = "kanoje"
// kank.displayName = function () {
//     console.log(this.firstname + this.lastname)
// }
// console.log(kank)
// kank.displayName()


let obj = {
    init:function(fn, ln, ag, rn){
        this.firstname =fn
        this.lastname= ln
        this.age = ag
        this.rollno=rn
    },
    displayName: function () {
        console.log(this.firstname + this.age)
    }
}



let kunaal1 = Object.create(obj)
console.log(kunaal1)
kunaal1.init("kunak","kanoje",24,55)
kunaal1.displayName()
console.log(kunaal1)