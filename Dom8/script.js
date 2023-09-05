document.querySelector('h1')
document.querySelector('.one')
document.querySelector('#cars')



let bdy = document.querySelector('body')
console.log(bdy)

bdy.addEventListener('click',function(e){
    console.log(e.target)
    console.log(e.target.tagName)
    console.log(e.target.className)
})