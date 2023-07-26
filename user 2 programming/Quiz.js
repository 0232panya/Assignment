

// // let n = parseInt(6);
// // sumAndAverage(n);
// // function sumAndAverage(n) {
// //     let sum = 0;
// //     let avg = 0;
// //     for(let i=1; i<=n; i++){
// //         sum += i;
// //         avg = sum/i;
// //     }
// //     console.log(sum);
// //     console.log(Math.floor(avg));
// // }



// function countOddNumbers(arr, n){

//     let even = 0;
//     let odd = 0;
//     for(let i=0; i<n; i++){
//         if(arr[i] & 1 == 1){
//             odd++;
//             console.log(arr[i])
//         }else{
//             even++;
//         }
//     }
//     console.log("even " + even);
//     console.log("Odd " + odd);
// }

// let arr = [2,3,4,5,7,9];
// let n = arr.length;
// countOddNumbers(arr,n);


// function selectionsort(array){
//     let minimum;
//     for(let i=0; i<array.length-1; i++){
//         minimum = i;
//         for(let j=i+1; j<array.length; j++){
//             if(array[j] < array[minimum]){
//                 minimum = j;
//             }
//         }
//     }
//     console.log(minimum);
// }

// let array = [10,2,4,5,8];
// selectionsort(array);


// function QuickSort(arr, start, end){

//     let pivot = Math.floor((start + end)/2);

//     if(start >pivot && end < pivot){
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         temp ++;
//         return temp;
//     }
//     if(start < pivot && end > pivot){
//         return arr[start] && arr[end];
//     }

// }

// let arr = [15,13,2,17,9,12,0,4];

// console.log(QuickSort(arr,0,arr.length));


//

function incrementUniqueArr(array){

    let increment = 0; 
    for(let i=0; i<=array.length-1; i++){
        if(array[i] == array[i+1]){
            increment = array.indexOf(array[i+1]+1);
            increment++;
        }
         
    }
    console.log(increment);
}

let array = [1,1,5,5];

incrementUniqueArr(array);

//MERGE SORT =>

function merge(arr){

    let right = arr.length;
    let left = 0;

    let mid = Math.floor((left))

}

let arr = [2,4,0,8,3,1];

console.log(merge(arr));