let box = document.querySelector(".box")
let day = document.querySelector("#day")
let night = document.querySelector("#night")
let body = document.querySelector(".body")


box.addEventListener("click" , () => {
    day.classList.toggle('day-none')
    night.classList.toggle('night-block')
    body.classList.toggle('body_bg')
    box.classList.toggle('box_wh')
})