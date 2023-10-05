let object = {
    firstName : "kunaal",
    lastName :"kanoje",
    age : "23",
    skills : ["developer","pm"]
}


class person{
    firstName;
    lastName;
    age;
    skills;
}

let object1  = new person()
console.log(object1)
object1.firstName ="kunal"
object1.lastName =" kanoje"
object1.age ="23"
object1.skills =["developer","pm"]
console.log(object1)



class personB{
    constructor(fn,ln,age,skills){
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.skills = skills
    }
}

let kunaaaaaal = new personB("golu","kanoje","23",["pm","developer"])
console.log(kunaaaaaal)

let Rachana = new personB("rachana","jain","25",["dancer","desginer"])
console.log(Rachana)





