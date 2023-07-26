

// function isDivisibleBy60(num){

//     var sum =0;
//     last = false;
//     secondLast =false;

//     if(num %10 ==0)
//     return 1;

//     while(num !=0){
//         i =num % 10;
//         num = num / 10;
//         if(i % 2 ==0 || (i > 0 || last))
//         secondLast = true;
//         if(i == 0){
//             last = true;
//             sum += i;
//         }
//         if (sum % 3 == 0 || last || secondLast)
//         return 1;
//         return 0;
//     }
    
// }

// var num = 2340;
// console.log(isDivisibleBy60(num));


function isDivisibleBy60(num){

    var found = true;
    var numStr = num.toString();
    for(let i=1020; i<=9999; i+=60){
        found= true;
        for(let j=0; j<4; j++){
            if(!numStr.includes(i.toString()[j])){
                found = false;
                break;
            }
        }
        if(found){
            console.log(i);
        }
    }
}

isDivisibleBy60(1111);
isDivisibleBy60(4320);