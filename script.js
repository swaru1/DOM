var h1 = document.querySelector("h1");
var body = document.querySelector("body");
var img = document.querySelector("img");

var numX = 0;
var numY = 0;

document.addEventListener("keydown", function (dets) {
  if (dets.code == "ArrowRight") {
    numX += 10
    img.style.left = numX + "px";
  }

  if (dets.code == "ArrowLeft") {
    numX -= 10
    img.style.left = numX + "px";
  }

  if (dets.code == "ArrowUp") {
    numY -= 10
    img.style.top = numY + "px";
  }

  if (dets.code == "ArrowDown") {
    numY += 10
    img.style.top = numY + "px";
  }

  h1.innerHTML = dets.code;
});
