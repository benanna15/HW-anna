var email=prompt("Enter your email");

function emailAddress (){
    email=email.toLowerCase();
    var address=email.split("@");
    if(address[1].includes("gmail")){
        email=address[0].replaceAll(".","") +"@"+ address[1];
    }
    return email
}

var mail =  emailAddress()
alert(mail)