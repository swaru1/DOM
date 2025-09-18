
var div = document.querySelector('#box')
var btn1 = document.querySelector('#btn1')
var btn2 = document.querySelector('#btn2')



btn1.addEventListener('click' , function() {
    div.style.backgroundColor = 'yellow'
})

btn2.addEventListener('click' , function() {
    div.style.backgroundColor = 'transparent'
})


