

// function prime(sum){
     
//     for(let i=2; i<sum; i++){
//         if(sum % i ==0) {
//             return false;
//         }       
//     }
//      return true;    
// }

// function sumPrime(a){
//     for(let i=2; i<a-2 || a<5; i++){
//         if(prime(i) && prime(a-i)){
//             console.log(i, a-i);
//         }
//         return;
//     }
//     console.log("No Prime number found");
// }

// sumPrime(15);
// sumPrime(5);
// sumPrime(9);


function isPrime(num){
    for(let i=2; i<num; i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

function printPrime(N){
    for(let i=0; i<=N; i++){
        if(isPrime){
            console.log(i);
        }
        return;
    }
}

printPrime(10);