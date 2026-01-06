// using a inbuilt function reversestring.js

// function reversestring(str){
// return str.split("").reverse().join("")
// }
// console.log(reversestring("hello"));

function  reverstring(str){
    let reversed = "";
    for(let i=str.length-1;i>=0;i--){
        reversed += str[i];
    }
 return reversed;
}
console.log(reverstring("hello"));