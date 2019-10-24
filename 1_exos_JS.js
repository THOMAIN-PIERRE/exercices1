/*document.getElementById("modif_color").style.color= "blue";*/

/*document.querySelector("#modif_color").style.color= "orange";*/

/*document.getElementsByTagName("div").style.color;*/ /*1ere question*/

/*let pierre="Hello";
document.write(pierre.fontcolor("pink"));*/




/*document.getElementById("modif_color").style.textAlign = "center";*/




/*document.getElementById("modif_color").innerHTML = "Pierre Thomain";
document.getElementById("modif_order").innerHTML = "Hello";*/






/*inverser le contenu de 2 balises*/
/*let temp1=document.getElementById("modif_color").innerHTML
let temp2=document.getElementById("modif_order").innerHTML
let ("modif_color")=document.getElementById("modif_order").innerHTML= 
let ("modif_color")=document.getElementById("modif_order").innerHTML=*/

/*création nouvel élément div (avec Javascript) puis attribuer un identifiant à cette div puis attribuer un contenant à cette div*/
// let bonjour = document.createElement("div");
// bonjour.id = "identifiant";
// bonjour.textContent = "Bonjour";
// document.getElementById("conteneur").appendChild(bonjour);

/*inverser le contenu de 2 balises*/
// let temp1=document.getElementById("modif_color").innerHTML;
// let temp2=document.getElementById("identifiant").innerHTML;
/*alert (temp1);
alert (temp2);*/
// document.getElementById("modif_color").innerHTML= temp2;
// document.getElementById("identifiant").innerHTML= temp1;


// document.getElementById("modif_order").style.display = "inline";

// document.getElementById("modif_color").style.textAlign = "left";
// document.getElementById("identifiant").style.textAlign = "right";

/*Ajouter 3 div contenant du texte*/
let div1 = document.createElement("div");
div1.textContent = "Ceci est le premier texte";
document.getElementById("conteneur").appendChild(div1);

let div2 = document.createElement("div");
div2.textContent = "Ceci est le deuxième texte";
document.getElementById("conteneur").appendChild(div2);

let div3 = document.createElement("div");
div3.textContent = "Ceci est le deuxième texte";
document.getElementById("conteneur").appendChild(div3);

/*Colorer la première div en vert*/

document.querySelector("body div:nth-child(4)").style.color="red";
document.querySelector("body div:nth-child(5)").style.color="green";    
document.querySelector("body div:nth-child(6)").style.color="blue";



