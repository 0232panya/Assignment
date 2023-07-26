
//IIFE => Immediate Invocation Function Expression.
//WE CAN'T CALL THIS FUNCTION MORE THAN ONCE.
((a,b)=>{
    console.log("Hello World", a+b);
})(2,3);


//Composabilty =>
const add = (a,b) => a+b;

const mul = (a,b) => a*b;

console.log(add(2,3));
console.log(mul(add(10,20),3));

//Curry Function => IT IS RARELY USED FUNCTION.
const addA = (a,b,c)=> a+b+c;
console.log(addA(4,5,6));

const curryAdd = sum =>{
    return(a)=>{
        return(b)=>{
            return(c)=>{
                return sum(a,b,c);
            }
        }
    }
}
const result = curryAdd(addA);
console.log(result(1)(2)(3));