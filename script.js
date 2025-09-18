var h1 = document.querySelector("h1");
var btn = document.querySelector("button");
var h2 = document.querySelector("h2");
var p = document.querySelector("p");

var arr = [
  {
    teamName: "Manchester utd",
    primary: "red",
    secondary: "white",
    trophies: "3",
  },
  {
    teamName: "astion villa",
    primary: "red",
    secondary: "sky blue",
    trophies: "0",
  },
  {
    teamName: "tottenham hotspur",
    primary: "white",
    secondary: "blue",
    trophies: "0",
  },
  {
    teamName: "real Madrid",
    primary: "black",
    secondary: "white",
    trophies: "15",
  },
  {
    teamName: "Ac Milan",
    primary: "red",
    secondary: "black",
    trophies: "7",
  },
  {
    teamName: "Atletico de madrid",
    primary: "red",
    secondary: "white",
    trophies: "3",
  },
  {
    teamName: "arsenal",
    primary: "red",
    secondary: "violet",
    trophies: "0",
  },
  {
    teamName: "varca",
    primary: "red",
    secondary: "blue",
    trophies: "5",
  },
  {
    teamName: "Man city",
    primary: "white",
    secondary: "blue",
    trophies: "x",
  },
  {
    teamName: "juventus",
    primary: "black",
    secondary: "dark grey",
    trophies: "2",
  },
];


btn.addEventListener("click", function () {
  var idx = Math.floor(Math.random() * arr.length);
  h2.innerText = arr[idx].teamName;
  h2.style.backgroundColor = arr[idx].secondary;
  h2.style.color = arr[idx].primary;
  p.innerHTML = arr[idx].trophies + ' :titles';
});
