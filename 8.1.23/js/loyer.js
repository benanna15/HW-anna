var mois = 1;
var montant = 0;
var loyerDu = 0;
var gift = false;
var loyer = parseInt(prompt("Entrez le loyer"));
var solde = parseInt(prompt("Entrez le solde"));
var salaire = solde;
var solde = solde + salaire;

if (solde >= loyer) {
    solde = solde - loyer;
}
else {
    loyerDu = loyer;
}

mois++;
var solde = solde + salaire/2;

if (solde >= loyerDu) {
    solde = solde - loyerDu;
}

var loyer = loyer + 200;

if (solde >= loyer) {
    solde = solde - loyer;
}
else {
    loyerDu = loyerDu + loyer;
}

var solde = solde - 500;
mois++;

if (solde < 0) {
    gift = true;
    montant = solde * -1
}
else {
    montant = solde;
}
var solde = 0;

alert("Le mois: " + mois + "\n"  + "Le montant: " + montant + "\n" + "Le loyer:" + loyerDu + "\n" +  "Le gift: " + gift)
