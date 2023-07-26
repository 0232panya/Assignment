
//IT RETURNS SUM OF NUMBER
function sumDigit(num){ 

    let sum = 0;
    while(num>0 || num > 9){
        if(num == 0){
            num = sum;
            sum = 0;
        }
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    console.log(sum);
}

sumDigit(12345);// ans => 6 (1+2+3+4+5)=>15

//IT RETURN SUM OF SINGLE DIGIT NUMBER 

function singleDigit(N){
    
let num = N.toString();
if(num.length == 1){
    return num;
}

let sum= 0;
for(let i=0; i<num.length; i++){
    sum += Number(num[i]);
}
  if(sum>9){
    singleDigit(sum);
  }else{
    console.log(sum);
  }
}

singleDigit(12345);
singleDigit(123456);

