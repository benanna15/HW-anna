export const Auhtools ={
  generateToken: function uniqueToken() {

    var token = Date.now().toString(36)
    var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
    for (let i = 0; i < Math.floor(Math.random() * 5) + 4; i++) {
      token += str[Math.floor(Math.random() * str.length)];
    }
   
    return token
  }
}