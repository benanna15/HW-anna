var fName="";
var blue= false;
var index=0;

while(fName!== "DAVID"){
    index++;
    fName=prompt("What is your name?").toUpperCase()
    if(fName=== "DAVID"){
        blue = confirm("Please press OK if your eyes are blues.");
        if (blue === false){
            fName = "";
        }
    }
}

alert("It took" + index +" tries until we found him!!");