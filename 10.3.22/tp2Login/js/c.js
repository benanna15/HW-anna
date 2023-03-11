import * as M from "./m.js";
import * as V from "./v.js";

export function init() {
if(localStorage.user){
 var  user=JSON.parse(localStorage.user)
 var token=user.token
 var id =user.id
 var FD =new FormData();

 FD.append("id",id)

 if (id) {
  console.log(FD);
  new Promise((resolve, reject) => {
    if (user.id) {
      M.getTokenByID(user.id)
        .then((data) => {
          console.log(data);
          var user = { id: id ,token: data.Table[0].token };
          localStorage.user = JSON.stringify(user);
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    } else {
      reject(new Error("Something very weird happened here"));
    }
  }); 
}
  if (token) {
    console.log(FD);
    new Promise((resolve, reject) => {
      if (user.token) {
        M.updateUserToken(token)
          .then((data) => {
            console.log(data);
            var user = { id: id ,token: data.Table[0].token };
            localStorage.user = JSON.stringify(user);
            resolve(user);
          })
          .catch((error) => {
            reject(error);
          });
      }
       else {
        reject(new Error("Something very weird happened here"));
      }
    })}}
else{

  var inputs = M.getRegInputData(); 
  var btn = V.initRegister(inputs)
  btn.submit.addEventListener("click",function(){
    M.register(inputs)})
  btn.span.addEventListener("click",function(){
      this.parentElement.parentElement.remove()
    initLogin()
    
  })
  
}}
  

  export function initLogin(){
    var login=V.initLogin()
    console.log(login);
    login.submit.addEventListener("click",function(){
     var email=login.email.value
     var password=login.password.value
     console.log(email);
      M.login(email,password)
    })
    login.span.addEventListener("click",function(){
      this.parentElement.parentElement.remove()
      init()
    })
  }
  
