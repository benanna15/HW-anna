import * as View from "./view.js";
import * as Model from "./model.js"
import * as Login from "../login/controller.js"

export function register(x) {
    var form = View.init()

    form.btn.addEventListener("click", function () {
        var obj = {}

        obj.email = form.email.value;
        obj.password = form.password.value;
        obj.fName = form.fName.value;
        obj.lName = form.lName.value;

        Model.checkRegister(obj.email, obj.password, obj.fName, obj.lName,x)
    })

    form.toogle.addEventListener("click", function () {

        document.getElementById("home-page").remove()
        form = Login.init();

    });

    return form
}