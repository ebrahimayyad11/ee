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
confirm("Choose one of these colors to put as a background-color : \n 1- blue. \n 2- red. \n 3- yellow.")

var background = prompt("Enter the number of the color that you choosed \n (1 or 2 or 3)");
var bgColor = "red";

if (parseInt(background) === 1){
    bgColor = "blue";
    document.getElementById('bb').style.background = bgColor;
}else if(parseInt(background) === 2){
    bgColor = "red";
    document.getElementById('bb').style.background = bgColor;
}else if(parseInt(background) === 3){
    bgColor = "yellow";
    document.getElementById('bb').style.background = bgColor;
}



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

