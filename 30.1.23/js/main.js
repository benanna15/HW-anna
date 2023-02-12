
const Categories = [
    { value: "", text: "--Choose a category--", active: true },
    { value: "Sport", text: "Sport", active: true },
    { value: "Casual", text: "Casual", active: true },
    { value: "Evening", text: "Evening", active: true },
    { value: "Relax", text: "Relax", active: true }
];

const Products = [
    {brand:"Adidas", model:"Sweat" ,category:"casual", price:99.99},
    {brand:"Nike", model:"Jordan" ,category:"sport", price:599.99},
    {brand:"Adidas", model:"Sneakers" ,category:"luxury", price:59.99},
    {brand:"Puma", model:"Sweat" ,category:"casual", price:799.99},
    {brand:"Nike", model:"Sweat" ,category:"relax", price:999.99}
];

const MainDiv = document.getElementById("main")
/*  function init(){
    for (let i = 0; i < Products.length; i++) {
        const obj = Products[i];
        createCard(obj)
    }
}  */


function createForm() {
    var model = new myInput("model-input", "Enter the model name", "text");
    var brand = new myInput("brand-input", "Enter the brand name", "text");
    var price = new myInput("price-input", "Enter the price", "number");
    var categories = new mySelect("category-select", "", Categories);
    var sale = new myInput("sale-input", "", "checkbox", "form-check-input");
    var btn = myButton("submit"," btn-primary margin","Add this product",addProduct," fa-add fa-plus");
    var formDiv = document.getElementById("form-div");
    formDiv.append(model.div,brand.div,price.div,categories.div,sale.div,btn);
    function addProduct() {
        var obj = {}
        obj.brand = brand.input.value;
        obj.model = model.input.value;
        obj.price = price.input.value;
        obj.category = categories.select.value;


        if (validateForm(obj)) {
            Products.push(obj);
            createCard(obj)
            model.input.value = "";
            brand.input.value = "";
            price.input.value = "";
            categories.select.value = "";

        } 

    }
    function validateForm(x) {
        var valid=true;
        if(!x.brand){
            brand.input.classList.add("border","border-danger");
            valid=false;
        }else{
            brand.input.classList.remove("border","border-danger")
        }
        if(!x.model){
            model.input.classList.add("border","border-danger");
            valid=false;
        }else{
            model.input.classList.remove("border","border-danger")
        }
        if(!x.price){
            price.input.classList.add("border","border-danger");
            valid=false;
        }else{
            price.input.classList.remove("border","border-danger")
        }
        if(!x.category){
            categories.select.classList.add("border","border-danger");
            valid=false;
        }else{
            categories.select.classList.remove("border","border-danger")
        }
        return valid
    }
}
function createCard(obj) {
    var article = document.createElement("article");
    article.className = " grid-item ";
    var h3 = document.createElement("h3")
    h3.className = " brand-name "
    h3.innerText = obj.brand
    var h4 = document.createElement("h4")
    h4.innerText = obj.model
    var p = document.createElement("p")
    p.innerText=obj.category
    h4.className=" model-item "
    var btn = myButton(
        "",
        "btn-success ",
        obj.price,
        buyNow,
        " fa-basket-shopping "
    )

    article.append(h3, h4, p, btn)
    MainDiv.append(article)
}

function buyNow() {
    console.log(this);
    this.parentElement.parentElement.remove();
}
class myInput {
    constructor(_id, _placeholder, _type, _class = ""){
    this.div = document.createElement("div");
    this.input = document.createElement("input");
    this.input.className = "form-control " + _class;
    this.input.id = _id;
    this.input.placeholder = _placeholder;
    this.input.type = _type;
    this.div.append(this.input);
}
}

class mySelect{
    constructor(_id, _class = "", _arr) {
    this.div = document.createElement("div");
    this.select = document.createElement("select");
    this.select.id = _id
    this.select.className = "form-select " + _class


    for (let i = 0; i < _arr.length; i++) {
        const opt = _arr[i];
        if(opt.active){
        var option = document.createElement("option")
        option.value = opt.value
        option.innerText = opt.text
        this.select.append(option)
    }
}
    this.div.append(this.select)

}
}

function myButton(_id, _class = "", _text, _callback,_icon) {

    var div = document.createElement("div");
    var btn = document.createElement("button");
    if (_icon) {
        var i = document.createElement("i");
        i.className = "fa-solid " + _icon;
        btn.append(i);
    }
    var span = document.createElement("span")
    span.innerText = _text
    btn.className = "btn " + _class;
    btn.id = _id;

    btn.append(span)
    btn.addEventListener("click", _callback)
    div.append(btn);
    return div;
}
    

//init()
Products.forEach(createCard);
createForm()