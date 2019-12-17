/*//Ajout balise canvas dans le corps du HTML
let ajoutCanvasDansBody =  document.createElement("canvas");//Création de l'élément
ajoutCanvasDansBody.id = "monCanvas";//on lui donne un Id
ajoutCanvasDansBody.textContent = "Normalement, une image s'affiche";//On lui donne un contenu
document.body.appendChild(ajoutCanvasDansBody);//on injecte l'élément enfant dans le body
console.log(ajoutCanvasDansBody);


//Ajout balise canvas dans le corps du HTML
let ajoutCanvasDansBody2 =  document.createElement("canvas");//Création de l'élément
ajoutCanvasDansBody2.id = "monCanvas2";//on lui donne un Id
ajoutCanvasDansBody2.textContent = "Normalement, une image s'affiche";//On lui donne un contenu
document.body.appendChild(ajoutCanvasDansBody2);//on injecte l'élément enfant dans le body

//Ajout balise canvas dans le corps du HTML
let ajoutCanvasDansBody3 =  document.createElement("canvas");//Création de l'élément
ajoutCanvasDansBody3.id = "monCanvas3";//on lui donne un Id
ajoutCanvasDansBody3.textContent = "Normalement, une image s'affiche";//On lui donne un contenu
document.body.appendChild(ajoutCanvasDansBody3);//on injecte l'élément enfant dans le body




let canvas = document.getElementById('monCanvas'); //on cible l'élément canvas par son Id
let ctx = canvas.getContext('2d'); // on définit son contexte de dessin --> dessin 2D (pour graphiques)
let img = new Image();
img.src="./images/JS_5_dessiner (canvas)/pomme_rouge.png"; //on renseigne la source de l'image : chemin d'accès relatif à l'image
img.addEventListener("load", function() { //on ouvre le gestionnaire d'évènements pour gérer le chargement de l'image dans le canvas
    ctx.drawImage(img,20,20); // Si drawImage () est appelé avant le chargement de l'image, il ne fera rien. Dans les anciens navigateurs, cela peut même déclencher une exception). Vous devez donc être sûr d'utiliser l'événement load pour ne pas essayer avant que l'image ne soit chargée :
},false);


let canvas2 = document.getElementById('monCanvas2');
let ctx2 = canvas2.getContext('2d');
let img2 = new Image();
img2.src="./images/JS_5_dessiner (canvas)/cerises.png";
img2.addEventListener("load", function() {
    ctx2.drawImage(img2,140,20); // Si drawImage () est appelé avant le chargement de l'image, il ne fera rien. Dans les anciens navigateurs, cela peut même déclencher une exception). Vous devez donc être sûr d'utiliser l'événement load pour ne pas essayer avant que l'image ne soit chargée :
},false);


let canvas3 = document.getElementById('monCanvas3');
let ctx3 = canvas3.getContext('2d');
let img3 = new Image();
img3.src="./images/JS_5_dessiner (canvas)/mangue.png";
img3.addEventListener("load", function() {
    ctx3.drawImage(img3,20,90); // Si drawImage () est appelé avant le chargement de l'image, il ne fera rien. Dans les anciens navigateurs, cela peut même déclencher une exception). Vous devez donc être sûr d'utiliser l'événement load pour ne pas essayer avant que l'image ne soit chargée :
},false);*/


//Résolution de l'exercice CANVAS avec "programmation en class" :

class Canvas{
    constructor(, ){
        this.width = ;
        this.height = ;
    }
    afficher(){//méthode (on va effectuer une méthode sur cet objet "constructeur")
        let ajoutCanvasDansBody = document.createElement("canvas");
        ajoutCanvasDansBody.id = "monCanvas";
        ajoutCanvasSansBody.textContent = "Normalement, une image s'affiche";
        document.body.appenchild(ajoutCanvasDansBody);
        let canvas = document.getElementById('monCanvas');
        let ctx = canvas.getContext('2d'); 
        let img = new Image();
        img.src="./images/JS_5_dessiner (canvas)/pomme_rouge.png"; 
        img.addEventListener("load", function() { 
        ctx.drawImage(img,20,20); 
        },false);
        
        let canvas1 = new Canvas();








        let maDiv = document.createElement("div");
        let monTitre = document.createElement("h1");
        let monParagraphe = document.createElement("p");
        monTitre.innerHTML = this.titre;
        monParagraphe.innerText = this.texte;
        maDiv.appendChild(monTitre);
        maDiv.appendChild(monParagraphe);
        document.body.appendChild(maDiv);
        }
}









































/*let sourceimage = Image.jpg = "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/0/d/3/0d32123a56_50034121_galaxie-andromede-03.jpg";
console.log(sourceimage);*/
/*Affichage image dans ma page*/
/*let img = document.createElement("img");
img.src = "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/0/d/3/0d32123a56_50034121_galaxie-andromede-03.jpg";
document.getElementById("conteneur").appendChild(img);*/




/*let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
ctx.fillstyle = "orange";*/









/*let canvas = document.createElement("canvas");
canvas.id = "mycanvas"
canvas.textContent ="Normalement, une image s'affiche ici";
document.body.appendChild(canvas);
        let ctx = canvas.getContext('2d');
ctx.fillstyle = "orange";*/






/*let img = new Image();
img.src = "http://www.lecosmographe.com/blog/wp-content/gallery/galaxies/ngc6946_subaru-rgendler.jpg";
img.addEventListener("load", function(){
    ctxt.drawImage(img, 100, 100);
}, false);
}*/


      
        /*let canvas = document.getElementById('monCanvas');
        let ctx = canvas.getContext('2d');
        // Insérer une image dans le canvas qui est présent sur le DOM cependant nécessité de cacher dans le DOM
        // let image = document.getElementById('abricot');
        // image.addEventListener('load', function () {
        //     ctx.drawImage(image, 50, 10, 150, 75);
        // }, false);
        let img = new Image();
        img.src='http://www.lecosmographe.com/blog/wp-content/gallery/galaxies/ngc6946_subaru-rgendler.jpg';
        img.addEventListener('load', function() {
            ctx.drawImage(img,50,50,150,75); // Si vous essayez d'appeler drawImage () avant le chargement de l'image, il ne fera rien (ou, dans les anciens navigateurs, cela peut même déclencher une exception). Vous devez donc être sûr d'utiliser l'événement load pour ne pas essayer avant que l'image ne soit chargée :
        },false);

        /*let img = new Image();   // Crée un nouvel élément Image
        img.addEventListener('load', function() {
            //  exécute les instructions drawImage ici 
            ctx.drawImage(img,50,50,150,75);
          }, false);
        img.src = 'http://www.lecosmographe.com/blog/wp-content/gallery/galaxies/ngc6946_subaru-rgendler.jpg'; // définit le chemin de la source
        }*/