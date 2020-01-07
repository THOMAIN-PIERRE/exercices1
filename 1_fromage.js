envoiRequete = document.getElementById("bouton");
envoiRequete.addEventListener("click", () => {
    getDatas();
});

function getDatas() {
    let xhr = new XMLHttpRequest();//on crée un nouvel objet
    xhr.open("GET", "fromages.json");//on ouvre une requête
    xhr.addEventListener('load', function () {//on crée un écouteur
        let jsonResponse = JSON.parse(this.response);
        let section = document.getElementById("bonjour");
        section.innerHTML = "";//cela vide la section et celle-ci sera re-remplie
        console.log(jsonResponse);
        for (element of jsonResponse) {
            let bonjour = new Chapitre(element.nom, element.type, element.pays, element.classement);
            bonjour.afficherChapitre();
        }

    });
    xhr.send();//on envoi la requête*/
};
//Créer une classe chapitre :

class Chapitre {

    constructor(nom, type, pays, classement) {
        this.nom = nom;
        this.type = type;
        this.pays = pays;
        this.classement = classement;
    }
    afficherChapitre() {
        let section = document.getElementById("bonjour");
        let div = document.createElement("div");
        let nom = document.createElement("h1");
        let type = document.createElement("p");
        let pays = document.createElement("p");
        let classement = document.createElement("p");
        nom.innerText = this.nom;
        type.innerText = `Type : ${this.type} / Pays : ${this.pays}`;//je concatene mes 2 propriétés
        //pays.innerText = this.pays;
        classement.innerText = this.classement;
        section.appendChild(div);
        div.appendChild(nom);
        div.appendChild(type);
        div.appendChild(pays);
        div.appendChild(classement);

    }
}