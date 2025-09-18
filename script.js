var h1 = document.querySelector('#task1 h1')
var btn1 = document.querySelector('#btn1')
var div = document.querySelector('#box')
var btn2 = document.querySelector('#btn2')
var rgb = document.querySelector('#box p')


btn1.addEventListener('click', function() {
    var a = Math.floor(Math.random()*10)
    h1.innerHTML = a;
})

btn2.addEventListener('click', function() {

    var r = Math.floor(Math.random()*225)
    var g = Math.floor(Math.random()*225)
    var b = Math.floor(Math.random()*225)

    div.style.backgroundColor = `rgb(${r} ,${g} ,${b})`
    rgb.textContent = `R: ${r}, G: ${g}, B: ${b}`
})