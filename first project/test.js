console.log("hello world");

const btn = document.querySelectorAll("button");
const body = document.querySelector("body");
btn[0].addEventListener("click", function () {
  const number = parseInt(Math.random() * 1000000);
  body.style.backgroundColor = "#" + number;
});
btn[1].addEventListener("click", function () {
  document.getElementById("a").classList.toggle("none");
});
