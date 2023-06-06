var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);
var src1 = "./images/dice"+randomNumber1+".png";
var src2 = "./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",src1);
document.querySelectorAll("img")[1].setAttribute("src",src2);
document.querySelector("h1").innerHTML = randomNumber1 > randomNumber2 ? "Player 1 Wins." : randomNumber2 > randomNumber1 ? "Player 2 wins.": "Draw.";