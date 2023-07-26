
//Question no.1

function add(A){

    for(let a= 0; a*a<A; a++){
        for(let b=0; b*b < A; b++){
            if(a<=b && a*a + b*b == A){
                console.log(a,b);
            }
        }
    }
}

add(20);
add(100);

//Question no. 2
function position(A,B,C){
    return (C + A - 1)%B;
}

console.log(position(2,5,1));
console.log(position(8,5,2));