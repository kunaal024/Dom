let intially = {
    firstName: "kunal",
    lastname: "kanoje"
}

console.log(intially.firstName)
console.log(intially.lastname)


class add {
    set first_name(fn) {
        this.firstName = fn
    }

    get first_name() {
        return this.firstName
    }

    set last_name(ln) {
        this.lastname = ln
    }

    get last_name() {
        return this.lastname
    }
}

let bb = new add()
bb.first_name = "rachana"
console.log(bb.first_name)




class added {
    constructor(fn, ln, cy, ag) {
        this.firstName = fn
        this.lastname = ln
        this.city = cy
        this.age = ag
    }

    displayName() {
        console.log(this.firstName + this.lastname)
    }

    displayAge() {
        return this.age
    }
}

let addd = new added("kunaal", "kanoje", "nagpur", 22)
let addd1 = new added("golu", "kanoje", "pune", 23)
let addd2 = new added("kuku", "kanoje", "mumbai", 24)
let addd3 = new added("kk", "kanoje", "banglore", 25)
let addd4 = new added("kunu", "kanoje", "hyderbad", 26)


let filll = [addd, addd1, addd2, addd3, addd4]
filll.forEach(function (el) {
    el.displayAge()
    el.displayName()
})


filll.forEach(function (el) {
    el.batch = 2023
})
console.log(filll)

let total = filll.reduce(function (acc, el) {
    return acc + el.displayAge()
}, 0)

console.log(total / filll.length)



let poem = [
    new added("kunaal", "kanoje", "nagpur", 22),
    new added("golu", "kanoje", "pune", 23),
    new added("kuku", "kanoje", "mumbai", 24),
    new added("kk", "kanoje", "banglore", 25),
    new added("kunu", "kanoje", "hyderbad", 26)

]

console.log(poem[0].displayAge())



let poem1 = {
    data :new added("kunaal", "kanoje", "nagpur", 22),
    data: new added("golu", "kanoje", "pune", 23),
    data: new added("kuku", "kanoje", "mumbai", 24),
    data:new added("kk", "kanoje", "banglore", 25),
    data:new added("kunu", "kanoje", "hyderbad", 26)

}

for(key in poem1){
    poem1[key].displayName()
}