
//Partie 1: 

let image = document.querySelector("aside > div");
console.log(image);
image.addEventListener('mouseover', over);
function over() {
    image.style.borderRadius = "0%";
};
image.addEventListener('mouseleave', leave);
function leave() {
    image.style.borderRadius = "66%";
};

//Partie 2:

let contenuFleche = document.querySelectorAll("article > header");
console.log(contenuFleche);

for (let element of contenuFleche) {
    console.log(element);

    element.onclick = function () {
        console.log(this);

        if (this.nextElementSibling.style.visibility == "hidden") {
            this.nextElementSibling.style.visibility = "visible";
            this.nextElementSibling.style.height = "auto";
        }
        else {
            this.nextElementSibling.style.visibility = "hidden";
            this.nextElementSibling.style.height = 0;
        }
        console.log(this.nextElementSibling);
    };
}

//Partie 3: 

envoiRequete = document.getElementById("bouton");
envoiRequete.addEventListener("click", () => {
    getDatas();
});

function getDatas() {
    let xhr = new XMLHttpRequest();//on crée un nouvel objet
    xhr.open("GET", "menu.json");//on ouvre une requête
    xhr.addEventListener('load', function () {//on crée un écouteur d'éévènement
        let jsonResponse = JSON.parse(this.response);
        let section = document.getElementById("bonjour");
        section.innerHTML = "";//cela vide la section et celle-ci sera re-remplie
        console.log(jsonResponse);
        for (element of jsonResponse) {
            let bonjour = new Chapitre(element.accueil, element.articles, element.contact);
            bonjour.afficherMenu();
        }

    });
    xhr.send();//on envoi la requête
};
//Créer une classe Menu (à afficher) :

class Menu {

    constructor(accueil, articles, contact) {
        this.accueil = accueil;
        this.articles = articles;
        this.contact = contact;
    }

    afficherMenu() {
        //let nav = document.querySelector(nav);
        //console.log(nav);
        let section = document.getElementById("bonjour");
        let div = document.createElement("div");
        let accueil = document.createElement("p");
        let articles = document.createElement("p");
        let contact = document.createElement("p");

        section.appendChild(div);
        div.appendChild(accueil);
        div.appendChild(articles);
        div.appendChild(contact);
    }
}





































































