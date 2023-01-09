var rev = "";
var dash = "";
var num = prompt("Enter a number")

if (num < 0) {
    dash = "-";
    num = -num;
}

while (num != 0) {
    last = num % 10;
    rev = rev + last;
    num = (num - last) / 10
}

alert(rev + dash)