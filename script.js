var h1 = document.querySelector('h1 span')
var h2 = document.querySelector('h2 span')
var body = document.querySelector('body')
var cur = document.querySelector('#cursor')

body.addEventListener('mousemove', function(dets){
  
  cur.style.top = dets.y + 'px'
  cur.style.left = dets.x + 'px'
})


