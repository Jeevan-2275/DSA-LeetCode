// 1.Write a function to flatten a deeply nested array, using the reduce higher order function

//  Sample Input : [1, [2, [3, 4], 5], 6]

//  Sample Output : [1, 2, 3, 4, 5, 6]


// without function 

let nestedArr=[1,[2,[3,4],5],6];
let flattenArray=[];
for(let i=0;i<nestedArr.length;i++){
    if(Array.isArray(nestedArr[i])){
        flattenArray=flattenArray.concat(nestedArr[i].flat(Infinity));
    }else{
        flattenArray.push(nestedArr[i]);
    }
}
console.log(flattenArray);