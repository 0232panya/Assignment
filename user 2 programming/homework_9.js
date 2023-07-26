

function multiplyarr(arr , len){

    var prev =0;
    var curr = 1;
    
    if(len< 1){
        return;
    }

    prev= arr[0];
    arr[0] = arr[0]*arr[1];


    for(let i=1; i<len-1; i++){
        curr = arr[i];
        arr[i] = prev*arr[i+1];
        prev = curr ;
    }
    arr[len-1]= arr[len-1]*prev;

    for(let i=0; i<len; i++){
        console.log(arr[i]);
    }
}

let arr = [1,2,4,5,3,5];
let len = arr.length;

multiplyarr(arr,len);

//Question 2 =>

function sorting(array, N){

    let prev = 0;
    let last = N-1;
    let swap = 0;

 while(prev<=last){
    if(array[prev]>=0){
        prev++;
    }else{
        swap = array[last];
        array[last] = array[prev];
        array[prev] = swap; 
        last--;
    }
 }
    return array;
}

let array = [-1 ,-2 ,5,6,8,-6,4,-3,7];
let N = array.length;
console.log(sorting(array,N));

