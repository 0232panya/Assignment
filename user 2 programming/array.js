

var arraynumber = [10, 20, 30, 40];

console.log(arraynumber[2]);

//

function sumArray(n){
    let sum = 0;
    for(let i=1; i<=n.length-1; i++){
        sum += n[i];
    }
    console.log(sum);
}

sumArray([15,15,23,54,35,21,53,26,53,46,32,65,32,86,53,2,86,53]);