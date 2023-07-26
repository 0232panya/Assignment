

// for (let i=1;i<=10;i++){
//     console.log(i);
// }

// for(let i=1; i<=10; i+=i){
//     console.log(i);
// }

// function findMinMAx(array){
//     let min=Number.MAX_VALUE;
//     let max=Number.MIN_VALUE;

//     for(let i=0; i<array.length; i++){
//         if(array[i]<min){
//             min=array[i];
//         }
//         if(array[i]>max){
//             max=array[i];
//         }
//     }
//     console.log('min: ' + min);
//     console.log('max: ' + max);
// }
// findMinMAx([3,2,15,6]);

// function findMaxProfit(array){
//     let maxProfit = 0;
//     let buyingPrice = 0;
//     let sellingPrice = 0;
//     let changeBuyingPrice = true;

//     for(let i = 0; i<array.length-1; i++){
//         sellingPrice = array[i + 1];
//         if(changeBuyingPrice){
//             buyingPrice = array[i];
//         }

//         if(sellingPrice<buyingPrice){
//             //loss
//             changeBuyingPrice = true;
//             continue;
//         }else{
//             //Profit
//             let Profit = sellingPrice - buyingPrice;
//             if(maxProfit < Profit){
//                 maxProfit = Profit ;                
//             }
//             changeBuyingPrice = false;
//         }
        
//     }
//     console.log(maxProfit);
// }

// findMaxProfit([100,180,260,310,40,535,695]);


// //addition =
// function num(x,y){
//     let add = x +y ;
//     return add;
// }
// console.log(num(20,10));

// //Substraction =
// var x = 20;
// var y = 20;

// console.log("sub : " + (x-y));

// //Multiplication =
// var x = 20;
// var y = 10;

// var multi = (x*y);
// console.log(multi);

// //divide =
// function divide(x,y){
//     console.log(x/y);
// }

// divide(30,15);


// function maximumProfit(array){
//     let maxProfit = 0;
//     let buyingPrice = 0;
//     let sellingPrice = 0;
//     let changeBuyingPrice = true;

//     for(let i = 0; i < array.length - 1; i++){
//         sellingPrice = array[i+1];
//         if(changeBuyingPrice){
//             buyingPrice = array[i];
//         }

//         if(sellingPrice<buyingPrice){
//             //loss
//             changeBuyingPrice = true;
//             continue;
//         }else{
//             let profit = sellingPrice - buyingPrice;
//             if(profit>maxProfit){
//                 maxProfit = profit;
//             }
//             changeBuyingPrice = false;
//         }
//     }
//     console.log(maxProfit);
// }

// maximumProfit([100,180,260,310,40,535,695]);


// function reverseArr(array){
//     let result = [];
//     let j =0; 

//     for(let i = array.length -1; i>= 0; i-- ){
//         result[j]= array[i];
//         j++;
//     }
//     console.log(result);
// }

// reverseArr([1,2,3,4,5]);


// function subReverseArr(array){
//     if(array.length == 1){
//         return true;
//     }

//     //step 1 : Find decreasing Array 
//     let startArray;
//     for(let i=0; i<array.length; i++){
//         if(array[i]>array[i+1]){
//             startArray = i;
//             break;
//         }
//     }

//     //endArray
//     let endArray;
//     for(let i =startArray; i<array.length; i++){
//         if(array[i]<array[i+1] || i == Array.length-1){
//             endArray=i;
//             break;
//         }
//     }

//     let decreasingArray = [];
//     let j = 0;
//     for(let i=startArray; i<=endArray; i++){
//         decreasingArray[j]=array[i];
//         j++;
//     }

//     //reverse decreasing array 
    
//     for(let i=decreasingArray.length-1; i>=0; i--){
//         array[startArray]=decreasingArray[i];
//         startArray++;
//     }
//     console.log(array);

//     //check if array is sorted or not

//     for(let i = 0; i>=0; i++){
//         if(array[i]<array[i+1]){
//             console.log(true);
//             return;
//         }
//     }
//     console.log(false);

// }

// subReverseArr([1,2,5,4,3]);

// function isPrime(N){
    
//     for(let i=2; i<N; i++){
//         let prime = true;
//         for(let j=2; j<=i-1; j++){
//             if(i%j == 0){
//                 prime = false;
//                 break;
//             }
            
//         }
//         if(prime){
//             console.log(i);
//         }
        
//     }
// }

// isPrime(7);


// function stat(n){
//     for(let i=0; i <=n; i++){
//        if(i == 5){
//         break;
//        }   
            
//     }
//     for(let i =0; i<=n; i++){
//         if(i == 5){
//             continue;
//         }
//         console.log(i)
//     }
// }

// stat(9);


// function sumTheNum(n){
//     let sum = 0;

//     for(let i=0; i<n; i++){
//         if(i>9 == 0 || n>0){
//             sum += n %10;
//             n = Math.floor(n/10);
//             n = sum;
//         }
//         console.log(sum);
//     }
    
// }

// sumTheNum(12345);

//reverse pyramid
function reversepyramid(N){
    let sum = "";
    for(let i=1; i<=N; i++){              // 1 2 3 4 5 6 
        for(let j=1; j<i; j++){           //  2 3 4 5 6
            sum += " ";                   //   3 4 5 6 
        }                                 //    4 5 6 
        for(let k=i; k<=N; k++){          //     5 6
            sum += k + " ";               //      6
        }
        sum+= " \n";
    }
    console.log(sum);
}

reversepyramid(6);

//second smallest number using loop method

function sortNum(smallnum){

    for(let i=smallnum; i<smallnum.length; i++){
        if(Math.min(smallnum)< i+smallnum){
            return i;
            
        }
    }
}


console.log(sortNum([11,34,54,22,13,78]));


//write prime numbers =>
function prime(num){
    
    for(let i=2; i<=num; i++){
        let isprime = true;
        for(let j=2; j<= i-1; j++){
            if(i%j == 0){
                isprime = false;
                break;
            }
        }
        if(isprime){
            console.log(i)
        }
    }
}

prime(10);


//star prints =>

function starsprint(star){

    for(let i=0; i<=star; i++){ //prints rows           //  *
        let stars = " ";                                //  **
        for(let j=0; j<=i; j++){ //prints columns       //  ***
            stars += "*";                               //  ****
        }                                               //  *****
        console.log(stars);
    }
}

starsprint(5);

//star pyramids =>

function starPyramid(stars){

    let star ="";
    for(let i=0; i<=stars; i++){  // rows                   //      *
        for(let j=stars; j>i; j--){ // spaces               //     ***
            star += " ";                                    //    *****
        }                                                   //   *******
        for(let k=1; k<=i*2-1; k++){ // printing stars      //  *********
            star += "*"; 
        }
        star += "\n";
    }
    console.log(star);
}

starPyramid(5);

//print pyramid numbers => "New row start from 1"
function numPyramid(N){                                 //     1
    let num = "";                                       //    123
    for(let i=0; i<=N; i++){  // rows                   //   12345
        for(let j=N; j>i; j--){                         //  1234567
            num += " ";                                 // 123456789
        }
        for(let k=1; k<= i*2-1; k++){  // print num
            num += k; // k print the num from 1 to till 6 rows . 0th row skip bcoz we started row from 1st row.
        }
        num += "\n";
    }
    console.log(num);
}
numPyramid(5);


// num pyramid => "start from 1 number"

function numPyr(M){                            
                                              
    let numM= "";                               //      1
    for(let i=1; i<=M; i++){                    //     2 3
        for(let j=M; j>i; j--){                 //    3 4 5
            numM += " ";                        //   4 5 6 7 
        }                                       //  5 6 7 8 9
        for(let k=i; k<=i*2-1; k++){
            numM += k + " ";
        }
        numM += "\n";
    }
    console.log(numM);
}

numPyr(5);

// num pyramid => "pyramid of only one number"

function oneNumPyr(A){
    let numA ="";
    for(let i=0; i<=A; i++){                   //      6
        for(let j=A; j>i; j--){                //     6 6
            numA += " ";                       //    6 6 6
        }                                      //   6 6 6 6
        for(let k=i; k<= i*2-1; k++){          //  6 6 6 6 6
            numA += A + " ";                   // 6 6 6 6 6 6
        }
        numA += "\n";
    }
    console.log(numA);
}

oneNumPyr(6);

// reverse star pyramid =>

function reverseStar(rev){
    let revstar = "";
    for(let i=1; i<=rev; i++){              //  * * * * *
        for(let j=1; j<i; j++){             //   * * * *
            revstar += " ";                 //    * * *
        }                                   //     * * 
        for(let k=i; k<=rev; k++){          //      *
            revstar += "*" + " ";
        }
        revstar += "\n";
    }
    console.log(revstar);
}

reverseStar(5);

// pyramid and reverse pyramid => " Diamond shape pyramid."

function pyramid(B){
    let pyrB = "";                          //          1
    for(let i=0; i<=B; i++){                //         2 3
        for(let j=B; j>i; j--){             //        3 4 5
            pyrB += " ";                    //       4 5 6 7
        }                                   //      5 6 7 8 9 
        for(let k=i; k<=i*2-1; k++){        //      1 2 3 4 5 
            pyrB += k + " ";                //       2 3 4 5 
        }                                   //        3 4 5 
        pyrB += '\n';                       //         4 5
    }                                       //          5

    for(let h=1; h<=B; h++){
        for(let l=1; l<h; l++){
            pyrB += " ";
        }
        for(let m=h; m<=B; m++){
            pyrB += m + " ";
        }
        pyrB += "\n";
    }
    console.log(pyrB);
}

pyramid(5);

// reverse pyramid and pyramid => "Sand clock shape."

function sandShapePyramid(star){

    let sum = "";
    for(let i=1; i<=star; i++){             // * * * * * 
        for(let j=1; j<i; j++){             //  * * * *
            sum += " ";                     //   * * *
        }                                   //    * * 
        for(let k=i; k<=star; k++){         //     *
            sum += "*" + " ";               //    * *
        }                                   //   * * *
        sum += "\n";                        //  * * * *
    }                                       // * * * * *
   for(let i=2; i<=star; i++){
       for(let j=star; j>i; j--){
        sum += " ";
       }
       for(let k=i; k<=i*2-1; k++){
        sum += "*" + " ";
       }
       sum += "\n";
   }
   console.log(sum);
}

sandShapePyramid(5);

// reverse pyramid and pyramid => "Sand clock shape."

function sandShapePyr(num){
    let sum = "";
    for(let i=1; i<=num; i++){
        for(let j=1; j<i; j++){
            sum += " ";
        }
        for(let k=i; k<=num; k++){
            sum += k + " ";
        }
        sum += "\n";
    }
    for(let i=1; i<=num; i++){
        for(let j=num; j>i; j--){
            sum += " ";
        }
        for(let k=i; k<=i*2-1; k++){
            sum += k + " ";
        }
        sum += "\n";
    }
    console.log(sum);
}

sandShapePyr(5);


