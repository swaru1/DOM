var h1 = document.querySelector('h1')
var body = document.querySelector('body')
var cur = document.querySelector('#cursor')

body.addEventListener('mousemove', function(dets){
  cur.style.top = dets.y + 'px'
  cur.style.left = dets.x + 'px'
})

h1.addEventListener( 'mouseenter' , function() {
  cur.style.scale = 3
})

h1.addEventListener( 'mouseleave' , function() {
  cur.style.scale = 1
})


