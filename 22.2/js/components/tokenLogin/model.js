import { Auhtools } from "../../handlers/authTools.js";



export function cToken(token, users) {
 
  for (var i = 0; i < users.length; i++) {
    if (users[i].token === token) {
      return true;
    }
  }
  return false;
}

export function uToken(email, users) {
 
  var newToken = Auhtools.generateToken();
  for (var i = 0; i <users.length; i++) {
    if (users[i].email === email) {
      users[i].token = newToken;
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("user", JSON.stringify({
        email: email,
        token: newToken
      }));
      break;
    }
  }
}