let block6Panel1 = document.querySelector(".block6Part1");
let block6Panel2 = document.querySelector(".block6Part2")
let block6MainBlock = document.querySelector(".block6MainBlock");
const block = "block";
const none = "none";


document.querySelector(".blockB").addEventListener("click", e => {
  block6Panel1.style.display = none;
  block6Panel2.style.display = block;
  block6MainBlock.style.gridTemplateColumns = "7% 7% 86%";
});

document.querySelector(".blockA").addEventListener("click", e => {
  block6Panel1.style.display = block;
  block6Panel2.style.display = none;
  block6MainBlock.style.gridTemplateColumns = "7% 86% 7%";
});