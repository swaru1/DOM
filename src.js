// const btn = document.querySelector("button");
// const h3 = document.querySelector("h3");

const users = [
  {
    fullName: "Miss Leah Rohan",
    email: "Kariane.Rolfson34@gmail.com",
    mobile: "+17604708088",
    city: "New Margarete",
    status: "Stranger",
    buttonText: "Add friend",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/13.jpg",
  },
  {
    fullName: "Norman Rogahn",
    email: "Erwin.Frami19@yahoo.com",
    mobile: "+18297543929",
    status: "Friend",
    buttonText: "Remove Friend",
    city: "Fort Agustina",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/44.jpg",
  },
  {
    fullName: "Stuart Emmerich",
    email: "Prudence87@yahoo.com",
    mobile: "+12355219116",
    status: "Stranger",
    buttonText: "Add friend",
    city: "Strongsville",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/50.jpg",
  },
  {
    fullName: "Tracy Lakin-Gottlieb II",
    email: "Crystal_Carter75@hotmail.com",
    mobile: "+15553260431",
    status: "Friend",
    buttonText: "Remove Friend",
    city: "Rauworth",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/98.jpg",
  },
  {
    fullName: "Rachael Rath",
    email: "Luella.Jast@gmail.com",
    mobile: "+18564412906",
    status: "Stranger",
    buttonText: "Add friend",
    city: "East Ceciliaburgh",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/95.jpg",
  },
];

let clutter = "";
users.forEach((user, idx) => {
  clutter += `<div class="card">
        <img src=${user.image} />
        <h1>${user.fullName}</h1>
        <h3 class=${user.status}>${user.status}</h3>
        <button id=${idx}>${user.buttonText}</button>
    </div>`;
});

document.querySelector(".cards").innerHTML = clutter;

const addRemove = () => {
  document.querySelector(".cards").addEventListener("click", (dets) => {
    let temp = users[dets.target.id];
    console.log(temp);
  });
};
addRemove();
let flag = 1;
btn.addEventListener("click", () => {
  if (flag === 0) {
    h3.textContent = "Friends";
    h3.style.color = "green";
    btn.textContent = "Remove friend";
    flag = 1;
  } else {
    h3.textContent = "Stranger";
    h3.style.color = "red";
    btn.textContent = "Add friend";
    flag = 0;
  }
});