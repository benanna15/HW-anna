import { MyButton } from "../../HTMLElements/button.js";
import { MyInput } from "../..//HTMLElements/input.js";
import { MySection } from "../..//HTMLElements/sections.js";
import { ToogleBtn } from "../../HTMLElements/toogle.js";
//import CSS from "./style.css" assert {type: "css"}
//document.adoptedStyleSheets.push(CSS)

function init() {
  var form={};
  var Home = new MySection("home-page", "views");
  form.email = new MyInput("", "login-form", "email", "Please enter your email");
  form.password = new MyInput("", "login-form", "password", "Please enter your password");

  form.btn = new MyButton("", "", "Login Please");
  form.toogle= new ToogleBtn("","","Don't have an account yet?")

  Home.append(form.email, form.password, form.btn,form.toogle);
  console.log(form.email);
  document.getElementById("main").append(Home);
  return form;
}


export {init}

