
import { MyUser } from "../../HTMLElements/user.js";
import { Auhtools} from "../../handlers/authTools.js";

export  function checkRegister(e,p,f,l,x) {
    var rxmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    var rxpass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}/
    var token = ""

    if (rxmail.test(e) && rxpass.test(p)) {
      var users = JSON.parse(x) || [];
      users.push( new MyUser(
        f,
        l,
        e,
        p,
        token = Auhtools.generateToken()))
      
 
      localStorage.setItem("users", JSON.stringify(users));
   
    }

    else {
      alert("Wrong credentials")
    }
  }
  

