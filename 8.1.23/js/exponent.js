var base=prompt("Enter num")
var exp=prompt("Enter exp")
var i=1;
var res=base;

while(i<exp){
    i++;
    res*=base;
}

alert(res)