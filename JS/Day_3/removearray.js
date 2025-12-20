// Write a Program in javascript to remove duplicates from an array. with inbuilt function 


// let arr=[1,2,3,4,5,6,1,2,3,4,5,6];
// let uniarr=[];

// for(let i=0;i<arr.length;i++){
//     if(uniarr.indexOf(arr[i])===-1){
//         uniarr.push(arr[i]);
//     }
// }
// console.log(uniarr);

// without inbuilt function

// let arr=[1,2,3,4,5,6,1,2,3,4,5,6];
// let uniarr=[];
// for(let i=0;i<arr.length;i++){
//     let flag=0;
//     for(let j=0;j<uniarr.length;j++){
//         if(arr[i]===uniarr[j]){
//             flag=1;
//             break;
//         }
//     }
//     if(flag===0){
//         uniarr.push(arr[i]);
//     }
// }
// console.log(uniarr);


// ES6 method to remove duplicates from an array
// let arr=[1,2,3,4,5,6,1,2,3,4,5,6];
// let uniarr=[...new Set(arr)];
// console.log(uniarr);

// with function to remove duplicates from an array  with inbuilt function

function remove(arr){
    let uniarr=[];      
    for(let i=0;i<arr.length;i++){
        if(uniarr.indexOf(arr[i])===-1){
            uniarr.push(arr[i]);
        }
    }
    return uniarr;
}

let arr=[1,2,3,4,5,6,1,2,3,4,5,6];
console.log(remove(arr));