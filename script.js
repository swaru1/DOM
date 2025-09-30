const students = [
  {
    name: "Aarav",
    age: 20,
    description: "A hardworking student who loves coding.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Isha",
    age: 21,
    description: "Creative thinker with a passion for design.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Rahul",
    age: 19,
    description: "Quick learner and enjoys solving puzzles.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Neha",
    age: 22,
    description: "Good communicator and team player.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Karan",
    age: 20,
    description: "Sports enthusiast with leadership skills.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Simran",
    age: 23,
    description: "Highly focused and detail-oriented.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Aditya",
    age: 18,
    description: "Loves mathematics and problem solving.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Priya",
    age: 21,
    description: "Excellent in arts and presentation skills.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Rohan",
    age: 22,
    description: "Tech geek and always curious to learn new things.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Ananya",
    age: 20,
    description: "Friendly and helpful, with great teamwork skills.",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

var main = document.querySelector("main");
var card = document.querySelector(".card");

card.style.display = "none";

students.forEach(function (student) {

  var newCard = document.createElement("div");
  newCard.innerHTML = `<div class="image">
          <img src="${student.image}" alt="">
        </div>
        <h1 style="font-size: 1.5em; font-weight: bold;">${student.name}</h1>
        <h2 style="font-size: 1em; font-weight: bold;">${student.age}</h2>
        <p>${student.description}</p>`;
  newCard.classList.add("card");

  main.appendChild(newCard);
});
