let kunaal = {
    firstName: "kunal",
    lastName: "kanoje",
    age: 24,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}

console.log(kunaal.firstName)


let golu = {
    firstName: "Golu",
    lastName: "kanoje",
    age: 23,
    display: function () {
        console.log(this.age + this.lastName)
    }
}
console.log(golu)

//function construction

function employeeee(fn, ln, age, rollNo) {
    this.firstName = fn
    this.lastName = ln
    this.age = age
    this.rollNo = rollNo
    this.display = function () {
        console.log(this.firstName + this.lastName)
    }
}

let kunaal2 = new employeeee("kunal", "kanoje", 23, 24)
kunaal2.display()
console.log(kunaal2)


//ES6

class employeeee2 {
    constructor(fn, ln, age, rn) {
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.rollNo = rn
        this.display = function () {
            console.log(this.firstName + this.lastName)
        }
    }
}

let kunaal3 = new employeeee2("kunal", "kanoje", 23, 24)
kunaal3.display()
console.log(kunaal3)

//object.create()
// let gk = object.create({})
// console.log(gk)

// gk.firstName = "gk"
// gk.lastName = " kanoje"
// gk.age = 23
// gk.display = function () {
//     console.log(this.firstName + this.lastName)
// }
// gk.display()
// console.log(gk)

