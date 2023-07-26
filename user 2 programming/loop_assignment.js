

// console.log("table =2");

// // table = 2

// let a = 2;
// while(a <= 20){
//     console.log(a);
//     a+=2;
// }

// console.log("table =3");

// // table = 3

// let b = 3;
// while(b <= 30){
//     console.log(b);
//     b+=3;
// }

// console.log("table =4");

// //table =4

// let c = 4;
// while(c <= 40){
//     console.log(c);
//     c+=4;
// }

// console.log("table =5");

// let d = 5;
// while(d <= 50){
//     console.log(d);
//     d+=5;
// }

// console.log("table =6");

// let e = 6;
// while(e <= 60){
//     console.log(e);
//     e+=6;
// }

// console.log("table =7");

// let f = 7;
// while(f <= 70){
//     console.log(f);
//     f+=7;
// }

// console.log("table =8");

// let g = 8;
// while(g <= 80){
//     console.log(g);
//     g+=8;
// }

// console.log("table =9");

// let h = 9;
// while(h <= 90){
//      console.log(h);
//      h+=9;
// }

// console.log("table =10");

// let i = 10;
// while(i <= 100){
//     console.log(i);
//     i+=10;
// }

// console.log("perfect square");

// //perfect square.

//   /*1. loop Square*/
// function square(N){
    
//    for(let i= 1; i<=N; i++){
//       console.log(i*i);
//    }   
// }
// square(20);

//   /*2. number Square*/

// function numSquare(M){
//     let num;

//     for(let i= 1; i<=M; i++){
//         num = i*M;
//     }
//     console.log(num);
// } 
// numSquare(12);
// numSquare(4);

// //simple Question =>
 
// //1.
// for(let i=1; i<=5; i++){
//     console.log("I Purple you");
// }

// //2.
// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// //3.
// let N= 100;
// for(let i=0; i<=N; i++){
//     console.log(i);
// }

// //4.
//   /*sum the number*/
// function sum(N){
//     let num = 0;

//     for(let i=1; i<=N; i++){
//         num += i;
//     }
//     console.log(num);
// }

// sum(100);

// //5.
//  /*break statement*/
// for(let i=1; i<=5; i++){
//     for(let j=0; j<=5; j++){
//         if(i==4){
//             break;//IT ONLY BREAKS THE NUMBER EQUAL(i.e. 4)
//         }
//         console.log(i,j);
//     }
// }

// //6.
//   /*1.continue statement*/
// for(let i=1; i<=5; i++){
//    if(i == 4){
//     continue; //IT SKIP THE NUMBER EQUAL TO(i.e. 4)
//    }
//    console.log(i);
// }

//   /*2.continue statement*/
// for(let i=1; i<=3; i++){
//     for(let j=1; j<=3; j++){
//         if(j == 2){
//         continue;//IT ONLY SKIP THE CONDITIONAL NUMBER(i.e 2) AND CONTINUE LOOPING.
//         }
//         console.log(i,j);
//     }
// }

// //7.
//   /*sum of positive number*/
// function sum(N){
//     let num = 0;

//     for(let i=1; i<=N; i++){
//         if(i%2 == 0){
//             num += i;
//         }
//     }
//     console.log(num);
// }
// sum(10);
// sum(20);


// //8.
//  /*sum of two number*/
// function sumNum(arr1,arr2){
//     let num = 0;

//     for(let i=0; i<arr1.length; i++){
//         let pro = arr1[i] + arr2[i];
//         num += pro;
//     }
//    console.log(num);
// }

// sumNum([1,2,3,4,5],[1,2,3,4,5]);

// //
// function sumJ(J){
//     let num = 0;

//     for(let i=0; i<J.length; i++){
//         num += J[i];
//     }
//     console.log(num);
// }
// sumJ([1,2,3,4,5]);


//

// function div(n){
//     let num= 0;
//     for(let i=0; i<=n; i++){
//         if(n %i == 0){
//         num++          
//         }
//     }
//     console.log(num)
// }
// div(100);

//
function arr(num){
    let sum = 0;
    for(let i=2; i<num.length; i++){
        sum += num[i];
    }
    console.log(sum);
}

arr([1,2,3,7,5]);

//
