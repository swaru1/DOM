const users = [
  {
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Emma Watson",
    status: "Friend",
    buttonText: "Remove Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Michael Smith",
    status: "Stranger",
    buttonText: "Add Friend",
  },
];

var main = document.querySelector("main");
var card = document.querySelector(".card");
var btn = document.querySelector("button");

function renderCards() {
  let clutter = "";

  users.forEach(function (user, idx) {
    clutter += `<div class="card" data-index = "${idx}">
        <img src="${user.profilePic}" alt="">
        <h1 > ${user.name}</h1>
        <h3 class = "${user.status}"> ${user.status} </h3>
        <button id="${idx}">${user.buttonText}</button>
      </div>`;
  });

  main.innerHTML = clutter;
}

renderCards();

main.addEventListener("click", function (dets) {
  var selectedUser = users[dets.target.id];
  console.log(selectedUser);

  if ((selectedUser.status === "Stranger")) {
    selectedUser.status = "Friend";
    selectedUser.buttonText = "Remove Friend";
  } else {
    selectedUser.status = "Stranger";
    selectedUser.buttonText = "Add Friend";
  }

  renderCards();
});