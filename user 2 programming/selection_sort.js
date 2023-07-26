

//Question 2 => ANSWER GETTING WRONG NEED TO LOOK CODE AGAIN

function selecSort(country){
    var min;
    for(let i=0; i<country.length-1; i++){
        min = i;
        for(let j= i+1; j<country.length; j++){
            if(country[j].localeCompare(country[min]) === -1){
                country = country[j];
            }
            if(country != 1){
                let temp = country[j];
                country[j] = country[min];
                country[min] = temp;
                // temp++;
                // return temp;
            }
        }
    }
    // console.log(min);
    return country;
}

let country = ["India", "Australia", "China", "Russia", "Brazil", "Japan"];
console.log(selecSort(country));


//Question 3 =>

function sortBySalary(input,k){

    for(let i=0; i<k; i++){
        var isSwapped = false;
        for(let j= i+1; j<input.length-1; j++){
            if(input[j]['salary']>input[j+1]['salary']){
                var temp = input[j];
                input[j] = input[j+1];
                input[j+1] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
    return input;
}

let input =[{'name':'Ram','salary':100000},
            {'name':'Ramesh','salary':10000},
            {'name':'Rakesh','salary':500000},
            {'name':'Riya','salary':650000},
            {'name':'Rithik','salary':45000},
            {'name':'Ritesh','salary':230000}]
let k =2;

let arr = sortBySalary(input,k);
//console.log(arr);
console.log(arr[arr.length-k]['name']);