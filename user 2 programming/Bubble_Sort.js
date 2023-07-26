


function bubbleSort(array){

    for(let i=0; i<array.length-1; i++){
        let isSwapped = false;
        for(let j=i+1; j<=array.length-1; j++){
            if(array[j]<array[i]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                //temp++
               // return temp;
                isSwapped = true;
            }
        }
        if(!isSwapped){
            break;
        }
    } 
}

let array = [100,58,68,74,24,33,-2];
bubbleSort(array);

console.log(array);
