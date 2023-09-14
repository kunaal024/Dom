{/* <h1 id="one"  class="two" name ="nm"></h1>
<p> i am practicsing javascript</p>
<ul>
    <li class="ru" name ="frontd">html</li>
    <li class="ru" name ="frontd">Css</li>
    <li class="ru" name ="frontd">javascript</li>
</ul>
<ol>
    <li class="ku" name = "backd">java</li>
    <li class="ku" name = "backd">python</li>
    <li class="ku" name = "backd">C#</li>
</ol> */}


// document.querySelector("h1")
// document.querySelector('.two')
// document.querySelector('#one')
// document.querySelector("h1[name ='nm']")


let fu =document.querySelector('h1')
console.log(fu)
//let headone = document.querySelector("h1")

let allElementsFE = document.querySelectorAll('.ru')
console.log(allElementsFE)


let allElementsBE = document.querySelectorAll('.ku')
console.log(allElementsBE)


fu.addEventListener('click',function(){
    for(let i = 0 ; i < allElementsFE.length ; i++){
        console.log(i)
        allElementsFE[i].style.color = "green"
        allElementsBE[i].style.color ="blue"
    }
})


let byid =document.querySelector('#one')
console.log(byid)
let byid1 =document.getElementById('one')
console.log(byid1)



