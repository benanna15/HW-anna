/* export function updateLS (U){
    localStorage.users=JSON.stringify(U)
} */
export function checkLogin(e,p,x,y) {
    var check= false

    console.log(x);
    console.log(y);
    
    var usersLS = JSON.parse(x);
    for (let i = 0; i < usersLS.length; i++) {
      if (usersLS[i].email == e && usersLS[i].password == p) {
        
      var token=usersLS[i].token
        y = JSON.stringify({ email: usersLS[i].email, token: usersLS[i].token });
console.log(y);

localStorage.setItem('user', y)
        check=true
        
        return token
      }
    }
    if (check === false){
      alert("Error");
  }
   }
    

