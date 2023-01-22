var str = prompt("text").toLowerCase().split("");

function text(str) {
    var vow = [];
    var cons = [];
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        switch (true) {
            case element.includes("a"):
                vow.push(element);
                break;
            case element.includes("e"):
                vow.push(element);
                break;
            case element.includes("i"):
                vow.push(element);
                break;
            case element.includes("o"):
                vow.push(element);
                break;
            case element.includes("u"):
                vow.push(element)
                break;
            case element.includes(" ") || element.includes("."):
                break;

            default:
                cons.push(element)
                break;
        }
    }
    vow = vow.sort()
    cons = cons.sort()
    return vow + "\n" + cons + "\n" + message(vow, cons);
    function message() {
        return "Your string contains the following vowels: " + vow + ". And the following consonants: " + cons + "."
    }
}
alert(text(str))

