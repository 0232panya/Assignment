//This is the example of if else.

// function printResults(marks){
//     if(marks<35){
//         console.log("you have failed");
//     }else if(marks>=35 && marks<50){
//         console.log("you are pass");
//     }else if(marks>=50 && marks<60){
//         console.log("you got second class");
//     }else if(marks>=60 && marks<75){
//         console.log("you got First Class");
//     }else{
//         console.log("you got Distinction");
//     }
// }

// printResults(30);
// printResults(90);
// printResults(50);
// printResults(60);
// printResults(35);


//This is example of switch.

function printResults(grade){
    //A+
    //A 
    //B
    //C
    switch(grade){
        case "A+":{
            console.log("Distinction");
            break; 
        }
        case "A":{
            console.log("First Class");
            break;
        }
        case "B":{
            console.log("Pass");
            break;
        }
        case "C":{
            console.log("Fail");
            break;
        }
        default :{
            console.log("Inavalid Value");
        }
    }

        console.log("Out of switch");
}

printResults("A+");
printResults("D")

