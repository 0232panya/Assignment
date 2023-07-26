

//for loop.
//print 1 to 100.
// starting point.
//Ending point or how long should run.
//For - 1st parameter => Beging of loop.


// for 1 to 100

// for (let i=1; i<=100; i++){
//     console.log(i);
// }


// // for 100 to 1

// for (let i=100; i>=1; i--){
//     console.log(i);
// }

//while loop.

// let j=3;
// while(j<=20){
//     console.log(j);
//     j+=3
// }



// for(let i=2; i <=10; i+=2){
//     let arr = " ";
//     let flag = true;
//     for(let j =i; j>=i;){
//         arr.push;
//         console.log(j)
//         if(flag){
//             j = j-3;
//         }else{
//             j= j-1;
//         }
//         flag = !flag;
//     }
//     console.log(arr);
// }


//Pyramids =>

function stars(N){

    let star = "";
    for(let i=0; i<=N; i++){
        for(let j=N; j<i; j++){
            star += " ";
        }
        for(let k=i; k<=i*2-1; k++){
            star += "*";
        }
       star += "\n";
    }
    console.log(star);
}

stars(5);