// Slider Start

let left =document.querySelector(".left");
let right =document.querySelector(".right");
let images=document.querySelector(".images");

right.addEventListener("click",function(){
 let active=document.querySelector(".active");
 active.classList.remove("active");
 if(active.nextElementSibling!=null){
    active.nextElementSibling.classList.add("active");
 }else{
     images.firstElementChild.classList.add("active")
 }
 
})
left.addEventListener("click",function(){
    let active=document.querySelector(".active");
    active.classList.remove("active");
    if(active.previousElementSibling!=null){
        active.previousElementSibling.classList.add("active");
     }else{
         images.lastElementChild.classList.add("active")
     }
})
// Slider End

