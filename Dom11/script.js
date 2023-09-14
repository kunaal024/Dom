// h1 id="one" class="two" name = "nm">heading</h1>
//     <p id = "three" class="four" name = "nm">para</p>
//     <ol>
//         <li class="vegtable" name ="veg">potato</li>
//         <li class="vegtable" name ="veg">tomato</li>
//         <li class="vegtable" name ="veg">onion</li>
//         <li class="vegtable" name ="veg">brinjal</li>
//     </ol>


let allElements = document.querySelectorAll('li')
console.log(allElements)

let allvege = document.querySelectorAll('vegetable')
console.log(allvege)

{/* <p id = "three" class="four" name = "nm">para</p> */ }

let para = document.querySelector('p')
console.log(para)
console.log(para.className)

para.classList.add('seven')
console.log(para)

para.classList.remove('four')
console.log(para)

para.classList.toggle('seven')
console.log(para)

para.classList.add('eight')
console.log(para)

para.setAttribute("id", "five")
console.log(para)

para.setAttribute('data-type', "string")
console.log(para)

para.removeAttribute('class')
console.log(para)


let q = document.querySelector('h1')
console.log(q)


    //      < li class="vegtable" name = "veg" > potato</li >
    //     <li class="vegtable1" name ="veg">tomato</li>
    //     <li class="vegtable2" name ="veg">onion</li>
    //     <li class="vegtable3" name ="veg">brinjal</li>






let q2 = document.querySelector('.vegtable')
let q3 = document.querySelector('.vegtable1')
let q4 = document.querySelector('.vegtable2')
let q5 = document.querySelector('.vegtable3')
console.log(q2)
console.log(q3)
console.log(q4)
console.log(q5)


q2.addEventListener("mouseover",function(){
   q2.style.color = "red"
 //   q3.style.color = "brown"
    //q4.style.color = "pink"
    //q5.style.color = "green"
})


q3.addEventListener("click",function(){
    q3.style.color = "brown"
})


q4.addEventListener("dblclick",function(){
    //q2.style.color = "red"
  //  q3.style.color = "brown"
    q4.style.color = "pink"
//q5.style.color = "green"
})

q5.addEventListener("mouseout",function(){
 //   q2.style.color = "red"
  //  q3.style.color = "brown"
  //  q4.style.color = "pink"
    q5.style.color = "green"
})



