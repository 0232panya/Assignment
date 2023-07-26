

  var array =  [34,11,54,22,13,78];

// let n = array.length;

// array.sort();

// console.log(array[1]);


//method second => 
// let smallestnum = array[0];
// let secondsmallestnum = 0;

// for(let i=0; i<array.length; i++){
//     if(array[i]<=smallestnum){
//         secondsmallestnum = smallestnum;
//         smallestnum = array[i];
//     }else if(array[i] !== smallestnum && array[i]< secondsmallestnum){
//         secondsmallestnum = array[i];
//     }
// }

// console.log(smallestnum);
// console.log(secondsmallestnum);

//method 3rd =>

let smallestnum = array[0];
let secondsmallestnum = 0;

for(let i=0; i<=array.length; i++){
    if(array[i]< smallestnum){
        secondsmallestnum = smallestnum;
        smallestnum = array[i];
    }else if(array[i] !== smallestnum && array[i]< secondsmallestnum){
        secondsmallestnum = array[i];
    }
}

console.log(secondsmallestnum);

