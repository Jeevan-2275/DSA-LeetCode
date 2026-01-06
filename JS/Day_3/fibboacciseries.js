
// Write a function to generate the first n number of the Fibonacci sequence

function generateFibonacci(n) {
    let fiboSeries = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fiboSeries.push(0);
        } else if (i === 1) {
            fiboSeries.push(1);
        } else {
            fiboSeries.push(fiboSeries[i - 1] + fiboSeries[i - 2]);
        }
    }
    return fiboSeries;
}

let n = 10;
console.log(generateFibonacci(n));
// without function

let num = 10;
let fiboSeries = [];
for (let i = 0; i < num; i++) {
    if (i === 0) {
        fiboSeries.push(0);
    }
    else if (i === 1) {
        fiboSeries.push(1);
    } else {
        fiboSeries.push(fiboSeries[i - 1] + fiboSeries[i - 2]);
    }
}
console.log(fiboSeries);
// with inbuilt function
let number = 10;
let fiboSeries1 = Array.from({ length: number }, (v, i) => {
    if (i === 0) return 0;
    if (i === 1) return 1;

    return fiboSeries1[i - 1] + fiboSeries1[i - 2];
});
console.log(fiboSeries1);

// modern JS method
let count = 10;
let fiboSeries2 = [...Array(count)].map((_, i, arr) => i < 2 ? i : arr[i - 1] + arr[i - 2]);
console.log(fiboSeries2);
    