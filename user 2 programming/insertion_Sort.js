
//Question 1 => METHOD 1
function insertSort(array){

    for(let i=0; i<array.length-1; i++){
        for(let j=i+1; j<=array.length; j++){
            if(array[j]<array[i]){
                let temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}

let array = [100,58,68,74,24,33,-2];
insertSort(array);

console.log(array);

//Question 2 => METHOD 2

function insertionSort(arr){

    for(let i=0; i<arr.length-1; i++){
        let numToInsert = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > numToInsert){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = numToInsert
    }
}

let arr = [8,20,7,15,-2,-6,50];
insertionSort(arr);

console.log(arr);