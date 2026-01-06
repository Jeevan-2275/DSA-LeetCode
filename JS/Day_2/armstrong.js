// checking Armstrong number 3 digit without function with inbuilt function
//   let num=153;
//   let temp=num;
//   let sum=0;let digit =0;

//   let t = num;

//   while(t>0){
//     digit++;
//     t = Math.floor(t/10);

//   }
//   while(temp>0){
//     let rem = temp%10;
//     let power = 1;
//     for(let i=0;i<digit;i++){
//         power=power*rem;
//         }
//         sum = sum + power;
//         temp = Math.floor(temp/10);
//   }

//   if(sum==num){
//     console.log("Armstrong Number");

//   }else{
//     console.log("Not Armstrong Number")
//   }

// without inbuilt function

// let num=153;
// let temp=num;
// let sum=0;let digit =0;

// let t = num;
// while(t>0){
//     digit++;
//     t = (t/10)>>0;
// }
// while(temp>0){
//     let rem = temp%10;
//     let power =1;
//     for(let i=0;i<digit;i++){
//         power=power*rem;
//     }
//     sum = sum + power;
//     temp = (temp/10)>>0;

// }
// if(sum==num){
//     console.log("Armstrong Number");

// }else{
//     console.log("Not Armstrong Number");
// }