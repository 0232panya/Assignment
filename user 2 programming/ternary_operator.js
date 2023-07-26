

function large(a, b, c){

   a>b && a>c ? console.log("A is largest") : b>a && b>c ? console.log("B is Largest" ): console.log("C is largest");
}

console.log(large(1,2,3));
console.log(large(3,2,1));
console.log(large(2,3,1));