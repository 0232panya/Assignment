

// function add(x, y){
//     var addition = x + y ;
//     return addition;
// }

// function sub(x, y){
//     var subtraction = x - y;
//     return subtraction;
// }
 
// function multi(x, y){
//     var multiplication = x * y;
//     return multiplication;
// }

// function div(x, y){
//     var division = x / y;
//     return division;
// }

// function modulus(x, y){
//     var reminder = x % y;
//     return reminder;
// }

// function plus(x){
//     var increment = ++x;
//     return increment;
// }

// function minus(y){
//     var decrement = --y;
//     return decrement;
// }

// var output = add(20, 30)
// console.log("Addition =", (output));

// var output = sub(60, 30)
// console.log("Subtraction =", (output));

// var output = multi(20, 20)
// console.log("Multiplication =", (output));

// var output = div(90, 30)
// console.log("Division =", (output));

// var output = modulus(26, 3)
// console.log("Reminder =", (output));

// var output = plus(20)
// console.log("Increment =", (output));

// var output = minus(10)
// console.log("Decrement =", (output));



// //Assignment no. 1 =>

// function assign(table,N){

//     for(let i = 1; i <= N; i++){
//         console.log(table*i);
//     }
// }

// assign(2,20);

// //Assignment no. 2 =>

// function square(N){

//     for(let i=N; i>0; i++){
//         console.log(i*i);
//         break;
//     }
// }

// square(2);
// square(3);
// square(10);


// //Assignment no. 3 =>


// function sweets(N){

//     if(N % 2 == 0){
//         console.log("yes");
//     }else{
//         console.log("no");
//     }
// }

// sweets(8);
// sweets(7);

// //Assignment no. 4 =>

// function triangle(a,b,c){

//     if(a+b<=c || b+c<=a || c+a<=b){
//         return false;
//     }else{
//         return true;
//     }
// }

// console.log(triangle(7,10,5));

// if(triangle !== 0){
//     console.log("its Triangle");
// }else{
//     console.log("its not-Triangle");
// }

// //Assignment no. 5 =>

// function check(x,y){

//    return ((x^y)<0);
   

// }

// console.log(check(+123,-12));

// //Assignment no. 6 =>

// console.log(Math.min(12,44,2));

//
function loopTest(){
    
    for(let i=1; i<=10; i++){
        console.log("Outer");
        for(let j=1; j<=2; j++){
            console.log("Inner");
        }
    }
}

loopTest();


