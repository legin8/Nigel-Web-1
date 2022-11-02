let allImgs = document.querySelectorAll(".imgToApi");

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

// This is for the fixed box that you click away, about free shipping for orders over $25
// Without saving anything to a variable as we don't need to do so, I target the div containing the X,
// then target the element that holds the text and the X and remove them from the dom.
document.querySelector(".clickAwayTargetBox").addEventListener("click", e => {
  console.log("Target Clicked");
  document.querySelector(".clickAwayBox").remove();
})






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