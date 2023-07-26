
function stat(x, y,){
    var result = x+y;
    //return is used to return output to caller
    return result;
}

var output = stat(20, 30);
console.log(output);
output = stat(-50, 30);
console.log(output);
output = stat(20, 10);
console.log("result is", stat(20, 10))

function state(x, y, z){
    var result = x*y/z;
    //return is used to return output to caller
    return result;
}

var output = state(20, 40, 02);
console.log(output);



// console.log("HELLO WORLD 1");

// const http  = require("http");

// http.createServer((req,res)=>{

// res.end("I created Server");
// console.log("HELLO WORLD 2");
    
// }
// ).listen(4201);

// console.log("HELLO WORLD 3");

// console.log(10 === -"10");
// console.log(10 === +"10");

console.log(10 + 10 +" 10" + 50 + 60 )
