let headOne = document.querySelector("ul")
let inputText = document.querySelector("input")
let buttonA = document.querySelector("button")
console.log(headOne)
console.log(inputText)
console.log(buttonA)




buttonA.addEventListener("click",function(){
    liText = inputText.value
    let newELement = document.createElement('li')
    newELement.textContent = liText
    headOne.appendChild(newELement)
    inputText.value = ""
    
})


headOne.addEventListener("click",function(){
    headOne.style.color="red"
})