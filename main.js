let character = 10;

let text1 = "video/";
let text2 = ".mp4";

let clicked = false;

const video = document.getElementById("MyVideo");
const img = document.getElementById("MyImage");
const btn = document.getElementById("btn");
function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

btn.addEventListener("click", function () {
  if (!clicked) {
    clicked = true;
    let result = text1.concat(getRandomInt(3), text2);
    video.src = "video/main.mp4";
    video.play();
    img.src = "images/black.jpg";
  }
});

video.onended = function () {
  if (clicked) {
    let result = text1.concat(getRandomInt(character), text2);
    video.src = result;
    video.play();
    clicked = false;
  } else {
    video.src = "";
    img.src = "images/main.jpg";
  }
};
