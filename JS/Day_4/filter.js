// Write a function to filter even numbers from an array using filter higher order function.



// without function
let arr=[1,2,3,4,5,6,7,8,9,10];
let evenNumbers=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        evenNumbers.push(arr[i]);
    }else{
        continue;
    }

}
console.log(evenNumbers);


// with function
function filterEvenNumbers(array){
    let evenNumbers=[];
    for(let i=0;i<array.length;i++){
        if(array[i]%2===0){
            evenNumbers.push(array[i]);
        }else{
            continue;
        }
    }
    return evenNumbers;
}
let inputArray=[11,12,13,14,15,16,17,18,19,20];
console.log(filterEvenNumbers(inputArray));