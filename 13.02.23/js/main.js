
var main=document.getElementById("main")

class row {
    constructor(_id, _class, _cols) {
        this.row = document.createElement("div");
        this.row.className = "row ";
        if (_id) this.row.id = _id;
        if (_class) this.row.className += _class;
        _cols.forEach((x) => {
            this.row.append(x.col);
        });
    }
}

class col {
    constructor(_id, _class) {
        this.col = document.createElement("div");
        this.col.className = "col ";
        if (_id) this.col.id = _id;
        if (_class) this.col.className += _class;
    }
}

class input {
    constructor(_id, _class, _label, _type, _placeholder="") {
        this.div = document.createElement("div");
        this.div.className = "input-field col ";
        if (_class) this.div.className += _class;
        this.input = document.createElement("input");
        this.input.id = _id;
        this.input.type = _type;
        this.input.placeholder = _placeholder;
        this.label = document.createElement("label")
        this.label.className="active"
        this.label.id = _id;
        this.label.innerText = _label;
        this.div.append(this.input, this.label);
    }
}

class Button {
    constructor(_id, _class, _icon, _text) {
        this.btn = document.createElement("a");
        this.btn.className = "waves-effect waves-light btn ";
        if (_id) this.btn.id = _id;
        if (_class) this.btn.className += _class;
        if (_icon) {
            this.i = document.createElement("i");
            this.i.className = "material-icons left"
            this.i.innerText = _icon;
            this.btn.append(this.i);
        }
        this.span = document.createElement("span");
        this.span.innerText = _text;
        this.btn.append(this.span);
        
    }
}
sections()
function sections(){
  var colArr = [];
  colArr.push(new col("", "s4"));
  colArr.push(new col("", "s4"));
  colArr.push(new col("", "s4"));
 

  var scts = new row("", "", colArr);
  var logBtn = new Button("", "col s6", "", "LOGIN")
  logBtn.btn.addEventListener("click", login)
  var regBtn = new Button("", "col s6 ", "", "REGISTER")
  regBtn.btn.addEventListener("click", register)

  colArr[1].col.append(logBtn.btn)
  colArr[1].col.append(regBtn.btn)

  main.append(scts.row);
}
function login(){
  this.parentElement.remove()
  var colArr = [];
  colArr.push(new col("", "s4"));
  colArr.push(new col("", "s4"));
  colArr.push(new col("", "s4"));

  var sectionLogin = new row("", "", colArr);

  main.append(sectionLogin.row);

  var emailInput = new input("", " s6 ", "Your Email", "email", "ex:jon@mail.com");
  var passInput = new input("", " s6 ", "Your Password", "password", "ex:s0strONG@123");
  var loginBtn = new Button("", "col s12 ", "check", "LOGIN")

  colArr[1].col.append(emailInput.div, passInput.div, loginBtn.btn)
  loginBtn.btn.addEventListener("click", checkLogin)
  
    function checkLogin(){

      var userLS=JSON.parse(localStorage.user) 
      

      if (userLS.email==emailInput.input.value && userLS.password==passInput.input.value){
        this.parentElement.remove()
        main.innerText="Welcome, user " + userLS.fName
        main.className="text"
      }

      else alert("Error")
  }
}

function register(){
  this.parentElement.remove()
  var colArr = [];
  colArr.push(new col("", "s4"));
  colArr.push(new col("", "s4"));
  colArr.push(new col("", "s4"));

  var sectionLogin = new row("", "", colArr);

  main.append(sectionLogin.row);

  var fName = new input("", "s6", "Your Name", "text", "Name");
  var lName = new input("", "s6", "Your Last Name", "text", "Last Name");
  var email = new input("", "s6", "Your Email", "email", "ex:jon@mail.com");
  var password = new input("", "s6", "Your Password", "password", "ex:s0strONG@123");
  var loginBtn = new Button("", "col s12 ", "check", "REGISTER")

 colArr[1].col.append(fName.div,lName.div,email.div, password.div, loginBtn.btn)
 loginBtn.btn.addEventListener("click", checkRegister)

  function checkRegister(){
    var user = {}
    var rxmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    var rxpass=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}/
          
        if (rxmail.test(email.input.value) && rxpass.test(password.input.value)){
          user.fName =fName.input.value;
          user.lName = lName.input.value;
          user.email=email.input.value;
          user.password=password.input.value
          user.dateRegistered= new Date()}
        
        else{
          alert("Your email or password is invalid")
        }
        console.log(user)

        
        localStorage.user=JSON.stringify(user)


  }
}
 

