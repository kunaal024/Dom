headone =document.querySelector("h1")
input = document.querySelector("input")
buttoncolor= document.querySelector("button")
console.log(headone)
console.log(input)
console.log(buttoncolor)

buttoncolor.addEventListener("click",function(){
    let clText = inputText.value
    headone.style.color = clText
    inputText.value = ""

})