const Names = [];
const Results = [];
var list = [];
var index=0;

for (let i = 0; i < 50; i++) {
    var fname = prompt("Enter your name ");
    var Result = parseFloat(prompt("Enter your result"));
        while(!Result){Result = parseFloat(prompt("Enter your result"))}
    Names.push(fname);
    Results.push(Result);

   /*  console.log(Names);
    console.log (Results); */
}

var groupA = 0;
var groupB=0;

for (let i = 0; i < Results.length; i++) {
    if(Results[i]>=70){
        list.push(Names[i]);  
        groupA+=Results[i];
        index++;
       //  console.log(list + groupA); 
    }
    else{
        
        groupB+=Results[i];
        //console.log(groupB);
    }
} 

var sumA = groupA /index;
var sumB = groupB/(50 - index);

alert ("Ceux qui ont une note supérieur à 70 : " +"\n" + list.join() + "\n" +"La moyenne de tous ceux qui ont réussi : "+ sumA + "\n" +"La moyenne de ceux qui ont échoué : " + sumB) 


