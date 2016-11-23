var nbrIA = Math.floor(Math.random() * 100);
var Res = document.getElementById("Res");
console.log("nbrIA = " + nbrIA);
var essai = 0;

function Calcul() {

var nombre = document.getElementById("jeu");
var diff = nbrIA - nombre.value;
console.log("NbUser = " + nombre.value);
console.log("Essai = " + essai++);
    if (diff < -20){
    Res.innerHTML = "<p> Froid! </p>"
    Res.className = "froid";
    }
    else if ( diff < -10) {
    Res.innerHTML = "<p> Tiède! </p>"
    Res.className = "tiede"
    }
    else if ( diff < 0) {
    Res.innerHTML = "<p> Chaud !</p>"
    Res.className = "hot";
    }
    else if (diff == 0){
    Res.innerHTML = "<p> Bravo tu as réussi au tour " + essai + " !</p>";
    Res.className = "bravo";
    }
    else if (diff < 10 ){
    Res.innerHTML = "<p> Chaud !</p>"
    Res.className = "hot";
    }
    else if (diff < 20){
    Res.className = "tiede"
    Res.innerHTML = "<p> Tiède! </p>"
    }
    else {
    Res.innerHTML = "<p> Froid! </p>"
    Res.className = "froid";
    }

    var indice = nbrIA/10;
    var indice2 = Math.floor(indice *10);

     if (essai == 5) {
     alert("Le nom est compris entre " + (indice2) + " et " + (indice2 +10 ) + ".");
    }
    if (diff != 0 && essai == 10) {
    alert("Vous avez perdu, c'est con ahah!");
    location.reload();
    }
}
