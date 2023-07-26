

function quickselect(array,k){

    part(array, 0, array.length-1);
}

function part(array, low, high){

    let start = low;
    let end = high;

    let mid = Math.floor((start+end)/2);
    let pivot = array[mid];

    if(mid == k-1){
        console.log("Kth element is : " + array[mid]);
        return ;
    }

    if(start >= end){
        return;
    }

    while(start < end){
        //move start index
        while(array[start] <pivot){
            start++;
        }

        //move end index
        while(pivot< array[end]){
            end--;
        }

        if(start<=end){
            swap(array,start,end);
            start++;
            end--;
        }

        //check if pivot is k
        if(mid>k-1){
            part(array,low,end,k);
        }else{
            part(array,start,high,k);
        }
    }

}

function swap(array, start, end){
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;

}

let array = [4,3,7,11,20,19,13];
let k =5;

quickselect(array, k);