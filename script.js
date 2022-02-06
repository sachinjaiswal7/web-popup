let container = document.querySelector(".container")
let openBtn = document.querySelector("#open")
let overlay  = document.querySelector("#overlay")
let closeBtn = document.querySelector("#close")

openBtn.addEventListener("click",function(){
    container.classList.add("active")
    overlay.classList.add("active");

})
closeBtn.addEventListener("click",function(){
    container.classList.remove("active")
    overlay.classList.remove("active")
})
overlay.addEventListener("click",function(){
    container.classList.remove("active")
    overlay.classList.remove("active")
})