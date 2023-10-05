//es6

class person{
    firstname
    lastname
    age
    rollno
    displayName(){
        console.log(this.lastname + this.firstname)
    }
}

let kk = new person()
console.log(kk)
kk.age =26
kk.firstname ="rachana"
kk.lastname ="jain"
kk.rollno =55
console.log(kk)
kk.displayName()


class people{
    constructor(fn,ln,ag,cy){
    this.firstname = fn
    this.lastname = ln
    this.age = ag
    this.city = cy       
    }
    displayName(){
        console.log(this.lastname + this.lastname)
    }
}

let kk1 = new people("rachana","jain",24,"Pune")
console.log(kk1)
kk1.displayName()



//program3

class group{
    setFirstname(fn){
        this.firstname =fn
    }

    setlastname(ln){
        this.lastname =ln
    }

    
    setage(ag){
        this.age =ag
    }
}

let ruu = new group()
ruu.setFirstname("rachana")
ruu.setlastname("jain")
ruu.setage(26)
console.log(ruu)


class room{
    set setFirstname(fn){
        this.firstname = fn
    }

    set setlastname(ln){
        this.lastname = ln
    }

    set setage(ag){
        this.age = ag
    }

    get setFirstname(){
        return this.firstname
    }

    get setlastname(){
        return this.lastname
    }

    get setage(){
        return this.age
    }
}


let yuk = new room()
yuk.setFirstname = "kunal"
yuk.setlastname ="kanoje"
yuk.setage = 24
console.log(yuk)

console.log(yuk.setFirstname)




class home{

    get setFirstname(){
        return this.Firstname
    }

    get setlastname(){
        return this.lastname
    }

    get setage(){
        this.age
    }
}

let yuk1 = new home()
yuk1.get

console.log(yuk1.setFirstname)
