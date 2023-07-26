
// //Question no. 1=>

// function temp(degree, isRaining){

//     if(degree>=20 && degree<=25 && !isRaining){
//         console.log("go to Park");
//     }else if(degree>=18 && degree<20 && isRaining==false){
//         console.log("play in school");
//     }else{
//         console.log("Don't step out from home");
//     }
// }

// temp(20);
// temp(25);
// temp(19);
// temp(30);


// //Question no.2 =>
// function score(n){

//     n>=40 ? console.log("pass") : console.log("Fail");
// }

// score(50);
// score(25);

//Question no.3 =>

// let x = 2;

// switch(true){
//     case(x > 0):{
//         console.log("Positive");
//         break;
//     }
//     case(x == 0):{
//         console.log("Zero");
//         break;
//     }
//     case(x < 0):{
//         console.log("Negative");
//         break;
//     }
// }

// //Question no. 4 =>

// function hcf(num1,num2){
//     let hcf_value;

//     for(let i= 1; i<=num1 && i<= num2; i++){
//         if(num1 % i == 0 && num2 % i== 0){
//             hcf_value = i ;
//         }
//     }
//     console.log(hcf_value);
// }

// hcf(16,8);
// hcf(18,9)

// //Question no. 5 =>

// function revrseSTR(str){
    
//     let reverse_str = " ";
//     for(let i= str.length-1; i>=0; i--){
//         reverse_str += str[i];
        
//     }
//     console.log(reverse_str);
// }

// revrseSTR("Pranoti");
// revrseSTR("HELLO");

// //Question no. 6 =>

// function num(a,b,c){

//     if(a>=b && a>=c){
//         console.log("a is largest");
//     }else if(b>=a && b>=c){
//         console.log("b is largest");
//     }else{
//         console.log("c is largest");
//     }
// }

// num(5,2,3);
// num(2,6,4);
// num(1,2,3);

// //Question no. 7 =>

// function sum(num){
//     let output = 0;
//     while(num != 0){
//         output += num % 10;
//         num = parseInt(num / 10);
//     }
//     console.log(output);
// }

// sum(452);

// //Question no. 8 =>

// function sumOfCube(num){

//     let output = 0;
//     for(let i=num; i>0;){
//         let j = i % 10;
//         output += j * j * j ;
//         i  = parseInt(i / 10);
//     }
//     if(output == num){
//         console.log(num + " is Armstrong Number");
//     }else{
//         console.log(num + " is not Armstrong Number.");
//     }
// }

// sumOfCube(153);
// sumOfCube(125);

//Question no. 9 =>

// function stars(num){

//     for(let i=0; i<num; i++){
//         let star = " ";
//         for(let j=0; j<=i; j++){
//             star += "*";
//         }
//         console.log(star);
//     }
// }
// stars(6);

//Question no. 10 =>

function stars(N){
    let star = "";
    for(let i = 1; i<= N; i++){
        for(let j = N; j > i; j--){
           star += " ";
        }
        for(let k=0; k<i*2-1; k++){
            star += "*";
        }
        star += " \n";        
    }
    console.log(star);
}

stars(5);

//Question no. 11 =>

function fib(N){

    let series = [0,1];
    for(let i=2; i<=N-1; i++){
        let newNum = series[i- 1] + series[i-2];
        series.push(newNum);
    }
    console.log(series);
}

fib(10);

//Question no. 12 =>

function power(B, E){
    let result = 1;

    if(E == undefined){
        E =2;
    }
    for(let i=1; i<=E; i++){
      result = result * B;
    }
    console.log(result);
}

power(2,2);
power(3,3);
power(2,4);

//Question no. 13 =>

function prime(N){

    for(let i=2; i<=N; i++){
        var isPrime= true;
        for(let j=2; j<= i-1; j++){
            if(i % j == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
}

prime(10);

