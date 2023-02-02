// Number 1
const randomNumber1 = Math.floor(Math.random() * 7);

const randomDiceImage1 = "dice" + randomNumber1 + ".png";

const randomİmageSource1 = "images/" + randomDiceImage1;

const image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomİmageSource1);

// Number 2
const randomNumber2 = Math.floor(Math.random() * 7);

const randomİmageSource2 = ".images/" + randomNumber2 + ".png";

const image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomİmageSource2);

// If
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Win!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Win!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
