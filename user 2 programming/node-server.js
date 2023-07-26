
//1.Import Library http.

const http =require("http");

console.log("hello world 1");

//2.Create Server
http.createServer((req, res)=>{
    console.log("hello world2")
    res.end("Welcome to nodeJS Server");
}).listen(4000); //localhost:4000

console.log("hello world 3");
