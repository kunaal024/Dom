let olelemnt = document.querySelector('ol')
let inputText = document.querySelector('input')
let buttonq = document.querySelector('button')
console.log(olelemnt)
console.log(inputText)
console.log(buttonq)



buttonq.addEventListener("click",function(){
    let eltext = inputText.value
    let newelment = document.createElement('li')
    newelment.textContent = eltext
    olelemnt.appendChild(newelment)
    inputText.value = ''
})
