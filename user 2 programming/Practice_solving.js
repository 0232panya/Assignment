

//Question 1 => Voting Age

function votingAge(age){

    if(age<18){
        console.log(false);
    }else{
        console.log(true);
    }
}

votingAge(25);
votingAge(17);

//Question 2 => Increasing Or Decreasing Order 

function IncOrDecr(a,b,c){

    if(a>b && b>c){
        console.log("Decreasing order");
    }else if(a<b && b<c){
        console.log("Increasing order");
    }else{
        console.log("neither Increasing Order Nor Decreasing order");
    }
}

IncOrDecr(12,13,14);
IncOrDecr(5,12,10);
IncOrDecr(12,11,10);

//Question 3 => Largest Number

function LargestNum(a,b,c){

    if(a>b && a>c){
        console.log("Largest Number is a : ", a);
    }else if(b>a && b>c){
        console.log("Largest Number is b : ", b);
    }else{
        console.log("Largest Number is c : ", c);
    }
}

LargestNum(25, 15, 20);
LargestNum(10,25,30);
LargestNum(2,3,1);


//Question 4 =>

function grading(score){

    if(score>=90){
        console.log("A Grade");
    }else if(score<90 && score>=80){
        console.log("B Grade");
    }else if(score<80 && score>=60){
        console.log("C Grade");
    }else if(score<60 && score>=33){
        console.log("D Grade");
    }else{
        console.log("F Grade");
    }
}

grading(89);
grading(33);
grading(69);
grading(25);

//Question 5 =>

function minLectAttend(M,N){

   
    if(N < M * 0.75){
        console.log(0.75 , "Attendance is Needed");
    }else{
        console.log("Attendance is Already : ", 0.75);
    }
}

minLectAttend(7,6);
minLectAttend(7,2);

//Question 6 =>

function Quadr(a,b,c){

    
}