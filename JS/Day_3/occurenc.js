// Write a function countOccurrences that takes an array as input and returns an object where the keys are the elements from the array and the values are the number of times each element appears in the array.

//  Sample Input : ['apple', 'banana', 'apple', 'orange']

//  Sample Output : { apple: 2, banana: 1, orange: 1 }

function countOccurrences(arr) {
    let occurrenceObj = {};
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (occurrenceObj[item]) {
            occurrenceObj[item]++;
        } else {
            occurrenceObj[item] = 1;
        }
    }
    return occurrenceObj;
}
let inputArray = ['apple', 'banana', 'apple', 'orange'];
console.log(countOccurrences(inputArray));

// without function
let arr = ['apple', 'banana', 'apple', 'orange'];
let occurrenceObj = {};
for (let i = 0; i < arr.length; i++) {      
    let item = arr[i];              
    if (occurrenceObj[item]) {                      
        occurrenceObj[item]++;
    } else {
        occurrenceObj[item] = 1;
    }
}
console.log(occurrenceObj);
// with inbuilt function
let arr1 = ['apple', 'banana', 'apple', 'orange'];
let occurrenceObj1 = arr1.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}

, {});
console.log(occurrenceObj1);

// modern JS method
let arr2 = ['apple', 'banana', 'apple', 'orange'];
let occurrenceObj2 = Object.fromEntries(
    arr2.map(item => [item, 0]).reduce((acc, [item]) => {
        acc.set(item, (acc.get(item) || 0) + 1);
        return acc;
    }, new Map())
);
console.log(occurrenceObj2);
