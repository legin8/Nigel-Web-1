let allImgs = document.querySelectorAll(".imgToApi");
console.log(allImgs);
console.log(allImgs.length);

const BASE_URL = "https://api.unsplash.com";
const API_KEY = "cm4Mq6siY-LIWX3qZD3M6SU1t2Z3qoix0v8ObeVJHOc";

fetch(`${BASE_URL}/search/photos?query=coffee&per_page=${allImgs.length}&client_id=${API_KEY}`)
.then(response => response.json())
.then(data => {
  allImgs.forEach((img, i) => {
    img.style.backgroundImage = `url(${data.results[i].urls.regular})`;
    console.log(data.results[i].urls.regular);
    });
});








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