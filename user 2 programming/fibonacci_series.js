

// function fab(num){
//   let prev = 0;
//   let curr = 1;
//   let temp;

//   if(num == 1)
//   return prev;
//   else if(num ==2)
//   return curr;
//   else for(let i=3; i<=num-1; i++){
//     let newNum = series [i-1]+series[i-2];
//     return curr;
//   }
//   console.log(num);
// }


// fab(5);

function fib(n){
  if(n<1) return -1;
  if(n==1) return 0;
  if(n==2) return 1;
   
  let i = 2;
  let series =[0,1];
  while(i<=n-1){
    let newNum = series[i-1]+ series[i-2];
    series.push(newNum);
    i++;
  }
  console.log(series[i-1]);
}

fib(5);
fib(6);
fib(7)




