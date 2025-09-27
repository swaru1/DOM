var images = document.querySelectorAll('.images img')
var playground = document.querySelector('.playground')

images.forEach(function(image){
  image.addEventListener('click', function(){

    var t = Math.random() * 90;
    var l = Math.random() * 90;
    var rot = Math.random() * 360;
    var s  = Math.random() * 5;

    var link = image.getAttribute('src')
    console.log(link)

    var newImg = document.createElement('img')
    newImg.setAttribute('src', link)

    newImg.style.position = 'absolute'
    newImg.style.top = t + '%';
    newImg.style.left = l + '%';
    newImg.style.rotate = rot + 'deg';
    newImg.style.scale = s;
    playground.appendChild(newImg)  
  })
})
