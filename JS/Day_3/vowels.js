// Write a function that counts the number of vowels in a given string.

function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}
let inputString = "Hello World";
console.log("Number of  string:", countVowels(inputString));

// without function
let str = "Hello World";
let count = 0;
const vowels = 'aeiouAEIOU';
for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
        count++;
    }
}
console.log("Number of vowels in the string:", count);

// with inbuilt function
let str1 = "Hello World";
let count1 = str1.split('').filter(char => 'aeiouAEIOU'.includes(char)).length;
console.log("Number of vowels in the string:", count1);

// modern JS method
let str2 = "Hello World";
let count2 = [...str2].reduce((acc, char) => acc + ('aeiouAEIOU'.includes(char) ? 1 : 0), 0);
console.log("Number of vowels in the string:", count2);



