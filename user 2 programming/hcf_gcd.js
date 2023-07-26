

//sum factor. 

// function sumTilN(n){
//     let sum = 0;
//       for(let i =1; i<=n; i++){
//         sum = sum+i; //0+1=1, 1+2=3, 3+3=6
//         //sum+=i;
//       }
//       console.log(sum);
// }

// sumTilN(15);


//hcf factor.

// let hcf_value;

// const first_number = 36;
// const second_number = 60;

// for (let i = 1; i <= first_number && i <= second_number; i++){

//     if(first_number % i == 0 && second_number % i == 0){
//         hcf_value = i;
//     }
    
// }

// console.log("HCF of 1st and 2nd number: " + hcf_value)


//star loop.


// function stars(m){
//     for(let i = 1; i<=m; i++){
//         let star="";
//         for (let j =1; j<= i; j++){
//             star += "*";
//         }
//         console.log(star);
//     }
// }

// stars(5);

//Another type of star loop.

// let num= 5;
// let output_string = "";

// for(let i =1; i<=num; i++){

//     for(let j = num; j>i; j--){
//         output_string += " ";
//     }
//     for(let k = 0; k < i*2 - 1; k++){
//         output_string +="*";
//     }
//     output_string += "\n";

// }

// console.log(output_string);

//using function.=>
// function printStar(num){
//      let star=""
//     for(let i =1; i<=num; i++){

//              for(let j = num; j>i; j--){
//                  star += " ";
//          }
//          for(let k = 0; k < i*2 - 1; k++){
//             star +="*";
//         }
//         star += "\n";
// }
//     console.log(star);
// }

// printStar(5);

// function number(total_num){
//     let num =""
//     for (let i=1; i<=total_num; i++){
//         for(let j =1; j<=total_num-i; j++){
//             num += " ";
//         }
//         for (let k=0; k < i *2-1; k++){
//             num += "*";
//         }
//         num += "\n";
//     }
//     console.log(num);
// }

// number(5);

// function num(n){
//     let n1 = 0; 
//     let n2 = 1;
//     for (let i =1; i<=n; i++){
//         n = n1 + n2;
//     }
//     console.log(n);
// }

// num();

// var n1 = 0;
// var n2 = 1;
// var next_num
// let inner = 0;
// for(let i =0; i<next_num; i++){
//     for(let j=1; j<next_num+1; j++){
//         next_num = n1 + n2;
//     }
//     console.log(next_num + (n1 +n2));
// }


var rows = 5;
var cols = 5;

let str;
for(let i =1; i<=rows;i++){
    str = " ";
    for(let j =1; j<=(rows-i);j++){
        str += "*";
    }
    console.log(str);
}





