
//freeze() => & isFrozen()

const FreezeObj = {
    "Name" : "Pranoti"
}

Object.freeze(FreezeObj); //FREEZED THE FreezeObj OBJECT BY USING FREEZE METHOD.
FreezeObj.lastName = "Magdum";

console.log(FreezeObj);
console.log(Object.isFrozen(FreezeObj)); // IT RETURN TRUE IF OBJECT IS FROZEN IF NOT THEN RETURNS FALSE.

//seal() => & isSealed() 

const sealObj = {
    "Education" : "12th"
}

Object.seal(sealObj);
sealObj.Education = "B.com";
sealObj["college"] = "VCK"; //DON'T ALLOW TO ADD NEW PROPERTIES IT ONLY CAN CHANGE VALUES OF EXISTING PROPERTIES.

console.log(sealObj);
console.log(Object.isSealed(sealObj)); // IT RETURN TRUE IF OBJECT IS SEALED IF NOT THEN RETURNS FALSE.

//Map Function =>

const num = [1,2,3,4,5,6,7];

/* function number(array){

     let result = [];
     for(let i=0; i<array.length; i++){
         result.push(array[i]*2);
     }
     console.log(result);
 }

 number(num); */

let usingMap = num.map(num => num*2);

console.log(usingMap);

const nam = ['pranoti', 'prakash','magdum','mangaon','kolhapur'];

let getnum = nam.map(nam => nam.length);

console.log(getnum)

//filter function =>

const n = [12,4,15,82,33,53,51,67];

const isEven = (num) => num%2==0;

console.log(n.filter(isEven)); //using filter() getting even numbers
//console.log(n.map(isEven)); // using map() getting boolean values.

console.log(nam.filter(nam => nam.length<=6));

//Questions =>

const students = [
    {"name" : "Pranoti", "age" : 23},
    {"name" : "Neha", "age" : 24},
    {"name" : "Rutuja", "age" : 25},
    {"name" : "sujit", "age" : 23},
    {"name" : "Prajwal", "age" : 17}
]

let majorStud = students.filter(students =>students.age<=18);
console.log(majorStud);

//Questions 2 =>

let nums = [2,4,7,9];
            
console.log(nums.reduce((prevNum, CurrNum) => prevNum+CurrNum));