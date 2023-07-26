
// var x = 10;
// x  = 20;
// let str = "pranoti";
// str = "magdum";
// const isThere = true;

// console.log(x);
// console.log(str);
// console.log(isThere);

// This is a global variable.
var y = 10;

function msg(){
    //Local variable.
    // var x = "Hello";
    {
        //block variable. it didn't get much memory. memory released before scope ends.
        var x = "Hello";
        let xs = "Hi";
        console.log(xs);
    }
    console.log(x);
   // console.log(xs);
}

msg();

