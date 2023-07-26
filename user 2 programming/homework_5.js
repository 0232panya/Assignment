

// function list(name){

//     if(name == "Alex"){
//         console.log("Alex is a Developer");
//     }else if(name == "John"){
//         console.log("John is a Artist");
//     }else if(name == "Strek"){
//         console.log("Strek is a Singer");
//     }else if(name == "Smith"){
//         console.log("Smith is a Actor");
//     }else{
//         console.log("That name is not in list");
//     }
// }

// list("Alex");
// list("Smith");
// list("John");
// list("Strek");


// function oneDigit(num){
//     return (num >= 0 && num < 10);
// }

// function isPalUnit(num , dupNum){
//     if(oneDigit(num)){
//     return (num ==(dupNum)%10);
//     }
//     if (!isPalUnit(parseInt(num/10),dupNum))
//     return false;
//     dupNum =parseInt(dupNum/10);
//     return (num%10 == (dupNum)%10);

// }

// function isPal(num){
//     if(num < 0)
//     num = -num;
//     var dupNum=num;
//     return isPalUnit(num, dupNum);
// }

// function printPalPrimeLessThan(n){
//     var prime = Array.from({length: n+1},(_, i) => true);
//     for(p =2; p*p <=n; p++){
//         if(prime[p]){
//             for(i = p*2; i <= n; i+= p){
//                 prime[i] = false;
//             }
//         }
//         for(p =2; p<=n; p++){
//             if (prime[p] && isPal(p)){
//                 console.log(p);
//             }
//         }
//     }
// }

// printPalPrimeLessThan(50);






