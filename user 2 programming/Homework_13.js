

//Question 1 =>

function printIntervals(arr1,arr2){

    let i = 0;
    let j = 0;

    while(i< arr1.length && j < arr2.length){
      
        let left = Math.max(arr1[i][0], arr2[j][0]);

        let right = Math.min(arr1[i][1], arr2[j][1]);

        if(left <= right){
            console.log("{" + left + "," + right + "}");
        }

        if(arr1[i][1] < arr2[j][1]){
            i++;
        }else{
            j++;
        }
    }
}

let arr1 = [[0,4],[5,10],[13,20],[24,25]];
let arr2 = [[1,5],[8,12],[15,24],[25,26]];

printIntervals(arr1,arr2);

//Question 2 =>

function sortArray(arr,k){

    let temp = arr[k];
    arr[k] = arr[arr.length-1];
    arr[arr.length-1] = temp;

    arr.sort(function(a,b){
        return a-b;
    });

    let last = arr[arr.length-1];

    
    for(let i = arr.length-1; i>k; i--){
        arr[i] = arr[i-1];
    }

    arr[k] = last;

    temp = arr[k];
    arr[k] = arr[arr.length-1];
    arr[arr.length-1] = temp;

    return 0;

}

let arr = [1,4,3,8,6,2];
let k = 2;

sortArray(arr,k);

for(let i=0; i<=arr.length; i++){

    console.log(arr[i])
}
