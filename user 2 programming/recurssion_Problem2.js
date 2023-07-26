

// function stepTillZero(num){

   

// }

// stepTillZero(27);

//Question 2 =>
var steps = 0;

function nUm(n){

    if(n==1){
        console.log(steps);
        return;
    }
    steps+=1;

    n = n-1;
    if(n%2 ==0){
        n = n/2;
    }
    if(n%3 == 0){
        n = n/3;
    }

    nUm(n);
    

   
   
}

nUm(10);
steps=0;
//nUm(15);
//nUm(49);
nUm(20);

//Question 3 =>

function sumofnum(array,sum){
    
    if(sum == 2){
        return;
    }
       
    for(let i=0; i<=array.length-1; i++){
        if(array[i]+ array[i+1] == sum){
            return array[i];
        }
    }
    sumofnum(array,sum);
}

let array = [1,2,1];
let sum = 2;
sumofnum(array,sum);