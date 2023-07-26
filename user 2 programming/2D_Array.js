


//Diagonal Matrix =>

// function diagonalMatrix(A){

//    for(let i=0; i<A.length; i++){
//       for(let j=0; j<A.length; j++){
//          if(i != j && A[i][j] !== 0){
//             return false;
//          }
//       }
//       return true;
//    }
// }

// let A = [
//          [0, 0, 0, 0],
//          [0, 0, 0, 0],
//          [0, 0, 0, 0],
//          [0, 0, 0, 0]
// ]
// console.log(diagonalMatrix(A));


// //sum of columns =>

// function sumCols(N){
//    let result = [];
   
//    for(let i=0; i<N[0].length; i++){
//       let sum = 0;
//       for(let j=0; j<N.length; j++){
//          sum += N[j][i];
//       }
//       result.push(sum);
//    }
//    console.log(result);
// }

// let N = [
//          [2,3,1,5],
//          [4,1,2,3],
//          [5,5,2,3],
//          [1,2,3,1]
// ]

// sumCols(N);

// //sum of diagonal triangles =>

// function diagonalTriangle(M){

//    let upperSum = 0;
//    let lowerSum = 0;
//    for(let i=0; i<M.length; i++){
//       for(let j=0; j<M.length; j++){
//             if(j<= i){
//                lowerSum += M[i][j];
//             }
//             if(i<=j){
//                upperSum += M[i][j];
//             }
        
//       }
//    }
//    console.log("Lower sum : " + lowerSum);
//    console.log("Upper sum : " + upperSum);
// }


// let M = [
//    [2,15,4],
//    [1,2,15],
//    [2,10,7]
// ]
// diagonalTriangle(M);


//Self tried => //isn't completed yt.

// function matrix(mat){
//    var startrow = 0;
//    var startcol = 0;
//    var endrow = mat.length-1;
//    var endcol = mat[0].length;

//    for(let i=startrow; i<=endcol; i++){
//       console.log(i);
//    }

//    for(let i=endcol; i<=endrow; i++){
//       console.log(mat[i][endrow]);
//    }
// }

// let mat = [
//             [1,2,3],
//             [1,2,3],
//             [1,2,3]
//           ]
 
// matrix(mat);


// function add(){
//    var x = function(){
//       console.log(10);
//       return;
//    }
//  return x();
// }
// let result = add();
// console.log(result);

// const add = function(){
//    var x=10;
//    console.log(x);
//    return function add2(){
//       var y=20;
//       console.log(x+y);
//    }

// }
// var result = add();
// var result2 = result();
// console.log(result2)


function diaoMatrix(Mat){

    for(let i=0; i<=Mat.length; i++){
        for(let j=0; j<Mat.length; j++){
            if(i !== j && Mat[i][j] !== 0){
                return false;
            }
        }
        return true;
    }
}

let Mat = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
]

console.log(diaoMatrix(Mat));