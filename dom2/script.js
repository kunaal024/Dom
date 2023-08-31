//<h1 class="one" id="two" name="nm">kunal</h1>
//Css selector
//tag name


let headOne = document.querySelector('h1')
console.log(headOne)

let byClass = document.querySelector('.one')
console.log(byClass)

let byId = document.querySelector('#two')
console.log(byId)

let byAttribute =  document.querySelector('h1[name = "nm"]')
console.log(byAttribute)

let para = document.querySelector('p')
let byId1 = document.querySelector('#three')
let byClassD = document.querySelector('.four')
let byAttributeB = document.querySelector('p[id="three"]')


console.log(para)
console.log(byId1)
console.log(byClassD)
console.log(byAttributeB)

let headTwo = document.querySelector('#two')
console.log(headTwo)
 headTwo.addEventListener('mouseover',function(){
    headTwo.textContent = "the kunaal"
 })


 console.log(headTwo.textContent)
headTwo.textContent = "kuku"

headTwo.addEventListener('click',function(){
    headTwo.textContent = "kuku"
    headTwo.style.color = "red";
})