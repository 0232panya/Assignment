

function findLargest(a, b, c){
    if(a>b && a>c){
        console.log(a+ " A is largest");
    }else if(b>a && b>c){
        console.log(b+ " B is largest");
    }else{
        console.log(c+ " C is largest");
    }

}

findLargest(10, 25 , 25);
findLargest(95, 22, 20);
findLargest(55, 65, 20);