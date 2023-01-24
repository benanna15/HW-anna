var str=prompt("Text").toUpperCase().replaceAll(" ","").split("").sort();
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
arr.push(count)

}
else{
    obj[elem]++
    count.amount=obj[elem]
    arr.pop(count)
    arr.push(count)
}

console.log(obj)
}

return  arr
}

console.log(qty())
 