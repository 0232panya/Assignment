


function add(A){

    for(let a = 0; a*a < A; a++){
        for(let b = 0; b*b < A; b++){
            if(a <=b && a*a + b*b == A){
              console.log(a, b);  
            }
        }
    }

 
}


add(50);


function palindrome(n){
    var rev = 0;
    for(var i = n ;Math.trunc(i)>0; i /= 10){
        rev = ((rev*10) + (Math.trunc(i)%10));
    }
    return (n == rev);
}

function countpalindrome(min,max){
    for (var i = min; i <= max; i++){
        if(palindrome(i))
        console.log(i);
    }
}

countpalindrome(1 , 50);





