

function score(grade){
    if(grade >= 90){
        console.log("A grade");
    }else if(grade<=89 && grade>=80){
        console.log("B grade");
    }else if(grade<=79 && grade>=60){
        console.log("C grade");
    }else if(grade<=59 && grade>=33){
        console.log("D grade");
    }else{
        console.log("F grade");
    }
}

score(97);
score(75);
score(25);
score(80);
score(59);