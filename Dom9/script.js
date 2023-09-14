let inputE = document.querySelector('input')
let buttonOne = document.querySelector('#one')
let ullist = document.querySelector('ul')

console.log(inputE)
console.log(buttonOne)
console.log(ullist)

buttonOne.addEventListener('click',function(){
    let txt = inputE.value
    let newli = document.createElement('li')
    newli.textContent = txt
    addButtons(newli)
    ullist.appendChild(newli)
    inputE.value =''
})

function addButtons(li){

    let r = document.createElement('button') 
    r.textContent = "Remove" 
    r.classList.add('remove') 
    li.appendChild(r)

    let d = document.createElement('button') 
    d.textContent  = "Down" 
    d.classList.add('down')  
    li.appendChild(d)


    let u = document.createElement('button') 
    u.textContent  = "Up" 
    u.classList.add('up') 
    li.appendChild(u)
}



ullist.addEventListener('click',function(e){
    if(e.target.tagName === 'BUTTON'){

        if(e.target.className === "remove"){
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        else if(e.target.className === "down"){
            let li =e.target.parentElement
            let ul = li.parentElement
            let nextli = li.nextElementSibling
            if(nextli){
                ul.insertBefore(nextli,li)
            }
        }

        else if(e.target.className === "up"){
            let li =e.target.parentElement
            let ul = li.parentElement
            let preli = li.previousElementSibling
            if(preli){
                ul.insertBefore(li,preli)
            }
        }
    }
})