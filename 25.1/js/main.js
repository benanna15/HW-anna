
const Categories = [
    { value: "", text: "--Choose a category--",active: true },
    { value: "Sport", text: "Sport",active: true },
    { value: "Casual", text: "Casual",active: true },
    { value: "Evening", text: "Evening",active: true },
    { value: "Relax", text: "Relax",active: true }];

    const Products=[] ;

createForm();

function createForm() {
    var model = myInput("model-input", "Enter the model name", "text");
    var brand = myInput("brand-input", "Enter the brand name", "text");
    var price = myInput("price-input", "Enter the price", "number");
    var categories = mySelect("category-select", "", Categories);
    var sale = myInput("sale-input", "", "checkbox", "form-check-input");
    var btn = myButton("submit", "", "Add this product", addProduct);
    var formDiv = document.getElementById("form-div");
    
    formDiv.append(
        model.div,
        brand.div, 
        price.div, 
        categories.div, 
        sale.div, 
        btn,);
    function addProduct() {
        var obj ={}
        obj.model= model.input.value;
        obj.brand=brand.input.value;
        obj.price=price.input.value;
        obj.categories=categories.select.value;
        
     
        if(obj.model && obj.brand && obj.price && obj.categories ){
            Products.push(obj);
            productSquare(Products)
            model.input.value=""
            model.input.className="form-control"
            brand.input.value=""
            brand.input.className="form-control"
            price.input.value=""
            price.input.className="form-control"
            categories.select.value=""
            categories.select.className="form-control"
            
        } else {
            redBorder(obj)  
    
            }

    }
    function redBorder(x){
        switch ("") {
        
            case model.input.value:
                model.input.className="new-border border-danger form-control  "
                break;
    
            case brand.input.value:
                brand.input.className="new-border border-danger form-control "
                break;    

            case price.input.value:
                price.input.className="new-border border-danger form-control "
                break;  

            case categories.select.value:
                categories.select.className="new-border border-danger form-control "
                break;

            default:
                break;
                
    }
}
function productSquare(_Products){

    var container=document.getElementById("card");
    container.className="row"
    container.innerHTML=""
    for (let i = 0; i < Products.length; i++) {
        const element = Products[i];

        var section=document.createElement("section");
        section.className="col-3 card "

        var div=document.createElement("div")
        div.className="card-body"

        var models =document.createElement("h1")
        models.className="card-title"
        models.innerText=element.model

        var brands=document.createElement("p")
        brands.className="card-text"
        brands.innerText=element.brand

        var prices=document.createElement("p")
        prices.className="card-text"
        prices.innerText=element.price

        var category=document.createElement("p")
        category.className="card-text"
        category.innerText=element.categories

        container.append(section)
        section.append(div)
        div.append(models)
        div.append(brands)
        div.append(prices)
        div.append(category)     
    }
    return container
}
}

function myInput(_id, _placeholder, _type, _class = "") {
    var obj = {};
    obj.div = document.createElement("div");
    obj.input = document.createElement("input");
    obj.input.className = "form-control" + _class;
    obj.input.id = _id;
    obj.input.placeholder = _placeholder;
    obj.input.type = _type;
    obj.div.append(obj.input);
    return obj;
}

function mySelect(_id, _class = "", _arr) {
    var obj = {};
    obj.div = document.createElement("div");
    obj.select = document.createElement("select");
    obj.select.id = _id
    obj.select.className = "form-select" + _class


    for (let i = 0; i < _arr.length; i++) {
        const opt = _arr[i];
        var option = document.createElement("option")
        option.value = opt.value
        option.innerText = opt.text

        obj.select.append(option)

    }
    obj.div.append(obj.select)
    return obj
}


function myButton(_id, _class = "", _text, _callback) {

    var div = document.createElement("div");
    var btn = document.createElement("button");
    btn.className = "btn btn-success" + _class;
    btn.id = _id;
    btn.innerText = _text
    btn.addEventListener("click", _callback)
    div.append(btn);
    return div;
}
