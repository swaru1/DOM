var h1 = document.querySelector('h1')
var h2 = document.querySelector('h2')
var h3 = document.querySelector('h3')
var btn1 = document.querySelector('#btn1')



btn1.addEventListener('click' , function() {
    h1.textContent = 'alex'
    h2.textContent = 18
    h3.style.color = 'red'
    h3.textContent = 'red'
})

