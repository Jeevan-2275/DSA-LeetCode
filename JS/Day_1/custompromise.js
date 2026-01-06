// using a inbuilt function custon promise.js



// function customPromise(){
//     return  new Promise((resolve,reject)=>{
//           const success = true;
//             if(success){
//                 resolve("Promise Resolved Successfully");
//             }else{
//                 reject("Promise Rejected");
//             }
//     });
// };
// customPromise().then(console.log).catch(console.log);

/// without using inbuilt function

// function myPromiese(){

// }


function custompromise(){
    return new promises((resolve,reject)=>{
        const success = true;
        if(success){
            resolve("Promises Resolved Successfull");
        }else{
            reject("promise reject");
        }
    });
};

custompromise().then(console.log).catch(console.log);
