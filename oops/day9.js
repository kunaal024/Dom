class Student {
    constructor(fn, ln, adharNo) {
        this.firstName = fn
        this.lastName = ln
        this.adharNo = adharNo
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

class Teacher extends Student {
    constructor(fn, ln, rollno, salary) {
        super(fn, ln, adharNo)
        this.rollno = rollno
    }
    displayRollno(){
        console.log(this.rollno)
    }
}

let kunaal = new Teacher("kunaal","kanoje",24,38)
console.log(kunaal.salary)
console.log(kunaal.firstName)
console.log(kunaal.lastName)
console.log(kunaal.rollno)
kunaal.displayName()
kunaal.displayRollno()





//MULTIPLE INHERTIANCE

class father{
    constructor(fn , ln){
        this.firstname =fn
        this.lastname = ln
    }
    displayName(){
        console.log(this.firstname  + this.lastname)
    }
}

class Son extends father{
    constructor(fn,ln,age){
        super(fn,ln)
        this.age = age
    }
    displayage(){
        console.log(this.age + this.firstname)
    }
}

class daughter extends father{
    constructor(fn,ln,rollno){
        super(fn,ln)
        this.rollno = rollno
    }
    displayrollno(){
        console.log(this.rollno + this.firstname)
}
}


class newbaby extends father {
    constructor(fn,ln,ag){
        super(fn,ln)
        this.age = ag

    }
    displayname(){
        console.log(this.lastname)
    }
}



console.log("-----------------")

let k = new daughter("khushi","dhole",24)
console.log(k)
k.displayrollno()
k.displayName()
k.displayname()