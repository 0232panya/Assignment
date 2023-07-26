

const verificationUPI = require("./call_back");

function placingOrder(){
    console.log("Order is Placed");
}

function validatePaymentSystem(){
    verificationUPI.verify("abc@okicici",deductingMoney);
}

function deductingMoney(ex){
    throw new Error("Error After Promise is Resolved");
}

placingOrder();

validatePaymentSystem();