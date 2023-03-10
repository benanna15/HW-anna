var main = document.getElementById("main");



export function initRegister(arr) {
  var section = document.createElement("section");
  section.id="register"
  arr.forEach((x) => {
    var div = document.createElement("div");
    x.input = document.createElement("input");
    x.input.type = x.type;
    x.input.placeholder = x.placeholder;
    x.input.name = x.name;
    div.append(x.input);
    section.append(div);
  });
 var obj={}
  var div = document.createElement("div")
  var submit = document.createElement("button");
  submit.innerText = "Register Me Now, Please!";
  div.append(submit);
  section.append(div);
  main.append(section)

  var div = document.createElement("div")
  var span = document.createElement("span");
  span.innerText = "Already have an account ?";
  div.append(span);
  section.append(div);
  main.append(section)

  obj.submit=submit;
  obj.span=span;


  return obj ;
}



export function initLogin() {
  var obj={}
  var section = document.createElement("section");
  section.id="login"
    var div = document.createElement("div");
    var email = document.createElement("input");
    email.placeholder="email"
    email.type="text"
    email.input=""
    var password = document.createElement("input");
    password.placeholder="password"
    password.type="text"
  
    div.append(email);
    div.append(password);
    section.append(div);


  var div = document.createElement("div")
  var submit = document.createElement("button");
  submit.innerText = "Login Please!";
  div.append(submit);
  section.append(div);
  main.append(section)

  var div = document.createElement("div")
  var span = document.createElement("span");
  span.innerText = "Don't have an account yet?";
  div.append(span);
  section.append(div);
  main.append(section)

  obj.submit=submit;
  obj.span=span;
  obj.email=email;
  obj.password=password

  


  return obj ;
}

