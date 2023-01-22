var str=prompt("Text").toUpperCase().split("").sort();
var count={}
var obj={}
var arr=[]

function qty(){
 for (let i = 0; i < str.length; i++) {
    var elem = str[i];
     count={
        letter:elem,
        amount:0,
    }
    count.letter=elem
if(!obj[elem]){
    
     obj[elem]=1
     count.amount=obj[elem]

}
else{
    obj[elem]++
    count.amount=obj[elem]++


}

console.log(obj)
}

return  obj
}

console.log(qty())
 