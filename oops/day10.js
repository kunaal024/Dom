class home{
    cars(){
        console.log("i have a adui A4")
    }

    bike(){
        console.log("i have intercepa6")
    }
}


class son extends home{
    cars(){
        console.log("i have also Audi A6")
        super.bike()
    }
    bike(){
        console.log("i have also intercepa6")
       
    }
}


class Son2 extends home{
    cars(){
        console.log("i have also Audi A6")
        super.bike()
       
    }
    bike(){
        console.log("i have also intercepa6")
        super.cars()
    }
}



let S = new son()
S.cars()


let S2 = new son()
S2.bike()