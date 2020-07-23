const clickMeBtn = document.getElementById("btn");
clickMeBtn.addEventListener('click',function(){
    
// Dice One

var diceImageOne = Math.floor(Math.random()*6)+1;
var imageSourceOne ="dice"+diceImageOne+".png";
var imageLocation = "images/"+imageSourceOne;
var imageOne = document.querySelectorAll("img")[0].setAttribute("src",imageLocation);

// Dice Two

var diceImageTwo = Math.floor(Math.random()*6)+1;
var imageSourceTwo ="dice"+diceImageTwo+".png";
var imageLocation = "images/"+imageSourceTwo;
var imageTwo = document.querySelectorAll("img")[1].setAttribute("src",imageLocation);

if(diceImageOne>diceImageTwo){
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 Won"
}else if(diceImageOne<diceImageTwo){
    document.getElementsByTagName("h1")[0].innerHTML="Player 2 Won"
}else{
    document.getElementsByTagName("h1")[0].innerHTML="Drawn"
}


})


