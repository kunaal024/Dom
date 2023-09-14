let headone =document.querySelector('h1')
let button =document.querySelector('button')
console.log(headone)
console.log(button)



// button.addEventListener('click',function(){
//     headone.style.color = "red"
// })

button.addEventListener('dblclick',function(){
    headone.style.color = "blue"
})

// button.addEventListener('mouseover',function(){
//     headone.style.color = "green"
// })


button.addEventListener('mouseout',function(){
    headone.style.color = "orange"
})

