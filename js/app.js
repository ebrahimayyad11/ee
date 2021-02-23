var matching = 0.0;
var firstPlayer = "ronaldo";
var secondPlayer = "ibrahimovic";
var thirdPlayer = "messi";

var firstPlayer1 = "cristiano ronaldo";
var secondPlayer2 = " zlatan ibrahimovic";
var thirdPlayer3 = "lional messi";

confirm("ُEnter 3 players that you think they are the best  in the world");

var first = prompt("The first player");
var second = prompt("The second player");
var third = prompt("The third player");

var backgroundColor = prompt("Enter a color name that you think it will be more beautiful in back ground");


if (first.toLowerCase() == firstPlayer || first.toLowerCase() == firstPlayer1){
    matching += 0.33;
}else if (first.toLowerCase() == secondPlayer || first.toLowerCase() == secondPlayer2){
    matching += 0.33;
}else if (first.toLowerCase() == thirdPlayer || first.toLowerCase() == thirdPlayer3){
    matching += 0.33;
}

if (second.toLowerCase() == firstPlayer || first.toLowerCase() == firstPlayer1){
    matching += 0.33;
}else if (second.toLowerCase() == secondPlayer || first.toLowerCase() == secondPlayer2){
    matching += 0.33;
}else if (second.toLowerCase() == thirdPlayer || first.toLowerCase() == thirdPlayer3){
    matching += 0.33;
}

if (third.toLowerCase() == firstPlayer || first.toLowerCase() == firstPlayer1){
    matching += 0.33;
}else if (third.toLowerCase() == secondPlayer || first.toLowerCase() == secondPlayer2){
    matching += 0.33;
}else if (third.toLowerCase() == thirdPlayer || first.toLowerCase() == thirdPlayer3){
    matching += 0.33;
}

var matchingApear = "0%";
if (matching == 0.33){
matchingApear = "33.33%";
}else if (matching == 0.66){
    matchingApear = "66.66%";
}else if (matching == 0.99){
    matchingApear = "100%";
}

document.getElementById('first').innerHTML = first;

document.getElementById('second').innerHTML = second;

document.getElementById('third').innerHTML = third;

document.getElementById('matching').innerHTML = matchingApear;

