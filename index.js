var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randonImage = "dice" + randomNumber1 + ".png";

var randonImageSource = "images/" + randonImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randonImageSource);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randonImage = "dice" + randomNumber2 + ".png";

var randonImageSource1 = "images/" + randonImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randonImageSource1);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🥇Player1 Wins";

} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 Wins🥇";

} else {
    document.querySelector("h1").innerHTML = "🏅Draw🏅";

}