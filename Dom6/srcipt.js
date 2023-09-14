let headone =document.querySelector("h1")
let input = document.querySelector("input")
let buttoncolor= document.querySelector("button")
console.log(headone)
console.log(input)
console.log(buttoncolor)

buttoncolor.addEventListener("click",function(){
    let clText = input.value
    headone.style.color = clText
    input.value = ""
})