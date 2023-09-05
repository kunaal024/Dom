let headOne = document.querySelector('h1')
let input = document.querySelector("input")
let buttoncolor = document.querySelector("button")

console.log(headOne)
console.log(input)
console.log(buttoncolor)

buttoncolor.addEventListener('click',function(){
    let clText = inputText.value()
    headOne.style.color = clText
    inputText.value = ""
})