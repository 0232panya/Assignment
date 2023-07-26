

//Question No. 1 =>

function sortArray(a,b,result,n,m){

    a.sort((a,b) => a-b);
    b.sort((a,b) => a-b);

    let i=0; j=0; k=0;
    while(i<n && j<m){
        if(a[i] <= b[j]){
            result[k] = a[i];
            k++;
            i++;
        }else{
            result[k] = b[j];
            k++;
            j++;
        }
    }

    while(i<n){
        result[k] = a[i];
        i++;
        k++;
    }
    while(j<m){
        result[k] = b[j];
        j++;
        k++;
    }      
}

let a = [1,2,4,5,8];
let b = [3,6,7,9];
let n = a.length;
let m = b.length;

let result = new Array(n + m);
sortArray(a,b,result,n,m);

for(let i=0; i< (n+m); i++){
    console.log(result[i]);
  }



//Question no. 2 =>

function findMinValue(array){

    let min = Number.MAX_VALUE;

    for(let i=0; i<array.length; i++){
        if(array[i]<min){
            min = array[i];
        }
    }
    console.log(min);
}

let array = [5,4,2,1,3];
findMinValue(array);

