
const verificationUPI = require("./call_back");

function placingOrder(){
    console.log("Order is Placed");
}

async function validatePaymentSystem(){
    try{
        const result = await verificationUPI.verifyPromise("abc@okicici");
        console.log(result);
        deductingMoney();
    }catch(ex){
        console.log(ex);
    }
}

function deductingMoney(ex){
    console.log("deducting money")
}

placingOrder();

validatePaymentSystem();