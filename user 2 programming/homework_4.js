

// function astroguru(numkids,spouse,location,job){
//    this.numkids = numkids;
//    this.spouse = spouse;
//    this.location = location;
//    this.job = job

// };

// var info = new astroguru(2 , "Ananya", "Delhi", "Software Engineer");

// console.log("you will be a " + info.job + " in " + info.location + " and married to " + info.spouse + " with " + info.numkids + " kids.");



function num(x, y){
   if(x === y){
      console.log("its false");
   }else if(x>y){
      console.log("x is bigger");
   }else if(x<y){
      console.log("y is bigger");
   }else{
      console.log("its Incompatible");
   }
   return;
}


num(10,"10");
num(20,10);
num(20,50);