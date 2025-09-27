var allDiv = document.querySelectorAll('.text')
var output = document.querySelector('.output')

allDiv.forEach(function(elem){
  elem.addEventListener('click', function(){
    console.log('clicked')
    output.innerHTML = elem.textContent
  })
})