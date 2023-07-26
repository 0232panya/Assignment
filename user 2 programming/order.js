

function orders(a, b, c){
   if(a> b && b>c){
    console.log("Decreasing Order");
   }else if(a<b && b<c){
    console.log("Increasing Order");
   }else{
    console.log("Neither increasing nor Decreasing order");
   }
}

orders(12, 45, 87);
orders(5, 2, 10);
orders(10, 8, 7);

