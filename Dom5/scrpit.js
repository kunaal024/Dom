let ulList = document.querySelector('ul')
let  inputText = document.querySelector('input')
let buttonA = document.querySelector('button')
console.log(ulList)
console.log(inputText)
console.log(buttonA)

buttonA.addEventListener('click',function(){
    let liText = inputText.value
    let newElement = document.createElement('li') 
    newElement.textContent = liText 
    ulList.appendChild(newElement)
    inputText.value = ""
})

ulList.addEventListener('click',function(){
    ulList.style.color = "red"
})