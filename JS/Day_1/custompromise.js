// using a inbuilt function custon promise.js



function customPromise(){
    return  new Promise((resolve,reject)=>{
          const success = true;
            if(success){
                resolve("Promise Resolved Successfully");
            }else{
                reject("Promise Rejected");
            }
    });
};
customPromise().then(console.log).catch(console.log);

/// without using inbuilt function

// function myPromiese(){

// }