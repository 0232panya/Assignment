

 function sortedMatrix(matrix){

    let startrow = 0;
    let endcol = matrix[0].length-1;
    let endrow = matrix[0].length-1;
    let startCol = 0;


// //    for(let i=0; i<matrix.length; i++){
// //     if(matrix[i]< matrix[i+1]){
// //         return false;
// //     }
// //     return true;
// //    }
  
   
//    // for(let i=startrow; i<endcol;i++){
//    //   console.log(matrix[i][endcol]);
//    //   for(let j= startCol+1; j<=endrow; j++){
//    //      console.log(matrix[j][startCol]);  
//    //    //   if(matrix[i]<matrix[j]){
//    //    //      return true;
//    //    //   }
//    //    //   return false;
//    //   }
     
 
//    // } 
   
   let i= startrow;
   let j= startCol+1;
   while(i<endcol && j<=endrow){
       console.log(matrix[i][endcol]);
       console.log(matrix[j][startCol]);
      i++;
      j++;
      if(matrix[i][endcol] !== matrix[j][startCol] && matrix[i][endcol] > matrix[j][startCol]){
         return false;
      }
      return true;
   }
 
}

// let matrix = [
//                [1,2,3],
//                [5,6,7],
//                [9,11,12],
//              ];

let matrix = [
            [1,2,3],
            [2,6,7],
            [5,11,12],
];

console.log(sortedMatrix(matrix));


//homework 13 =>

function array2D(matrix){

   let sum = [];

   for(let i=0; i<=matrix.length; i++){
      sum.push(matrix.splice(0,5));

   }
   console.log(sum);
}

array2D([1,2,3,4,5,6,7,8,9,10]);


//homework 14 =>

function multiply(array){

 let num = 1;
   for(let i=0; i<=array.length-1; i++){
      num *= array[i];
   }
   console.log(num);
}

let array = [2,3,4,5,6,7,8];

multiply(array);
