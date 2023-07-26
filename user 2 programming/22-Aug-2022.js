

function unique(array){

    let result = [];
    for(let i=0; i< array.length; i++){
        for(let j=0; j<array.length; j++){
            if(i != j && array[i] == array[j]){
                break;
            }
            if(j==array.length-1){
                result.push(array[i]);
            }
        }
    }
    console.log(result);
}

let array= [3,2,1,2,3];

unique(array);


//Question 2 =>
function pairNum(arr,N){
    
    for(let i=0; i<arr.length; i++){
        let firstNum = arr[i];
        let secondNum = N - firstNum;
        for(let j=0; j<arr.length; j++){
            if(i!=j && arr[j] == secondNum){
                console.log([firstNum,secondNum]);
                return;
            }
        }
    }
}

let arr = [10,20,10,40,50];
let N = 50;

pairNum(arr, N);


//Question 3 =>

function objA(arrObj,num){
    let obj = {};

    for(let i=0; i<arrObj.length; i++){
        let firstNum = arrObj[i];
        let secondNum = num-firstNum;

        if(!obj[firstNum.toString()]){
            obj[firstNum.toString()]=1;
        }

        if(obj[secondNum.toString()]){
            console.log([firstNum,secondNum]);
            return;
        }
    }
    return;
}

let arrObj = [10,20,30,40,50];
let num = 60;

pairNum(arrObj, num);

