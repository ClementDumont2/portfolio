function calculerRepartition(){
    
    //recuperation input utilisateur
    var revenus = document.getElementById("revenus").value;
    
    if(revenus < 0){
        document.getElementById("besoins").innerHTML = "Veuillez rentrer des revenus positifs"
    }
    else{
            
        //Calcul des valeurs
        var investissement = revenus * 0.2;
        var envies = revenus * 0.3;
        var besoins = revenus * 0.5;
    
        //On cherche les elements dans le doc html
        var resultatBesoin = document.getElementById("besoins");
        var resultatEnvies = document.getElementById("envies");
        var resultatInvestissement = document.getElementById("investissements");
    
        //On remplace par les valeurs
        resultatBesoin.innerHTML="Besoins : " + besoins + " €";
        resultatEnvies.innerHTML="Envies : " + envies + " €";
        resultatInvestissement.innerHTML="Investissement : " + investissement + " €";
    }
}

function calculValeurNette() {
    var age = document.getElementById("age").value;
    var salaireAnnuel = document.getElementById("salaireNet").value;

    var valeurNette = (age * salaireAnnuel * 12) / 10;

    document.getElementById("valeurNette").innerHTML = "Votre valeur nette est de : " + valeurNette + " €";
}

function calculInteretCompose(){
    //Recupération des éléments du formulaire
    var sommeDepart = document.getElementById("sommeDepart").value;
    var rendement = document.getElementById("rendement").value;
    var duree = document.getElementById("duree").value;
    
    //Si c'est annuel on multiplie la somme départ et le rendement par le nombre de mois
    var sommeFinale = sommeDepart*(1+rendement/100)**duree;

    sommeFinale = parseFloat(sommeFinale.toFixed(2))
    document.getElementById("sommeFinale").innerHTML = "La somme finale sera de " + sommeFinale + " €";

}

function calculFondUrgence(){
    var depensesMensuelles = document.getElementById("depensesMensuelles").value;
    var dureeFond = document.getElementById("dureeFond").value;

    var sommeFond = depensesMensuelles * dureeFond

    document.getElementById("fondUrgence").innerHTML = "Votre fond d'urgence devrait être de plus de : " + sommeFond + " €";
}

function calculPourcentageAction() {
    var agePourcentageAction = document.getElementById("agePourcentageAction").value;
    if(agePourcentageAction > 100 || agePourcentageAction < 0){
        document.getElementById("pourcentageAction").textContent = "Veuillez entrer un âge compris entre 0 et 100 ans."
    }
    else{
        var borneMin = 100 - agePourcentageAction;
        var borneMax = 120 - agePourcentageAction;
        if(borneMax > 100){
            borneMax = 100;
        }
        if (borneMin < 0){
            borneMin = 0;
        }

        document.getElementById("pourcentageAction").textContent = `Le pourcentage d'action que vous devriez avoir se situe entre ${borneMin} % et ${borneMax} %`
    }
}