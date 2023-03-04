
var main = document.getElementById("main")
import CSS from "./style.css" assert {type: "css"}
document.adoptedStyleSheets.push(CSS)

export function makeBoxesForProducts(arr){
console.log(arr);
    arr.forEach(x => {
    var div= document.createElement("div");
    div.className="card"
    div.innerText= x.brand + "\r" + x.model + "\r" + x.category + "\r" + x.price
    main.append(div)})
}
