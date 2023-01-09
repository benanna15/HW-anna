var taxe = 0;
var salaire = prompt("Entrez le salaire");
if (salaire < 25000) {
    taxe = salaire * 0.1
}
else if (salaire < 50000) {
    taxe = 2500 + (salaire - 25000) * 0.2
}
else if (salaire<100000) {
    taxe = 7500 + (salaire - 50000) * 0.3
}
else if (salaire< 150000) {
    taxe=22500+(salaire-100000)*0.4
}
else{
    taxe=42500+(salaire-150000)*0.5
}

alert("la taxe a payé est de " + taxe)