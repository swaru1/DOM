var img1 = document.querySelector('#img1')
var img2 = document.querySelector('#img2')
var btn = document.querySelector('.btn')

var src1 = img1.getAttribute('src')
var src2 = img2.getAttribute('src')

var flag = 0

btn.addEventListener('click', function(){
  console.log('button click')
  if(flag == 0) {
    img1.setAttribute('src', src2)
    img2.setAttribute('src', src1)
    flag = 1;
  } else {
    img1.setAttribute('src', src1)
    img2.setAttribute( 'src', src2)
    flag = 0;
  }
})
