var appDiv=document.getElementById("main");
var user= [{fName: "Bob", username: "bobby1", password:"password1"},
           {fName:"Bill" , username: "billy2" , password:"password2"},
           {fName:"John" , username: "johnny3", password:"password3"}]

init()           

function init(){
    var loginSection= document.createElement("section");
    var usernameDiv=document.createElement("div")
    var usernameLabel=document.createElement("label")
    usernameLabel.innerText= "Username : ";
    var usernameInput = document.createElement("input");
    usernameLabel.append(usernameInput)
    usernameDiv.append(usernameLabel)
    loginSection.append(usernameDiv)

    var passDiv=document.createElement("div")
    var passLabel=document.createElement("label")
    passLabel.innerText="Password : ";
    var passInput = document.createElement("input")
    passLabel.append(passInput)
    passDiv.append(passLabel)
    loginSection.append(passDiv)
 
    var btnDiv=document.createElement("div")
    var btn=document.createElement("button")
    btn.innerText="Login please";
    btnDiv.append(btn)
    loginSection.append(btnDiv)
    appDiv.append(loginSection)
    console.log(btn)

   btnDiv.addEventListener("click", verify)
    

    function verify(){

        var login=false
        for (let i = 0; i < user.length; i++) {
            const element = user[i];
    
            const uName=element.username
            const pass=element.password
            firstName=element.fName
            console.log(pass);
            
        if(usernameInput.value.toLowerCase().replaceAll(" ","") === uName && passInput.value === pass){
            console.log("la")
            login=true
            goToDashboard(firstName)
            break }
    }
         if(!login){
        alert ("Wrong info") }
        }

    
    function goToDashboard(x){
        var section= document.createElement("section");
        var h1 =document.createElement("h1")
        h1.innerText=`Welcome ${x}`;
        section.append(h1)
        loginSection.remove()
        appDiv.append(section)
        
    }

}

