let essai1 = document.querySelector(".titre").style.color = "blue";
let p = document.querySelector("p").style.color = "pink";
let p1 = document.querySelectorAll("p");
console.log(p1);
p1[1].style.color = "red";

let header = document.querySelectorAll("header");
header[0].style.color = "green";
header[1].style.color = "orange";



//Selecteur JQ
$("#selecteurJQ").css("background-color", "grey");
$(".titre").css("font-style", "italic");
$("p:last").css("color", "blue");
$("p:first").css("color", "yellow");
$("p:nth-child(3)").css("color", "green");






