import * as View from "./view.js";
import * as Model from "./model.js"
import * as Controller from "../tokenLogin/controller.js"
import * as Control from "../register/controller.js";



export function init(){
    console.log(("I started the engine. "));
    var users = localStorage.getItem("users");
    var user = localStorage.getItem("user");

console.log(users,user);

    var form =View.init();
    console.log(form);
    form.toogle.addEventListener("click", function() {
       
        document.getElementById("home-page").remove()
        form=Control.register(users);
        
      });

    form.btn.addEventListener("click", function (){

        var email = form.email.value;
        var password= form.password.value;
      
        var token =Model.checkLogin(email,password,users,user)
       
        Controller.checkToken(token, users);
        Controller.updateToken(email, users)
    }
    )
}