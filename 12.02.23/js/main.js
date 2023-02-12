const MainDiv = document.getElementById("main");
var code = ""
var str = ""
var tries = 0
var btns = []
var t = null

function myCode() {
    var div = document.createElement("div");
    var input = document.createElement("input");
    input.className = "form-control model-input input";
    input.placeholder = "Enter 4 numbers";
    input.addEventListener("input", function () {
        var value = input.value;
        str = "";
        for (let i = 0; i < value.length; i++) {
            if (!isNaN(value[i]) && str.length < 4) str += value[i];
            input.value = str;
        }
    })
    var btn = myButton("submit", " btn-info inputBtn", "Enter", addCode);
    div.append(input, btn);
    MainDiv.append(div);

    function addCode() {
        this.parentElement.parentElement.remove();
        var section = document.createElement("section");
        section.className = "grid-container";
        for (let i = 0; i < 10; i++) {
            const element = [i];
            buttons = myButton("submit", " btn-ocean", i, verification, i);
            btns.push(buttons);
            section.append(buttons);
            MainDiv.append(section);
            function verification() {
                if (t != null) clearTimeout(t);
                code += i;
                var button = this;
                button.classList.add("btn-blue");
                t = setTimeout(function () {
                    reset()
                }, 3000);
                if (code.length === 4) checkCode();
            }
        }
    }
}
function myButton(_id, _class = "", _text, _callback, _value) {
    var div = document.createElement("div");
    var btn = document.createElement("button");
    var span = document.createElement("span");
    span.innerText = _text;
    btn.className = "btn " + _class;
    btn.id = _id;
    btn.append(span);
    btn.addEventListener("click", _callback);
    div.append(btn);
    return div;
}
function buttonColor() {
    btns.forEach(function (button) {
        button.firstChild.className = "btn btn-ocean shadow-none";
    });
}
function reset() {
    setTimeout(buttonColor, 0);
    code = "";
}
function checkCode() {
    if (code === str) alert("succes");
    else if (tries === 2) alert("La police arrive");
    else {
        alert("erreur");
        tries++;
    }
    reset()
}

myCode()

