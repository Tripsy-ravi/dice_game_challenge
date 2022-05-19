

function change_text(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

const map1 = new Map();

map1.set("dice1.png", 1);
map1.set("dice2.png", 2);
map1.set("dice3.png", 3);
map1.set("dice4.png", 4);
map1.set("dice5.png", 5);
map1.set("dice6.png", 6);
    document.querySelectorAll("img")[0].setAttribute("src", "images/" + "dice" + randomNumber1 + ".png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/" + "dice" + randomNumber2 + ".png");
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
      }
      else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
      }
      else {
        document.querySelector("h1").innerHTML = "Draw!";
      }
}

