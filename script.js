var obj = [
  {
    student: "sarthak",
    marks: 90,
  },
  {
    student: "Akash",
    marks: 50,
  },
  {
    student: "sumit",
    marks: 80,
  },
];

var sum = 0;
var avg = 0;

obj.forEach(function (elem) {
  sum += elem.marks;
  avg = sum / obj.length;
});

console.log(avg);
