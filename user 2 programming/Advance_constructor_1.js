

//Pass By Value =>
//value means we can modify original data bcaz we don't have address to modify it. 
// function passByValue(value){
//     value += 10;
//     return(value);
// }

// const x = 10;
// console.log("Before passing value : " + x);
// let result = passByValue(x);
// console.log("passing value : " + result);
// console.log("After passing value : " + x);


//Pass by Reference => ex. => 1.
//Reference means we can change original value of the data using address.
// function passByRef(obj){
//     obj.age = 25;
// }

// var obj = {name: "Pranoti", age: 22}
// passByRef(obj)  
// console.log(obj);

//ex. => 2.
function ex2obj(array,value){
    array.push(value);
}

var arr = [1,2,3];
var array2 = ex2obj(arr, 4);
console.log(arr)
