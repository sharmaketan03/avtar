let startgame = document.querySelector("#startGame");
let gayab = document.querySelector(".gayab");

let timescore = document.querySelector("#gayab");

let avatar1 = document.querySelectorAll("img");
let imagearea = document.querySelector(".imagesArea");
let timer = document.querySelector("#time");
let scored = document.querySelector("#score");
let score1=document.querySelector("#score1")

console.log(timer);
let selectedAvatar;
let imageInterval;
let sum = 0;
let score = 0;

startgame.addEventListener("click", () => {
  let screen1 = document.querySelector(".screen1");
  let screen2 = document.querySelector(".screen2");
  let screen3 = document.querySelector(".screen3");
  let body = document.body;
  // console.log(body);

  screen1.classList.add("gayab");
  screen2.classList.remove("gayab");

  for (let i = 0; i < avatar1.length; i++) {
    avatar1[i].addEventListener("click", () => {
      // console.log(avatar1[i]);
      screen3.classList.remove("gayab");
      screen2.classList.add("gayab");
      selectedAvatar = avatar1[i];

      // console.log(selectedAvatar)
      //  setInterval(timeadd,1000)
      imageInterval = setInterval(generateImage, 1000);
    });
  }

  function generateImage() {
    let images = document.createElement("img");
    images.classList.add("objectimg");
    images.style.left = getARandomNumber("x") + "px";
    // images.style.left = "20px"
    images.style.top = getARandomNumber("y") + "px";
    // images.style.left = "20px"

    // console.log(getARandomNumber());
    if (sum >= 5) {
      console.log(score)
         score1.innerText=score
      clearInterval(imageInterval);

      imagearea.innerText = "";
      screen2.classList.remove("gayab");
      screen3.classList.add("gayab");
    
     
    } else {
      sum = sum + 1;
      timer.innerText = sum;
    }
    scored.innerText = score;

    images.src = selectedAvatar.src;
    console.log(images);

    images.addEventListener("click", () => {
      score += 1;
      scored.innerText = score;

      images.remove();
    });

    imagearea.append(images);
  }
});

function getARandomNumber(axis) {
  const ran = Math.floor(Math.random() * 1440);
  // console.log(ran);
  if (axis === "x") {
    if (ran < 50 || ran > 1400) return getARandomNumber(axis);
    else return ran;
  } else {
    if (ran < 50 || ran > 380) return getARandomNumber(axis);
    else return ran;
  }
}
