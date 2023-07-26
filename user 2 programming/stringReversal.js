
function reverse(str){
    let output = "";
    for(let i= str.length-1; i>=0; i--){
        output += str[i];
    }
    console.log(output);
}
let str = "Pranoti";
reverse(str);

var week ="";
var day = new Date().getDate(week);

if(week){
    console.log("It's Monday");
}else if(week){
    console.log("It's Tuesday");
}else if(week){
    console.log("It's Wednesday");
}else if(week){
    console.log("It's Thursday");
}else if(week){
    console.log("It's Friday");
}else if(week){
    console.log("It's Saturday");
}else{
    console.log("It's Sunday");
}

console.log(week);

function reversal(string){
    let output = "";
    for(let i=string.length-1; i>=0; i--){
        output += string[i];
    }
    console.log(output);
}

let string = "panya";
reversal(string);

let d = new Date()
let days = "";

switch(d.getDay(days)){
    case 1 : 
      days = "Monday";
      break;
    case 2 :
      days = "Tuesday";
      break;
    case 3 :
      days = "Wednesday";
      break;
    case 4 :
      days = "Thursday";
      break;
    case 5 : 
      days = "Friday";
      break;
    case 6 :
      days = "Saturday";
      break;
    case 7 :
      days = "Sunday";     
}

console.log(days);

function printStar(star){
    let stars = "";

    for(let i=0; i<=star; i++){
        for(let j=star; j<i; j++){
            stars +=" ";
        }
        for(let k=i; k<=i*2-1; k++){
            stars += " * ";
        }
        stars += "\n";
    }
    console.log(stars);
}

printStar(5);

function star(N){
    let sum = "";

    for(let i=0; i<=N; i++){
        for(let j=N; j>i; j--){
            sum += " ";
        }
        for(let k=i; k<N; k++){
            sum += " * ";
        }
        sum += "\n";
    }
    console.log(sum);
}
star(5);

//Question => Array Reversal Question 

function revWeek(weekarr){

    let output = [];
    for(let i=weekarr.length-1; i>=0; i--){
        output += weekarr[i] + " ";
       // break;
    }
    console.log(output);
}

let weekarr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

revWeek(weekarr);

//

function prime(num){

//    for(let i=2; i<= num; i++){
//     if(num % i == 0 ){
//         return false;
//     }
//     return true;
//    }

    let sum =0;
    for(let i=2; i<=num; i++){
        sum += num%i;
    }
    console.log(sum);
}

prime(10);