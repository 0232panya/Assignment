

//2D array MAtrix completed => [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

// function matrix(mat){

//    let startrow = 0;
//    let startcol = 0;
//    let endrow = mat.length-1;
//    let endcol = mat[0].length-1;
//    let count = 1;

//    while(startrow<endrow && startcol<endcol){

//    for(let i= startcol; i<=endcol; i++){
//       console.log(mat[startrow][i]);
//    }

//    startrow = startrow+1;
//    for(let i=startrow; i<=endrow; i++){
//       console.log(mat[i][endrow]);
//    }

//    endcol = endcol-1;
//    for(let i=endcol; i>=startcol; i--){
//       console.log(mat[endrow][i]);
//    }

//   endrow = endrow -1;
//   for(let i=endrow; i>=startrow; i--){
//    console.log(mat[i][startcol]);
//   }

//   startcol = startcol +1;
//    count++;

// }

// }

// let mat = [
//         [1,2,3,4],
//         [5,6,7,8],
//         [9,10,11,12],
//         [13,14,15,16]
// ]

// matrix(mat);


//2nd 2D Array Matrix => [1,5,9,13,14,10,6,2,3,7,11,15,16,12,8,4];

// function matrix(mat){

//    let startCol = 0;
//    let startrow = 0 ;
//    let endrow = mat.length-1;
//    let endcol = mat[0].length-1;

//   // while(startrow<endrow){
   
//    for(let i=startCol; i<=endrow; i++){
//       console.log(mat[i][startrow]);
//    }

//    //startCol = startCol+1;
//    for(let i=endrow; i>=startCol; i--){
//       console.log(mat[i][startCol+1])
//    }
   
//    endcol = endcol-1;
//    for(let i=startCol; i<=endcol+1; i++){
//       console.log(mat[i][endcol])
//    }

//    startrow = mat[0].length-1;
//    for(let i=endrow; i>=startCol; i--){
//       console.log(mat[i][startrow]);
//    }

// }

// let mat = [
//             [1,2,3,4],
//             [5,6,7,8],
//             [9,10,11,12],
//             [13,14,15,16]
// ]

// matrix(mat);


//3rd 2D Array Matrix => [1,2,3,4,8,7,6,5,9,10,11,12,16,15,14,13]

// function matrix(mat){
//     let startcol = 0;
//     let startrow = 0;
//     let endRow = mat.length-1;
//     let endcol = mat[0].length-1;
 
//     for(let i=startcol; i<=endcol; i++){
//        console.log(mat[startrow][i]);
//     }
 
//     startrow = startrow + 1;
//     for(let i=endcol; i>=startrow-1; i--){
//        console.log(mat[startrow][i])
//     }
 
//     //endRow = endRow - 1;
//     for(let i=startcol; i<=endcol; i++){
//        console.log(mat[endRow-1][i]);
//     }
 
    
//     for(let i=endcol; i>=startcol; i--){
//        console.log(mat[endRow][i]);
//     }
//  }
 
//  let mat = [
//              [1,2,3,4],
//              [5,6,7,8],
//              [9,10,11,12],
//              [13,14,15,16]
//  ]
 
//  matrix(mat);


function matrixRevr(matriX){

   let startrow =0;
   let startcol =0;
   let endrow = matriX.length-1;
   let endcol = matriX[0].length-1;

   for(let i=endcol; i>=startrow; i--){
      console.log(matriX[i][endrow]);
   }

   endcol= endcol-1;
   for(let i=startcol; i<=endcol+1; i++){
      console.log(matriX[i][endcol]);
   }

   for(let i=endrow; i>=startcol; i--){
      console.log(matriX[i][startcol+1]);
   }

   for(let i=startcol; i<=endrow; i++){
      console.log(matriX[i][startrow]);
   }
}

let matriX = [
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]
]

matrixRevr(matriX);