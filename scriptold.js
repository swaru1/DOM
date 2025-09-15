document.querySelector('body').style.backgroundColor = 'lightblue';
var body = document.querySelector('body');



let h1 = document.createElement('h1');
body.appendChild(h1).textContent = 'This is a heading';


h1.addEventListener('click', function() {
    h1.style.color = 'red';
});

h1.addEventListener('mouseover', function() {
    h1.style.cursor = 'pointer';
});

var div = body.appendChild(document.createElement(div));

div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'green';
