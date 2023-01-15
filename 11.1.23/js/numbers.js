const Numbers =[];
var num=parseInt(prompt("Enter a number"));

for (let i = 0; i <= num; i++) {
    if (i%5===0){ Numbers.push(i)}
    if(i%8===0){Numbers.push(i)}
    console.log(Numbers);    
}


var sum=0;

for (let i = 0; i < Numbers.length; i++) {
    sum+=Numbers[i];
   
}


alert(sum)
