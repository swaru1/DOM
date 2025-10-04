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
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Michael Smith",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Sophia Johnson",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Daniel Brown",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Olivia Davis",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "James Wilson",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Ava Miller",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Ethan Martinez",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Isabella Anderson",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Lucas Thomas",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Mia Taylor",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Henry Lee",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
    name: "Amelia White",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Alexander Harris",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
    name: "Charlotte Martin",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/17.jpg",
    name: "Benjamin Thompson",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
    name: "Harper Garcia",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "William Martinez",
    status: "Stranger",
    buttonText: "Add Friend",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/20.jpg",
    name: "Evelyn Robinson",
    status: "Stranger",
    buttonText: "Add Friend",
  },
];

var main = document.querySelector("main");
var card = document.querySelector(".card");
var btn = document.querySelector("button");

let clutter = "";

users.forEach(function (user, idx) {
  clutter += `<div class="card" data-index = "${idx}">
        <img src="${user.profilePic}" alt="">
        <h1 > ${user.name}</h1>
        <h3 class = "${user.status}"> ${user.status} </h3>
        <button data-index="${idx}">${user.buttonText}</button>
      </div>`;
});
main.innerHTML = clutter;

main.addEventListener("click", function (dets) {
  if (dets.target.tagName === "BUTTON") {
    let btn = dets.target;
    let clickedUser = btn.getAttribute("data-index");
    let card = main.querySelector(`.card[data-index="${clickedUser}"]`);
    let h3 = card.querySelector("h3");

    if (users[clickedUser].status === "Stranger") {
      users[clickedUser].status = "Friend";
      users[clickedUser].buttonText = "Remove Friend";

      // Update DOM
      h3.textContent = "Friend";
      h3.className = "friend";
      btn.textContent = "Remove Friend"; 
      btn.className = "friend";
    } else {
      users[clickedUser].status = "Stranger";
      users[clickedUser].buttonText = "Add Friend";

      h3.textContent = "Stranger";
      h3.className = "stranger";
      btn.textContent = "Add Friend";
      btn.className = "stranger";
    }
  }
});
