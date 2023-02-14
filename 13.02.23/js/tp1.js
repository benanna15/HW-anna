var main=document.getElementById("main")

var d=Date.now()

var str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var token=""
var newToken=""
function uniqueToken()
    {
        token=""
    for (let i = 0; i <Math.floor(Math.random()*5)+12; i++) {
        token += str[Math.floor(Math.random() * str.length)]; 
    }
}
var users=[
    {fName:"bob",email:"bob@mail.com",token: token,pass: "mdp123"},
    {fName:"jon",email:"jon@mail.com",token: token,pass: "mdp456"},
    {fName:"ron",email:"ron@mail.com",token: token,pass: "mdp789"},
    {fName:"bill",email:"bill@mail.com",token: token,pass: "mdp987"},
    {fName:"jim",email:"jim@mail.com",token: token,pass: "mdp654"}
]
var user=[{email:"",token:""}]



for (let i = 0; i < users.length; i++) {
    if(users[i].token === ""){
    uniqueToken()
    users[i].token=token}
}


localStorage.users=JSON.stringify(users)
localStorage.user=JSON.stringify(user)
currentUser=JSON.parse(localStorage.user)
console.log(currentUser)

 function tokenLogin(){

    for (let i = 0; i < users.length; i++) {
    
        if(currentUser.token == users[i].token){
         
        }
        
    }
    
} 
  







