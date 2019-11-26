
//let creer = function creation(){
   //let nbParagraphe = Number(prompt('Combien de paragraphes?'));
    //for (let i = 0; i < nbParagraphe; i++) {
        //let titre = document.createElement("h1");
    //}

    /*let creerPara = function creer(){
    let nombreP = Number(prompt('Combien de paragraphes ?')); 
    for (let i=0; i<nombreP; i++){
    let paragraphe1 = document.createElement("p");
    paragraphe1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    document.body.appendChild(paragraphe1);
    }
}*/

    
   let creer = function bouton(){

    let nombreParagraphe = Number(prompt("Combien de paragraphes voulez-vous?"));
    for (let i = 0; i < nombreParagraphe; i++) {
        let titre = document.createElement("h1");
        let paraTitre = prompt("Entrez un titre");
        titre.textContent = paraTitre;
        let para = document.createElement("p");
        let paraText = prompt('Entrez un texte');
        para.textContent = paraText;
        let section = document.createElement("section");
        document.body.appendChild(section);
        section.appendChild(titre);
        section.appendChild(para);
    }
}
    let button = document.createElement("button")
    button.innerText = "Ajouter un ou plusieurs paragraphe"
    document.body.appendChild(button)
    
    button.onclick = creer