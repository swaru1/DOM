var h1 = document.querySelector('h1')


h1.addEventListener('click' , function() {
    console.log('clicked')
    h1.innerHTML = 'i am iron man';
    h1.style.color = 'red';
    h1.style.backgroundColor = 'black';
})
