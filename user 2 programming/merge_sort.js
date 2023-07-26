

// function mergeSort(arr1,arr2){

//     let sum ;

//     for(let i=0; i<=arr1.length-1; i++){
//         for(let j=0; j<=arr2.length-1; j++){
//             if(arr1[i]<arr1[i+1]){
//                 // console.log(arr1[i]);
//                 sum += arr1[i];
//             }

//             // if(arr2[j]<arr2[j+1]){
//             //     console.log(arr2[j])
//             // }
//             if(arr2[j]<arr1[i]){
//                 // console.log(arr1[i]);
//                 sum += arr1[i];
//             }
                
//             if(arr1[i]<arr2[j]){
//                 // console.log(arr2[j])
//                 sum += arr2[j];
//             }
//         }
//     }
//     console.log(sum)
// }

// let arr1 = [2,10,18,20,23];
// let arr2 = [4,9,19,25];

// mergeSort(arr1,arr2);


//Question 2 =>

// function mergeSort(array){
// //let sum =[];

//     for(let i=0; i<=array.length-1; i++){
//         for(let j=0; j<array.lenght; j++){
//             if(array[i]<array[i+1]){
//                 //sum = array[i];
//                 console.log(array[i]);
//             }else{
//                 console.log(array[j]);
//             }
//         }
//         // if(array[i+1]<array[i]){
//         //     //sum = array[i+1];
//         //     console.log(array[i+1]);
//         // }
//     }
//    // console.log(sum);
//       return array;
// }

// let array = [2,5,8,12,3,6,7,10];

// mergeSort(array);

//Question 3 =>

function merger(start,end){

   if(start< end){
    let mid = Math.floor((start+end)/2);
    
   }
}

//

function soringByMerge(array, l ,m, r){

   let left = m -l +1;
   let rigth = r- m;

   var L = new Array(rigth);
   var R = new Array(left);

   for(let i=0; i<left; i++)
      L[i]= arr[l+i];
    
   for(let j=0; j<rigth; j++)
      R[j] = arr[m +l +i];
      
   var i=0;
   var j=0;
   
   var k=l;

   while(i)
   
}