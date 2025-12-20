// .fibonacci series

// withinbuilt function

function fibonacci(n){
    let a=0,b=1,next;
    let result = [a,b];
    for(let i=2;i<n;i++){
    next = a+b;
    result.push(next);
    a=b;
    b=next;

    }
    return result;
}

console.log(fibonacci(7));

// without using inbuilt function

function fibonnacci(n){
    let a=0,b=1,next;
    let result = [];
    for(let i=0;i<n;i++){
        if(i==0){
            result.push(a);
        }else if(i==1){
            result.push(b);
        }
        else{
            next = a+b;
            result.push(next);
            a=b;
            b=next;
        }
    }
    return result;
}
console.log(fibbonacci(7));
