// using a inbuilt function to find the largest and smallest number in an array

// function largesmallnum(arr){
//     const largest = Math.max(...arr);
//     const smallest = Math.min(...arr);
//     return{largest,smallest};
// }
// console.log(largesmallnum([10,18,5,89,99,750]));


// without using inbuilt function to find the largest and smallest number in an array


function largesmallnum(arr){
    let largest = arr[0];
    let smallest = arr[0];

    for(let i = 1;i<arr.length;i++){

        if(arr[i]>largest){
            largest = arr[i];
        }
        if(arr[i]<smallest){
            smallest = arr[i];
        }
    }
    return {largest,smallest};

}

console.log(largesmallnum([5,18,3,99,750,1]));