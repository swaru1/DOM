var h1 = document.querySelector("h1");
var btn = document.querySelector("button");
var h2 = document.querySelector("h2");
var p = document.querySelector("p");

const arr = [
  {
    teamName: "Real Madrid",
    color1: "#ffffff", // White
    color2: "#004080", // Dark Blue
    color3: "black", // Gold (crest)
    trophies: 15
  },
  {
    teamName: "AC Milan",
    color1: "#ff0000", // Red
    color2: "#000000", // Black
    color3: "#ffffff", // White
    trophies: 7
  },
  {
    teamName: "Bayern Munich",
    color1: "#dc052d", // Red
    color2: "#4e1409ff", // Blue
    color3: "#ffffff", // White
    trophies: 6
  },
  {
    teamName: "Liverpool",
    color1: "#c8102e", // Red
    color2: "#00b2a9", // Teal (crest detail)
    color3: "#ffffff", // White
    trophies: 6
  },
  {
    teamName: "Barcelona",
    color1: "#004d98", // Blaugrana Blue
    color2: "#a50044", // Blaugrana Red
    color3: "#ffed02", // Yellow
    trophies: 5
  },
  {
    teamName: "Ajax",
    color1: "#ffffff", // White
    color2: "#642626ff",
    color3: "#e30613", // Red
    trophies: 4
  },
  {
    teamName: "Inter Milan",
    color1: "#000000", // Black
    color2: "#0033a0", // Blue  
    trophies: 3
  },
  {
    teamName: "Manchester United",
    color1: "#e2ceccff", // Red
    color2: "#c31a15ff", // Yellow
    color3: "#000000", // Black
    trophies: 3
  },
  {
    teamName: "Chelsea",
    color1: "#ffffff", // White
    color2: "#034694", // Blue
    color3: "#e6c300", // Gold
    trophies: 2
  },
  {
    teamName: "Benfica",
    color1: "#ffffff", // White
    color2: "#e30613", // Red
    color3: "#f6d500", // Yellow
    trophies: 2
  },
  {
    teamName: "Juventus",
    color1: "#000000", // Black
    color2: "#4e4d4dff", // White
    color3: "#d4af37", // Gold (crest)
    trophies: 2
  },
  {
    teamName: "Porto",
    color1: "#ffffff", // White
    color2: "#002f6c", // Blue
    color3: "#cf142b", // Red (crest)
    trophies: 2
  }
];


btn.addEventListener("click", function () {
  var idx = Math.floor(Math.random() * arr.length);
  h2.innerText = arr[idx].teamName;
  h2.style.background = `linear-gradient(90deg, ${arr[idx].color1}, ${arr[idx].color2}, ${arr[idx].color3})`;
  h2.style.color = arr[idx].primary;
  p.innerHTML = arr[idx].trophies + ' :titles';
});


