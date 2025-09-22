var img = document.querySelector('img')
var btn = document.querySelector('.btn')
var cont = document.querySelector('.container')



btn.addEventListener('click', function(){

  var t = Math.random() * 100;
  var l = Math.random() * 100;
  var rot = Math.random() * 360;
  var h = Math.random() * 300;

  var img = document.createElement('img')
  img.setAttribute('src', 'https://www.pinclipart.com/picdir/big/30-304178_mouse-free-png-transparent-image-cartoons-pinterest-clipart.png')
  img.style.top = t+'%';
  img.style.left = l+'%';
  img.style.rotate = rot+'deg';
  img.style.height = h+'px';
  cont.appendChild(img)  
})
