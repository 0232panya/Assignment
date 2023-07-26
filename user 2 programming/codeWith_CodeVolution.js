
//Question 1 => FIBONACCI SERIES 

function fibSeries(num){

    let series = [0,1];
    for(let i=2; i<=num; i++){
        series[i] = series[i-1]+ series[i-2];
    }
    console.log(series);
}

fibSeries(2);
fibSeries(10);


//Question 2 => FACTORIAL OF NUMBER   = THIS DOESN'T WORK FOR HUGE NUMBERS. BOTH METHODS
    //METHOD 1 =>

function factorial(n){

   if(n == 0){
    return 1;
   }else{
    return n* factorial(n-1);
   }
}

console.log(factorial(4));
console.log(factorial(5));
//console.log(factorial(0));
//console.log(factorial(1));


//METHOD 2 =>

function factorialOfNUM(numb){

    let result =1;
    for(let i=2; i<=numb; i++){
        result *= i;
    }
    console.log(result);
}

factorialOfNUM(0);
factorialOfNUM(5);

//Question 3 =>

function isPrime(Num){

    for(let i=2; i<Num; i++){
        if(Num%i==0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(4));

//Question 4 => POWER OF NUMBER

function powerOFNum(N, pow){
     
    for(let i=0; i<=N; i++){
        return Math.pow(N,pow);
    }
}
console.log(powerOFNum(2,2));
console.log(powerOFNum(3,3));
console.log(powerOFNum(2,5));

//Question 5 => FIBONACCI SERIES IN RECURSSION.
    //IT IS THE SIMPLE PSUEDO CODE FOR FIBONACCI SERIES =>

// function recurs(fab){
//     let series = [0,1];
//     for(let i=2; i<=fab; i++){
//         let newnum = series[i-1]+series[i-2];
//         series.push(newnum);
//         //console.log(newnum);
//     }
//     console.log(series);
// }
// recurs(2);
// recurs(3);
// recurs(6);


  //IT IS THE RECURSSIVE PSUEDO CODE FOR FIBONACCI SERIES =>[0,1,1,2,3,5,8,13,21,...]= 0+1=1, 1+1=2, 1+2=3, 2+3=5, .....

function recurs(fab){
    if(fab<2){
        return fab;
    }

    return recurs(fab-1)+ recurs(fab-2);
}  

console.log(recurs(0));
console.log(recurs(4));
console.log(recurs(6));

//Question 6 => RECURSSIVE FACTORIAL OF NUMBER. 

function factNum(factnum){
    if(factnum == 0){
        return 1;
    }
    for(let i=1; i<=factnum; i++){
        return factnum * factNum(factnum-i);
    }
}

console.log(factNum(4));
console.log(factNum(5));

//SEARCHING ALGORITHMS ===>

//Question 7 => LINEAR SEARCH PROBLEM.

function lineararr(arrL, targetL){

    for(let i=0; i<=arrL.length-1; i++){
        if(arrL[i] === targetL){
            return i;
        }
    }
    return -1;
}

let arrL = [2,1,-4,10,6,8];

console.log(lineararr(arrL,10));
console.log(lineararr(arrL,0));

//Question 8 => BINEARY SEARCH PROBLEM.

function binearyarr(arrB,targetB){
    let leftInd = 0;
    let rightInd = arrB.length-1;

    while(leftInd <= rightInd){
        let middleInd = Math.floor((leftInd + rightInd) / 2);

        if(targetB === arrB[middleInd]){
            return middleInd;
        }
        if(targetB < arrB[middleInd]){
            rightInd = middleInd -1;
        }else{
            leftInd = middleInd +1;
        }
    }
    return -1;
}

let arrB = [-5,1,2,5,10,14,50];

console.log(binearyarr(arrB,10));
console.log(binearyarr(arrB,50));

//Question 9 => RECURSSIVE BINEARY SEARCH.

function recursBineary(arr,target){
    return search(arr,target,0, arr.length-1);
}

function search(arr, target,leftInd, rightInd){

    if(leftInd > rightInd){
        return -1;
    }

    let middleInd = Math.floor((leftInd + rightInd) / 2);

    if(target === arr[middleInd]){
        return middleInd;
    }
    if(target < arr[middleInd]){
       return search(arr, target, leftInd, middleInd-1);
    }else{
       return search(arr, target, middleInd+1, rightInd);
    }
}

let arr = [-2,0,1,5,7,9,10,13];

console.log(recursBineary(arr, 9));
console.log(recursBineary(arr, -2));


//SORTING ALGORITHMS ===>

//Question 10 => BUBBLE SORT

function bubbleSorting(array){
let Swapped;
   do{
    Swapped = false;
        for(let i=0; i<array.length-1; i++){
           if(array[i]>array[i+1]){
            let temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
            Swapped = true;
           }
       }
  }while(Swapped);
}

let array = [8,20,-2,4,-6];
bubbleSorting(array);
console.log(array);

//Question 11 => INSERTION SORT.

function insertionSort(arrIns){

    for(let i=0; i<arrIns.length-1; i++){
        let numToInsert = arrIns[i];
        let j = i-1;
        while(j>=0 && arrIns[j] > numToInsert){
            arrIns[j+1] = arrIns[j];
            j = j-1;
        }
        arrIns[j+1] = numToInsert
    }
}

let arrIns = [8,20,7,15,-2,-6,50];
insertionSort(arrIns);

console.log(arrIns);

//Question 12 => QUICK SORT.
function QuickSort(arrQUI){
    if(arrQUI.length < 2){
        return arrQUI;
    }

    let pivot = arrQUI[arrQUI.length-1];
    let left = [];
    let right = [];
    for(let i=0; i< arrQUI.length-1; i++){
        if(arrQUI[i] < pivot){
            left.push(arrQUI[i]);
        }else{
            right.push(arrQUI[i]);
        }
    } 
    return [...QuickSort(left), pivot, ...QuickSort(right)];
}


let arrQUI = [8,20,-2,4,-6];

console.log(QuickSort(arrQUI));

//Question 13 => MERGE SORT.

function mergeSort(arrMR){

    if(arrMR.length < 2){
        return arrMR;
    }

    const mid = Math.floor(arrMR.length / 2);
    const leftArr = arrMR.slice(0,mid);
    const rigthArr = arrMR.slice(mid);
    return merger(mergeSort(leftArr), mergeSort(rigthArr));

}

function merger(leftArr, rigthArr){

    const sortedArr = [];
    while(leftArr.length && rigthArr.length){
        if(leftArr[0] <= rigthArr[0]){
            sortedArr.push(leftArr.shift());
        }else{
            sortedArr.push(rigthArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rigthArr];
}

let arrMR = [8,20,7,15,-2,-6,50];

console.log(mergeSort(arrMR));