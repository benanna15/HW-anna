var num = parseInt(prompt("Entrez un numero"));
var index = 1;
var pair = "";
var impair = "";

while (index < num) {

    if (index % 2 == 0) {
        pair += index + "\n"
    }

    else {
        impair += index + "\n"
    }
    index++;
}

if (num % 2 == 0) {
    num = "Le numéro " + num + " est pair"
}
else {
    num = "Le numéro " + num + " est impair"
}

alert("Numeros pairs:\n" + pair + "Numeros impairs:\n" + impair + num)