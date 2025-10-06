var form = document.querySelector("form");
var ul = document.querySelector("ul");
var nameInput = document.querySelector("#username");
var users = ['naveen', 'rahul'];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!nameInput.checkValidity()) return; 

  users.push(nameInput.value.trim());
  makeusers();
  nameInput.value = "";
});

function makeusers() {

  let sum = '';
  users.forEach(function(user) {
    sum += `<li>${user}</li>`
  })

  ul.innerHTML = sum;
}

makeusers();
