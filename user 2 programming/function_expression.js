

// var x = 10;

// const add = function(a,b){
//     console.log(a + b);
// }

// function prev(p, msg){
//     p(20, 30);
//     console.log(msg);
// }

// prev(add, "hello world");


//in 2 function bt 1 value.

const sub = function(x, y){
    console.log(x-y);
}

const multiply = function(x, y){
    console.log(x*y);
}

function combo(num){
   num(30, 20);
}

combo(sub);
combo(multiply);