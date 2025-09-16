var btn1 = document.querySelector('#btn1')
var btn2 = document.querySelector('#btn2')
var sp = document.querySelector('h1 span')


var a = 0;
btn1.addEventListener('click' , function() {
    a++;
    console.log(a)
    sp.innerHTML = a;
})

btn2.addEventListener('click' , function() {
    a--;
    console.log(a)
    sp.innerHTML = a;
})