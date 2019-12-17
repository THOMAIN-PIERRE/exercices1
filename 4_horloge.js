
    let secondDiv = document.querySelector(".seconde"); // pour avoir les secondes en fonction des degrés
    let minDiv = document.querySelector(".minute"); // pour avoir les minutes en fonction des degrés
    let hourDiv = document.querySelector(".heure"); // pour avoir les heures en fonction des heures

    function setData(){
        let now = new Date(); // objet Date de la bibliothèque JS // retourne l'heure courante dans le fuseau horaire locale
        console.log(now);
        
        let seconds = now.getSeconds();
        console.log(seconds);
        
        let secDeg = ((seconds/60)*360);
        secondDiv.style.transform = `rotate(${secDeg}deg)`;

        let mins = now.getMinutes();
        console.log(mins);
        
        let minDeg = ((mins/60)*360) + ((seconds/60)*6); // 6 parcequ'il y a 6°/min
        minDiv.style.transform = `rotate(${minDeg}deg)`;

        let hours = now.getHours();
        console.log(hours);
        
        let hourDeg = ((hours/12)*360) + ((mins/60)*30); // 30 car il y a 30°/h
        hourDiv.style.transform = `rotate(${hourDeg}deg)`;
    }

    setInterval(setData, 1000); //nom de la fonction à éxécuter et fréquence de rafraîchissement