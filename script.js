var h1 = document.querySelector('#task1 h1')
var btn1 = document.querySelector('#btn1')
var div = document.querySelector('#box')
var btn2 = document.querySelector('#btn2')
var rgb = document.querySelector('#box p')


btn2.addEventListener('click', function() {

    var t = Math.floor(Math.random()*90)
    var l = Math.floor(Math.random()*90)
    var d = Math.floor(Math.random()*360)

    var r = Math.floor(Math.random()*225)
    var g = Math.floor(Math.random()*225)
    var b = Math.floor(Math.random()*225)

    div.style.top = t + '%'
    div.style.left = l + '%'
    div.style.rotate = d +'deg'

    div.style.backgroundColor = `rgb(${r} ,${g} ,${b})`
    rgb.textContent = `R: ${r}, G: ${g}, B: ${b}`
})