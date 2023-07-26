


//Question =>

// let N = 1;
// function show(){
//     console.log("HI", N);
//     //N++;
//     show();
// }

// show();



//Question 3 =>

// function printIncNum(N){

//     if(N == 0){
//         return;
//     }

//     printIncNum(N-1);
//     console.log(N);
// }

// printIncNum(5);


// //Question 4 =>

// function isSorted(array, i){

//     //base condition.
//     //1. check if end of array.
//     if(i == array.length-1){
//         return true;
//     }

//     //2. is next number less than current number.
//     if(array[i]>array[i+1]){
//         return false;
//     }

//     //
//     return isSorted(array, i+1);
// }

// let array = [1,2,3,4,5];

// console.log(isSorted(array, 0));


// //BASIC PROBLEM SOLVING =>

// //Question 1 =>

// function pali(str, i, j){

//     //BASE CONDITION. 
//     //1. CHECK IF WE ARE IN CENTER.
//     if(i == str.length-1){
//         return true;
//     }

//     //2. CHECK IF VALUE ARE NOT SAME.
//     if(str[i] !== str[j]){
//         return false;
//     }

//     return pali(str, i+1, j-1);

// }

// let str = "0pp0";
// console.log(pali(str,0,str.length-1));


//
// let num = 1;
// function showName(){
//   console.log("Hello " + num);
//   num++;
//   showName();
// }

// showName();

//Question => Factorial Question

function factorial(n){

  if(n==0){
    return 1;    
  }else{
    return n*factorial(n-1);
  }
}

console.log(factorial(5));

//Question  =>

function till0(N){

  if(N == 0){
    return 0;
  }else{
    return 1 + till0(parseInt(N/10))
  }
}

function countstep(X){

  var c = 0;
  var
}

let N = 27;

till0(N);