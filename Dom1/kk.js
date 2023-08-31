//<h1 class="one" id="two" name="nm">employee</h1>
//Css selector
//Tagname


let headone = document.querySelector('h1')
console.log(headone)

let byclass = document.querySelector('.one')
console.log(byclass)

let byId =document.querySelector('#two')
console.log(byId)

let byAttribute = document.querySelector('h1[name = "nm"]')
console.log(byAttribute)

//<p id ="three" class = "four" name = "five">kuku</p>

let para = document.querySelector('p')
let byId1 = document.querySelector('#three')
let byclassD = document.querySelector('.four')
let byAttributeB = document.querySelector('p[id ="three]')

console.log(para)
console.log(byId1)
console.log(byclassD)
console.log(byAttributeB)
//Example

let headTwo = document.querySelector('#two')
console.log(headTwo)
headTwo.addEventListener('moveover',function(){
    headTwo.textContent = "the"
})

headTwo.addEventListener('click',function(){
    headTwo.textContent = " the kunaal"
    headTwo.computedStyleMap.color = "red"
})














 