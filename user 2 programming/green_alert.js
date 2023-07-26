

class Environmentalist{

    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    surveryArea(){
        console.log("Area survey by "+this.name);
        return 100;
    }

    showAlert(){
        console.log("Please Plant trees");
    }

    treePlanted(){
        console.log("10 trees Planted");
    }

}

const PanyaObj = new Environmentalist("Pranoti","Kolhapur");

PanyaObj.surveryArea();
PanyaObj.showAlert();
PanyaObj.treePlanted();


// 

var countOfobject = 0;

class FucnctionApp{

   // count=0;  IF WE WANT TO DECLARE HERE THEN 

    constructor(){
        countOfobject++;
       // this.count++;  WE HAVE TO USE "this." 
    }

    countObject() {
        console.log("Count of Objects = " + countOfobject);
    }

    doLogic2(){
        console.log("Performing logic 2");
    }

    doLogic3(){
        console.log("Performing logic 3");
        this.doLogic2();
    }
}

let obj = new FucnctionApp();
let obj1 = new FucnctionApp();
let obj2 = new FucnctionApp();
obj.countObject();
obj.doLogic3();