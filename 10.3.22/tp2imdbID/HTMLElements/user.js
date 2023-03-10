export class MyUser {
    constructor(_fName, _lName, _email, _password, _token) {
    
      this.fName = _fName
      this.lName = _lName
      this.email = _email
      this.password = _password
      this.token = _token
      this.dateRegistered = Date.now()
  
    }
  }
 // customElements.define("my-user", MyUser, { extends: "user" });