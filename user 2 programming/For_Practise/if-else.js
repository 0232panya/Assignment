
// function maxWealth(accounts){
//     let result =0;
//     let m = accounts.length;

//     for(let i=0; i<m; i++){
//     let n = accounts[i].length;
//         let num = accounts[i];
//         let sum = 0;

//         for(let j=0; j<n; j++){
//             sum += num[j];
//         }
//         result = Math.max(result,sum);
//     }
//     return result;
// }

// let accounts = [[1,1,4],[2,2,3]];

// console.log(maxWealth(accounts));


// let [m, n] = readline(accounts).split(" ").map(x => parseInt(x));
// let accounts = [[1,1,4],[2,2,3]];
// for(let i = 0; i < m; i++){
//     let arr = readline(accounts).split(" ").map(x => parseInt(x)).slice(0, n);
//     accounts.push(arr);
// }

// function wealthyCustomer(accounts, m, n)
// {
//     //write your logic here
// }

// console.log(wealthyCustomer(accounts, m, n))


//Question =>

// function moretheMerrier(s,n){
//     let totalTime =0;
//     let i=0;j=0;
//     while(i<n.length && j<m.length){
//         let currTotal = 0;
//         let currMax = 0;

//         while(j<m.length && s[i] == s[j]){
//             currTotal += m[j];
//             currMax += Math.max(currMax,m[j]);
//             j++
//         }
//         totalTime += currTotal - currMax;
//         i = j;
//     }
//     return totalTime;
// }
// let n = [5,3];
// let m = [3,1,1,2,3];

// console.log(moretheMerrier(s,n,m));


//

// function smallestArray(x)
// {
//     // let num = x.toString();
//     let sum = 0;
// 	for(let i=0; i<x.length; i++){
//        sum += x%i;
//        x /= i;
//     }
//    return sum
// }


// //Driver Code
// var x = 10098;
// //x=Number(x);
// console.log(smallestArray(x));

