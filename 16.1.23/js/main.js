const arr=prompt("Enter a series of numbers").split(",");

var avg=parseInt(arr[0]);


if(avg != 0){
  for (let i = 1; i < arr.length; i++) {
        const number = parseInt(arr[i]);

        if(number == 0)break;
        else{
            avg= average(avg, number);
            console.log(avg)
        }
    }


    function average(avg, number){
        console.log(avg, number)
    return (number + avg)/2;
    
}

alert(avg)
}