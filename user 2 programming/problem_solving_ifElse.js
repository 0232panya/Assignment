
//Question no. 1 =>

var n = 25;
var n =18;

if(n > 18){
    console.log(true);
}else{
    console.log(false);
}

//Question no. 2 =>

function check(a,b,c){

    if(a<b && b<c){
        console.log("Incresing order");
    }else if(a>b && b>c){
        console.log("Decreasing Order");
    }else{
        console.log("Not proper order");
    }
}

check(12,45,87);
check(21,45,10);
check(21,20,19);

//Question no. 3 =>

function largestNum(a,b,c){
    if(a >= b && a>=c){
        console.log("A is greater than B and C");
    }else if(b>=a && b>=c){
        console.log("B is greater than A and C");
    }else{
        console.log("C is greater than A and B");
    }
}

largestNum(25,15,20);
largestNum(20,55,10);
largestNum(10,20,30);

//Question no. 4 =>

function grade(score){
    if(score>=90){
        console.log("Grade : A");
    }else if(score>=80 && score<90){
        console.log("Grade : B");
    }else if(score>=60 && score<80){
        console.log("Grade : C");
    }else if(score>=33 && score<60){
    console.log("Grade : D");
    }else{
        console.log("Grade : F");
    }
}

grade(56);
grade(23);
grade(95);
grade(89);
grade(70);

//Question no. 5 =>

function  minLecture(m,n){
    
    if(n > m * 0.75){
        console.log(0 + " (75% attendance already attended)");
    }else{
        console.log("need to attend more lectures");
    }
      
}

minLecture(7, 6);

//Question no. 6 =>

// function quadratEqua(a,b,c){
//     let result = b*b-4.0*a*c;
//     if(result == 0.0){
//        var x = -b/(2*a);
//        console.log(x);
//     }else if(result >0.0){
//        var x1 = (-b + Math.pow(result, 0.5)) / (2.0*a);
//        var x2 = (-b - Math.pow(result, 0.5)) / (2.0*a);
//         console.log(x1 + x2);
//     }else{
//         console.log("no root found");
//     }
// }

// quadratEqua(1,5,1);


//Question no. 7 =>

function num(A){

    for(let a=1; a*a < A; a++){
        for(let b=1; b*b < A; b++){
            if(a*a + b*b == A && a<=b){
                console.log(a,b);
            }
        }
    }
}

num(50);

//Question no. 8 =>

function palindrome(n){
    var rev = 0;
    for(var i=n; Math.trunc(i)>0; i/= 10){
        rev = ((rev*10) + (Math.trunc(i)%10));
    }
    return (n == rev);
}

function printpalin(min,max){

    for(var i = min; i<= max; i++){
        if(palindrome(i))
        console.log(i);
    }
}

printpalin(1,50);

