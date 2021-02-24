var matching = 0.0;
var matchingApear = " ";



function matchingPercentage (player) {
    var matching1 = 0.0;
    
    var firstPlayer = "ronaldo";
    var secondPlayer = "ibrahimovic";
    var thirdPlayer = "messi";

    var firstPlayer1 = "cristiano ronaldo";
    var secondPlayer2 = " zlatan ibrahimovic";
    var thirdPlayer3 = "lional messi";


    if (player.toLowerCase() == firstPlayer || player.toLowerCase() == firstPlayer1){
    matching1 += 0.33;
}else if (player.toLowerCase() == secondPlayer || player.toLowerCase() == secondPlayer2){
    matching1 += 0.33;
}else if (player.toLowerCase() == thirdPlayer || player.toLowerCase() == thirdPlayer3){
    matching1 += 0.33;

    
}
return matching1;
}



function percentage(matchingpercentage){
    var match = " ";
    if (matchingpercentage === 0.33){
        match = "33.33%;"
    }else if (matchingpercentage === 0.66){
        match = "66.66%";
    }else if (matchingpercentage === 0.99){
        match = "100%";
    }else {
        match = "0.0%";
    }

    return match;
}

confirm("Enter 3 players that you think they are the best  in the world");

var first = prompt("The first player");
var second = prompt("The second player");
var third = prompt("The third player");

for (var i = 0;i < 3;i++){
    if (i === 0){
        matching += matchingPercentage(first);
    }else if (i === 1){
        matching += matchingPercentage(second);
    }else {
        matching += matchingPercentage(third);
    }
}

matchingApear = percentage(matching);


document.getElementById('matching').innerHTML = matchingApear;


confirm("Choose one of these colors to put as a background-color : \n 1- blue. \n 2- red. \n 3- yellow.");

var background = parseInt(prompt("Enter the number of the color that you choosed \n (1 or 2 or 3)"));
var bgColor = "red";


if (background === 1){
    bgColor = "blue";
    document.getElementById('bb').style.background = bgColor;
}else if(background === 2){
    bgColor = "red";
    document.getElementById('bb').style.background = bgColor;
}else if(background === 3){
    bgColor = "yellow";
    document.getElementById('bb').style.background = bgColor;
}else {
    confirm("the number that you The number you entered does not exist ");}





document.getElementById('first').innerHTML = first;

document.getElementById('second').innerHTML = second;

document.getElementById('third').innerHTML = third;


function zlatan(){ 
    return document.write('<a href = "https://en.wikipedia.org/wiki/Zlatan_Ibrahimovi%C4%87">'+
'<div id = "zlatan_div">' +
    '<h2 id = "zlatan_h2">' + '1- Zlatan Ibrahimovic' + '</h2>' +
    '<h4 id = "zlatan_h4">'+'"The King Of The Game"'+ '</h4>' +
   '</div>' + '<img id = "zlatan_img" src="img/ebra.jpg" alt="zlatan photo">'+ 
'</a>'
);
}

function ronaldo(){
    return document.write('<a href = "https://en.wikipedia.org/wiki/Cristiano_Ronaldo">'+
'<div id = "ronaldo_div">' +
    '<h2 id = "ronaldo_h2">' + '2- Cr'+'<b class = "b">'+'istiano '+'</b>'+'Ronald'+'<bclass = "b">'+'o'+'</b>' + '</h2>' +
    '<h4 id = "ronaldo_img">'+"The King Of The Game"+ '</h4>' +
   '</div>' + '<img id = "ronaldo_img" src="img/ronaldo.jpg" alt="ronaldo photo">'+ 
'</a>'
);
}

function messi() {
    return document.write('<a href = "https://en.wikipedia.org/wiki/Lionel_Messi">'+
'<div id = "messi_div">' +
    '<h2 id = "messi_h2">' + 'Lional Messi' + '</h2>' +
    '<h4 id = "ronaldo_img">'+"The King Of The Game"+ '</h4>' +
   '</div>' + '<img id = "messi_img" src="img/messi.jpg" alt="messi photo">'+ 
'</a>'
);
}

confirm("Whats the number of players that you want to see in \n The Ranking of the best players in the world \n Chose a number from 1 to 3 please");

var numOfPlayers = parseInt(prompt("Enter the number of players that you want to see please \n (1 or 2 or 3)"));

var z = 1;
while (z == 1){
    if (numOfPlayers > 0 && numOfPlayers < 4){
        if (numOfPlayers === 1){
            zlatan();
        }else if (numOfPlayers === 2){
            zlatan();
            ronaldo();
        }else {
            zlatan();
            ronaldo();
            messi();
        }
        z = 10;
    }else {
        numOfPlayers = parseInt(prompt("please enter a number between 1 and 3"));
    }
}

