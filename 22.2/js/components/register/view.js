import { MyButton } from "../../HTMLElements/button.js";
import { MyInput } from "../..//HTMLElements/input.js";
import { MySection } from "../..//HTMLElements/sections.js";
import { ToogleBtn } from "../../HTMLElements/toogle.js";

export function init(){
var Home = new MySection("home-page", "views");
var form={}
form.fName = new MyInput("", "", "text", "First Name");
form.lName = new MyInput("", "", "text", "Last Name");
form.email = new MyInput("", "login-form", "email", "Please enter your email");
form.password = new MyInput("", "login-form", "password", "Please enter your password");
form.btn = new MyButton("", "", "Register");

form.toogle= new ToogleBtn("","","Already have an account ?")
Home.append(form.fName, form.lName, form.email, form.password, form.btn, form.toogle);
console.log(form.email);
document.getElementById("main").append(Home);
return form;
}