

function powernum(num,power){
    var i =1;
    var result= 1;
    while(i<=power){
        result = result *num;
        i++;
    }
   console.log(result);
}

powernum(10, 2);