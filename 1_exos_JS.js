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
div1.textContent = "premier texte";
document.getElementById("conteneur").appendChild(div1);

// let div2 = document.createElement("div");
// div2.textContent = "deuxième texte";
// document.getElementById("conteneur").appendChild(div2);

// let div3 = document.createElement("div");
// div3.textContent = "troisième texte";
// document.getElementById("conteneur").appendChild(div3);
//console.log(div3); //Pour voir le contenu de la variable div3

/*Colorer la première div en rouge, la deuxième en vert, la troisieme en bleu*/

// document.querySelector("body div:nth-child(4)").style.color="red";
// document.querySelector("body div:nth-child(5)").style.color="green";    
// document.querySelector("body div:nth-child(6)").style.color="blue";

/*Positionner les 3 div horizontalement*/

// document.getElementById("conteneur").style.display = "flex";
// document.getElementById("conteneur").style.justifyContent = "center";

/*Exo n° 4 : Créer une page affichant une image*/

/*Affichage de la source de l'image dans la console*/
/*let sourceimage = Image.jpg = "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/0/d/3/0d32123a56_50034121_galaxie-andromede-03.jpg";
console.log(sourceimage);
/*Affichage image dans ma page*/
/*let img = document.createElement("img");
img.src = "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/0/d/3/0d32123a56_50034121_galaxie-andromede-03.jpg";
document.getElementById("conteneur").appendChild(img);

/*Changer l'image quand on clique dessus*/
/*Méthode : on affecte une fonction a un élément*/
/*img.onclick = function () { 
    this.style.borderRadius = "60%"; 
    this.style.transitionDuration = "0.8s";
};

/*Exo n° 5 : Amélioration du code JS mouse enter*/
/*Couleur revient à l'état initial lorsque la souris sort de l'élément h1*/
/*let titre = document.getElementById("toto");
console.log(titre);
titre.addEventListener('mouseover', over);
function over(){
	titre.style.color = "red";
};
titre.addEventListener('mouseleave', leave);
function leave(){
	titre.style.color = "black";
};*/

/*Exo n° 6 : Créer 2 paragraphes contenant du texte*/

/*let paragraphe1 = document.createElement("p");
paragraphe1.id = "idp1";
paragraphe1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
document.body.appendChild(paragraphe1);
let paragraphe2 = document.createElement("p");
paragraphe2.id = "idp2";
paragraphe2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
document.body.appendChild(paragraphe2);

document.getElementById("idp1").style.color = "blue";
document.getElementById("idp1").style.border = "3px solid black";
document.getElementById("idp1").style.textAlign = "right";
document.getElementById("idp1").style.lineHeight = "40px";


document.getElementById("idp2").style.border ="5px dashed orange";
document.getElementById("idp2").style.paddingBottom = "20px";
document.getElementById("idp2").style.paddingTop = "20px";
document.getElementById("idp2").style.paddingLeft = "20px";
document.getElementById("idp2").style.paddingRight = "20px";
document.getElementById("idp2").style.lineHeight ="30px";

document.querySelector("div");*/




































