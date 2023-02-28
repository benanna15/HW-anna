import * as Login from  "../components/login/controller.js";
import * as tokenLogin from "../components/tokenLogin/controller.js"

var user = {}
var users ={}
var lsUSER =localStorage.user;
var lsUSERS =localStorage.users;
if(lsUSER){
    user = JSON.parse(lsUSER)
}
if(lsUSERS){
    users = JSON.parse(lsUSERS)
}
export function init(){
    
if(user && user.token){
    if (tokenLogin.checkToken(user.token, users)) {
        tokenLogin.updateToken (user.email, users)
        return
    }
}
        Login.init(user, users)
    
    
   
}