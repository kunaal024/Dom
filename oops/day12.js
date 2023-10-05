// lexical scope


function addition(){
    let a =12
    let b =13
    console.log(a + b)
    function addition2(){
        let x =10
        let y = 20
        console.log(a + b)
        console.log( x + y)
        function addition3(){
            console.log(a + b + x + y)
        }
        addition3()
    }
    addition2()
}
addition()


//clouser
function sub (){
    let s =22
    let e = 24

    return function(){
        return s * e
    }
}

let q = sub()
console.log(q())