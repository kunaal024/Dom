function college(fn ,ln ,rn){
    this.firstName = fn
    this.lastName = ln
    this.rollno = rn
}
let student = new college("lokesh","rao",24)
console.log(student)

console.log(student.__proto__ === college.prototype)
console.log(student)


college.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}


college.prototype.age = 24
console.log(student.age)


console.log(student instanceof college)



//es6 class


class school{
    constructor(fn,ln,age){
        this.firstName = fn
        this.lastName = ln 
        this.age = age
    }
    displayName(){
        console.log(this[this.firstName] + this[this.lastName])
    }
}

let studen1 = new school("rachana","jain",26)
console.log(studen1)


console.log(studen1 instanceof school)

school.prototype.city = 'nagpur'
console.log(school.city)