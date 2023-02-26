import { Auhtools } from "../../handlers/authTools.js";



export function cToken(token, users) {
  var parseUsers = JSON.parse(users);
  for (var i = 0; i < parseUsers.length; i++) {
    if (parseUsers[i].token === token) {
      return true;
    }
  }
  return false;
}

export function uToken(email, users) {
  var parseUsers = JSON.parse(users);
  var newToken = Auhtools.generateToken();
  for (var i = 0; i < parseUsers.length; i++) {
    if (parseUsers[i].email === email) {
      parseUsers[i].token = newToken;
      localStorage.setItem("users", JSON.stringify(parseUsers));
      localStorage.setItem("user", JSON.stringify({
        email: email,
        token: newToken
      }));
      break;
    }
  }
}