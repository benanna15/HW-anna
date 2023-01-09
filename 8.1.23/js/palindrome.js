var palindrome=false;
var rev="";
var num=prompt("Enter a number");
var origin=num;

while(num!=0){
    last=num%10;
    rev=rev+last;
    num=(num-last)/10;
}
if(origin==rev){
    palindrome=true
}

alert(palindrome)