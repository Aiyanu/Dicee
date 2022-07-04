let randomNumber1 = (Math.floor(Math.random() * 6) + 1);
let randomNumber2 = (Math.floor(Math.random() * 6) + 1);

let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomDiceImage2 = "dice" + randomNumber2 + ".png";

let randomImageSource = "../images/" + randomDiceImage;
let randomImageSource2 = "../images/" + randomDiceImage2;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins"
}
else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 2 Wins"
}
else{
  document.querySelector("h1").innerHTML="Draw!!"
}







//
// const dicee=(randomNumber){
//   let randomNumber=num;
//   if (num=1){
//     document.querySelector("img").setAttribute('src',"../images/dice1.png")
//   }
//   if (num=2){
//     document.querySelector("img").setAttribute('src',"../images/dice2.png")
//   }
//   if (num=3){
//     document.querySelector("img").setAttribute('src',"../images/dice3.png")
//   }
//   if (num=4){
//     document.querySelector("img").setAttribute('src',"../images/dice4.png")
//   }
//   if (num=5){
//     document.querySelector("img").setAttribute('src',"../images/dice5.png")
//   }
//   if (num=6){
//     document.querySelector("img").setAttribute('src',"../images/dice6.png")
//   }
// }
