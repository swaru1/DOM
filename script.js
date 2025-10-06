var btn = document.querySelector("button");
var card = document.querySelector(".user");
var form = document.querySelector("form");
var nameInput = document.querySelector("#username");
var emailInput = document.querySelector("#email");

var users = [
  {
    userName: "sarthak",
    email: "sarthak@email.com",
  },
  {
    userName: "harsh",
    email: "harsh@email.com",
  },
];

btn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(nameInput.value, emailInput.value);

  var newUser = {
    userName: nameInput.value,
    email: emailInput.value,
  };

  users.push(newUser);
  makeusers();

  form.reset;
});

function makeusers() {
  let sum = "";

  users.forEach(function (user) {
    sum += `<h2>name: <span>${user.userName}</span></h2>
      <h2>email: <span>${user.email}</span></h2>`;
  });

  card.innerHTML = sum;
}

makeusers();
