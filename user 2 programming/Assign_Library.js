

//Que 1=>   Conditional statement, Iterative Statement.

function div(N){
    
    if(N % 2 == 0){
        console.log("yes");
    }else{
        console.log("No");
    }
}

div(8);
div(7);

//Que 2 =>
function triangle(a,b,c){

    if(a+b<c || b+c<a || a+c<b){
        return false;
    }else{
        return true;
    }

}

let a=7; b=10; c=5;

if(triangle(a,b,c)){
    console.log("Triangle");
}else{
    console.log("Not-Triangle");
}

//Que 3 => Function 

function checkSign(x,y){
   
    if((x^y)<0){
        console.log(true);
    }else{
        console.log(false);
    }
}

checkSign(+123,-12);

//Que 4 =>

let array = [12,44,2];

let min = Math.min.apply(this,array);

console.log(min);

//Que 5 =>  Advanced Conditional statement.

function factorial(N){
    let sum = 1;

   for(let i=N; i>0; i--){
    sum *= i;
   }
   console.log(sum);
}

factorial(3);
factorial(5);

//Que 6 => 

function factor(M){
    let sum = 1;

    for(let i=M; i>0; i--){
        sum *= i;
    }
    return sum;
}

function trailFactor(M){

    let num = 0;
    if(M % 10 === 0){
        M /= 10;
        num ++;
    }
    return num;
}

let M =5;
let output = factor(M);
let result = trailFactor(output);
console.log(result);

//Que 7 =>  Array 

function arrayN(arr, N){

    let num = arr[0];
    for(let i=1; i<N; i++){
        num = num ^ arr[i];
    }
    console.log(num);
}

let arr = [3,2,1,2,3];
let N = 5;

arrayN(arr,N);


//Que 8 =>  INCOMPLETE *****

// function findArrPair(ar, N){
//     let num = [];
//     let 

// }

//Que 9 =>

function subarray(n){

    for(let i=0; i<n; i++){
        for(let j=i; j<n; j++){
            for(let k=i; k<=j; k++){
                console.log(arrSub[k] + " ");
            }
        }
    }

}

let arrSub = [1,2,3];
subarray(arrSub.length);

//Question 10 =>

function mejorityArr(arrMEJ){

    let maxcount = 0;
    let index = -1;

    for(let i=0; i<=arrMEJ.length-1; i++){
        let count = 0;
        for(let j=0; j<=arrMEJ.length-1; j++){
            if(arrMEJ[i] == arrMEJ[j]){
                count++;
            }
            if(count > maxcount){
                maxcount = count;
                index = i;
            }
        }
        if(maxcount > arrMEJ.length/2){
            console.log(arrMEJ[index]);
        }else{
            console.log("No Mejority index")
        }

    }
}

let arrMEJ = [3,1,3,3,2];
mejorityArr(arrMEJ);

//Question 11 =>

function intersecArr(arr1, arr2){

    j = 0;
    i = 0;
    while(i<=arr1.length && j<=arr2.length){
        if(arr1[i] < arr2[j]){
            i++;
        }else if(arr1[i] > arr[j]){
            j++;
        }else{
            console.log(arr2[j++] + " ");
            i++;
        }

    }
}

let arr1 = [1,2,3,3,4,5,6]; 
let arr2 = [3,3,5];

intersecArr(arr1,arr2);

//Question 12 =>

function missingNum(arrMIS){

    let temp = [];

    for(let i=0; i<=arrMIS.length; i++){
        temp[i] = 0;
    }

    for(let i=0; i< arrMIS.length; i++){

        temp[arrMIS[i] -1] = 1;
    }

    let sum =0;
    for(let i=0; i<=arrMIS.length; i++){
        if(temp[i] == 0){
            sum = i+ 1;
        }
    }
    console.log(sum);
}

let arrMIS = [1,2,3,5];

missingNum(arrMIS);

