// class calculator{
//     addition(x,y){
//         console.log(x+y)
//     }
//     addition(x,y,z){
//         console.log(x+y+z)
//     }
//     addition(w,x,y,z){
//         console.log(w+x+y+z)
//     }
// }
// let calA = new calculator()
// calA.addition(4,5)



class calculatorA {
    addition(w,x,y,z){
        if (w != undefined && x != undefined && y != undefined && z != undefined){
            console.log(w+x+y+z)
        }
        else if (w != undefined && x != undefined && y != undefined ){
            console.log(w+x+y)
        }
        else if (w != undefined && x != undefined){
            console.log(w+x)
        }
    }
}

let calB = new calculatorA()
calB.addition(4,4)
calB.addition(4,4,5)
calB.addition(4,4,5,4)

class worldbank{
    save(){
        console.log("worldbank of save")
    }
    loan(){
        console.log("worldbank of loan")
    }
}


class mahabank extends worldbank{
    displaymaha(){
        console.log("mahabank")
    }
    loan(){
        console.log("mahabank of loan")
    }
    save(){
        console.log("mahabank of save")
    }
}

class bank extends worldbank{
   displaybank(){
    console.log("displaybank")
   }
    loan(){
        console.log("bank of loan")
        super.save()
    }
    save(){
        console.log("bank of save")
        super.loan()
    }
}

let bak = new bank()
bak.loan()
bak.save()
bak.displaybank()


