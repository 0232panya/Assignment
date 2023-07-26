

module.exports.verify = (upi, cb) =>{

    setTimeout(()=>{
        try{
            console.log("verfied");
            cb();
            cb();
        }
        catch(ex){
            cb(ex);
        }
    },1000);
}

module.exports.verifyPromise = () =>{

    const promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            try{
                //throw new Error("Error in promise");
                console.log("verified upi");
                resolve("verified");
                reject("Error");
            }catch(ex){
                reject("couldn't verify")
            }
    
        },1000)
    });
    return promise
}

module.exports.verifyPromise = ()=>{
    // 1. Create a promise which will encapsulate async code.
    const promise = new Promise((resolve, reject)=>{
        //encapsulate async code.
        setTimeout(()=>{
            try{
                throw new Error("Error in promise");

                console.log("Verify upi");
                resolve("Verified");
                reject("Error");
            }catch(ex){
                reject("Couldn't verify");
            }
        }, 1000);
    });
    return promise; 
}